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

## 📝 License

MIT License - See [LICENSE](LICENSE) for details.

- Original Vonge template © 2022 [CloudCannon](https://cloudcannon.com/)
- Modifications and content © 2024 Hamza Abdelhedi

## 🙏 Credits

- Template: [Vonge](https://github.com/CloudCannon/vonge-jekyll-bookshop-template) by CloudCannon
- Hosting: [CloudCannon](https://cloudcannon.com/)
- Components: [Bookshop](https://github.com/CloudCannon/bookshop)