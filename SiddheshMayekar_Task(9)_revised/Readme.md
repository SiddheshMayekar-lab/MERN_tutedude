# Task 9 – CSS Transforms on Buttons

## What this task is about

Practicing CSS `transform` on hover — specifically `scale()` and `rotate()` combined on buttons.

## The button hover effect

Both buttons scale up and tilt when you hover over them:

- **Book Service** tilts left: `transform: scale(1.08) rotate(-2deg)`
- **Contact Us** tilts right: `transform: scale(1.08) rotate(2deg)`

They tilt in opposite directions so they feel different from each other. I originally tried `rotate(5deg)` but it looked too exaggerated — 2 degrees is small enough to look intentional without being distracting.

One thing I got confused about early on: if you write `scale` and `rotate` as two separate `transform` properties, the second one just overwrites the first. You have to put both values in the same `transform` line:

```css
/* wrong — rotate cancels out scale */
transform: scale(1.08);
transform: rotate(-2deg);

/* correct — both apply together */
transform: scale(1.08) rotate(-2deg);
```

The `:active` state removes the tilt and shrinks the button slightly (`scale(0.96)`) so clicking feels like a real press.

## CSS variables

I used `:root` variables for colors and breakpoints:

```css
:root {
  --bp-tablet: 992px;
  --bp-mobile: 600px;
  --color-navy: #0a3d62;
  --color-blue: #1e90ff;
  /* ... */
}
```

One limitation: CSS variables can't be used inside `@media` conditions. So in the media queries I had to write the pixel values directly (`992px`, `600px`), but I added comments showing which variable they correspond to.

## Mobile menu

The hamburger menu works with no JavaScript — I used the CSS adjacent sibling selector:

```css
.hamburger-btn:focus + .mobile-menu {
  display: flex;
}
```

This only works because `.hamburger-btn` and `.mobile-menu` are direct siblings in the HTML. If there was any element between them it would break.

## Files

- `index.html` — page structure
- `style.css` — all styles, variables, and media queries
