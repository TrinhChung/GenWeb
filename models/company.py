from database_init import db


class Company(db.Model):
    __tablename__ = "company"
    id = db.Column(db.Integer, primary_key=True)
    domain_id = db.Column(
        db.Integer, db.ForeignKey("domain.id"), nullable=False, unique=True
    )
    dns_record_id = db.Column(
        db.Integer, db.ForeignKey("dns_record.id"), nullable=False, unique=True
    )

    name = db.Column(db.String(255), nullable=False)
    address = db.Column(db.Text, nullable=False)
    hotline = db.Column(db.String(50), nullable=True)
    email = db.Column(db.String(255), nullable=True)
    license_no = db.Column(db.String(100), nullable=True)
    google_map_embed = db.Column(
        db.Text, nullable=True
    )  # Có thể lưu iframe hoặc link map
    logo_url = db.Column(db.String(255), nullable=True)
    footer_text = db.Column(db.Text, nullable=True)
    template_id = db.Column(db.Integer, db.ForeignKey("template.id"), nullable=True)

    template = db.relationship("Template", backref="companies")
    dns_record = db.relationship("DNSRecord", backref="company", uselist=False)

    def __repr__(self):
        return f"<Company {self.name} - {self.domain_id}>"
