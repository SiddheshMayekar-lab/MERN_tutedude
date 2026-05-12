# Task 29 - Custom useFetch Hook

## What is this task about?

This task is about building a custom React hook called `useFetch` that handles fetching data from an API. The goal is to understand how to use `useState` and `useEffect` together inside a reusable hook.

## What I built

A custom hook at `src/hooks/useFetch.js` that:
- takes a URL as input
- fetches data from that URL
- returns `data`, `loading`, and `error` states

The main `App.jsx` uses this hook to fetch a list of users from `jsonplaceholder.typicode.com` and shows them on screen.

## What I learned

- Custom hooks are just regular functions that call other hooks like useState/useEffect
- The dependency array in useEffect is important - putting `url` in it means the fetch re-runs whenever the URL changes
- I need to handle three states: loading (while waiting), data (success), and error (something broke)
- Checking `res.ok` is how you catch HTTP errors like 404 or 500, because fetch only throws on network failures


## API used
https://jsonplaceholder.typicode.com/users - free fake API for testing
