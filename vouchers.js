/* ============================================================
   FILE NÀY LÀ NƠI BẠN SỬA VOUCHER.
   (This is the only file you need to edit.)

   - Mỗi voucher nằm trong một cặp { }, cách nhau bằng dấu phẩy.
   - platform: "shopee" hoặc "tiktok"
   - title, discount, link: bắt buộc
   - minimum, expires (năm-tháng-ngày), featured, image: tùy chọn
   - Xóa voucher = xóa cả khối { ... } của nó.
   ============================================================ */

// Tên web
const SITE_NAME = "DealNest";

// Hình dùng chung cho mọi voucher của mỗi sàn.
// Muốn dùng logo của bạn: tải ảnh vào thư mục "images" rồi đổi tên file ở đây.
const PLATFORM_IMAGES = {
  shopee: "images/shopee.svg",
  tiktok: "images/tiktok.svg",
};

const VOUCHERS = [
  {
    platform: "shopee",
    title: "Sample Shopee voucher - edit me",
    discount: "50K off",
    minimum: "300K",
    expires: "2026-12-31",
    link: "https://shopee.vn",
    featured: true,
  },
  {
    platform: "tiktok",
    title: "Sample TikTok Shop voucher - edit me",
    discount: "15% off",
    minimum: "200K",
    link: "https://www.tiktok.com/shop",
    featured: true,
  },
  {
    platform: "shopee",
    title: "Sample free-shipping voucher",
    discount: "Free shipping",
    link: "https://shopee.vn",
  },
  {
    platform: "shopee",
    title: "Sample beauty voucher",
    discount: "30K off",
    minimum: "150K",
    link: "https://shopee.vn",
  },
  {
    platform: "tiktok",
    title: "Sample fashion voucher",
    discount: "20K off",
    minimum: "100K",
    link: "https://www.tiktok.com/shop",
  },
  {
    platform: "tiktok",
    title: "Sample home & living voucher",
    discount: "10% off",
    minimum: "250K",
    link: "https://www.tiktok.com/shop",
  },
];
