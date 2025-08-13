# Random Quote Machine (Vanilla JS)

Dự án web tĩnh (HTML/CSS/JS) tương thích với bộ test freeCodeCamp.

- Đáp ứng các User Stories (#1 → #11).
- Không dùng React 18 để tránh xung đột test. Dùng JavaScript thuần để đơn giản.

## Chạy cục bộ

- Mở `index.html` bằng trình duyệt (nhớ để zoom 100% và cửa sổ tối đa khi chạy test FCC).
- Nút “New quote” sẽ tải trích dẫn mới từ API.
- Nút “Tweet” mở `twitter.com/intent/tweet` với nội dung trích dẫn hiện tại.

## Ghi chú

- API sử dụng: https://api.quotable.io/random (có fallback cục bộ nếu lỗi mạng).
- Script test của freeCodeCamp đã được nhúng trong `index.html`:
  ```html
  <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
  ```

## Deploy (tùy chọn)

- Có thể bật GitHub Pages (Settings → Pages) để chạy trực tuyến.
- Hoặc đưa mã lên CodePen rồi bấm Save để chạy test online.
