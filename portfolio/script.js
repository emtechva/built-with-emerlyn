const toolCategories = [
  {
    title: "Automation Platforms",
    tools: [
      { name: "n8n", icon: "assets/tools/new-logo/n8n.png", use: "Builds multi-step workflows and custom logic." },
      { name: "Zapier", icon: "assets/tools/new-logo/zapier.png", use: "Connects form, email, CRM, and notification tasks." },
      { name: "Make.com", icon: "assets/tools/new-logo/makecom.svg", use: "Designs visual scenarios for routing and updates." },
      { name: "GoHighLevel", icon: "assets/tools/new-logo/ghl.jpeg", use: "Supports CRM, forms, calendars, and follow-up flows." },
      { name: "Webhook", icon: "assets/tools/new-logo/webhook.png", use: "Connects custom app events and automation triggers." },
      { name: "Systeme.io", icon: "assets/tools/new-logo/systemio.jpeg", use: "Supports funnel and marketing automation workflows." }
    ]
  },
  {
    title: "CRM and Databases",
    tools: [
      { name: "Airtable", icon: "assets/tools/new-logo/airtable.png", use: "Organizes leads, records, and project information." },
      { name: "Google Sheets", icon: "assets/tools/new-logo/sheets.png", use: "Tracks operations data and workflow logs." },
      { name: "Notion", icon: "assets/tools/new-logo/notion.png", use: "Documents systems, tasks, and project details." },
      { name: "Trello", icon: "assets/tools/new-logo/trello.png", use: "Supports task tracking workflows." }
    ]
  },
  {
    title: "Communication",
    tools: [
      { name: "Gmail", icon: "assets/tools/new-logo/gmail.png", use: "Sends confirmations, alerts, and email-based updates." },
      { name: "Slack", icon: "assets/tools/new-logo/slacks.png", use: "Notifies teams when leads or workflow events need attention." },
      { name: "Telegram", icon: "assets/tools/new-logo/telegram.png", use: "Delivers quick operational alerts to mobile teams." },
      { name: "Google Meet", icon: "assets/tools/new-logo/gmeet.png", use: "Supports client calls and workflow handover." },
      { name: "Google Calendar", icon: "assets/tools/new-logo/gcalendar.png", use: "Supports booking and schedule automation." },
      { name: "Zoom", icon: "assets/tools/new-logo/zoom.png", use: "Supports discovery calls and project meetings." }
    ]
  },
  {
    title: "AI and Productivity",
    tools: [
      { name: "ChatGPT", icon: "assets/tools/new-logo/gpt.png", use: "Assists with drafting, classification, and workflow planning." },
      { name: "Gemini", icon: "assets/tools/new-logo/gemini.png", use: "Supports AI-assisted document and message processing." },
      { name: "Claude AI", icon: "assets/tools/new-logo/caludeai.png", use: "Supports writing, analysis, and workflow planning." },
      { name: "Google Docs", icon: "assets/tools/new-logo/docs.png", use: "Supports documentation and shared process notes." },
      { name: "Google Drive", icon: "assets/tools/new-logo/gdrive.png", use: "Stores files used in automation workflows." },
      { name: "Canva", icon: "assets/tools/new-logo/canva.png", use: "Creates simple branded assets and workflow documentation." },
      { name: "Figma", icon: "assets/tools/new-logo/figma.png", use: "Supports interface planning and visual references." },
      { name: "Lovable", icon: "assets/tools/new-logo/lovable.png", use: "Supports fast app and interface prototyping." },
      { name: "VS Code", icon: "assets/tools/new-logo/vscode.png", use: "Supports website and automation code editing." },
      { name: "Vercel", icon: "assets/tools/new-logo/vercel.png", use: "Supports front-end deployment workflows." },
      { name: "Reddit", icon: "assets/tools/new-logo/reddit.png", use: "Supports community research and marketing workflows." },
      { name: "X.com", icon: "assets/tools/new-logo/xcom.jpeg", use: "Supports social monitoring and marketing workflows." }
    ]
  }
];

