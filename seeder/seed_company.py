# seeder/seed_company.py
from models.company import Company
from database_init import db

def seed_companies(app):
    companies = [
        {
            "name": "FREIGHTCAN LLC",
            "address": """CARGO BLDG. 75, N. HANGER ROAD
SUITE 205B, JFK INT’L AIRPORT
JAMAICA, NY 11430
UNITED STATES""",
            "hotline": "718-995-9594",
            "email": "info@freightcanllc.asenanen.com",
            "license_no": "019229",
            "google_map_embed": """
<iframe src="https://www.google.com/maps?q=JFK+Cargo+Building+75&output=embed" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
""",
            "logo_url": "",  # Có thể bổ sung nếu có
            "footer_text": "",  # Thêm nếu muốn
            "description": "FreightCan LLC - chuyên vận chuyển hàng hóa quốc tế qua sân bay JFK.",
        },
        # Thêm các công ty khác ở đây nếu muốn
        # {
        #     "name": "...",
        #     ...
        # },
    ]

    with app.app_context():
        for data in companies:
            if not Company.query.filter_by(name=data['name']).first():
                company = Company(**data)
                db.session.add(company)
                print(f"✅ Đã tạo company: {data['name']}")
            else:
                print(f"⚠️ Company '{data['name']}' đã tồn tại, bỏ qua.")
        db.session.commit()
