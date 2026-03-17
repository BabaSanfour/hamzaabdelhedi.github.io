# Hamza Abdelhedi - Personal Website

Personal website of **Hamza Abdelhedi**, PhD student in Biomedical Engineering at Université de Montréal, focused on **Neuro-AI**.

Built with [Jekyll](http://jekyllrb.com/) and [Bookshop](https://github.com/CloudCannon/bookshop), based on the [Vonge template](https://github.com/CloudCannon/vonge-jekyll-bookshop-template) by [CloudCannon](http://cloudcannon.com/).

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16+)
- **Ruby** (3.0+ recommended, install via [rbenv](https://github.com/rbenv/rbenv))
- **Bundler** (`gem install bundler`)

### Installation

```bash
# Clone the repository
git clone https://github.com/BabaSanfour/hamzaabdelhedi.github.io.git
cd hamzaabdelhedi.github.io

# Install npm dependencies
npm install

# Install Jekyll dependencies
npm run jekyll:install

# Start development server
npm start
```

The site will be available at **http://localhost:6060**

## 📁 Project Structure

```
├── site/                    # Jekyll source files
│   ├── _config.yml          # Jekyll configuration
│   ├── _data/               # Site data (navigation, settings)
│   ├── _layouts/            # Page layouts
│   ├── collections/         # Content collections (pages, posts, projects, publications)
│   └── assets/              # CSS, JS, images
├── component-library/       # Bookshop components
├── cloudcannon.config.yml   # CloudCannon CMS configuration
└── package.json             # npm dependencies
```

## 🛠️ Development

| Command | Description |
|---------|-------------|
| `npm start` | Run development server (Jekyll + Bookshop) |
| `npm run jekyll` | Run Jekyll only |
| `npm run bookshop` | Run Bookshop browser |
| `npm run jekyll:install` | Install Ruby gems |

## 🚀 Deployment (GitHub Pages via Actions)

The site is deployed automatically to [GitHub Pages](https://pages.github.com/) via a custom GitHub Actions workflow.

### How it works

1. **Push to `main`** triggers `.github/workflows/deploy.yml`
2. The workflow:
   - Installs Node.js 20 deps (`npm ci`)
   - Generates Bookshop live JS (`npx bookshop-live`)
   - Installs Ruby 3.3 + Bundler deps (`bundle install`)
   - Builds the Jekyll site (`bundle exec jekyll build --source site`)
   - Uploads `_site/` and deploys via `actions/deploy-pages`
3. The site is live at **https://hamzaabdelhedi.com**

### Custom domain

- The `CNAME` file is at `site/CNAME` → Jekyll copies it to `_site/CNAME` on build
- DNS must point `hamzaabdelhedi.com` to GitHub Pages (A records or CNAME to `BabaSanfour.github.io`)
- HTTPS is enforced via **Settings → Pages → Enforce HTTPS**

### First-time setup

1. Go to **Settings → Pages → Source** and select **GitHub Actions**
2. Set **Custom domain** to `hamzaabdelhedi.com`
3. Push to `main` — the workflow will build and deploy

### Troubleshooting

| Problem | Fix |
|---------|-----|
| Bundler install fails | Delete the Actions cache or update `Gemfile.lock` with `bundle lock --add-platform x86_64-linux` |
| Bookshop JS missing | Ensure `npm ci` ran before the Bookshop generate step |
| Deploy 403 error | Check workflow has `permissions: pages: write` and `id-token: write` |
| Wrong output dir | Verify `--source site` is used — output goes to `_site/` at project root |
| Ruby version mismatch | Check `.ruby-version` matches the `ruby-version` in the workflow |
| Site shows old content | Check the Actions tab for a failed run; re-run or push a new commit |

## 📝 License

MIT License - See [LICENSE](LICENSE) for details.

- Original Vonge template © 2022 [CloudCannon](https://cloudcannon.com/)
- Modifications and content © 2024 Hamza Abdelhedi

## 🙏 Credits

- Template: [Vonge](https://github.com/CloudCannon/vonge-jekyll-bookshop-template) by CloudCannon
- Hosting: [GitHub Pages](https://pages.github.com/)
- Components: [Bookshop](https://github.com/CloudCannon/bookshop)