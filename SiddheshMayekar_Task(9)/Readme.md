# Laundry Mart – Responsive Landing Page with Hamburger Menu
**CSS Flexbox & Responsive Design Project**

## Project Overview

This project implements a modern and fully responsive landing page for **Laundry Mart** using HTML and CSS. The layout is structured using CSS Flexbox to create a clean navigation bar and a professional hero section with balanced spacing and proper alignment. The design adapts seamlessly across Desktop, Tablet, and Mobile devices using media queries.

The primary objective of this project is to practice Flexbox layout structuring, responsive design techniques, and professional UI styling without using any CSS frameworks or JavaScript. This version features a **pure-CSS hamburger menu** for mobile navigation using the `:focus-within` pseudo-class, **CTA buttons with a spring hover animation** (grow + tilt), a floating animated notification badge, and a trust badge above the hero headline.

---

## Features Implemented

### 1. Responsive Navigation Bar
- Built using `display: flex` for perfect alignment across all screen sizes.
- Logo with a Font Awesome icon (`fa-soap`) on the left.
- Desktop navigation links (Home, Services, About, Contact) in the centre.
- Rounded bordered user profile container on the right with a circular gradient avatar displaying the user's initial.
- **Hamburger Icon:** A Font Awesome `fa-bars` icon hidden on desktop and visible only on mobile screens (`max-width: 600px`).
- Sticky navbar (`position: sticky; top: 0`) so it remains visible on scroll.

### 2. Pure CSS Hamburger Menu (Mobile)
- **No JavaScript Used:** The menu toggles entirely via the `:focus-within` pseudo-class.
- **How it Works:**
    - The hamburger `<button>` and the `.mobile-menu` dropdown are both wrapped inside a `.menu-container` div.
    - The rule `.menu-container:focus-within .mobile-menu { display: flex; }` reveals the menu whenever the button — or any link inside the menu — holds focus.
    - Tapping the button focuses it and opens the menu. Tapping outside the container removes focus, which hides the menu automatically.
- **Off-Canvas Design:** The menu is absolutely positioned to the right side with a soft shadow, rounded corners, and a slide-in hover effect on each link.

### 3. Professional Hero Section
- Two-column layout (Text on left, Image on right) on Desktop using Flexbox.
- Vertically centered content with `align-items: center`.
- Layered radial gradient background (`radial-gradient`) — no background images, pure CSS atmosphere.
- Clean typographic hierarchy: trust badge → headline → subheading → buttons → feature pills.
- Hero image with white border, rounded corners, and a subtle zoom on hover.
- **Floating Notification Badge:** An animated card anchored to the hero image that bobs up and down using a CSS `@keyframes` loop, simulating a live activity notification.

### 4. Call-to-Action Buttons with Spring Animation
- Two buttons: **Book Service** (primary, filled) and **Contact Us** (secondary, outlined).
- Rounded pill design (`border-radius: 60px`) with Font Awesome icon support.
- **Hover Effect:** Both buttons lift, grow, and tilt on hover using a spring cubic-bezier curve for a physical, bouncy feel:
    - Primary tilts **left** (`rotate(-2deg)`) with a deeper shadow.
    - Secondary tilts **right** (`rotate(2deg)`) — opposite direction for visual variety.
    - Active/click state snaps back with a slight shrink for tactile feedback.
- On mobile, both buttons stack full-width for a cleaner touch interface.

### 5. Feature Highlight Pills
- Three frosted-glass style pills: Free Pickup, Premium Care, 24hr Delivery.
- Circular icon badges with Font Awesome icons and a blue background.
- `backdrop-filter: blur` for a subtle glass effect.
- Displayed horizontally on Desktop and Tablet; hidden on Mobile for a minimal look.

### 6. Trust Badge
- A small pill above the hero headline displaying a social proof message ("Trusted by 10,000+ customers").
- Styled with a white background, light blue border, and a star icon in amber.

### 7. Responsive Design Implementation
- **Desktop (`> 992px`):** Side-by-side hero layout, horizontal nav links visible, all features shown.
- **Tablet (`max-width: 992px`):** Hero section switches to a single column, text centred, nav links still visible.
- **Mobile (`max-width: 600px`):**
    - Desktop nav links hidden; hamburger icon becomes visible.
    - Hero text left-aligned for a natural reading flow.
    - Feature pills hidden for a clean minimal look.
    - Both CTA buttons stack full-width.
    - Menu opens on button focus via `:focus-within`.
