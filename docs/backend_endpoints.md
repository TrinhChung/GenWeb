# Các Endpoint Backend

Ứng dụng Flask tổ chức các route bằng blueprint. Dưới đây là danh sách các endpoint chính và phương thức HTTP tương ứng.

## Trang chủ (`home_bp`)
| Đường dẫn | Phương thức | Mô tả |
| --- | --- | --- |
| `/` | GET | Trang chủ với các liên kết tính năng |
| `/terms` | GET | Điều khoản và điều kiện |
| `/polices` | GET | Chính sách bảo mật |

## Xác thực (`auth_bp`)
| Đường dẫn | Phương thức | Mô tả |
| --- | --- | --- |
| `/register` | GET, POST | Đăng ký người dùng |
| `/login` | GET, POST | Đăng nhập người dùng |
| `/logout` | GET | Đăng xuất người dùng |

## Quản trị (`admin_bp`)
| Đường dẫn | Phương thức | Mô tả |
| --- | --- | --- |
| `/admin/users` | GET | Liệt kê tất cả người dùng |
| `/admin/users/activate/<user_id>` | GET | Kích hoạt người dùng |
| `/admin/users/delete/<user_id>` | GET | Xóa người dùng |

## Quản lý Domain (`domain_bp`)
Tất cả các route đều có tiền tố `/domain`.

| Đường dẫn | Phương thức | Mô tả |
| --- | --- | --- |
| `/domain/list` | GET | Liệt kê domain đã đăng ký |
| `/domain/add` | GET, POST | Thêm domain mới |
| `/domain/verify/<domain_id>` | GET, POST | Xác minh name server domain |
| `/domain/delete/<domain_id>` | POST | Xóa domain |

## Bản ghi DNS (`dns_bp`)
Các route có tiền tố `/dns`.

| Đường dẫn | Phương thức | Mô tả |
| --- | --- | --- |
| `/dns/<domain_id>` | GET | Xem bản ghi DNS của domain |
| `/dns/sync/<domain_id>` | GET | Đồng bộ bản ghi DNS từ Cloudflare |
| `/dns/add/<domain_id>` | GET, POST | Thêm bản ghi DNS |
| `/dns/delete/<record_id>` | POST | Xóa bản ghi DNS |

## Tài khoản Cloudflare (`cloudflare_bp`)
Các route có tiền tố `/cloudflare`.

| Đường dẫn | Phương thức | Mô tả |
| --- | --- | --- |
| `/cloudflare/accounts` | GET | Liệt kê tài khoản Cloudflare |
| `/cloudflare/add` | GET, POST | Thêm tài khoản Cloudflare |
| `/cloudflare/delete/<account_id>` | POST | Xóa tài khoản |
| `/cloudflare/sync/<account_id>` | POST | Đồng bộ domain cho tài khoản |

## Quản lý Company (`company_bp`)
Tất cả các route có tiền tố `/company` và yêu cầu đăng nhập.

| Đường dẫn | Phương thức | Mô tả |
| --- | --- | --- |
| `/company/` | GET | Liệt kê công ty của người dùng |
| `/company/<company_id>` | GET | Xem chi tiết công ty |
| `/company/add` | GET, POST | Thêm công ty mới |
| `/company/edit/<company_id>` | GET, POST | Sửa thông tin công ty |
| `/company/delete/<company_id>` | POST | Xóa công ty |

## Quản lý Website (`website_bp`)
Các route có tiền tố `/website` và yêu cầu đăng nhập.

| Đường dẫn | Phương thức | Mô tả |
| --- | --- | --- |
| `/website/` | GET | Liệt kê website của người dùng |
| `/website/add` | GET, POST | Tạo website mới |
| `/website/delete/<website_id>` | POST | Xóa website |

## API Frontend (`api_fe_bp`)
Các route có tiền tố `/api` và không yêu cầu đăng nhập.

| Đường dẫn | Phương thức | Mô tả |
| --- | --- | --- |
| `/api/products` | GET | Lấy danh sách sản phẩm |
| `/api/products/<id>` | GET | Chi tiết sản phẩm |
| `/api/users` | GET, POST | Danh sách hoặc tạo người dùng FE |
| `/api/users/<id>` | GET, PUT | Thông tin hoặc cập nhật người dùng |
| `/api/orders` | GET, POST | Danh sách hoặc tạo đơn hàng |
| `/api/orders/<id>` | GET | Chi tiết đơn hàng |
