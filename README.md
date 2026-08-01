# Samuel Kofi Agyei-Tuffour — Portfolio

## What's done ✅
- Portfolio site built and committed to local git
- GitHub CLI installed
- Cloudflare config (`wrangler.toml`) ready

## What you need to do manually (~2 minutes)

### Step 1 — Authenticate GitHub
```bash
gh auth login
```
- Choose: **GitHub.com** → **HTTPS** → **Yes** (authenticate Git) → **Login with a web browser**
- Sign in as the GitHub account where you want the repo

### Step 2 — Create the repo & push
```bash
cd ~/DEV/samuel-portfolio
gh repo create samuel-portfolio --public --source=. --remote=origin --push --description "Portfolio website - SecOps Engineer & Zero Trust Architect"
```

### Step 3 — Connect to Cloudflare Pages
1. Open https://dash.cloudflare.com → sign up free (if you don't have an account)
2. Click **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Authorize Cloudflare to read your GitHub repos
4. Select `samuel-portfolio`
5. **Build settings** (Cloudflare auto-detects static — confirm these):
   - **Framework preset**: None
   - **Build command**: *(leave empty)*
   - **Build output directory**: `/` (or `.`)
6. Click **Save and Deploy**

### Step 4 — Wait ~60 seconds
Your site goes live at:
```
https://samuel-portfolio.pages.dev
```

### (Optional) Add a custom domain
In Cloudflare Pages → your project → **Custom domains** → add `samuelkofi.com` (or whatever you own). DNS is automatic if you buy the domain through Cloudflare.

---

## Project structure
```
samuel-portfolio/
├── index.html        # Single-page site
├── css/style.css     # All styles
├── js/main.js        # Nav, animations, counters
├── assets/           # Add your headshot here
├── wrangler.toml     # Cloudflare Pages config
├── package.json      # Deploy scripts
├── .gitignore
└── README.md
```

## Local preview
```bash
cd ~/DEV/samuel-portfolio
open index.html
```

## Future deploys
After the first setup, every `git push` to `main` triggers an automatic redeploy on Cloudflare.

## Tech stack
- Pure HTML, CSS, vanilla JavaScript — no build step required
- Google Fonts (Inter)
- IntersectionObserver-based scroll animations
- Animated stat counters
- Fully responsive (mobile, tablet, desktop)
- Custom SVG favicon
- Open Graph / SEO meta tags
