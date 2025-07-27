from database_init import db


class DomainVerification(db.Model):
    __tablename__ = "domain_verification"
    id = db.Column(db.Integer, primary_key=True)
    txt_value = db.Column(db.String(255), nullable=False)  # Bản ghi TXT hiện tại
    create_count = db.Column(db.Integer, default=1)  # Số lần tạo/cập nhật TXT