const projects = [
  {
    id: "smilecraft",
    title: "SmileCraft Dental Clinic",
    label: "Practice Project",
    type: "Practice Portfolio Project",
    category: "GoHighLevel Funnel & CRM Automation",
    filter: "gohighlevel",
    description: "A complete dental booking and CRM automation system covering appointment confirmation, timed reminders, status tracking, rescheduling, no-show recovery, and patient nurture follow-up.",
    tools: ["GoHighLevel", "CRM Automation", "Booking Funnel", "Email & SMS"],
    image: "assets/projects/smilecraft/dental.png",
    imageAlt: "SmileCraft Dental Clinic GoHighLevel booking and CRM automation case study",
    previewImage: "assets/projects/smilecraft/dental.png",
    previewImageAlt: "SmileCraft Dental Clinic complete GoHighLevel booking and CRM automation workflow",
    actionLabel: "View Full Case Study",
    caseStudyUrl: "https://emtechva.github.io/smilecraft-case-study/",
    caseStudyDisplay: "iframe-modal",
    problem: "Dental booking workflows need reliable appointment confirmation, reminders, CRM status updates, and follow-up paths for attended, cancelled, or no-show outcomes.",
    solution: "A GoHighLevel booking funnel and CRM workflow connects appointment booking, email and SMS reminders, internal status checks, rebooking, and patient nurture follow-up.",
    overview: "Booking confirmation moves into timed reminders, status routing, outcome-based follow-up, and long-term nurture.",
    steps: ["Confirm appointment booking", "Send timed reminders", "Route attended, cancelled, and no-show outcomes", "Trigger rebooking or recovery follow-up", "Nurture patients who need rescheduling"],
    errorHandling: "Practice portfolio project. Review trigger links, CRM stage changes, appointment status updates, and reminder timing before adapting for a live clinic.",
    value: "Shows how a dental appointment funnel can reduce manual follow-up and keep booking outcomes organized in the CRM.",
    status: "Practice portfolio project. Not presented as a real client implementation."
  },
  {
    id: "buildright",
    title: "BuildRight Construction Lead Management",
    category: "Zapier Automation",
    filter: "zapier",
    description: "A construction lead intake system that captures form submissions, stores leads in Airtable, sends client confirmations, notifies the team in Slack, and manages follow-up communication.",
    tools: ["Zapier", "Typeform", "Airtable", "Gmail", "Slack"],
    problem: "Construction inquiries can arrive through forms and require consistent storage, team alerts, and client confirmation.",
    solution: "Use Zapier to pass Typeform submissions into Airtable, send Gmail confirmations, and alert the team in Slack.",
    overview: "Form submission becomes a structured lead record with confirmation and internal visibility.",
    steps: ["Receive Typeform submission", "Add lead to Airtable", "Send confirmation email", "Notify team in Slack", "Flag lead for follow-up"],
    errorHandling: "Use required fields, duplicate matching, and notification fallbacks for failed runs.",
    value: "Keeps incoming leads organized and helps the team respond with less manual copying.",
    status: "Practice or portfolio project. Final project status still needs confirmation."
  },
  {
    id: "email-routing",
    title: "AI Email Classification and Routing",
    category: "Make.com and Gemini AI",
    filter: "make",
    description: "An AI-assisted email workflow that reads incoming messages, identifies their purpose, routes them to the appropriate team or folder, logs the activity, and sends internal alerts.",
    tools: ["Make.com", "Gemini AI", "Gmail", "Slack", "Google Sheets"],
    problem: "Incoming messages can require sorting, routing, logging, and internal alerts.",
    solution: "Use Make.com with Gemini AI to classify messages, route them, log activity, and send team alerts.",
    overview: "Email content is classified, routed, recorded, and escalated when needed.",
    steps: ["Watch incoming Gmail messages", "Classify purpose with AI", "Route to folder or team", "Log activity in Google Sheets", "Send Slack alert"],
    errorHandling: "Include fallback category labels, manual review for low-confidence messages, and logging for failed AI calls.",
    value: "Helps teams triage messages with a clearer record of what happened.",
    status: "Practice or portfolio project. Final project status still needs confirmation."
  },
  {
    id: "construction-automation",
    title: "Construction Estimation and Resource Management",
    category: "n8n Automation",
    filter: "n8n",
    description: "A document-processing and resource allocation workflow that organizes project files, extracts information with AI, updates project records, and checks staff availability.",
    tools: ["n8n", "Google Drive", "Google Sheets", "Gemini AI"],
    problem: "Project documents and resource information can be scattered across files, sheets, and team availability records.",
    solution: "Use n8n to organize files, extract relevant information with AI, update project records, and check availability.",
    overview: "Documents move from upload to extraction, record update, and resource review.",
    steps: ["Watch Google Drive folder", "Extract document information", "Update Google Sheets records", "Check staff availability", "Flag missing information"],
    errorHandling: "Add file type checks, missing data alerts, and manual review when AI extraction is uncertain.",
    value: "Supports more organized estimation and resource coordination without claiming measured outcomes.",
    status: "Practice or portfolio project. Final project status still needs confirmation."
  }
];

