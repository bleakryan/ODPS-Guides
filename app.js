const guides = [
  {
    id: "esign-recommendation-report",
    shortTitle: "E-Sign",
    kicker: "Recommendation reports",
    title: "Upload & sign a recommendation report in E-Sign",
    description:
      "The latest five-page Version 2.2 guide covering E-Sign upload, signer fields, Information Governance approval and final signed-report submission.",
    duration: "Approx. 5–10 minutes",
    coverTitle: "E-Sign & ImageNow<br>Version 2.2",
    pageLabel: "Page",
    railLabel: "Guide pages",
    currentLabel: "Current page",
    download: {
      url: "assets/downloads/ODPS_E-Sign_ImageNow_Guide_Version_2.2.pdf",
      filename: "ODPS E-Sign & ImageNow Guide Version 2.2.pdf",
      label: "Download PDF"
    },
    pages: [
      {
        title: "How to Submit a Document on E-Sign & ImageNow",
        description: "Cover page for the latest ODPS Version 2.2 E-Sign and ImageNow submission guide.",
        image: "assets/esign-v22-page-1.png",
        alt: "Cover of the ODPS Version 2.2 guide How to Submit a Document on E-Sign and ImageNow."
      },
      {
        title: "Upload your report to E-Sign",
        description: "Upload the Recommendation Report, add all required signers and confirm the numbered signing order.",
        image: "assets/esign-v22-page-2.png",
        alt: "ODPS Version 2.2 guide page: Step 1, Upload your report to E-Sign.",
        externalLink: "https://www.esign.co.uk/products/electronic-signature/online/?campaignid=22806957279&adgroupid=&creative=&matchtype=&network=x&device=c&keyword=&gad_source=1&gad_campaignid=22806958452&gclid=Cj0KCQjww4TGBhCKARIsAFLXndT3X019wFtnOgdetSwJWBQyQHwm1I4fkyKZJX_4vGw8XTEZTkiFMokaAiSaEALw_wcB",
        externalLinkLabel: "Open E-Sign in a new tab"
      },
      {
        title: "Add signer fields and send",
        description: "Select each signer, place the correct fields onto the document, repeat for each signer and send.",
        image: "assets/esign-v22-page-3.png",
        alt: "ODPS Version 2.2 guide page: Step 2, Add signer fields and send."
      },
      {
        title: "Information Governance approval",
        description: "If Information Governance approval is required, add the IG approver, check boxes and the required approval fields.",
        image: "assets/esign-v22-page-4.png",
        alt: "ODPS Version 2.2 guide page: Step 3, Information Governance approval."
      },
      {
        title: "Finalise and submit the signed report",
        description: "Download the fully signed report, capture the completed signatures, update the Word version and submit it through the eForms Portal.",
        image: "assets/esign-v22-page-5.png",
        alt: "ODPS Version 2.2 guide page: Step 4, Finalise and submit the signed report."
      }
    ]
  },
  {
    id: "imagenow-signed-document",
    shortTitle: "ImageNow",
    kicker: "Signed documents",
    title: "Adding your signed document to ImageNow",
    description:
      "Prepare the fully signed Recommendation Report, capture the completed signature section, update the Word version and submit it through the eForms Portal.",
    duration: "Approx. 3–5 minutes",
    coverTitle: "Signed Document<br>to ImageNow",
    download: {
      url: "assets/downloads/Adding_your_signed_document_to_ImageNow.pdf",
      filename: "Adding your signed document to ImageNow.pdf",
      label: "Download PDF"
    },
    pages: [
      {
        title: "Finalise and submit the signed report",
        description: "Download the signed report, capture the completed signatures, update the Word version and submit the final document through the eForms Portal.",
        image: "assets/imagenow-signed-document.png",
        alt: "ODPS guide page: Finalise and submit the signed report, including downloading the signed report, capturing signatures, updating the Word version and submitting it through the eForms Portal."
      }
    ]
  },
  {
    id: "ubook-parking-desk",
    shortTitle: "uBook",
    kicker: "Parking & desks",
    title: "How to book a parking space & desk on uBook",
    description:
      "The complete five-page uBook guide covering parking-space searches, parking bookings, desk bookings and booking confirmation.",
    duration: "Approx. 5–10 minutes",
    coverTitle: "Parking Space & Desk<br>on uBook",
    pageLabel: "Page",
    railLabel: "Guide pages",
    currentLabel: "Current page",
    download: {
      url: "assets/downloads/ODPS_uBook_Guide_v1.0.pdf",
      filename: "ODPS_uBook_Guide_v1.0.pdf",
      label: "Download PDF"
    },
    pages: [
      {
        title: "How to Book a Parking Space & Desk on uBook",
        description: "The cover page for the complete ODPS step-by-step uBook booking guide.",
        image: "assets/ubook-page-1.png",
        alt: "Cover of the ODPS guide How to Book a Parking Space and Desk on uBook."
      },
      {
        title: "Search for a parking space",
        description: "Choose the location, Parking Space resource type, date and times, then show the floor plan to view available spaces.",
        image: "assets/ubook-page-2.png",
        alt: "ODPS uBook guide page: Step 1, Search for a parking space by selecting the location, resource type, date, times and floor plan."
      },
      {
        title: "Choose and book your parking space",
        description: "Select an available bay, check the booking details, add your vehicle registration and book the parking space.",
        image: "assets/ubook-page-3.png",
        alt: "ODPS uBook guide page: Step 2, Choose and book a parking space, including vehicle registration and booking confirmation."
      },
      {
        title: "Search for and book a desk",
        description: "Use the same search process with Resource Type set to Desk, choose an available workstation and submit the booking.",
        image: "assets/ubook-page-4.png",
        alt: "ODPS uBook guide page: Step 3, Search for and book an available desk using the floor plan."
      },
      {
        title: "Confirm your booking",
        description: "Check the selected resource and look for the green success message confirming the booking request was submitted.",
        image: "assets/ubook-page-5.png",
        alt: "ODPS uBook guide page: Step 4, Confirm the selected resource and verify the green successful booking message."
      }
    ]
  }
];

