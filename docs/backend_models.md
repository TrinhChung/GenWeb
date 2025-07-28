# Các Model Backend

Dưới đây là tóm tắt các model SQLAlchemy được định nghĩa trong thư mục `models/`.

## User
- `id`: khóa chính
- `username`: tên người dùng duy nhất
- `email`: địa chỉ email duy nhất
- `password`: mật khẩu đã băm
- `is_active`: tài khoản đã được duyệt hay chưa
- `is_admin`: cờ quản trị
- Quan hệ: `domains` (danh sách `Domain` thuộc sở hữu của người dùng)

## Domain
- `id`: khóa chính
- `name`: tên domain
- `zone_id`: ID zone trên Cloudflare
- `status`: trạng thái domain (vd. `pending`, `verifying`)
- `user_id`: ID chủ sở hữu
- `cloudflare_account_id`: tham chiếu `CloudflareAccount`
- Quan hệ: `dns_records` (bản ghi DNS), `cloudflare_account`, `user`

## DNSRecord
- `id`: khóa chính
- `domain_id`: khóa ngoại tới `Domain`
- `record_id`: ID bản ghi Cloudflare
- `record_type`: kiểu DNS (`A`, `CNAME`, `TXT`, ...)
- `name`: tên bản ghi
- `content`: giá trị bản ghi
- `ttl`: thời gian TTL
- `proxied`: có dùng proxy Cloudflare hay không

## CloudflareAccount
- `id`: khóa chính
- `name`: nhãn tài khoản
- `email`: email liên hệ
- `api_token`: token API sử dụng cho các yêu cầu
- `account_id`: ID tài khoản Cloudflare
- `ns1` / `ns2`: name server mặc định cho domain
- Quan hệ: `domains` (danh sách domain quản lý)

## DomainVerification
- `id`: khóa chính
- `txt_value`: nội dung bản ghi TXT dùng xác minh
- `create_count`: số lần bản ghi TXT được tạo

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
- `address`: địa chỉ công ty
- `hotline`: số điện thoại
- `email`: email liên hệ
- `license_no`: số giấy phép kinh doanh
- `google_map_embed`: mã nhúng Google Map hoặc liên kết
- `logo_url`: đường dẫn logo
- `footer_text`: nội dung footer
- `template_id`: tham chiếu tới `Template`