const testimonials = [
  {
    image: "assets/testimonials/redditfeedback-upwork.png",
    alt: "Upwork feedback proof for Reddit and Discord Marketing Specialist work"
  },
  {
    image: "assets/testimonials/web3feedback-upwork.png",
    alt: "Upwork feedback proof for Web3 content manager and moderator work"
  }
];

const state = {
  activeFilter: "all"
};

const byId = (id) => document.getElementById(id);
const THEME_STORAGE_KEY = "built-with-emerlyn-theme";
const SPLASH_STORAGE_KEY = "built-with-emerlyn-splash-seen";
let lastProjectTrigger = null;
let caseStudyFallbackTimer = null;
let lastPreviewTrigger = null;

function sanitize(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function renderTools() {
  const rail = byId("toolRail");
  const allTools = [...new Map(
    toolCategories
      .flatMap((group) => group.tools)
      .map((tool) => [tool.name, tool])
  ).values()];
  const logoSet = [...allTools, ...allTools];
  rail.innerHTML = `
    <div class="tool-track" aria-label="Tool logos">
      ${logoSet.map((tool) => `
        <div class="tool-logo" title="${sanitize(tool.name)}" aria-label="${sanitize(tool.name)}">
          ${tool.icon ? `<img src="${sanitize(tool.icon)}" alt="${sanitize(tool.name)} logo" loading="lazy" width="600" height="600">` : `<span class="tool-icon-placeholder" aria-hidden="true">${sanitize(tool.name.charAt(0))}</span>`}
          <span>${sanitize(tool.name)}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function renderProjects() {
  const grid = byId("projectGrid");
  const filtered = state.activeFilter === "all"
    ? projects
    : projects.filter((project) => project.filter === state.activeFilter);

  const railProjects = [...filtered, ...filtered];
  grid.innerHTML = `
    <div class="project-track">
      ${railProjects.map((project) => `
        <article class="project-card reveal" data-project-card data-project-id="${sanitize(project.id)}" tabindex="0" role="button" aria-label="Open ${sanitize(project.title)} case study">
          <div class="project-preview">
            ${project.image ? `<img src="${sanitize(project.image)}" alt="${sanitize(project.imageAlt || `${project.title} preview`)}" loading="lazy" width="1920" height="1080">` : `<span>${sanitize(project.category)}</span>`}
          </div>
          <div class="category-pill">${sanitize(project.label || project.category)}</div>
          <h3>${sanitize(project.title)}</h3>
          <p>${sanitize(project.description)}</p>
          <div class="project-tools">
            ${project.tools.slice(0, 4).map((tool) => `<span class="project-tool">${sanitize(tool)}</span>`).join("")}
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderTestimonials() {
  const railTestimonials = [...testimonials, ...testimonials];
  byId("testimonialList").innerHTML = `
    <div class="testimonial-track">
      ${railTestimonials.map((item) => `
        <article class="testimonial-card proof-card">
          <img class="testimonial-proof-image" src="${sanitize(item.image)}" alt="${sanitize(item.alt)}" loading="lazy">
        </article>
      `).join("")}
    </div>
  `;
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  const toggle = document.querySelector("[data-theme-toggle]");
  if (toggle) {
    toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  }
}

function initTheme() {
  const toggle = document.querySelector("[data-theme-toggle]");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(current === "dark" ? "light" : "dark");
  });
  setTheme(document.documentElement.dataset.theme || "dark");
}

function initSplash() {
  const splash = document.querySelector("[data-splash]");
  if (!splash) return;

  const skipButton = document.querySelector("[data-splash-skip]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let completed = false;
  let dismissTimer;

  function storageGet(key) {
    try {
      return sessionStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function storageSet(key, value) {
    try {
      sessionStorage.setItem(key, value);
    } catch (error) {
      return;
    }
  }

  function finishSplash(shouldFocusMain = true) {
    if (completed) return;
    completed = true;
    window.clearTimeout(dismissTimer);
    storageSet(SPLASH_STORAGE_KEY, "true");
    splash.classList.add("is-dismissing");
    splash.classList.remove("is-active");
    splash.setAttribute("aria-hidden", "true");
    document.body.classList.remove("splash-lock");

    window.setTimeout(() => {
      splash.classList.remove("is-dismissing");
      if (shouldFocusMain) {
        const main = byId("main");
        if (main) {
          main.setAttribute("tabindex", "-1");
          main.focus({ preventScroll: true });
        }
      }
    }, reduceMotion ? 90 : 280);
  }

  if (storageGet(SPLASH_STORAGE_KEY) === "true") {
    splash.setAttribute("aria-hidden", "true");
    return;
  }

  document.documentElement.classList.add("splash-ready");
  splash.classList.add("is-active");
  splash.setAttribute("aria-hidden", "false");
  document.body.classList.add("splash-lock");

  dismissTimer = window.setTimeout(() => finishSplash(true), reduceMotion ? 380 : 3000);

  if (skipButton) {
    skipButton.addEventListener("click", () => finishSplash(true));
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      finishSplash(true);
    }
  }, { once: true });
}

function initNavigation() {
  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMenu = document.querySelector("[data-nav-menu]");
  const links = [...document.querySelectorAll(".nav-menu a")];
  const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

  function closeMenu() {
    if (!navMenu || !navToggle) return;
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
    document.body.classList.remove("nav-open");
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
      document.body.classList.toggle("nav-open", isOpen);
    });
  }

  links.forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const lightbox = byId("projectModal")?.querySelector("[data-case-study-lightbox]");
      if (lightbox && !lightbox.hidden) {
        closePreviewLightbox();
        return;
      }
      closeMenu();
      closeModal();
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: "-42% 0px -48% 0px" });

  sections.forEach((section) => observer.observe(section));

  const headerObserver = new IntersectionObserver((entries) => {
    header.classList.toggle("is-scrolled", !entries[0].isIntersecting);
  });

  const sentinel = document.createElement("span");
  sentinel.setAttribute("aria-hidden", "true");
  document.body.prepend(sentinel);
  headerObserver.observe(sentinel);
}

