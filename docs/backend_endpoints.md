# Backend Endpoints

The Flask application organizes routes using blueprints. Below is a list of the main endpoints and their HTTP methods.

## Home (`home_bp`)
| Path | Methods | Description |
| --- | --- | --- |
| `/` | GET | Home page with feature links |
| `/terms` | GET | Terms and conditions |
| `/polices` | GET | Privacy policies |

## Authentication (`auth_bp`)
| Path | Methods | Description |
| --- | --- | --- |
| `/register` | GET, POST | User registration |
| `/login` | GET, POST | User login |
| `/logout` | GET | Logout current user |

## Admin (`admin_bp`)
| Path | Methods | Description |
| --- | --- | --- |
| `/admin/users` | GET | List all users |
| `/admin/users/activate/<user_id>` | GET | Activate a user |
| `/admin/users/delete/<user_id>` | GET | Delete a user |

## Domain Management (`domain_bp`)
All routes have prefix `/domain`.

| Path | Methods | Description |
| --- | --- | --- |
| `/domain/list` | GET | List registered domains |
| `/domain/add` | GET, POST | Add a new domain |
| `/domain/verify/<domain_id>` | GET, POST | Verify domain name servers |
| `/domain/delete/<domain_id>` | POST | Delete a domain |

## DNS Records (`dns_bp`)
Routes prefixed with `/dns`.

| Path | Methods | Description |
| --- | --- | --- |
| `/dns/<domain_id>` | GET | View DNS records for a domain |
| `/dns/sync/<domain_id>` | GET | Sync DNS records from Cloudflare |
| `/dns/add/<domain_id>` | GET, POST | Add a DNS record |
| `/dns/delete/<record_id>` | POST | Delete a DNS record |

## Cloudflare Accounts (`cloudflare_bp`)
Routes prefixed with `/cloudflare`.

| Path | Methods | Description |
| --- | --- | --- |
| `/cloudflare/accounts` | GET | List Cloudflare accounts |
| `/cloudflare/add` | GET, POST | Add a Cloudflare account |
| `/cloudflare/delete/<account_id>` | POST | Delete an account |
| `/cloudflare/sync/<account_id>` | POST | Sync domains for an account |
