# Basic Design cho hệ thống tạo website xác minh doanh nghiệp

## Mục tiêu
- Hệ thống cho phép các cửa hàng/công ty nhỏ tự tạo website cơ bản nhằm phục vụ việc xác minh doanh nghiệp.
- Website có lượng truy cập thấp, chỉ cần hiển thị thông tin công ty (footer, trang liên hệ) và bản đồ vị trí.
- Người dùng nhập thông tin doanh nghiệp qua giao diện quản trị, hệ thống sinh trang web với template đã chọn.

## Kiến trúc tổng quan
- **Backend Flask** (thư mục gốc của repo):
  - Chạy mô hình MVC, sử dụng SQLAlchemy làm ORM, JWT/Session cho đăng nhập.
  - Cung cấp trang quản trị để người dùng thêm domain, chọn template và nhập dữ liệu công ty.
  - Sử dụng Cloudflare API để tạo zone, quản lý bản ghi DNS và đồng bộ domain.
  - Expose các REST API để frontend template truy vấn thông tin công ty dựa trên domain.
- **Frontend template** (ví dụ thư mục `template_fe` với các mẫu như `template_default`, `template_two`):
  - Được build sẵn bằng React + TypeScript.
  - Tất cả domain của doanh nghiệp sẽ trỏ về cùng một ứng dụng template này.
  - Khi người dùng truy cập, frontend lấy domain từ `window.location.hostname`, gọi REST API (`/api/company?domain=<domain>`) để lấy dữ liệu công ty và render vào vị trí footer, trang liên hệ, logo…
  - Có thể tuỳ chọn nhiều template khác nhau nếu cần.

```
Người dùng → Giao diện quản trị (Flask) → Lưu thông tin công ty/đăng ký domain
                         ↓                                     ↑
   Frontend Template (React) ← REST API cung cấp dữ liệu công ty
```

## Các thành phần chính
1. **Models** – xem file [`docs/backend_models.md`](backend_models.md) để biết chi tiết. Một số bảng quan trọng:
   - `Domain`: lưu domain của khách hàng và zone Cloudflare.
   - `Company`: chứa thông tin doanh nghiệp (địa chỉ, hotline, email, giấy phép, `google_map_embed`, `template_id`...).
   - `Template`: danh sách template có sẵn cho website.
2. **Routes** – xem [`docs/backend_endpoints.md`](backend_endpoints.md). Cần bổ sung thêm các endpoint API phục vụ template, ví dụ:
   ```python
   @api_bp.route('/company-info')
   def company_info():
       domain = request.args.get('domain')
       ... truy vấn Company theo Domain và trả về JSON ...
   ```
3. **Frontend** – mỗi template React sẽ có đoạn code gọi API trên, sau đó hiển thị thông tin tại footer và trang liên hệ. Phần bản đồ dùng trường `google_map_embed` (iframe hoặc link) của model `Company`.

## Quy trình hoạt động
1. Quản trị viên hoặc chủ doanh nghiệp đăng nhập vào trang quản trị Flask.
2. Thêm domain → hệ thống tạo zone trên Cloudflare, gợi ý đổi nameserver.
3. Nhập thông tin doanh nghiệp và chọn template → lưu vào bảng `Company`.
4. Khi người dùng truy cập `http://domain-cua-ban`, React app lấy domain hiện tại và gọi `GET /api/company-info?domain=domain-cua-ban`.
5. Backend trả về dữ liệu (tên công ty, địa chỉ, hotline, email, giấy phép, mã nhúng bản đồ…). Frontend render vào footer, trang contact, logo…
6. Website hoạt động đơn giản, chủ yếu để hiển thị và phục vụ xác minh doanh nghiệp.

## Ghi chú triển khai
- API nên cache kết quả vì lượng truy cập thấp nhưng mỗi domain lại trỏ cùng một backend.
- Nên thiết lập HTTPS (có thể dùng Certbot trong `init.sh`) cho tất cả domain.
- Nếu cần mở rộng, có thể thêm chức năng chỉnh sửa thông tin, thay đổi template hoặc thêm trang mới.

