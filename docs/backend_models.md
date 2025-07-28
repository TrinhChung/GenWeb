# Backend Models

Below is a summary of the SQLAlchemy models defined in the `models/` folder.

## User
- `id`: primary key
- `username`: unique username
- `email`: unique email address
- `password`: hashed password
- `is_active`: whether the account is approved
- `is_admin`: admin flag
- Relationships: `domains` (list of `Domain` owned by the user)

## Domain
- `id`: primary key
- `name`: domain name
- `zone_id`: Cloudflare zone ID
- `status`: domain status (e.g., `pending`, `verifying`)
- `user_id`: owner user ID
- `cloudflare_account_id`: reference to `CloudflareAccount`
- Relationships: `dns_records` (DNS records), `cloudflare_account`, `user`

## DNSRecord
- `id`: primary key
- `domain_id`: foreign key to `Domain`
- `record_id`: Cloudflare record ID
- `record_type`: DNS type (`A`, `CNAME`, `TXT`, ...)
- `name`: record name
- `content`: record value
- `ttl`: time to live
- `proxied`: whether the record is proxied through Cloudflare

## CloudflareAccount
- `id`: primary key
- `name`: account label
- `email`: contact email
- `api_token`: API token used for requests
- `account_id`: Cloudflare account ID
- `ns1` / `ns2`: default name servers for domains
- Relationships: `domains` (managed domains)

## DomainVerification
- `id`: primary key
- `txt_value`: TXT record content used for verification
- `create_count`: how many times the TXT record was created

## Template
- `id`: primary key
- `name`: template name
- `description`: optional description
- `sample_url`: URL to template preview

## Company
- `id`: primary key
- `domain_id`: associated domain
- `dns_record_id`: primary DNS record
- `name`: company name
- `address`: company address
- `hotline`: phone number
- `email`: contact email
- `license_no`: business license number
- `google_map_embed`: map embed HTML or link
- `logo_url`: logo path or URL
- `footer_text`: text displayed in footer
- `template_id`: reference to a `Template`