const grid = document.querySelector("#guide-grid");
const reader = document.querySelector("#reader");
const closeReader = document.querySelector("#close-reader");
const fullscreenButton = document.querySelector("#fullscreen-button");
const guidePage = document.querySelector("#guide-page");
const pageTurner = document.querySelector("#page-turner");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const nextLabel = document.querySelector("#next-label");
const readerCounter = document.querySelector("#reader-counter");
const readerShortTitle = document.querySelector("#reader-short-title");
const stepTitle = document.querySelector("#step-title");
const stepDescription = document.querySelector("#step-description");
const stepList = document.querySelector("#step-list");
const mobileProgress = document.querySelector("#mobile-progress");
const stepResourceLink = document.querySelector("#step-resource-link");
const stepResourceLabel = document.querySelector("#step-resource-label");
const readerDownload = document.querySelector("#reader-download");
const readerDownloadLabel = document.querySelector("#reader-download-label");
const stepRailTitle = document.querySelector("#step-rail-title");
const currentUnitLabel = document.querySelector("#current-unit-label");

let activeGuide = null;
let currentPage = 0;
let animationLocked = false;

function renderLibrary() {
  grid.innerHTML = "";

  guides.forEach((guide) => {
    const card = document.createElement("article");
    card.className = "guide-card";
    card.innerHTML = `
      <div class="guide-card-content">
        <div class="guide-kicker">${guide.kicker}</div>
        <h3>${guide.title}</h3>
        <p>${guide.description}</p>
        <div class="guide-card-meta">
          <span>${guide.pages.length} ${guide.pageLabel === "Page" ? "pages" : "steps"}</span>
          <span>•</span>
          <span>${guide.duration}</span>
        </div>
        <div class="guide-card-actions">
          <button class="primary-button open-guide" type="button" data-guide="${guide.id}">
            Open guide
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m7 4 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          ${guide.download ? `
            <a class="secondary-button guide-download-button" href="${guide.download.url}" download="${guide.download.filename}">
              <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3v9m0 0 3.5-3.5M10 12 6.5 8.5M4 16h12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              ${guide.download.label || "Download PDF"}
            </a>` : ""}
        </div>
      </div>
      <div class="guide-cover" aria-hidden="true">
        <div class="cover-badge">NHS</div>
        <div class="cover-book">
          <div class="cover-book-lines">
            <strong>${guide.coverTitle}</strong>
            <i></i><i></i><i></i>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  const soon = document.createElement("aside");
  soon.className = "coming-soon";
  soon.innerHTML = `
    <div>
      <div class="coming-soon-icon" aria-hidden="true">+</div>
      <h3>More guides coming soon</h3>
      <p>Add future ODPS guides to the same library and they will use the same familiar reader.</p>
    </div>
  `;
  grid.appendChild(soon);

  document.querySelectorAll(".open-guide").forEach((button) => {
    button.addEventListener("click", () => openGuide(button.dataset.guide));
  });
}

function openGuide(id) {
  activeGuide = guides.find((guide) => guide.id === id);
  if (!activeGuide) return;

  currentPage = 0;
  readerShortTitle.textContent = activeGuide.shortTitle;
  if (stepRailTitle) stepRailTitle.textContent = activeGuide.railLabel || "Guide steps";
  if (currentUnitLabel) currentUnitLabel.textContent = activeGuide.currentLabel || "Current step";

  // Download controls are optional UI. Guard them so a missing control can never
  // prevent the guide itself from opening.
  if (readerDownload) {
    if (activeGuide.download) {
      readerDownload.href = activeGuide.download.url;
      readerDownload.setAttribute("download", activeGuide.download.filename || "guide.pdf");
      if (readerDownloadLabel) {
        readerDownloadLabel.textContent = activeGuide.download.label || "Download PDF";
      }
      readerDownload.hidden = false;
    } else {
      readerDownload.hidden = true;
      readerDownload.removeAttribute("href");
      readerDownload.removeAttribute("download");
    }
  }

  buildStepList();
  updateReader(false);
  reader.hidden = false;
  document.body.classList.add("reader-open");
  reader.scrollTop = 0;
  closeReader.focus({ preventScroll: true });
  history.replaceState({ guide: id }, "", `#guide=${id}`);
}

function closeGuide() {
  reader.hidden = true;
  document.body.classList.remove("reader-open");
  activeGuide = null;
  currentPage = 0;
  if (document.fullscreenElement) document.exitFullscreen?.();
  history.replaceState({}, "", window.location.pathname + window.location.search);
  document.querySelector(`[data-guide="${guides[0].id}"]`)?.focus();
}

function buildStepList() {
  stepList.innerHTML = "";
  activeGuide.pages.forEach((page, index) => {
    const li = document.createElement("li");
    li.className = "step-item";
    li.dataset.step = index + 1;
    li.innerHTML = `<strong>${page.title}</strong>`;
    li.addEventListener("click", () => changePage(index, index > currentPage ? "next" : "prev"));
    li.style.cursor = "pointer";
    stepList.appendChild(li);
  });
}

function updateReader(animate = true, direction = "next") {
  const page = activeGuide.pages[currentPage];

  if (animate) {
    animationLocked = true;
    pageTurner.classList.remove("turn-next", "turn-prev");
    void pageTurner.offsetWidth;
    pageTurner.classList.add(direction === "next" ? "turn-next" : "turn-prev");

    window.setTimeout(() => {
      guidePage.src = page.image;
      guidePage.alt = page.alt;
      stepTitle.textContent = page.title;
      stepDescription.textContent = page.description;
    }, 265);

    window.setTimeout(() => {
      pageTurner.classList.remove("turn-next", "turn-prev");
      animationLocked = false;
    }, 540);
  } else {
    guidePage.src = page.image;
    guidePage.alt = page.alt;
    stepTitle.textContent = page.title;
    stepDescription.textContent = page.description;
  }

  readerCounter.textContent = `${activeGuide.pageLabel || "Step"} ${currentPage + 1} of ${activeGuide.pages.length}`;
  prevButton.disabled = currentPage === 0;

  const isLast = currentPage === activeGuide.pages.length - 1;
  nextLabel.textContent = isLast ? "Finish guide" : "Next step";

  [...stepList.children].forEach((item, index) => {
    item.classList.toggle("active", index === currentPage);
    item.classList.toggle("done", index < currentPage);
    if (index === currentPage) item.setAttribute("aria-current", "step");
    else item.removeAttribute("aria-current");
  });

  mobileProgress.style.setProperty("--progress", (currentPage + 1) / activeGuide.pages.length);

  if (page.externalLink) {
    stepResourceLink.href = page.externalLink;
    stepResourceLabel.textContent = page.externalLinkLabel || "Open related link";
    stepResourceLink.hidden = false;
  } else {
    stepResourceLink.hidden = true;
    stepResourceLink.removeAttribute("href");
  }
}

function changePage(target, direction) {
  if (!activeGuide || animationLocked) return;
  if (target < 0 || target >= activeGuide.pages.length || target === currentPage) return;

  currentPage = target;
  updateReader(true, direction);
  reader.scrollTop = 0;
}

prevButton.addEventListener("click", () => changePage(currentPage - 1, "prev"));

nextButton.addEventListener("click", () => {
  if (!activeGuide || animationLocked) return;
  if (currentPage === activeGuide.pages.length - 1) {
    closeGuide();
    document.querySelector("#guides")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  changePage(currentPage + 1, "next");
});

closeReader.addEventListener("click", closeGuide);

fullscreenButton.addEventListener("click", async () => {
  try {
    if (!document.fullscreenElement) {
      await reader.requestFullscreen?.();
    } else {
      await document.exitFullscreen?.();
    }
  } catch (_) {}
});

document.addEventListener("keydown", (event) => {
  if (reader.hidden || !activeGuide) return;
  if (event.key === "ArrowRight") {
    event.preventDefault();
    if (currentPage < activeGuide.pages.length - 1) changePage(currentPage + 1, "next");
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    if (currentPage > 0) changePage(currentPage - 1, "prev");
  }
  if (event.key === "Escape" && !document.fullscreenElement) closeGuide();
});

let touchStartX = null;
reader.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].clientX;
}, { passive: true });

reader.addEventListener("touchend", (event) => {
  if (touchStartX === null) return;
  const delta = event.changedTouches[0].clientX - touchStartX;
  touchStartX = null;
  if (Math.abs(delta) < 70) return;
  if (delta < 0 && currentPage < activeGuide.pages.length - 1) changePage(currentPage + 1, "next");
  if (delta > 0 && currentPage > 0) changePage(currentPage - 1, "prev");
}, { passive: true });

document.querySelectorAll("[data-home]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!reader.hidden) {
      event.preventDefault();
      closeGuide();
    }
  });
});

function openFromHash() {
  const match = location.hash.match(/^#guide=(.+)$/);
  if (match && guides.some((g) => g.id === match[1])) {
    openGuide(match[1]);
  }
}

renderLibrary();
openFromHash();