- **Small Phones (`max-width: 380px`):** Headline font sizes scaled down further for tight viewports.

---

## Technologies Used

- **HTML5:** Semantic structure (`<nav>`, `<section>`, `<button>`).
- **CSS3:** Flexbox, media queries, absolute positioning, CSS custom keyframe animations, cubic-bezier transitions, pseudo-classes (`:focus`, `:focus-within`, `:hover`, `:active`).
- **Font Awesome 6:** Icons for visual enhancement (CDN link).
- **Google Fonts:** Plus Jakarta Sans — a distinctive, elegant font chosen over generic alternatives like Inter or Roboto.
- **Viewport meta tag:** For proper scaling on mobile devices.

No frameworks (like Bootstrap) were used.  
No JavaScript was used anywhere in the project.

---

## Folder Structure

```
project-folder/
│
├── index.html       # Page markup and semantic structure
├── style.css        # All styling, animations, and responsive rules
└── README.md        # Project documentation
```

---

## How to Run the Project

1. **Download or Clone** the project folder containing `index.html`, `style.css`, and `README.md`.
2. **Open `index.html`** directly in any modern web browser (Chrome, Firefox, Edge, Safari).

**Optional (for development):**
1. Open the folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and select **"Open with Live Server"**.

No build steps, package installations, or server setup required.

---

## Assignment Requirements Followed

- **✅ Hamburger Icon:** Added to the navbar, hidden on desktop with `display: none`, shown on mobile with `display: inline-flex`.
- **✅ Off-Canvas Menu:** `.mobile-menu` uses `position: absolute`, right-aligned, `display: none` by default.
- **✅ No JavaScript Toggle:** `:focus-within` on `.menu-container` displays the menu when the button or any child link is focused.
- **✅ Sticky Navbar:** Navbar stays fixed at the top on scroll using `position: sticky`.
- **✅ CTA Hover Animations:** Both buttons grow and tilt on hover using `scale()` and `rotate()` inside a CSS `transform` with a spring cubic-bezier easing.
- **✅ Pure CSS Floating Animation:** The notification badge on the hero image uses `@keyframes` to animate continuously with no JavaScript.
- **✅ Learning Outcome:** The `:focus-within` selector pattern was used successfully to control a child element's visibility based on the focus state of a sibling, entirely in CSS.

---

## Learning Outcomes

- **Advanced CSS Selectors:** Applied `:focus-within` to build an interactive menu toggle with zero JavaScript.
- **CSS Transform Animations:** Used combined `translateY()`, `scale()`, and `rotate()` in a single `transform` declaration with a custom `cubic-bezier` spring curve for realistic button physics.
- **CSS Keyframe Animations:** Built a looping float animation using `@keyframes` for the notification badge.
- **Mobile-First Thinking:** Progressively enhanced a desktop layout for tablet and mobile by systematically showing/hiding elements at each breakpoint.
- **Flexbox Mastery:** Used Flexbox for both single-axis (navbar) and two-axis (hero section) alignment across all screen sizes.
- **UI Polish:** Applied layered shadows, radial gradients, frosted-glass effects (`backdrop-filter`), and colour-consistent `rgba` shadows to achieve a professional, production-grade finish.
- **Typography:** Selected and applied a non-generic display font (Plus Jakarta Sans) and established a clear type scale from heading through body text.

---

## Design Details

### Colour Palette

| Role | Hex |
|---|---|
| Navy Dark (primary) | `#0a3d62` |
| Ocean Blue (accent) | `#1e90ff` |
| Deep Midnight (headline) | `#081e3a` |
| Slate (body text) | `#3a5878` |
| Page Background | `#f4f8fe` |
| White (cards, navbar) | `#ffffff` |

### Breakpoints

| Breakpoint | Target |
|---|---|
| `> 992px` | Desktop |
| `≤ 992px` | Tablet |
| `≤ 600px` | Mobile |
| `≤ 380px` | Small phones |

---

## Author

**Siddhesh Mayekar**  
BSc IT – Second Year  
Software Developer Intern