# Các Model Backend

Dưới đây là tóm tắt các model SQLAlchemy được định nghĩa trong thư mục `models/`.

## User
- `id`: khóa chính
- `username`: tên người dùng duy nhất
- `email`: địa chỉ email duy nhất
- `password`: mật khẩu đã băm
- `is_active`: tài khoản đã được duyệt hay chưa
- `is_admin`: cờ quản trị
- Quan hệ: `domains`, `companies`, `websites` (các đối tượng thuộc sở hữu của người dùng)

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
- `name`: tên công ty
- `address`: địa chỉ công ty
- `hotline`: số điện thoại
- `email`: email liên hệ
- `license_no`: số giấy phép kinh doanh
- `google_map_embed`: mã nhúng Google Map hoặc liên kết
- `logo_url`: đường dẫn logo. Có thể chọn một file SVG trong thư mục
  `static/images/logo` của dự án hoặc dùng URL bên ngoài.
- `footer_text`: nội dung footer
- `description`: mô tả về công ty (tùy chọn)
- `note`: ghi chú mở rộng
- `user_id`: chủ sở hữu (`User`)
- Quan hệ: `websites` (danh sách `Website` thuộc công ty), `user`

## Website
- `id`: khóa chính
- `company_id`: tham chiếu `Company`
- `dns_record_id`: bản ghi DNS chính
- `template_id`: tham chiếu `Template`
- `static_page_link`: link trang tĩnh nếu có
- `note`: ghi chú mở rộng
- `user_id`: chủ sở hữu (`User`)
- Quan hệ: `company`, `dns_record`, `template`, `user`

## Product
- `id`: khóa chính
- `title`: tên sản phẩm
- `image`: ảnh sản phẩm
- `category`: danh mục
- `price`: giá bán
- `popularity`: mức độ phổ biến
- `stock`: số lượng tồn kho
- `description`: mô tả ngắn
- `detail`: nội dung chi tiết
- `delivery_detail`: thông tin giao hàng
- Quan hệ: `order_items`

## Order
- `id`: khóa chính
- `user_fe_id`: tham chiếu `UserFE`
- `order_status`: trạng thái đơn hàng (mặc định `Processing`)
- `order_date`: thời gian tạo
- `subtotal`: tổng giá trị
- `shipping_address`: địa chỉ nhận hàng
- `phone`: số điện thoại
- `payment_type`: hình thức thanh toán
- `note`: ghi chú
- Quan hệ: `user_fe`, `order_items`

## OrderItem
- `id`: khóa chính
- `order_id`: tham chiếu `Order`
- `product_id`: tham chiếu `Product`
- `quantity`: số lượng
- `price`: đơn giá
- `size`: kích cỡ (tuỳ chọn)
- `color`: màu sắc (tuỳ chọn)
- `popularity`: độ phổ biến
- `stock`: tồn kho
- Quan hệ: `order`, `product`

## UserFE
- `id`: khóa chính
- `name`: tên khách hàng
- `lastname`: họ (tuỳ chọn)
- `email`: địa chỉ email duy nhất
- `password`: mật khẩu đã băm
- `phone`: số điện thoại
- `address`: địa chỉ
- `created_at`: thời điểm tạo
- `is_active`: trạng thái hoạt động
- Quan hệ: `orders`
