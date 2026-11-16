# SoilSaint

SoilSaint is a responsive landing page for a soil health and thoughtful growing project. The frontend is a static React site that can be hosted independently. A small Flask health API is included as an optional backend starter.

## Run locally

Requirements: Node.js 18+ and npm. Python is only needed for the optional API.

```sh
cd frontend
npm install
npm start
```

The site opens at http://localhost:3000.

To run the optional API in another terminal:

```sh
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\\Scripts\\activate
pip install -r requirements.txt
python app.py
```

The API health check is available at http://localhost:5000/health. The landing page does not currently depend on the API.

## Build for hosting

```sh
cd frontend
npm run build
```

This produces a static production site in `frontend/build`. Host that directory on any static hosting provider, including GitHub Pages, Netlify, Vercel, or Cloudflare Pages.

### Netlify

Create a site from this repository with build command `npm run build` and publish directory `build`, setting the base directory to `frontend`.

### Vercel

Import this repository, set the root directory to `frontend`, use `npm run build`, and set the output directory to `build`.

## Project structure

- `frontend/` — React landing page and static assets
- `backend/` — optional Flask API starter

## Before launch

Update the contact email in `frontend/src/App.js` if `hello@soilsaint.com` is not the right address. Replace the general project copy with your real product details, screenshots, and links as those become available.
