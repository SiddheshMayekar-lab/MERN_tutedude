# Task 8 – Responsive Navbar with Hamburger Menu

## Project Overview

In this task, I created a responsive navigation bar for Laundry Mart with a hamburger menu for smaller screens. The goal was to understand how CSS positioning and the :focus pseudo-class work.

On desktop view, navigation links are visible normally.  
On mobile view, the links are hidden and replaced with a hamburger icon. When the hamburger button receives focus, the mobile menu appears using only CSS (no JavaScript).

## How the Menu Works

- The .hamburger-btn and .mobile-menu are direct siblings in the HTML.
- I used the adjacent sibling selector:
  
  .hamburger-btn:focus + .mobile-menu

- When the button is focused, the mobile menu becomes visible.
- This follows the assignment requirement to use :focus.

## Technologies Used

- HTML5  
- CSS3  
- Flexbox  
- Media Queries  
- Font Awesome (for icons)

## Folder Structure

SiddheshMayekar_Task(8)/
│
├── index.html
├── style.css
├── README.md
└── images/

## How to Run

1. Open index.html in your browser.
2. Resize the screen below 600px.
3. Click or tab to the hamburger icon to open the menu.

## What I Learned

- How the :focus pseudo-class works.
- How the adjacent sibling selector (+) works.
- How to build a responsive navbar using Flexbox.
- How to show and hide elements using only CSS.

I also corrected my mistakes after feedback by removing duplicate CSS rules and replacing :focus-within with :focus.