# Quy tắc code backend

Tài liệu này mô tả chuẩn comment cho hàm Python, cấu trúc thư mục dự án và tóm tắt các hàm util quan trọng (đặc biệt là thao tác với Cloudflare).

## 1. Quy tắc comment và docstring

- **Docstring**: Mọi function/method nên có docstring ngay bên dưới định nghĩa.
  - Viết trong cặp `"""` ba nháy.
  - Dòng đầu mô tả ngắn gọn mục đích hàm.
  - Dùng tiếng Việt cho các project hiện tại, có thể pha tiếng Anh nếu cần.
  - Nếu hàm có tham số và giá trị trả về phức tạp, liệt kê bằng các mục `Args:` và `Returns:` tương tự ví dụ bên dưới.

```python
def add_dns_record(zone_id, record_name, record_content, record_type="A"):
    """Thêm bản ghi DNS vào Cloudflare."""
    ...
```

- **Comment nội dòng**: sử dụng `#` để giải thích các bước khó hoặc lưu ý quan trọng. Tránh viết những điều hiển nhiên.

## 2. Cấu trúc thư mục backend

```
GenWeb/
├── app.py                # Khởi tạo Flask app và đăng ký blueprint
├── models/               # Định nghĩa các bảng SQLAlchemy
├── routes/               # Mỗi file là một blueprint (auth, domain, dns...)
├── templates/            # Giao diện Jinja2
├── util/                 # Hàm tiện ích dùng lại nhiều nơi
├── static/               # Nội dung tĩnh (ảnh, CSS, JS)
├── docs/                 # Tài liệu dự án
└── requirements.txt      # Danh sách package Python
```

- **routes/** chứa các endpoint chính. Ví dụ `cloudflare_account.py` quản lý tài khoản Cloudflare, `dns.py` thao tác bản ghi DNS.
- **models/** mô tả các bảng như `Domain`, `DNSRecord`, `CloudflareAccount`.
- **util/** cung cấp các hàm hỗ trợ (xử lý URL, thao tác Cloudflare...).

## 3. Các hàm util liên quan Cloudflare

File `util/cloud_flare.py` bao gồm các hàm gọi API Cloudflare và đồng bộ dữ liệu về database:

- `build_cf_headers(cf_account)`: tạo HTTP headers chứa `Bearer` token để gọi API.
- `sync_domains_from_cf_with_account(cf_account)`: lấy danh sách domain từ Cloudflare của tài khoản và lưu/update vào bảng `Domain`. Gọi thêm `sync_dns_records_for_domain` cho từng domain.
- `create_cloudflare_zone(domain_name, cf_account)`: tạo zone mới trên Cloudflare cho domain chỉ định.
- `get_cloudflare_nameservers(zone_id, cf_account)`: truy vấn nameserver hiện tại của zone.
- `sync_dns_records_for_domain(domain_obj, cf_account)`: đồng bộ toàn bộ DNS record của domain về bảng `DNSRecord`.
- `add_dns_record(...)`, `update_dns_record(...)`, `delete_dns_record_cf(...)`: thêm, sửa, xóa bản ghi DNS qua API.
- `add_or_update_txt_record(...)`: tiện ích thêm hoặc cập nhật TXT record (thường dùng cho xác minh).
- `get_record_id_by_name(...)`: tìm `record_id` dựa trên tên bản ghi.

Ngoài file này, `util/until.py` tổng hợp các hàm nhỏ như:
- `extract_facebook_video_id`, `extract_playlist_id`, `generate_playlist_url`.
- `format_datetime`, `convert_to_mysql_datetime`.
- `ensure_quoted`, `extract_base_domain`, `generate_random_string`.
- Các helper khác xử lý Google Map và chọn ảnh ngẫu nhiên.

Các hàm util đều tuân thủ quy tắc docstring ở trên để việc bảo trì thuận tiện.

