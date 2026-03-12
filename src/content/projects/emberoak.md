---
title: "Ember & Oak"
desc: "Brochure website (demo) for a Cape Town wood-fired restaurant. Multi-page with animated transitions, reservations flow, menu, and gallery."
date: 2026-01-14
image: "../../static/ember-oak.webp"
alt: "Ember & Oak image"
tags: ["Astro", "Typescript", "Motion"]
live: "https://embero.vercel.app/"
---

# Ember & Oak

Ember & Oak is a self-directed project to showcase a polished multi-page brochure website.

The **goal** was to learn the Astro framework and get familiar with how things are done outside of React.

## What I learned

- Astro seems to handle SSR (server side rendering) in a more straightforward way.
- The **Islands Architecture** makes more sense to me than how React handles components and rendering.
- You can use markdown files for page content. Better than hard-coding it directly into a React page/component.
- Astro's SSR is easier to implement/setup than SSR with nextJS for example.

## What confused me

Honestly I found it unnecessarily tedious to setup multiple fonts. In React im used to just importing them fron `next/fonts` or
by importing a google font directly via the url and then it's good to go after setting a variable but Astro has a few more steps...
