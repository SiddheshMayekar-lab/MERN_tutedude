# Laundry Mart – Responsive Landing Page with Hamburger Menu
**CSS Flexbox & Responsive Design Project**

## Project Overview

This project implements a modern and fully responsive landing page for **Laundry Mart** using HTML and CSS. The layout is structured using CSS Flexbox to create a clean navigation bar and a professional hero section with balanced spacing and proper alignment. The design adapts seamlessly across Desktop, Tablet, and Mobile devices using media queries.

The primary objective of this project is to practice Flexbox layout structuring, responsive design techniques, and professional UI styling without using any CSS frameworks or JavaScript. This version features a **pure-CSS hamburger menu** for mobile navigation, **CTA buttons with a spring hover animation** (grow + tilt), a floating animated notification badge, a trust badge above the headline, and a **smooth 3D floating card animation** in the hero section.

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
- Layered radial gradient background — no background images, pure CSS atmosphere.
- Clean typographic hierarchy: trust badge → headline → subheading → buttons → feature pills.
- Hero image with white border, rounded corners, and a 3D floating animation (detailed below).
- **Floating Notification Badge:** A small card anchored to the image that bobs independently on its own animation loop.

### 4. Hero Image – Smooth 3D Floating Animation

#### What the animation does
The hero image card performs three simultaneous, independent animations that layer together to create a natural, organic floating effect:

- **`cardFloat` (6s loop)** — The card gently rises 18px and sinks back down in a slow ease-in-out cycle. A very subtle `rotateX` tilt is applied at the peak of the float, as if the card is catching air at the top of its rise.
- **`cardTilt` (9s loop)** — Completely separate from the float, this animation slowly rocks the card left and right using `rotateY` and a sliver of `rotateZ`. Because the duration is different from `cardFloat`, the two animations never sync up — the card always feels alive and unpredictable rather than mechanical.
- **`shadowBreathe` (6s loop)** — A soft ellipse beneath the card grows wider and darker when the card is low, and shrinks and fades when the card rises — reinforcing the 3D depth illusion naturally.

Three softly blurred **atmospheric blobs** drift slowly behind the card at different speeds (6s, 8s, and 10s), creating a shifting glow that makes the image feel lit from behind.

The floating notification badge runs on the same float duration but is offset by `-2s`, so it drifts slightly out of phase with the card — adding another layer of depth.

#### Why every animation is smooth (no jitter)
Every property animated in this section uses only `transform` and `opacity`. These are the only two CSS properties that browsers can animate entirely on the **GPU compositor thread**, meaning the CPU and layout engine are never touched during the animation. This is why it runs at a consistent 60fps with zero jitter.

---

#### Why the original orbit rotation was removed and replaced

The first version of the hero image used an **orbit animation** — the card traced a continuous 360° elliptical path around a centre point using `rotate() + translateX()` chained transforms, with a squeeze/stretch effect applied to simulate perspective distortion as it moved through the arc.

**It was removed for the following reasons:**

**1. It was fundamentally wrong for this type of image.**
The hero image is a real photograph of a laundry room — a rectangular, content-rich image with a clear subject. An orbit animation that continuously spins a photo through a full circle means the image is sideways, upside-down, and backwards for half of every 9-second loop. This makes it impossible to actually read or appreciate the image, which defeats the entire purpose of having a hero photo. Orbit animations work for abstract shapes, icons, or logos — not for photographs.

**2. It caused severe visual jitter and lag.**
The orbit used `rotate() + translateX()` combined in a single `transform` chain. Changing `translateX` inside a `rotate` context causes the browser to recalculate the element's painted position every single frame, because the translation direction itself rotates. This is an expensive operation that forces the browser's layout engine to stay involved throughout the animation, bypassing GPU compositing and causing choppy, jittery movement — especially on mid-range devices and mobile.

**3. The counter-rotation technique broke under animation pressure.**
To keep the image upright during the orbit, a second animation (`imageSquash`) applied an equal and opposite rotation to the card. Running two conflicting rotation animations on the same element simultaneously causes browsers to fight between the two transform states at each frame, which compounds the jitter problem and produces the "shaking" effect that was visible.

**4. `box-shadow` was animated inside keyframes.**
The original `shadowPulse` animation changed `box-shadow` values at multiple keyframe steps. `box-shadow` is a paint property — animating it forces the browser to repaint the element's shadow layer on every frame, which is one of the most expensive operations in CSS animation. This single choice alone can drop a smooth 60fps animation to 20–30fps on a real device.

**5. It looked unpleasant at every viewport size.**
As screen size decreased, the orbit radius had to be shrunk, the card had to be made smaller, and the orbital path became tighter. At mobile sizes, the card was spinning in a tiny circle at high angular velocity, which looked frantic and amateurish rather than polished.

