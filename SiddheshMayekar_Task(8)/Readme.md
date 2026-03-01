# Laundry Mart – Responsive Landing Page with Hamburger Menu
**CSS Flexbox & Responsive Design Project**

## Project Overview

This project implements a modern and fully responsive landing page for Laundry Mart using HTML and CSS. The layout is structured using CSS Flexbox to create a clean navigation bar and a professional hero section with balanced spacing and proper alignment. The design adapts seamlessly across Desktop, Tablet, and Mobile devices using media queries.

The primary objective of this project is to practice Flexbox layout structuring, responsive design techniques, and professional UI styling without using any CSS frameworks. This version adds a **pure-CSS hamburger menu** for mobile navigation, using the `:focus` pseudo-class to toggle the menu as per the assignment requirements.

---

## Features Implemented

### 1. Responsive Navigation Bar
- Built using `display: flex` for perfect alignment.
- Logo with a Font Awesome icon (`fa-soap`).
- Desktop navigation links (Home, Services, About, Contact).
- Rounded bordered user profile container with a circular avatar displaying the user's initial.
- **Hamburger Icon:** A Font Awesome `fa-bars` icon is hidden on desktop and visible only on mobile screens (`max-width: 600px`).

### 2. Pure CSS Hamburger Menu (Mobile)
- **No JavaScript Used:** The menu toggles using the `:focus` and `:focus-within` pseudo-classes.
- **How it Works:**
    - The hamburger button and the off-canvas menu are wrapped in a `.menu-container` div.
    - The rule `.menu-container:focus-within .mobile-menu` displays the menu when the button (or any link inside the menu) receives focus.
    - Tapping the button focuses it, sliding the menu in from the right. Tapping outside the container removes focus, hiding the menu.
- **Off-Canvas Design:** The menu is absolutely positioned on the right side of the screen with a smooth shadow and rounded corners.

### 3. Professional Hero Section
- Two-column layout (Text + Image) on Desktop.
- Vertically centered using Flexbox.
- Gradient background styling (`radial-gradient`).
- Clean typography hierarchy with a highlighted span.
- Proper image scaling with a subtle shadow effect.

### 4. Call-to-Action Buttons
- Rounded button design with icon support.
- Hover effects with smooth transitions (scale and color change).
- On mobile, the secondary button is hidden, and the primary button becomes full-width for a cleaner interface.

### 5. Feature Highlights
- Visual icons for Free Pickup, Premium Care, and 24 Hour Delivery.
- Horizontal alignment on Desktop, hidden on mobile for a minimalistic look.

### 6. Responsive Design Implementation
- **Desktop:** Side-by-side layout with navigation links visible.
- **Tablet (`max-width: 992px`):** Hero section switches to column layout, text centered.
- **Mobile (`max-width: 600px`):**
    - Desktop navigation links are hidden.
    - Hamburger icon becomes visible.
    - Hero text aligns left, features are hidden, and the secondary button is removed.
    - Menu opens on button focus.

---

## Technologies Used

- **HTML5:** Semantic structure.
- **CSS3:** Flexbox, media queries, absolute positioning, pseudo-classes (`:focus`, `:focus-within`).
- **Font Awesome 6:** Icons for visual enhancement (CDN link).
- **Viewport meta tag:** For proper scaling on mobile devices.

No frameworks (like Bootstrap) were used.  
No JavaScript was used for the menu toggle.

---

## Folder Structure
project-folder/
│
├── index.html 
├── style.css  
└── README.md # Project documentation

## How to Run the Project

1.  **Download or Clone** the project folder containing the `index.html` file.
2.  **Open `index.html`** directly in any modern web browser (Chrome, Firefox, Edge, Safari).

**Optional (for development):**
1.  Open the folder in VS Code.
2.  Install the Live Server extension.
3.  Right-click `index.html` and select “Open with Live Server”.

No build steps, package installations, or dependencies are required.

---

## Assignment Requirements Followed (Hamburger Menu Task)

- **✅ Hamburger Icon:** Added to the navbar, hidden by default on desktop, and set to `display: inline-flex` on mobile view.
- **✅ Off-Canvas Menu:** Created a `.mobile-menu` div with `position: absolute` on the right side of the screen and `display: none` by default.
- **✅ No JavaScript Toggle:** Used the `:focus-within` pseudo-class on a parent container to display the menu when the hamburger button is focused. The button is wrapped in a `<button>` element to make it focusable.
- **✅ Learning Outcome:** The CSS sibling/child selector pattern was used successfully to control an element based on the focus state of another.

---

## Learning Outcomes

- **Advanced CSS Selectors:** Mastered the use of `:focus-within` to create interactive elements without JavaScript.
- **Mobile-First Thinking:** Understanding how to progressively enhance a desktop layout for mobile users by hiding/showing elements.
- **Flexbox Mastery:** Using Flexbox for both simple (navbar) and complex (hero section) alignments.
- **UI Polish:** Implementing subtle hover effects, shadows, and color gradients to create a professional finish.

---

## Author

**Siddhesh Mayekar**  
BSc IT – Second Year  
Software Developer Intern


