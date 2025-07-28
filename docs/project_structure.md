# Cấu trúc thư mục dự án

Tài liệu này mô tả chi tiết các thư mục và file chính trong kho mã `GenWeb`.

## Sơ đồ tổng quan

```
GenWeb/
├── app.py
├── Dockerfile
├── docker-compose.yml
├── database_init.py
├── init.sh
├── requirements.txt
├── README.md
├── docs/
├── models/
├── routes/
├── templates/
├── static/
├── seeder/
├── util/
├── Form/
└── template_fe/
```

## Mô tả các thư mục và file

- **app.py** – Điểm khởi tạo ứng dụng Flask, đăng ký các blueprint, cấu hình cơ sở dữ liệu và login.
- **Dockerfile** / **docker-compose.yml** – Cấu hình Docker để chạy ứng dụng kèm dịch vụ MySQL.
- **database_init.py** – Khởi tạo đối tượng `db` của SQLAlchemy và kết nối MySQL.
- **init.sh** – Script cài đặt môi trường server tự động (nginx, docker, certbot...).
- **requirements.txt** – Danh sách các package Python cần cài đặt.
- **README.md** – Hướng dẫn tạo môi trường ảo và chạy ứng dụng.
- **docs/** – Thư mục chứa tài liệu dự án (mô tả model, endpoint, quy tắc code...).
- **models/** – Các model SQLAlchemy: `User`, `Domain`, `DNSRecord`, `CloudflareAccount`, `Company`, `Website`, `Template`...
- **routes/** – Các blueprint Flask phân theo chức năng (`auth`, `domain`, `dns`, `cloudflare_account`, `admin`, `home`).
- **templates/** – Giao diện Jinja2 dùng để render trang HTML.
- **static/** – Tài nguyên tĩnh (CSS, JS) phục vụ template.
- **seeder/** – Script khởi tạo dữ liệu mẫu như user admin, Cloudflare account và template mặc định.
- **util/** – Hàm tiện ích, đặc biệt `cloud_flare.py` thao tác API Cloudflare.
- **Form/** – Định nghĩa các WTForms cho đăng ký, đăng nhập và form cấu hình domain.
- **template_fe/** – Chứa các template React như `template_default`, `template_two`.

Các tài liệu chi tiết khác nằm trong thư mục `docs/`, bao gồm:
- `backend_models.md` – mô tả các model database.
- `backend_endpoints.md` – liệt kê route Flask.
- `backend_guidelines.md` – quy tắc code và chú thích backend.
- `frontend_routes.md` – các router của dự án React.
