# DealNest - Trang voucher Shopee & TikTok Shop

Trang web tĩnh (HTML/CSS/JS thuần), không cần cài đặt, không cần build, không cần Supabase. Tải lên GitHub, bật Pages là chạy.

Mỗi nút **Get Voucher** mở đúng link bạn nhập, không đổi, không xoay vòng.

## Đưa web lên mạng (làm 1 lần, khoảng 3 phút)

1. Vào github.com, bấm **+ -> New repository**. Đặt tên (ví dụ `voucher`), chọn **Public**, bấm **Create repository**.
2. Giải nén file zip. Mở thư mục cho đến khi thấy `index.html`. Chọn tất cả file và thư mục bên trong (Ctrl+A), kéo thả vào trang GitHub (mục "uploading an existing file"), rồi bấm **Commit changes**.
3. Vào **Settings -> Pages**. Ở mục **Build and deployment**:
   - **Source**: chọn **Deploy from a branch**
   - **Branch**: chọn **main** và thư mục **/ (root)**, bấm **Save**
4. Chờ 1 đến 2 phút. Tải lại trang Pages, GitHub sẽ hiện link web của bạn:
   `https://TÊN-GITHUB.github.io/TÊN-KHO/`

## Thêm / sửa / xóa voucher

1. Trên GitHub mở file `vouchers.js`, bấm biểu tượng **cây bút (Edit)**.
2. Sửa nội dung giữa các cặp `{ }`. Mỗi voucher là một khối, kết thúc bằng dấu phẩy:

```js
{
  platform: "shopee",          // "shopee" hoặc "tiktok"
  title: "Tên voucher",
  discount: "Giảm 50K",
  minimum: "Đơn từ 300K",      // tùy chọn
  expires: "2026-12-31",       // tùy chọn, dạng năm-tháng-ngày
  link: "https://link-cua-ban",
  featured: true,              // tùy chọn, hiện ở mục Featured
},
```

3. Bấm **Commit changes**. Khoảng 1 phút sau web tự cập nhật (nhấn Ctrl+F5 để xem bản mới).

Nếu web trống hoặc báo lỗi đọc `vouchers.js`: thường do thiếu dấu phẩy, dấu ngoặc hoặc dấu nháy. Hãy kiểm tra lại khối vừa sửa.

## Đổi hình Shopee / TikTok Shop

Mọi voucher của mỗi sàn dùng chung một hình trong thư mục `images/`. Hai hình hiện có là hình đơn giản tạo sẵn, không phải logo chính thức.

Muốn dùng hình của bạn: mở thư mục `images` trên GitHub, **Add file -> Upload files**, tải ảnh lên (khoảng 5:2, ví dụ 1000x400). Sau đó mở `vouchers.js`, đổi tên file ở phần `PLATFORM_IMAGES`.

Muốn một voucher có hình riêng: thêm dòng `image: "images/ten-anh.png",` vào khối voucher đó.

## Đổi tên web

Sửa dòng `SITE_NAME` ở đầu `vouchers.js`. Tiêu đề thẻ trình duyệt đổi theo.

## An toàn

Chỉ nhận link bắt đầu bằng `http://` hoặc `https://`. Link trống hoặc sai thì nút hiện "Unavailable". Voucher đã quá ngày `expires` hiện "Expired".
