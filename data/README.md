# Portfolio Data Files

This folder contains all the JSON data files that power the dynamic content of the portfolio website. To update any section, simply edit the corresponding JSON file and the changes will reflect automatically on the website.

## File Structure

```
data/
├── about.json      # About section (summary, contact info, stats)
├── experience.json # Work experience timeline
├── projects.json   # Featured projects
├── skills.json     # Skills & technologies by category
└── education.json  # Education and certifications
```

---

## 📝 How to Update Each Section

### 1. About Section (`about.json`)

**To update your professional summary:**
```json
{
    "summary": {
        "title": "Professional Summary",
        "text": "Your summary text here..."
    }
}
```

**To update contact info:**
```json
{
    "info": [
        {
            "icon": "fas fa-map-marker-alt",  // FontAwesome icon class
            "text": "Your Location"
        }
    ]
}
```

**To update stats:**
```json
{
    "stats": [
        {
            "value": "5+",      // The number/value shown
            "label": "Years Experience"  // The label below
        }
    ]
}
```

---

### 2. Experience Section (`experience.json`)

**To add a new job:**
```json
{
    "experiences": [
        {
            "date": "January 2025 – Present",
            "title": "Your Job Title",
            "company": "Company Name",
            "location": "City, Country",
            "responsibilities": [
                "First responsibility",
                "Second responsibility",
                "Third responsibility"
            ]
        }
    ]
}
```

> **Note:** Experiences are displayed in the order they appear in the array. Put most recent first!

---

### 3. Projects Section (`projects.json`)

**To add a new project:**
```json
{
    "projects": [
        {
            "icon": "fas fa-robot",  // FontAwesome icon for the project
            "title": "Project Name",
            "description": "Brief description of the project...",
            "tags": ["Python", "FastAPI", "Docker"],  // Tech stack
            "stats": [
                {
                    "icon": "fas fa-users",
                    "text": "1000+ Users"
                },
                {
                    "icon": "fas fa-star",
                    "text": "4.9 Rating"
                }
            ]
        }
    ]
}
```

---

### 4. Skills Section (`skills.json`)

**To add a new skill category:**
```json
{
    "categories": [
        {
            "name": "Category Name",
            "icon": "fas fa-code",  // Category icon
            "skills": [
                {
                    "name": "Skill Name",
                    "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                }
            ]
        }
    ]
}
```

**To add a skill with a FontAwesome icon (when no logo is available):**
```json
{
    "name": "LangChain",
    "icon": "fas fa-link"  // Use "icon" instead of "logo"
}
```

**Common logo sources:**
- DevIcons: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/{name}/{name}-original.svg`
- Simple Icons: `https://cdn.simpleicons.org/{name}`

---

### 5. Education Section (`education.json`)

**To update degree:**
```json
{
    "degree": {
        "title": "Your Degree",
        "institution": "University Name",
        "date": "Start – End Date",
        "cgpa": "3.70/4.00",
        "coursework": "Relevant courses..."
    }
}
```

**To add a certification:**
```json
{
    "certifications": [
        {
            "title": "Certificate Name",
            "issuer": "Issuing Organization",
            "year": "2024"
        }
    ]
}
```

---

## 🎨 Icon Reference

This portfolio uses [FontAwesome Icons](https://fontawesome.com/icons). Common icons:

| Purpose | Icon Class |
|---------|------------|
| Location | `fas fa-map-marker-alt` |
| Phone | `fas fa-phone` |
| Email | `fas fa-envelope` |
| Code | `fas fa-code` |
| Brain/AI | `fas fa-brain` |
| Database | `fas fa-database` |
| Cloud | `fas fa-cloud` |
| Server | `fas fa-server` |
| Chart | `fas fa-chart-line` |
| Users | `fas fa-users` |
| Robot | `fas fa-robot` |
| Certificate | `fas fa-certificate` |

---

## 🚀 Deployment Note

This setup works perfectly with **GitHub Pages** since it uses client-side JavaScript to load JSON files. No server-side processing is required!

Just push your changes to GitHub and the site will update automatically.
