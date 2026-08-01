# Samuel Kofi Agyei-Tuffour — Portfolio

A responsive, modern single-page portfolio for Samuel Kofi Agyei-Tuffour, SecOps Engineer & Zero Trust / IAM Architect based in Rotterdam, Netherlands.

## Stack
- Pure HTML, CSS, vanilla JavaScript — no build step required
- Google Fonts (Inter)
- IntersectionObserver-based scroll animations
- Animated stat counters
- Fully responsive (mobile, tablet, desktop)
- Custom SVG favicon
- Open Graph / SEO meta tags

## File structure
```
samuel-portfolio/
├── index.html        # Single-page site
├── css/
│   └── style.css     # All styles, with CSS variables & responsive breakpoints
├── js/
│   └── main.js       # Nav toggle, scroll effects, fade-ins, counter animation
└── assets/           # (empty — ready for your photo, project screenshots, etc.)
```

## Run locally
Just open `index.html` in your browser. No build, no dependencies.

```bash
cd samuel-portfolio
open index.html        # macOS
# or
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Customization
- **Photo / avatar**: drop a `portrait.jpg` into `assets/` and add `<img src="assets/portrait.jpg" alt="Samuel" />` inside the `.about-card` block in `index.html`.
- **Colors**: edit CSS variables at the top of `css/style.css` (`:root` block).
- **Stats / numbers**: change the `data-target` attributes on `.stat-number` elements in the hero.
- **Projects section**: a dedicated `#projects` section can be added by following the `.expertise-card` markup pattern.

## Deploy
Drop the folder into:
- GitHub Pages
- Netlify (drag & drop)
- Vercel
- Cloudflare Pages

All are free for static sites.
