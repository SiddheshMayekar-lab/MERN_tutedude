## What the project is:

A landing page for a laundry service called Laundry Mart
Has a navbar, hero section with text on left and animated image on right

## What you built:

Sticky navbar with logo, nav links, user profile pill, and a hamburger menu for mobile using pure CSS :focus-within trick (no JavaScript)
Hero section with a trust badge, heading, paragraph, two buttons, and feature pills
An orbit animation for the image on the right side


## How the orbit animation works:

There are two containers — orbit-stage stays fixed in the center
orbit-wrapper rotates 360 degrees around that center point
The image card inside counter-rotates the opposite direction so it stays upright while travelling the orbit path
At 25% and 75% of the animation the card gets squeezed with scaleX to give a squish effect


## Responsive design:
 
Three breakpoints — tablet at 992px, mobile at 600px, tiny screens at 380px
On mobile the nav links hide and hamburger shows
Hero stacks vertically on smaller screens
Orbit size shrinks on smaller screens


## What was probably tricky:

Understanding why you need two animations working against each other for the orbit
Getting transform-origin: 0 0 right so the rotation happens around the stage center
The squeeze effect timing at 25% and 75%
It was still little Diffcult for me and I used The help of AI for the squeeze effect and got a proper explaination from him for the same .

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

## Author

**Siddhesh Mayekar**  
BSc IT – Second Year  
Software Developer Intern