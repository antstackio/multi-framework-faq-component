# Multi Framework Components POC

A POC for making and publishing Components in multiple frameworks with same CSS source.

## Tech Stack

This Project makes use of the following:

- [Rush](https://rushjs.io/) for managing monorepo and symlinking.
- [Vanilla Extract](https://vanilla-extract.style/) as the base for providing styles
- [EsBuild](https://esbuild.github.io/) as the bundler for components.

This Repo acts as a POC for making monorepos using Rush, handling bundling with EsBuild and making re-usable css with vanilla-extract

Note: this is still
Project Structure:

├── common // Houses common files mainly for managing monorepo
├── docs // Houses the docs
├── packages
│ ├── core // houses all base `css` files
│ ├── react // houses react components and react-specific logic
└── README.md

Tries to make the Accordion of [hover.style](https://hover.style)
