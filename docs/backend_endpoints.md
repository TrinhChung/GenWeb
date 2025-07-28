# Các Endpoint của Backend

Ứng dụng Flask tổ chức các route bằng blueprint. Dưới đây là danh sách các endpoint chính và phương thức HTTP của chúng.

## Trang chủ (`home_bp`)
| Đường dẫn | Phương thức | Mô tả |
| --- | --- | --- |
| `/` | GET | Trang chủ với các liên kết tính năng |
| `/terms` | GET | Điều khoản sử dụng |
| `/polices` | GET | Chính sách bảo mật |

## Xác thực (`auth_bp`)
| Đường dẫn | Phương thức | Mô tả |
| --- | --- | --- |
| `/register` | GET, POST | Đăng ký người dùng |
| `/login` | GET, POST | Đăng nhập |
| `/logout` | GET | Đăng xuất người dùng hiện tại |

## Quản trị (`admin_bp`)
| Đường dẫn | Phương thức | Mô tả |
| --- | --- | --- |
| `/admin/users` | GET | Liệt kê tất cả người dùng |
| `/admin/users/activate/<user_id>` | GET | Kích hoạt người dùng |
| `/admin/users/delete/<user_id>` | GET | Xóa người dùng |

## Quản lý Domain (`domain_bp`)
Tất cả route có tiền tố `/domain`.

| Đường dẫn | Phương thức | Mô tả |
| --- | --- | --- |
| `/domain/list` | GET | Liệt kê domain đã đăng ký |
| `/domain/add` | GET, POST | Thêm domain mới |
| `/domain/verify/<domain_id>` | GET, POST | Xác minh name server của domain |
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
