# Các Route Frontend

Phần frontend React định nghĩa các route trong `src/App.tsx` sử dụng `createBrowserRouter`. Thành phần layout chính là `HomeLayout`. Dưới đây là danh sách các đường dẫn cùng component tương ứng.

| Đường dẫn | Component | Ghi chú |
| --- | --- | --- |
| `/` | `Landing` | route mặc định |
| `/shop` | `Shop` | hiển thị tất cả sản phẩm |
| `/shop/:category` | `Shop` | lọc sản phẩm theo danh mục |
| `/product/:id` | `SingleProduct` | trang chi tiết sản phẩm |
| `/cart` | `Cart` | giỏ hàng của người dùng |
| `/checkout` | `Checkout` | dùng `checkoutAction` |
| `/search` | `Search` | dùng `searchAction` |
| `/login` | `Login` | form đăng nhập |
| `/register` | `Register` | form đăng ký |
| `/order-confirmation` | `OrderConfirmation` | hiển thị sau khi thanh toán |
| `/user-profile` | `UserProfile` | trang hồ sơ người dùng |
| `/order-history` | `OrderHistory` | loader `orderHistoryLoader` |
| `/order-history/:id` | `SingleOrderHistory` | loader `singleOrderLoader` |
| `/contact` | `Contact` | trang liên hệ |

Tất cả các route đều được lồng trong `HomeLayout`, do đó các thành phần giao diện chung (header, footer, ...) được cung cấp bởi layout này.
