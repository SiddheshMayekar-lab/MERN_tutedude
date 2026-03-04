# Task 9 – Button Hover Effects

## What I built

A laundry service landing page with a navbar, hero section, and two buttons that scale and tilt on hover.

## The hover effect

Both buttons grow and tilt when you hover over them. Book Service tilts left and Contact Us tilts right so they feel different from each other. I first tried 5deg but it looked too much so I went with 2deg.

One thing that tripped me up — I was writing scale and rotate as two separate transform lines and only one was working. Turns out the second just overwrites the first, both have to go on the same line like `transform: scale(1.08) rotate(-2deg)`.

I also added an :active state so the button shrinks slightly when you click it, makes it feel more like a real button press.

## Mobile menu

The hamburger menu opens without any JavaScript. It works using the CSS focus + sibling selector — the button and menu have to be right next to each other in the HTML for this to work.

## Responsive

On tablet the hero stacks vertically. On mobile the nav links hide and the hamburger shows up instead. I also hid the second button and feature pills on small screens to keep it clean.

## CSS variables

I stored all colors in :root so I dont have to repeat hex codes. One thing I found out is you cant use CSS variables inside @media queries so I had to write the px values directly there.

## Folder Structure

```
project-folder/
│
├── index.html       # Page markup and semantic structure
├── style.css        # All styling, animations, and responsive rules
└── README.md        # Project documentation
```

## How to Run the Project

1. **Download or Clone** the project folder containing `index.html`, `style.css`, and `README.md`.
2. **Open `index.html`** directly in any modern web browser (Chrome, Firefox, Edge, Safari).

## Author

**Siddhesh Mayekar**  
BSc IT – Second Year  
Software Developer Intern