# Các Model của Backend

Dưới đây là tóm tắt các model SQLAlchemy định nghĩa trong thư mục `models/`.

## User
- `id`: khóa chính
- `username`: tên người dùng duy nhất
- `email`: địa chỉ email duy nhất
- `password`: mật khẩu đã băm
- `is_active`: tài khoản đã được duyệt hay chưa
- `is_admin`: cờ cho quyền quản trị
- Quan hệ: `domains` (danh sách `Domain` mà người dùng sở hữu)

## Domain
- `id`: khóa chính
- `name`: tên miền
- `zone_id`: Cloudflare zone ID
- `status`: trạng thái domain (ví dụ: `pending`, `verifying`)
- `user_id`: ID người sở hữu
- `cloudflare_account_id`: tham chiếu tới `CloudflareAccount`
- Quan hệ: `dns_records` (các bản ghi DNS), `cloudflare_account`, `user`

## DNSRecord
- `id`: khóa chính
- `domain_id`: khóa ngoại tới `Domain`
- `record_id`: ID bản ghi Cloudflare
- `record_type`: loại DNS (`A`, `CNAME`, `TXT`, ...)
- `name`: tên bản ghi
- `content`: giá trị bản ghi
- `ttl`: thời gian sống
- `proxied`: bản ghi có được proxy qua Cloudflare hay không

## CloudflareAccount
- `id`: khóa chính
- `name`: tên tài khoản
- `email`: email liên hệ
- `api_token`: token API dùng cho yêu cầu
- `account_id`: Cloudflare account ID
- `ns1` / `ns2`: nameserver mặc định cho domain
- Quan hệ: `domains` (các domain được quản lý)

## DomainVerification
- `id`: khóa chính
- `txt_value`: nội dung TXT dùng để xác minh
- `create_count`: số lần tạo bản ghi TXT

## Template
- `id`: khóa chính
- `name`: tên template
- `description`: mô tả tùy chọn
- `sample_url`: URL xem thử template

## Company
- `id`: khóa chính
- `domain_id`: domain liên kết
- `dns_record_id`: bản ghi DNS chính
- `name`: tên công ty
- `address`: địa chỉ
- `hotline`: số điện thoại
- `email`: email liên hệ
- `license_no`: số giấy phép kinh doanh
- `google_map_embed`: mã nhúng hoặc liên kết bản đồ
- `logo_url`: đường dẫn logo
- `footer_text`: nội dung footer
- `template_id`: tham chiếu `Template`
