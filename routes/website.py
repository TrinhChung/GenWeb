from flask import Blueprint, render_template, redirect, url_for, request, flash
from flask_login import login_required, current_user
from database_init import db
from models.website import Website
from models.company import Company
from models.dns_record import DNSRecord
from models.template import Template
from models.domain import Domain

website_bp = Blueprint("website", __name__, url_prefix="/website")


@website_bp.route("/")
@login_required
def list_websites():
    """Hiển thị danh sách website của người dùng hiện tại."""
    websites = Website.query.filter_by(user_id=current_user.id).all()
    return render_template("website/list.html", websites=websites)


@website_bp.route("/add", methods=["GET", "POST"])
@login_required
def add_website():
    """Tạo website mới cho công ty đã có."""
    companies = Company.query.filter_by(user_id=current_user.id).all()
    # Lấy tất cả DNS record thuộc domain của user
    dns_records = (
        DNSRecord.query.join(Domain)
        .filter(Domain.user_id == current_user.id)
        .all()
    )
    templates = Template.query.all()

    if request.method == "POST":
        company_id = request.form.get("company_id", type=int)
        dns_record_id = request.form.get("dns_record_id", type=int)
        template_id = request.form.get("template_id", type=int)
        static_page_link = request.form.get("static_page_link", "")
        note = request.form.get("note", "")

        if not company_id or not dns_record_id:
            flash("Vui lòng chọn công ty và DNS record", "danger")
            return render_template(
                "website/add.html",
                companies=companies,
                dns_records=dns_records,
                templates=templates,
            )

        website = Website(
            company_id=company_id,
            dns_record_id=dns_record_id,
            template_id=template_id,
            static_page_link=static_page_link,
            note=note,
            user_id=current_user.id,
        )
        db.session.add(website)
        db.session.commit()
        flash("Đã tạo website thành công.", "success")
        return redirect(url_for("website.list_websites"))

    return render_template(
        "website/add.html",
        companies=companies,
        dns_records=dns_records,
        templates=templates,
    )


@website_bp.route("/delete/<int:website_id>", methods=["POST"])
@login_required
def delete_website(website_id):
    """Xóa website thuộc quyền sở hữu của người dùng."""
    website = Website.query.filter_by(id=website_id, user_id=current_user.id).first_or_404()
    db.session.delete(website)
    db.session.commit()
    flash("Đã xóa website.", "success")
    return redirect(url_for("website.list_websites"))
