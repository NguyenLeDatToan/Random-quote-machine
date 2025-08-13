'use strict';

const elText = document.getElementById('text');
const elAuthor = document.getElementById('author');
const btnNew = document.getElementById('new-quote');
const aTweet = document.getElementById('tweet-quote');

const FALLBACK_QUOTES = [
  { content: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
  { content: 'Life is what happens when you\'re busy making other plans.', author: 'John Lennon' },
  { content: 'In the middle of difficulty lies opportunity.', author: 'Albert Einstein' },
  { content: 'If you\'re going through hell, keep going.', author: 'Winston Churchill' },
  { content: 'Simplicity is the ultimate sophistication.', author: 'Leonardo da Vinci' },
];

async function fetchRandomQuote() {
  try {
    const resp = await fetch('https://api.quotable.io/random');
    if (!resp.ok) throw new Error('Network error');
    const data = await resp.json();
    if (!data || !data.content) throw new Error('Bad payload');
    return { content: data.content, author: data.author || 'Unknown' };
  } catch (e) {
    // fallback local
    const q = FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)];
    return q;
  }
}

function updateTweetLink(content, author) {
  const text = `"${content}" — ${author}`;
  const url = new URL('https://twitter.com/intent/tweet');
  url.searchParams.set('text', text);
  aTweet.href = url.toString();
  aTweet.target = '_blank'; // per FCC note
}

async function showNewQuote() {
  btnNew.disabled = true;
  elText.textContent = 'Loading...';
  elAuthor.textContent = '';
  const q = await fetchRandomQuote();
  elText.textContent = q.content;
  elAuthor.textContent = q.author ? `— ${q.author}` : '';
  updateTweetLink(q.content, q.author || 'Unknown');
  btnNew.disabled = false;
}

// first load
window.addEventListener('DOMContentLoaded', showNewQuote);
btnNew.addEventListener('click', showNewQuote);
