# Các route của Frontend

Phần frontend React định nghĩa routing trong `src/App.tsx` bằng `createBrowserRouter`. Thành phần layout chính là `HomeLayout`. Dưới đây là danh sách các đường dẫn và component tương ứng.

| Đường dẫn | Component | Ghi chú |
| --- | --- | --- |
| `/` | `Landing` | route mặc định |
| `/shop` | `Shop` | hiển thị tất cả sản phẩm |
| `/shop/:category` | `Shop` | tải sản phẩm theo danh mục |
| `/product/:id` | `SingleProduct` | trang chi tiết sản phẩm |
| `/cart` | `Cart` | giỏ hàng của người dùng |
| `/checkout` | `Checkout` | dùng `checkoutAction` |
| `/search` | `Search` | dùng `searchAction` |
| `/login` | `Login` | form đăng nhập |
| `/register` | `Register` | form đăng ký |
| `/order-confirmation` | `OrderConfirmation` | hiển thị sau khi thanh toán |
| `/user-profile` | `UserProfile` | trang hồ sơ |
| `/order-history` | `OrderHistory` | sử dụng loader `orderHistoryLoader` |
| `/order-history/:id` | `SingleOrderHistory` | loader `singleOrderLoader` |

Tất cả các route đều lồng trong `HomeLayout` nên các thành phần giao diện dùng chung (header, footer, ...) được layout này cung cấp.
