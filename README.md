# ODPS Procurement Guides Website

A lightweight, dependency-free prototype for a One Dorset Procurement Service guide library.

## Open it

Unzip the folder and open `index.html` in a modern browser.

## Included guides

- Upload & sign a recommendation report in E-Sign
- Adding your signed document to ImageNow
- How to book a parking space & desk on uBook

## Reader features

- Original guide pages displayed as supplied
- "Next step" / "Previous" controls with a page-turn animation
- Step progress rail
- Full-screen reader
- Keyboard navigation with left/right arrows
- Swipe navigation on touch devices
- Responsive mobile layout
- Reduced-motion accessibility support
- Downloadable source PDF for guides that provide one
- uBook guide includes all five pages, including its cover

## Add another guide

1. Put its page images into `assets/`.
2. Open `app.js`.
3. Add another object to the `guides` array using an existing guide as the template.
4. List each page image in the `pages` array, in order.

No framework or build process is required.

- ImageNow PDF download available from the guide card and reader
- E-Sign guide updated to Version 2.2 with all five pages and downloadable source PDF

- ODPS Atamis Standard Operating Procedures (SOPs): all 21 pages plus downloadable source PDF
## Reader viewing controls

- Full-screen mode from the reader toolbar
- Zoom out / reset / zoom in controls from 75% to 250%
- Zoom level is shown as a percentage and resets when a new guide is opened
- Keyboard shortcuts while a guide is open: Ctrl/Cmd + plus, minus, or 0


- ODPS Interim Standing Financial Instructions: 9-page landscape guide with PDF download
