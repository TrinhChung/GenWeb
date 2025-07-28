# Project Documentation

This repository contains a Flask backend for domain and DNS management and a React + TypeScript frontend template for an e‑commerce shop. Documentation is split into multiple files:

- `backend_models.md` – database models used by the Flask application.
- `backend_endpoints.md` – available Flask routes.
- `frontend_routes.md` – React router paths for the e‑commerce frontend.

Each section below briefly describes the purpose of the backend and frontend.

## Backend Overview

The backend is a Flask application. It uses SQLAlchemy for database access, WTForms for form validation and Flask-Login for authentication. Routes are organised with blueprints under the `routes/` folder and templates are rendered with Jinja2 from the `templates/` directory. Cloudflare APIs are used to manage DNS zones and records.

## Frontend Overview

The `Fashion-eCommerce` folder provides a React + TypeScript project created with Vite. It includes routing via React Router, Redux Toolkit for state management and TailwindCSS for styling. The application serves as a template for a shopping website.