function initFilters() {
  const buttons = [...document.querySelectorAll("[data-filter]")];
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      state.activeFilter = button.dataset.filter;
      buttons.forEach((item) => item.classList.toggle("is-active", item === button));
      renderProjects();
      observeReveals();
    });
  });
}

function openModal(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  const modal = byId("projectModal");
  const modalContent = byId("modalContent");
  const modalCard = modal.querySelector(".modal-card");
  const closeButton = modal.querySelector("[data-close-modal]");
  const titleId = project.caseStudyDisplay === "iframe-modal" ? "smilecraft-modal-title" : "modalTitle";
  window.clearTimeout(caseStudyFallbackTimer);

  modalCard.classList.toggle("case-study-modal-card", project.caseStudyDisplay === "iframe-modal");
  modalCard.setAttribute("aria-labelledby", titleId);

  if (closeButton) {
    closeButton.setAttribute("aria-label", project.caseStudyDisplay === "iframe-modal" ? `Close ${project.title} case study` : "Close case study");
  }

  if (project.caseStudyDisplay === "iframe-modal" && project.caseStudyUrl) {
    modalContent.innerHTML = `
      <div class="case-study-viewer">
        <header class="case-study-modal-header">
          <div>
            <span class="case-study-modal-badge">${sanitize(project.type || "Practice Portfolio Project")}</span>
            <h2 id="${titleId}">${sanitize(project.title)}</h2>
            <p>${sanitize(project.category)}</p>
          </div>
        </header>
        <div class="case-study-tabs" role="tablist" aria-label="SmileCraft case study sections">
          <button class="case-study-tab is-active" type="button" role="tab" aria-selected="true" aria-controls="smilecraft-overview-panel">
            Overview
          </button>
        </div>
        <div class="case-study-overview" id="smilecraft-overview-panel" data-case-study-overview role="tabpanel" aria-label="Overview">
          <figure class="case-study-preview">
            <button
              type="button"
              class="case-study-preview-trigger"
              data-preview-lightbox
              data-preview-src="${sanitize(project.previewImage || project.image)}"
              data-preview-alt="${sanitize(project.previewImageAlt || project.imageAlt || `${project.title} workflow preview`)}"
              aria-label="Open SmileCraft workflow preview in full screen">
              <img
                src="${sanitize(project.previewImage || project.image)}"
                alt="${sanitize(project.previewImageAlt || project.imageAlt || `${project.title} workflow preview`)}"
                loading="eager">
            </button>
            <figcaption>Complete booking, reminder, appointment outcome, recovery, and nurture automation overview.</figcaption>
          </figure>

          <div class="case-study-overview-stack">
            ${[
              ["Project Overview", project.description],
              ["Project Snapshot", `${project.type || "Practice Portfolio Project"} using ${project.category}.`],
              ["Problem and Solution", `${project.problem} ${project.solution}`],
              ["What the System Automates", "Booking confirmation, timed reminders, CRM stage updates, internal status checks, rebooking, no-show recovery, and patient nurture follow-up."],
              ["How It Works", project.overview],
              ["Appointment Outcome Paths", "Attended appointments move toward completion, cancelled appointments enter rescheduling, and no-shows trigger recovery and rebooking follow-up."],
              ["Tools Used", project.tools.join(", ")],
              ["My Contribution", "Mapped the workflow logic, designed the CRM stages, planned the reminder sequence, and structured the outcome-based follow-up paths."],
              ["Designed Business Value", project.value],
              ["Practice Project Disclosure", project.status]
            ].map(([title, content]) => `
              <section class="modal-section">
                <h3>${sanitize(title)}</h3>
                <p>${sanitize(content)}</p>
              </section>
            `).join("")}
          </div>

          <button class="button button-primary case-study-full-button" type="button" data-open-full-case-study>
            View Full Case Study
          </button>
        </div>
        <div class="case-study-modal-content" data-case-study-frame-panel hidden>
          <button class="case-study-back" type="button" data-back-to-overview>Back to overview</button>
          <div class="case-study-loader" data-case-study-loader hidden>
            <span class="case-study-spinner" aria-hidden="true"></span>
            <p>Loading full case study...</p>
          </div>
          <div class="case-study-fallback" data-case-study-fallback hidden>
            <p>The full case study could not be displayed inside the portfolio viewer.</p>
            <a class="button button-primary" href="${sanitize(project.caseStudyUrl)}" target="_blank" rel="noopener noreferrer">Open Full Case Study</a>
          </div>
          <iframe
            data-src="${sanitize(project.caseStudyUrl)}"
            title="${sanitize(project.title)} full case study"
            loading="lazy"
            allow="fullscreen"
            referrerpolicy="strict-origin-when-cross-origin"
            data-case-study-frame></iframe>
        </div>
        <div class="case-study-lightbox" data-case-study-lightbox hidden>
          <button class="case-study-lightbox-close" type="button" data-close-lightbox aria-label="Close workflow preview">Close</button>
          <img src="" alt="" data-lightbox-image>
        </div>
      </div>
    `;

    const loader = modalContent.querySelector("[data-case-study-loader]");
    const fallback = modalContent.querySelector("[data-case-study-fallback]");
    const frame = modalContent.querySelector("[data-case-study-frame]");

    function showFallback() {
      if (loader) loader.hidden = true;
      if (fallback) fallback.hidden = false;
    }

    if (frame) {
      frame.addEventListener("load", () => {
        window.clearTimeout(caseStudyFallbackTimer);
        if (loader) loader.hidden = true;
        if (fallback) fallback.hidden = true;
      }, { once: true });
      frame.addEventListener("error", showFallback, { once: true });
    }
  } else {
  modalContent.innerHTML = `
    <div class="modal-content">
      <div>
        <div class="category-pill">${sanitize(project.category)}</div>
        <h2 id="${titleId}">${sanitize(project.title)}</h2>
      </div>
      <p>${sanitize(project.description)}</p>
      ${[
        ["Business problem", project.problem],
        ["Proposed solution", project.solution],
        ["Workflow overview", project.overview],
        ["Tools and integrations", project.tools.join(", ")],
        ["Error handling", project.errorHandling],
        ["Business value", project.value],
        ["Project status", project.status],
        ["Screenshots", "Screenshot assets have not been added yet."]
      ].map(([title, content]) => `
        <section class="modal-section">
          <h3>${sanitize(title)}</h3>
          <p>${sanitize(content)}</p>
        </section>
      `).join("")}
      <section class="modal-section">
        <h3>Main automation steps</h3>
        <ol>
          ${project.steps.map((step) => `<li>${sanitize(step)}</li>`).join("")}
        </ol>
      </section>
    </div>
  `;
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  if (closeButton) {
    closeButton.focus({ preventScroll: true });
  } else {
    modalCard.focus({ preventScroll: true });
  }
}

function closeModal() {
  const modal = byId("projectModal");
  if (!modal || !modal.classList.contains("is-open")) return;
  const modalContent = byId("modalContent");
  const modalCard = modal.querySelector(".modal-card");
  window.clearTimeout(caseStudyFallbackTimer);
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (modalCard) {
    modalCard.classList.remove("case-study-modal-card");
    modalCard.setAttribute("aria-labelledby", "modalTitle");
  }
  if (modalContent) {
    modalContent.innerHTML = "";
  }
  if (lastProjectTrigger && typeof lastProjectTrigger.focus === "function") {
    lastProjectTrigger.focus({ preventScroll: true });
  }
  lastProjectTrigger = null;
}

function openPreviewLightbox(trigger) {
  const modal = byId("projectModal");
  const lightbox = modal?.querySelector("[data-case-study-lightbox]");
  const image = lightbox?.querySelector("[data-lightbox-image]");
  if (!lightbox || !image) return;

  lastPreviewTrigger = trigger;
  image.src = trigger.dataset.previewSrc || "";
  image.alt = trigger.dataset.previewAlt || "";
  lightbox.hidden = false;
  lightbox.classList.add("is-open");
  document.body.classList.add("modal-open");
  const closeButton = lightbox.querySelector("[data-close-lightbox]");
  if (closeButton) closeButton.focus({ preventScroll: true });
}

function closePreviewLightbox() {
  const modal = byId("projectModal");
  const lightbox = modal?.querySelector("[data-case-study-lightbox]");
  const image = lightbox?.querySelector("[data-lightbox-image]");
  if (!lightbox || lightbox.hidden) return;

  lightbox.hidden = true;
  lightbox.classList.remove("is-open");
  if (image) {
    image.removeAttribute("src");
    image.alt = "";
  }
  if (lastPreviewTrigger && typeof lastPreviewTrigger.focus === "function") {
    lastPreviewTrigger.focus({ preventScroll: true });
  }
  lastPreviewTrigger = null;
}

function showFullCaseStudy() {
  const modal = byId("projectModal");
  const overview = modal?.querySelector("[data-case-study-overview]");
  const panel = modal?.querySelector("[data-case-study-frame-panel]");
  const frame = modal?.querySelector("[data-case-study-frame]");
  const loader = modal?.querySelector("[data-case-study-loader]");
  const fallback = modal?.querySelector("[data-case-study-fallback]");
  if (!overview || !panel || !frame) return;

  overview.hidden = true;
  panel.hidden = false;
  if (fallback) fallback.hidden = true;

  if (!frame.getAttribute("src")) {
    if (loader) loader.hidden = false;
    frame.setAttribute("src", frame.dataset.src || "");
    window.clearTimeout(caseStudyFallbackTimer);
    caseStudyFallbackTimer = window.setTimeout(() => {
      if (loader) loader.hidden = true;
      if (fallback) fallback.hidden = false;
    }, 18000);
  } else if (loader) {
    loader.hidden = true;
  }

  const backButton = panel.querySelector("[data-back-to-overview]");
  if (backButton) backButton.focus({ preventScroll: true });
}

function showCaseStudyOverview() {
  const modal = byId("projectModal");
  const overview = modal?.querySelector("[data-case-study-overview]");
  const panel = modal?.querySelector("[data-case-study-frame-panel]");
  if (!overview || !panel) return;

  panel.hidden = true;
  overview.hidden = false;
  const trigger = overview.querySelector("[data-open-full-case-study]");
  if (trigger) trigger.focus({ preventScroll: true });
}

function initProjectModal() {
  document.addEventListener("click", (event) => {
    const previewTrigger = event.target.closest("[data-preview-lightbox]");
    if (previewTrigger) {
      openPreviewLightbox(previewTrigger);
      return;
    }

    if (event.target.closest("[data-close-lightbox]")) {
      closePreviewLightbox();
      return;
    }

    const lightbox = event.target.closest("[data-case-study-lightbox]");
    if (lightbox && event.target === lightbox) {
      closePreviewLightbox();
      return;
    }

    if (event.target.closest("[data-open-full-case-study]")) {
      showFullCaseStudy();
      return;
    }

    if (event.target.closest("[data-back-to-overview]")) {
      showCaseStudyOverview();
      return;
    }

    const trigger = event.target.closest("[data-project-card]");
    if (trigger) {
      lastProjectTrigger = trigger;
      openModal(trigger.dataset.projectId);
    }
    if (event.target.closest("[data-close-modal]")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const modal = byId("projectModal");
      const lightbox = modal?.querySelector("[data-case-study-lightbox]");
      if (lightbox && !lightbox.hidden) {
        event.preventDefault();
        closePreviewLightbox();
        return;
      }
    }

    const modal = byId("projectModal");
    const lightbox = modal?.querySelector("[data-case-study-lightbox]");
    if (lightbox && !lightbox.hidden && event.key === "Tab") {
      const focusable = [...lightbox.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')]
        .filter((element) => !element.hasAttribute("hidden") && element.offsetParent !== null);
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
      return;
    }

    if (modal && modal.classList.contains("is-open") && event.key === "Tab") {
      const focusable = [...modal.querySelectorAll('a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])')]
        .filter((element) => !element.hasAttribute("hidden") && element.offsetParent !== null);
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
      return;
    }

    const trigger = event.target.closest("[data-project-card]");
    if (trigger && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      lastProjectTrigger = trigger;
      openModal(trigger.dataset.projectId);
    }
  });
}

function initCalendlyPopup() {
  const triggers = [...document.querySelectorAll("[data-calendly-popup]")];
  let loadingScript = null;

  function loadCalendlyScript() {
    if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
      return Promise.resolve();
    }

    if (loadingScript) return loadingScript;

    loadingScript = new Promise((resolve, reject) => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');

      if (existingScript) {
        existingScript.addEventListener("load", resolve, { once: true });
        existingScript.addEventListener("error", reject, { once: true });
        setTimeout(resolve, 1600);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.addEventListener("load", resolve, { once: true });
      script.addEventListener("error", reject, { once: true });
      document.head.appendChild(script);
    });

    return loadingScript;
  }

  function openFallback(url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", async (event) => {
      const url = trigger.getAttribute("href");
      if (!url) return;

      event.preventDefault();
      trigger.setAttribute("aria-busy", "true");

      try {
        await loadCalendlyScript();
        if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
          window.Calendly.initPopupWidget({ url });
          return;
        }
        openFallback(url);
      } catch (error) {
        openFallback(url);
      } finally {
        trigger.removeAttribute("aria-busy");
      }
    });
  });
}

