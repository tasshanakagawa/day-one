# Day One
This project contains a landing page built with **Vite**, **SCSS**, and **JavaScript**.

## 📂 Project Structure

- **/dist** - Compiled and optimized production build *(auto-generated)*
- **/src** - Main source code
  - **/assets** - Images used by components
  - **/js** - Entry points and scripts
    - `main.js` - Main file that initializes component scripts
  - **/styles** - Global SCSS stylesheets
    - **/base**
      - `_animations.scss` - CSS animation classes and keyframes
      - `_base.scss` - Base styles
      - `_index.scss` - Root stylesheet importing all partials
      - `_mixins.scss` - Reusable SCSS mixins
      - `_reset.scss` - Reset browser styles
      - `_variables.scss` - Global variables (colors, typography, breakpoints)
    - **/header**
      - `_navbar.scss` - Navigation menu
      - `_notification-bar` - Top notification bar
      - `index.scss` - Root stylesheet importing header components
    - **/homepage**
      - `_about.scss` - About section
      - `_hero-banner.scss` - Hero Banner section
      - `_how-to-use.scss` - How to Use section
      - `_testimonials.scss` - Testimonials with slider
      - `index.scss` - Root stylesheet importing homepage sections
- **package.json** - Project dependencies and scripts
- **README.md** - Documentation and setup instructions

## 🛠️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/tasshanakagawa/day-one
```

### 2. Install dependencies
```
npm install
```

### 3. Start development server
```
npm run dev
```
This starts a local server at http://localhost:5173

### 4. Build for production
```
npm run build
```