# Tài liệu dự án

Kho lưu trữ này bao gồm backend Flask quản lý domain và DNS cùng với mẫu frontend React + TypeScript cho một cửa hàng thương mại điện tử. Tài liệu được chia thành nhiều file:

- `backend_models.md` – các model cơ sở dữ liệu dùng trong ứng dụng Flask.
- `backend_endpoints.md` – các route Flask hiện có.
- `frontend_routes.md` – các đường dẫn router React cho phần frontend.

Mỗi phần dưới đây mô tả ngắn gọn mục đích của backend và frontend.

## Tổng quan Backend

Backend là ứng dụng Flask. Nó sử dụng SQLAlchemy để truy cập cơ sở dữ liệu, WTForms để kiểm tra biểu mẫu và Flask-Login cho xác thực. Các route được tổ chức bằng blueprint trong thư mục `routes/` và template được render bằng Jinja2 từ thư mục `templates/`. API Cloudflare được dùng để quản lý vùng DNS và bản ghi.

## Tổng quan Frontend

Thư mục `Fashion-eCommerce` chứa dự án React + TypeScript khởi tạo bằng Vite. Nó bao gồm hệ thống định tuyến với React Router, Redux Toolkit để quản lý trạng thái và TailwindCSS cho phần giao diện. Ứng dụng đóng vai trò như mẫu cho một website mua sắm.
