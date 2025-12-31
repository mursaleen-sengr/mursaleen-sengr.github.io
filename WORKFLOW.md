# Portfolio Website Workflow

## 🎯 Best of Both Worlds: Dynamic JSON + GitHub Pages

This setup allows you to:
- ✅ Edit JSON files normally in `data/` folder
- ✅ Automatically embed data into `script.js` for GitHub Pages
- ✅ No CORS or file loading issues

## 📝 How to Update Content

### 1. Edit Your JSON Files
Edit any file in the `data/` folder:
- `data/about.json` - Personal info, stats
- `data/experience.json` - Work experience
- `data/projects.json` - Project showcase
- `data/skills.json` - Skills & technologies
- `data/education.json` - Education & certifications

### 2. Run the Build Script
```bash
python3 build.py
```

This will:
- Read all JSON files
- Update the embedded data in `script.js`
- Show success message

### 3. Test Locally (Optional)
```bash
python3 -m http.server 8080
```
Then visit: http://localhost:8080

### 4. Deploy to GitHub Pages
```bash
git add -A
git commit -m "Update content"
git push origin main
```

Wait 1-2 minutes for GitHub Pages to rebuild.

## 🚀 Quick Update Command
```bash
python3 build.py && git add script.js && git commit -m "Update content" && git push origin main
```

## 📂 Project Structure
```
portfolio_website/
├── index.html          # Main HTML file
├── style.css           # Styles
├── script.js           # JavaScript (auto-generated DATA section)
├── build.py            # Build script (run after JSON changes)
├── data/               # Edit these JSON files
│   ├── about.json
│   ├── experience.json
│   ├── projects.json
│   ├── skills.json
│   └── education.json
└── WORKFLOW.md         # This file
```

## ⚠️ Important Notes

- **Always run `build.py` after editing JSON files**
- The `DATA` object in `script.js` is auto-generated - don't edit it manually
- Keep editing JSON files as your source of truth
- The build script preserves all other JavaScript code

## 🎨 Styling Updates

To update styles, just edit `style.css` and commit:
```bash
git add style.css
git commit -m "Update styling"
git push origin main
```

No build script needed for CSS changes!