**The replacement floating animation avoids every single one of these problems** — it animates only `transform` and `opacity`, uses `ease-in-out` timing on slow loops, keeps the image fully visible and readable at all times, and runs entirely on the GPU with no layout recalculation.

---

### 5. Call-to-Action Buttons with Spring Animation
- Two buttons: **Book Service** (primary, filled) and **Contact Us** (secondary, outlined).
- Rounded pill design (`border-radius: 60px`) with Font Awesome icon support.
- **Hover Effect:** Both buttons lift, grow, and tilt on hover using a spring cubic-bezier curve:
    - Primary tilts **left** (`rotate(-2deg)`) with a deeper shadow.
    - Secondary tilts **right** (`rotate(2deg)`) — opposite direction for visual variety.
    - Active/click state snaps back with a slight shrink for tactile feedback.
- On mobile, both buttons stack full-width.

### 6. Feature Highlight Pills
- Three frosted-glass style pills: Free Pickup, Premium Care, 24hr Delivery.
- Circular icon badges with Font Awesome icons and a blue background.
- `backdrop-filter: blur` for a subtle glass effect.
- Displayed horizontally on Desktop and Tablet; hidden on Mobile for a minimal look.

### 7. Trust Badge
- A small pill above the hero headline: "Trusted by 10,000+ customers".
- Styled with a white background, light blue border, and an amber star icon.

### 8. Responsive Design Implementation
- **Desktop (`> 992px`):** Side-by-side hero layout, horizontal nav links visible, all features shown.
- **Tablet (`max-width: 992px`):** Hero stacks to single column, text centred, nav links still visible.
- **Mobile (`max-width: 600px`):** Nav links hidden, hamburger shown, buttons stack full-width, feature pills hidden.
- **Small Phones (`max-width: 380px`):** Headline font sizes scaled down for tight viewports.

---

## Technologies Used

- **HTML5:** Semantic structure (`<nav>`, `<section>`, `<button>`).
- **CSS3:** Flexbox, media queries, `perspective` and `rotateY`/`rotateX` 3D transforms, `filter: blur`, `@keyframes`, `cubic-bezier` transitions, pseudo-classes (`:focus`, `:focus-within`, `:hover`, `:active`).
- **Font Awesome 6:** Icons for visual enhancement (CDN).
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

1. **Download or Clone** the project folder.
2. **Open `index.html`** directly in any modern web browser (Chrome, Firefox, Edge, Safari).

**Optional (for development):**
1. Open the folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and select **"Open with Live Server"**.

No build steps, package installations, or server setup required.

---

## Assignment Requirements Followed

- **✅ Hamburger Icon:** Hidden on desktop, shown on mobile via `display: inline-flex`.
- **✅ Off-Canvas Menu:** Absolutely positioned, hidden by default, revealed via `:focus-within`.
- **✅ No JavaScript Toggle:** Pure CSS `:focus-within` pattern used throughout.
- **✅ Sticky Navbar:** `position: sticky; top: 0` keeps the navbar visible on scroll.
- **✅ CTA Hover Animations:** Spring cubic-bezier `scale()` + `rotate()` tilt on both buttons.
- **✅ GPU-Optimised Image Animation:** All keyframes animate only `transform` and `opacity` — zero layout recalculation, zero repaints.
- **✅ Atmospheric Background Blobs:** Three independently drifting blurs create depth behind the hero image using only `filter: blur` and `transform`.

---

## Learning Outcomes

- **Advanced CSS Selectors:** Applied `:focus-within` to build an interactive mobile menu toggle without JavaScript.
- **3D CSS Transforms:** Used `perspective`, `rotateX`, `rotateY`, and `rotateZ` to create a realistic floating depth effect on the hero image.
- **GPU Compositing:** Learned why animating only `transform` and `opacity` is critical for smooth performance — these are the only properties that bypass layout and paint and run entirely on the GPU.
- **Animation Layering:** Combined multiple `@keyframes` with different durations on the same element so they never sync, creating an organic, non-mechanical feel.
- **CSS Transform Animations:** Used combined `translateY()`, `scale()`, and `rotate()` in a single `transform` declaration with a custom `cubic-bezier` spring curve for the button interactions.
- **Mobile-First Thinking:** Progressively enhanced a desktop layout across four responsive breakpoints.
- **Flexbox Mastery:** Used Flexbox for both single-axis (navbar) and two-axis (hero section) alignment.
- **UI Polish:** Applied layered shadows, radial gradients, frosted-glass effects (`backdrop-filter`), and colour-consistent `rgba` shadows for a professional finish.

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