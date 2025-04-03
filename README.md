# Frontend Mentor - Arch Studio Multi-Page Website Solution

This is my solution to the [Arch Studio multi-page website challenge on Frontend Mentor](https://arch-studio-kappa.vercel.app/). This project helped me improve my coding skills through building a realistic multi-page website.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email` or `Message` fields are empty, showing "Can't be empty"
  - The `Email` is not formatted correctly, showing "Please use a valid email address"
- **Bonus**: View actual locations on the contact page map using real addresses instead of fictional ones.

### Screenshot

![Project Screenshot](https://github.com/user-attachments/assets/cd00c964-bb39-49b9-9861-402f0f9ebbe0)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styling

### What I learned

Working on this project gave me more experience with **Next.js** for server-side rendering and routing, while reinforcing my understanding of **Tailwind CSS** for rapid UI development. Here's an example of a feature I implemented:

```js
const handleFormSubmit = () => {
  // Form validation logic
  console.log('Form submitted successfully');
};
