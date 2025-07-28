# Tài liệu dự án

Kho lưu trữ này bao gồm backend Flask để quản lý domain và DNS cùng với template frontend React + TypeScript cho cửa hàng thương mại điện tử. Tài liệu được chia thành nhiều file:

- `backend_models.md` – các model cơ sở dữ liệu sử dụng trong ứng dụng Flask.
- `backend_endpoints.md` – các route Flask hiện có.
- `frontend_routes.md` – các đường dẫn router React cho frontend thương mại điện tử.

Các phần bên dưới tóm tắt mục đích của backend và frontend.

## Tổng quan Backend

Backend là một ứng dụng Flask. Nó sử dụng SQLAlchemy để truy cập cơ sở dữ liệu, WTForms để kiểm tra form và Flask-Login cho việc xác thực. Các route được tổ chức bằng blueprint trong thư mục `routes/` và template được render bằng Jinja2 trong thư mục `templates/`. API của Cloudflare được sử dụng để quản lý DNS zone và record.

## Tổng quan Frontend

Thư mục `Fashion-eCommerce` cung cấp dự án React + TypeScript được tạo với Vite. Nó bao gồm routing thông qua React Router, Redux Toolkit để quản lý state và TailwindCSS để tạo kiểu. Ứng dụng này đóng vai trò như mẫu cho một trang mua sắm.
