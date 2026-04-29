# Felipe Beltrán — Personal Portfolio
 
A personal portfolio website built from scratch using HTML5, CSS3 (SCSS), and vanilla JavaScript. It showcases my background, skills, and projects as an aspiring Software Developer, and includes a separate page dedicated to my pets.
 
---
 
## Technologies Used
 
- HTML5
- CSS3 / SCSS (compiled with Sass)
- Vanilla JavaScript
---
 
## Project Structure
 
```
user_history_1/
├── assets/
│   ├── css/
│   │   ├── styles.css          # Compiled CSS for the portfolio
│   │   └── pets.css            # Compiled CSS for the pets page
│   └── sass/
│       ├── utility/
│       │   ├── _btn.scss       # Button styles
│       │   ├── _reset.scss     # CSS reset
│       │   ├── _utilities.scss # Utility classes and mixins
│       │   └── _variables.scss # Global variables (colors, spacing, typography)
│       ├── style.scss          # Main SCSS entry point for the portfolio
│       └── pets.scss           # SCSS entry point for the pets page
├── imgs/
│   ├── mascotas/               # Pet images
│   └── Felipe.jpeg             # Profile photo
├── js/
│   └── main.js                 # JavaScript (nav, skills, projects rendering)
├── index.html                  # Main portfolio page
├── pets.html                   # Pets gallery page
└── README.md
```
 
---
 
## Pages
 
### index.html — Portfolio
- **Hero** — Introduction with name and call to action.
- **About Me** — Bio and skills rendered dynamically with JavaScript.
- **Projects** — Project cards generated dynamically from a JavaScript array.
- **Contact** — Contact form with name, email and message fields.
### pets.html — My Pets
- Presentation cards for each pet with photo and description.
- Image gallery organized with CSS Grid and Flexbox.
- Link to return to the main portfolio.
---
 
## How to Run Locally
 
No installation or build tools required to view the site. Just follow these steps:
 
1. Clone or download this repository.
2. Open `index.html` in your browser.
```bash
# If you have VS Code, you can use Live Server:
# Right-click index.html → Open with Live Server
```
 
If you want to edit the SCSS files and recompile:
 
1. Make sure you have [Sass](https://sass-lang.com/install) installed.
2. Run the following command in the root folder:
```bash
sass --watch assets/sass/style.scss assets/css/styles.css
```
 
---
 
## Author
 
**Felipe Beltrán**  
Aspiring Software Developer focused on backend development and clean, functional web applications.