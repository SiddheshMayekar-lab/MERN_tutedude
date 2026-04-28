## Task 24 Reflection

I rewrote this file section by section instead of collecting random Tailwind classes. My goal was to understand when a built-in animation is enough and when I need custom timing or custom keyframes.

## What I changed

- Rebuilt the page into six clear practice sections: built-in animations, button hover feedback, hover cards, notification badges, loading states, and staggered page-load cards.
- Replaced the last section's hover-based card effect with a real page-load animation.
- Added a custom `@keyframes fade-up` animation that moves each card from `opacity: 0` and `translateY(24px)` to a visible resting state.
- Added custom `anim-delay-0`, `anim-delay-150`, `anim-delay-300`, and `anim-delay-450` classes for the staggered card timing.
- Fixed the three-dot loader by giving each dot a different animation delay so they do not bounce together.

## Trial and error

- My first attempt for the last section used `hover:opacity-100` and `hover:translate-y-0`. That looked fine on hover, but it did not satisfy the requirement because nothing happened on page load.
- I also tried the dot loader with plain `animate-bounce` on all three dots. The movement was synchronized, so it felt flat. Adding delays made the loader feel more natural.
- I noticed Tailwind already uses `delay-*` for transition timing, so I named my custom classes `anim-delay-*` to make it clear that I was controlling animation delay.

## What I learned

- Built-in classes like `animate-spin`, `animate-pulse`, `animate-ping`, and `animate-bounce` are useful for quick UI feedback.
- For page-load sequencing, the important part is not a different keyframe for every card. The important part is using one keyframe with different delay values.
- `animation-fill-mode: both` matters when there is a delay, because it keeps the cards in the hidden starting state before the animation begins and preserves the final state after it finishes.

## How to run

Open `index.html` in a browser.
