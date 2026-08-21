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

- Added a dedicated Tools page linked from the homepage.
- Added Thresholds & Notices (PA23) Decision Tree using the supplied v5.1 decision logic and content, redesigned to match the ODPS site.

- PA23 Thresholds & Notices decision tree updated against the 21 August 2026 fact-check/change report:
  2026–27 thresholds, NHS central-government classification, PSR/exemption gates, contract-value test,
  commencement-date transition, route-based notice logic and authority/lifecycle notice reminders.

- Added compact expandable help guidance to the PA23 assessment for exempt-contract examples,
  contract-category examples, and the User Choice direct-award justification.

- Reworked the PA23 PDF-summary output into a dedicated A4 print document with print-safe sections,
  page-break protection for summary rows and notice cards, and professional ODPS/NHS styling.

- Replaced the PA23 PDF popup/print workflow with a self-contained direct PDF download.
  The PDF is generated entirely in the browser, requires no pop-up window and preserves grouped page elements.

- Added UHD Recommendation Reports as a second expandable Tools tile.
- Added a styled Guidance Notes page based on the supplied recommendation-report guidance.
- Added Guidance Notes and Select Report actions; Select Report is reserved for the next workflow.

- Renamed Select Report to Select Document.
- Added a Recommendation Reports document library with direct downloads and cleaned display/download names.
- Bundled all supplied recommendation-report templates, committee cover sheets, Agreement Approval,
  IG/eSign guide and Clinical/Technical Variation document.