let revealObserver;

function observeReveals() {
  const elements = [...document.querySelectorAll(".reveal:not(.is-visible)")];
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
  }

  elements.forEach((element) => revealObserver.observe(element));
}

function initBackToTop() {
  const button = document.querySelector("[data-back-to-top]");
  if (!button) return;
  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initSectionPointerEffects() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const sections = [...document.querySelectorAll(".section")];
  const idleTimers = new WeakMap();

  sections.forEach((section) => {
    section.addEventListener("pointermove", (event) => {
      const rect = section.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      section.style.setProperty("--pointer-x", `${x.toFixed(2)}%`);
      section.style.setProperty("--pointer-y", `${y.toFixed(2)}%`);
      section.style.setProperty("--pointer-alpha", "1");

      clearTimeout(idleTimers.get(section));
      idleTimers.set(section, setTimeout(() => {
        section.style.setProperty("--pointer-alpha", "0");
      }, 650));
    });

    section.addEventListener("pointerleave", () => {
      clearTimeout(idleTimers.get(section));
      section.style.setProperty("--pointer-alpha", "0");
    });
  });
}

function initServicesCarousel() {
  const carousel = document.querySelector("[data-service-carousel]");
  if (!carousel) return;

  const slides = [...carousel.querySelectorAll("[data-service-slide]")];
  const prevButton = carousel.querySelector("[data-service-prev]");
  const nextButton = carousel.querySelector("[data-service-next]");
  const dotsContainer = carousel.querySelector("[data-service-dots]");
  const count = carousel.querySelector("[data-service-count]");
  if (!slides.length || !prevButton || !nextButton || !dotsContainer || !count) return;

  let activeIndex = Math.max(0, slides.findIndex((slide) => slide.getAttribute("aria-selected") === "true"));
  let touchStartX = 0;
  let touchStartY = 0;

  dotsContainer.innerHTML = slides.map((slide, index) => `
    <button class="service-dot" type="button" data-service-dot="${index}" aria-label="Show ${sanitize(slide.querySelector("h3")?.textContent || `service ${index + 1}`)}"></button>
  `).join("");

  const dots = [...dotsContainer.querySelectorAll("[data-service-dot]")];

  function getOffset(index) {
    let offset = index - activeIndex;
    const midpoint = slides.length / 2;
    if (offset > midpoint) offset -= slides.length;
    if (offset < -midpoint) offset += slides.length;
    return offset;
  }

  function setActive(nextIndex, shouldFocus = false) {
    activeIndex = (nextIndex + slides.length) % slides.length;

    slides.forEach((slide, index) => {
      const offset = getOffset(index);
      const isActive = index === activeIndex;
      const positionClasses = ["is-active", "is-featured", "is-prev", "is-next", "is-far-prev", "is-far-next"];

      slide.dataset.offset = String(offset);
      slide.classList.remove(...positionClasses);

      if (isActive) {
        slide.classList.add("is-active", "is-featured");
      } else if (offset === -1) {
        slide.classList.add("is-prev");
      } else if (offset === 1) {
        slide.classList.add("is-next");
      } else if (offset === -2) {
        slide.classList.add("is-far-prev");
      } else if (offset === 2) {
        slide.classList.add("is-far-next");
      }

      slide.setAttribute("aria-selected", String(isActive));
      slide.setAttribute("tabindex", Math.abs(offset) <= 2 ? "0" : "-1");
    });

    dots.forEach((dot, index) => {
      const isActive = index === activeIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });

    count.textContent = `Service ${activeIndex + 1} of ${slides.length}`;

    if (shouldFocus) {
      slides[activeIndex].focus({ preventScroll: true });
    }
  }

  slides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
      if (index !== activeIndex) {
        setActive(index, true);
      }
    });

    slide.addEventListener("keydown", (event) => {
      if ((event.key === "Enter" || event.key === " ") && index !== activeIndex) {
        event.preventDefault();
        setActive(index, true);
      }
    });
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      setActive(Number(dot.dataset.serviceDot), true);
    });
  });

  prevButton.addEventListener("click", () => setActive(activeIndex - 1));
  nextButton.addEventListener("click", () => setActive(activeIndex + 1));

  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setActive(activeIndex - 1, true);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setActive(activeIndex + 1, true);
    }
    if (event.key === "Home") {
      event.preventDefault();
      setActive(0, true);
    }
    if (event.key === "End") {
      event.preventDefault();
      setActive(slides.length - 1, true);
    }
  });

  carousel.addEventListener("touchstart", (event) => {
    const touch = event.changedTouches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  }, { passive: true });

  carousel.addEventListener("touchend", (event) => {
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartX;
    const deltaY = touch.clientY - touchStartY;

    if (Math.abs(deltaX) > 42 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
      setActive(activeIndex + (deltaX < 0 ? 1 : -1));
    }
  }, { passive: true });

  setActive(activeIndex);
}

function init() {
  initSplash();
  renderTools();
  renderProjects();
  renderTestimonials();
  initServicesCarousel();
  initTheme();
  initNavigation();
  initFilters();
  initProjectModal();
  initCalendlyPopup();
  initBackToTop();
  initSectionPointerEffects();
  observeReveals();
  byId("year").textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", init);
