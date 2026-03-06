# Laundry Mart – Hero Image Animation

## Project Overview

This project is a small CSS animation task created as part of the frontend practice assignment.
The goal was to enhance the **Hero Section** of the Laundry Mart webpage by adding an animation to the hero image.

The animation makes the image move in an **orbit-like motion** and slightly **squeeze and stretch at certain points**. This creates a visually engaging effect and attracts user attention to the hero section.

---

## Features Implemented

* Responsive **Navigation Bar**
* Mobile **Hamburger Menu (CSS only)**
* Hero section with headline, description, and buttons
* Button **hover effects (scale and rotate)**
* Hero image **orbit animation**
* Image **squeeze/stretch effect using CSS scale**

---

## Animation Details

The hero image uses **CSS Keyframes Animation**.

The animation performs the following:

* Moves the image slightly around its position to simulate an **orbit movement**
* Applies **scale transformation** to create a squeeze/stretch effect
* Runs continuously using `animation: infinite`

This was implemented using:

* `@keyframes`
* `transform: translate()`
* `transform: scale()`
* `transform: rotate()`

---

## Technologies Used

* HTML5
* CSS3
* Font Awesome Icons

No JavaScript was used for the animation.

---

## Folder Structure

project-folder
│
├── index.html
├── style.css
├── README.md
└── images
└── laundry1.png

---

## How to Run the Project

1. Download or clone the project folder.
2. Open the folder in **Visual Studio Code**.
3. Make sure the **CSS file is properly linked** in the HTML file.
4. Open `index.html` in your browser.

You will see the **Laundry Mart hero section with the animated image**.

---

## Notes

This project was created for learning purposes to practice:

* CSS transforms
* CSS keyframe animations
* Responsive layout structure
* Clean and organized styling

The goal was to implement the animation effect while keeping the layout responsive and simple.
