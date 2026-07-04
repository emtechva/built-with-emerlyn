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
    categories: ["lead-crm", "booking"],
    serviceLabel: "Lead & CRM, Booking Automation",
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
    categories: ["lead-crm", "data-reporting"],
    serviceLabel: "Lead & CRM, Data & Reporting",
    visible: false,
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
    id: "ai-agent-scheduling",
    title: "AI Agent Scheduling Setup",
    category: "Telegram Booking Assistant and Zapier AI Agent Workflow",
    categories: ["booking", "ai-workflows"],
    serviceLabel: "Booking Automation, AI Workflows",
    description: "An AI-powered appointment scheduling system that automates bookings, rescheduling, cancellations, reminders, and client communication through Telegram.",
    tools: ["Zapier AI Agent", "Telegram", "Airtable", "Google Calendar", "Gmail", "Slack"],
    image: "assets/projects/aiagent-scheduling-setup/tg-aiagent.png",
    imageAlt: "Telegram booking assistant and Zapier AI Agent scheduling workflow preview",
    previewImage: "assets/projects/aiagent-scheduling-setup/tg-aiagent.png",
    previewImageAlt: "AI Agent Scheduling Setup Telegram booking assistant workflow preview",
    previewCaption: "Telegram booking assistant connected to Zapier AI Agent, Airtable, Google Calendar, Gmail, and Slack.",
    type: "Portfolio Project",
    caseStudyDisplay: "iframe-modal",
    problem: "Manual appointment scheduling can create booking conflicts, slow client communication, and extra work for internal teams.",
    solution: "A Zapier AI Agent detects scheduling intent from Telegram, checks client and appointment records, validates details, manages Google Calendar events, and updates the team.",
    overview: "Client messages move from Telegram intent detection into availability checks, calendar actions, Airtable updates, confirmations, reminders, and internal alerts.",
    automates: "Booking intent detection, client record checks, appointment validation, calendar event creation, rescheduling, cancellation, confirmations, reminders, Airtable updates, and team alerts.",
    outcomeLabel: "Scheduling Outcome Paths",
    outcomePaths: "Booking requests create confirmed appointments, reschedule requests update existing events, cancellation requests remove or update the booking record, and unclear requests are routed for manual review.",
    contribution: "Designed the scheduling logic, mapped Telegram intent handling, structured the Zapier AI Agent flow, planned record checks, and defined calendar, Airtable, email, and Slack handoffs.",
    disclosureLabel: "Project Disclosure",
    steps: [
      "Detect booking, rescheduling, or cancellation intent in Telegram",
      "Check existing client and appointment records",
      "Validate booking details and calendar availability",
      "Create, update, or cancel Google Calendar events",
      "Send confirmations and appointment reminders",
      "Update Airtable and alert the internal team"
    ],
    errorHandling: "Use missing-detail checks, calendar conflict validation, existing-record matching, and team alerts when a scheduling request needs manual review.",
    value: "Reduced manual scheduling, prevented booking conflicts, and created a faster, more organized appointment experience for clients and staff.",
    status: "Portfolio case study. Client or production status can be updated when confirmed."
  },
  {
    id: "email-routing",
    title: "AI Email Classification and Routing",
    category: "Make.com and Gemini AI",
    categories: ["ai-workflows", "data-reporting"],
    serviceLabel: "AI Workflows, Data & Reporting",
    visible: false,
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
    categories: ["ai-workflows", "data-reporting"],
    serviceLabel: "AI Workflows, Data & Reporting",
    visible: false,
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
const ASSESSMENT_STORAGE_KEY = "built-with-emerlyn-assessment-draft";
const UTM_STORAGE_KEY = "built-with-emerlyn-utm";
const CALENDLY_URL = "https://calendly.com/emerlyn-techva/30min";
// Add a Google Apps Script, n8n, Zapier, Make, Formspree, or webhook URL here when the assessment form is ready to receive submissions.
const WORKFLOW_FORM_ENDPOINT = "";
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
  const visibleProjects = projects.filter((project) => project.visible !== false);
  const filtered = state.activeFilter === "all"
    ? visibleProjects
    : visibleProjects.filter((project) => project.categories?.includes(state.activeFilter));

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="project-empty" role="status">
        <strong>No case study in this service yet.</strong>
        <span>Community operations work can be added here when a verified project is available.</span>
      </div>
    `;
    return;
  }

  grid.innerHTML = `
    ${filtered.map((project) => `
      <article class="project-card reveal" data-project-card data-project-id="${sanitize(project.id)}" tabindex="0" role="button" aria-label="Open ${sanitize(project.title)} case study">
        <div class="project-service">
          <span>Service</span>
          <strong>${sanitize(project.serviceLabel || project.category)}</strong>
        </div>
        <div class="project-preview">
          ${project.image ? `<img src="${sanitize(project.image)}" alt="${sanitize(project.imageAlt || `${project.title} preview`)}" loading="lazy" width="1920" height="1080">` : `<span>${sanitize(project.serviceLabel || project.title)}</span>`}
        </div>
        <div class="project-card-copy">
          <h3>${sanitize(project.title)}</h3>
          <p>${sanitize(project.problem || project.description)}</p>
          <p>${sanitize(project.solution || project.overview)}</p>
          <div class="tool-tags">${project.tools.map((tool) => `<span>${sanitize(tool)}</span>`).join("")}</div>
          <span class="project-card-action">View Case Study</span>
        </div>
      </article>
    `).join("")}
  `;
}

function renderTestimonials() {
  byId("testimonialList").innerHTML = `
    ${testimonials.map((item) => `
      <article class="testimonial-card proof-card">
        <button class="testimonial-preview-button" type="button" data-testimonial-preview="${sanitize(item.image)}" data-testimonial-alt="${sanitize(item.alt)}" aria-label="Open testimonial proof image">
          <img class="testimonial-proof-image" src="${sanitize(item.image)}" alt="${sanitize(item.alt)}" loading="lazy" decoding="async">
        </button>
      </article>
    `).join("")}
  `;
}

function trackFunnelEvent(eventName, eventData = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...eventData
  });
}

function initFunnelTracking() {
  document.addEventListener("click", (event) => {
    const tracked = event.target.closest("[data-track-event]");
    if (!tracked) return;
    trackFunnelEvent(tracked.dataset.trackEvent, {
      label: tracked.textContent.trim(),
      href: tracked.getAttribute("href") || ""
    });
  });
}

function initUTMTracking() {
  const params = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
  const current = {};
  keys.forEach((key) => {
    current[key] = params.get(key) || "";
  });

  try {
    if (!sessionStorage.getItem(UTM_STORAGE_KEY) && keys.some((key) => current[key])) {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(current));
    }
  } catch (error) {
    return;
  }
}

function getStoredUTM() {
  try {
    return JSON.parse(sessionStorage.getItem(UTM_STORAGE_KEY) || "{}");
  } catch (error) {
    return {};
  }
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

  if (reduceMotion || storageGet(SPLASH_STORAGE_KEY) === "true") {
    storageSet(SPLASH_STORAGE_KEY, "true");
    splash.setAttribute("aria-hidden", "true");
    return;
  }

  document.documentElement.classList.add("splash-ready");
  splash.classList.add("is-active");
  splash.setAttribute("aria-hidden", "false");
  document.body.classList.add("splash-lock");

  dismissTimer = window.setTimeout(() => finishSplash(true), 900);

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
  function updateButtons(activeButton) {
    buttons.forEach((item) => {
      const isActive = item === activeButton;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      state.activeFilter = button.dataset.filter;
      updateButtons(button);
      renderProjects();
      initDepthTilt();
      observeReveals();
    });
  });
}

function scrollToAssessment() {
  const heading = byId("assessment-heading");
  const section = byId("workflow-assessment");
  const target = heading || section;
  if (!target) return;
  target.setAttribute("tabindex", "-1");
  target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  window.setTimeout(() => target.focus({ preventScroll: true }), 260);
}

function openModal(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  const modal = byId("projectModal");
  const modalContent = byId("modalContent");
  const modalCard = modal.querySelector(".modal-card");
  const closeButton = modal.querySelector("[data-close-modal]");
  const usesCaseStudyViewer = project.caseStudyDisplay === "iframe-modal";
  const titleId = usesCaseStudyViewer ? `${project.id}-modal-title` : "modalTitle";
  const overviewPanelId = `${project.id}-overview-panel`;
  window.clearTimeout(caseStudyFallbackTimer);

  modalCard.classList.toggle("case-study-modal-card", usesCaseStudyViewer);
  modalCard.setAttribute("aria-labelledby", titleId);

  if (closeButton) {
    closeButton.setAttribute("aria-label", usesCaseStudyViewer ? `Close ${project.title} case study` : "Close case study");
  }

  if (usesCaseStudyViewer) {
    modalContent.innerHTML = `
      <div class="case-study-viewer">
        <header class="case-study-modal-header">
          <div>
            <span class="case-study-modal-badge">${sanitize(project.type || "Practice Portfolio Project")}</span>
            <h2 id="${titleId}">${sanitize(project.title)}</h2>
            <p>${sanitize(project.category)}</p>
          </div>
        </header>
        <div class="case-study-tabs" role="tablist" aria-label="${sanitize(project.title)} case study sections">
          <button class="case-study-tab is-active" type="button" role="tab" aria-selected="true" aria-controls="${sanitize(overviewPanelId)}">
            Overview
          </button>
        </div>
        <div class="case-study-overview" id="${sanitize(overviewPanelId)}" data-case-study-overview role="tabpanel" aria-label="Overview">
          <figure class="case-study-preview">
            <button
              type="button"
              class="case-study-preview-trigger"
              data-preview-lightbox
              data-preview-src="${sanitize(project.previewImage || project.image)}"
              data-preview-alt="${sanitize(project.previewImageAlt || project.imageAlt || `${project.title} workflow preview`)}"
              aria-label="Open ${sanitize(project.title)} workflow preview in full screen">
              <img
                src="${sanitize(project.previewImage || project.image)}"
                alt="${sanitize(project.previewImageAlt || project.imageAlt || `${project.title} workflow preview`)}"
                loading="eager">
            </button>
            <figcaption>${sanitize(project.previewCaption || "Complete booking, reminder, appointment outcome, recovery, and nurture automation overview.")}</figcaption>
          </figure>

          <div class="case-study-overview-stack">
            ${[
              ["Project overview", project.description],
              ["Business problem", project.problem],
              ["Automation solution", project.solution],
              ["Workflow map", project.overview],
              ["Trigger", project.trigger || "A lead, booking request, client message or workflow status change starts the automation."],
              ["Main actions", project.steps.join(", ")],
              ["Conditions and routing", project.outcomePaths || "Requests are routed by booking status, missing information, duplicate records, cancellation, rescheduling or manual review needs."],
              ["Error handling", project.errorHandling],
              ["Tools Used", project.tools.join(", ")],
              ["System outcome", project.value],
              [project.disclosureLabel || "Project status", project.status]
            ].map(([title, content]) => `
              <section class="modal-section">
                <h3>${sanitize(title)}</h3>
                <p>${sanitize(content)}</p>
              </section>
            `).join("")}
          </div>

          ${project.caseStudyUrl ? `
            <button class="button button-primary case-study-full-button" type="button" data-open-full-case-study>
              View Full Case Study
            </button>
          ` : ""}
          <div class="modal-assessment-cta">
            <h3>Need a similar system?</h3>
            <button class="button button-primary" type="button" data-modal-assessment>Get a Free Workflow Assessment</button>
          </div>
        </div>
        ${project.caseStudyUrl ? `
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
        ` : ""}
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
        ["Project overview", project.description],
        ["Business problem", project.problem],
        ["Automation solution", project.solution],
        ["Workflow map", project.overview],
        ["Trigger", project.trigger || "A lead, booking request, client message or workflow status change starts the automation."],
        ["Main actions", project.steps.join(", ")],
        ["Conditions and routing", project.outcomePaths || "Requests are routed by workflow status, missing information, duplicate records or manual review needs."],
        ["Error handling", project.errorHandling],
        ["Tools used", project.tools.join(", ")],
        ["System outcome", project.value],
        ["Project status", project.status]
      ].map(([title, content]) => `
        <section class="modal-section">
          <h3>${sanitize(title)}</h3>
          <p>${sanitize(content)}</p>
        </section>
      `).join("")}
      <div class="modal-assessment-cta">
        <h3>Need a similar system?</h3>
        <button class="button button-primary" type="button" data-modal-assessment>Get a Free Workflow Assessment</button>
      </div>
    </div>
  `;
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  trackFunnelEvent("case_study_opened", { project: project.id, title: project.title });
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

    if (event.target.closest("[data-modal-assessment]")) {
      trackFunnelEvent("case_study_assessment_clicked");
      closeModal();
      window.setTimeout(scrollToAssessment, 80);
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
        trackFunnelEvent("calendly_opened", { url });
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

function initDepthTilt() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

  const tiltItems = [
    ...document.querySelectorAll(".portrait-ring, .about-workflow-card, .project-card, .contact-card")
  ];

  tiltItems.forEach((item) => {
    if (item.dataset.depthTiltBound === "true") return;
    item.dataset.depthTiltBound = "true";

    item.addEventListener("pointermove", (event) => {
      const rect = item.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      const maxTilt = item.classList.contains("portrait-ring") ? 5 : 3.5;

      item.style.setProperty("--tilt-x", `${(-y * maxTilt).toFixed(2)}deg`);
      item.style.setProperty("--tilt-y", `${(x * maxTilt).toFixed(2)}deg`);
    });

    item.addEventListener("pointerleave", () => {
      item.style.removeProperty("--tilt-x");
      item.style.removeProperty("--tilt-y");
    });
  });
}

function initBackToTop() {
  const button = document.querySelector("[data-back-to-top]");
  if (!button) return;
  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function getAssessmentPayload(form) {
  const data = new FormData(form);
  const utm = getStoredUTM();
  return {
    timestamp: new Date().toISOString(),
    source_page: window.location.href,
    referrer: document.referrer || "",
    utm_source: utm.utm_source || "",
    utm_medium: utm.utm_medium || "",
    utm_campaign: utm.utm_campaign || "",
    utm_content: utm.utm_content || "",
    utm_term: utm.utm_term || "",
    business_name: data.get("business_name") || "",
    business_type: data.get("business_type") || "",
    primary_bottleneck: data.get("primary_bottleneck") || "",
    process_description: data.get("process_description") || "",
    current_tools: data.getAll("current_tools"),
    weekly_volume: data.get("weekly_volume") || "",
    desired_outcome: data.get("desired_outcome") || "",
    current_delays: data.get("current_delays") || "",
    full_name: data.get("full_name") || "",
    email: data.get("email") || "",
    phone_or_telegram: data.get("phone_or_telegram") || "",
    preferred_contact_method: data.get("preferred_contact_method") || "",
    timeline: data.get("timeline") || "",
    consent: data.get("consent") === "true"
  };
}

function initAssessmentForm() {
  const form = byId("workflowAssessmentForm");
  if (!form) return;

  const steps = [...form.querySelectorAll("[data-assessment-step]")];
  const prevButton = form.querySelector("[data-assessment-prev]");
  const nextButton = form.querySelector("[data-assessment-next]");
  const submitButton = form.querySelector("[data-assessment-submit]");
  const status = byId("assessmentStatus");
  const live = byId("formLiveRegion");
  const fallback = form.querySelector("[data-assessment-fallback]");
  const stepStatus = form.querySelector("[data-step-status]");
  const progressBar = form.querySelector("[data-progress-bar]");
  let currentStep = 0;
  let started = false;
  let pending = false;

  function saveDraft() {
    try {
      localStorage.setItem(ASSESSMENT_STORAGE_KEY, JSON.stringify(getAssessmentPayload(form)));
    } catch (error) {
      return;
    }
  }

  function restoreDraft() {
    let draft;
    try {
      draft = JSON.parse(localStorage.getItem(ASSESSMENT_STORAGE_KEY) || "{}");
    } catch (error) {
      return;
    }
    Object.entries(draft).forEach(([key, value]) => {
      if (key === "current_tools" && Array.isArray(value)) {
        value.forEach((tool) => {
          const checkbox = form.querySelector(`input[name="current_tools"][value="${CSS.escape(tool)}"]`);
          if (checkbox) checkbox.checked = true;
        });
        return;
      }
      const field = form.elements[key];
      if (!field) return;
      if (field instanceof RadioNodeList) {
        const option = [...field].find((item) => item.value === value);
        if (option) option.checked = true;
      } else if (field.type === "checkbox") {
        field.checked = Boolean(value);
      } else {
        field.value = value;
      }
    });
  }

  function showStatus(message, type = "info") {
    status.textContent = message;
    status.dataset.status = type;
    if (live) live.textContent = message;
  }

  function showStep(index) {
    currentStep = Math.max(0, Math.min(index, steps.length - 1));
    steps.forEach((step, stepIndex) => {
      const isActive = stepIndex === currentStep;
      step.hidden = !isActive;
      step.classList.toggle("is-active", isActive);
    });
    prevButton.hidden = currentStep === 0;
    nextButton.hidden = currentStep === steps.length - 1;
    submitButton.hidden = currentStep !== steps.length - 1;
    if (stepStatus) stepStatus.textContent = `Step ${currentStep + 1} of ${steps.length}`;
    if (progressBar) progressBar.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
    showStatus("");
  }

  function validateStep() {
    const step = steps[currentStep];
    const requiredFields = [...step.querySelectorAll("[required]")];
    const invalid = requiredFields.find((field) => !field.checkValidity());
    const isToolsStep = step.dataset.assessmentStep === "3";

    if (isToolsStep && !form.querySelector('input[name="current_tools"]:checked')) {
      showStatus("Please choose at least one tool currently involved in the process.", "error");
      form.querySelector('input[name="current_tools"]')?.focus();
      return false;
    }

    if (invalid) {
      const label = step.querySelector(`label[for="${invalid.id}"]`);
      showStatus(`${label ? label.textContent.replace("Required", "").trim() : "This field"} is required.`, "error");
      invalid.focus();
      return false;
    }
    return true;
  }

  async function submitAssessment() {
    if (pending || !validateStep()) return;
    const payload = getAssessmentPayload(form);
    saveDraft();

    if (!WORKFLOW_FORM_ENDPOINT) {
      showStatus("The assessment form is ready, but the submission endpoint still needs to be connected. You may continue by booking a discovery call or emailing your workflow details.", "warning");
      fallback.hidden = false;
      trackFunnelEvent("assessment_submission_failed", { reason: "endpoint_not_configured" });
      return;
    }

    pending = true;
    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    try {
      const response = await fetch(WORKFLOW_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error("Submission failed");
      trackFunnelEvent("assessment_submitted");
      form.innerHTML = `
        <div class="assessment-success" role="status">
          <h3>Your workflow assessment has been received</h3>
          <p>The next step is a short discovery call where we can review your current process and identify the most practical automation starting point.</p>
          <a class="button button-primary" href="${CALENDLY_URL}" target="_blank" rel="noreferrer" data-calendly-popup>Book Your Discovery Call</a>
        </div>
      `;
      initCalendlyPopup();
    } catch (error) {
      showStatus("The assessment could not be sent. Your answers are still saved here. Please retry or email your workflow details.", "error");
      fallback.hidden = false;
      trackFunnelEvent("assessment_submission_failed", { reason: "request_failed" });
    } finally {
      pending = false;
      submitButton.disabled = false;
      submitButton.textContent = "Submit My Workflow Assessment";
    }
  }

  restoreDraft();
  form.addEventListener("input", () => {
    if (!started) {
      started = true;
      trackFunnelEvent("assessment_started");
    }
    saveDraft();
  });
  form.addEventListener("change", saveDraft);
  nextButton.addEventListener("click", () => {
    if (!validateStep()) return;
    trackFunnelEvent("assessment_step_completed", { step: currentStep + 1 });
    showStep(currentStep + 1);
  });
  prevButton.addEventListener("click", () => showStep(currentStep - 1));
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitAssessment();
  });
  form.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.target.tagName !== "TEXTAREA" && currentStep < steps.length - 1) {
      event.preventDefault();
      nextButton.click();
    }
  });
  showStep(0);
}

function initFAQ() {
  const list = document.querySelector("[data-faq-list]");
  if (!list) return;
  list.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    const panel = button.nextElementSibling;
    const isOpen = button.getAttribute("aria-expanded") === "true";
    [...list.querySelectorAll("button")].forEach((item) => {
      item.setAttribute("aria-expanded", "false");
      if (item.nextElementSibling) item.nextElementSibling.hidden = true;
    });
    button.setAttribute("aria-expanded", String(!isOpen));
    if (panel) panel.hidden = isOpen;
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
  initUTMTracking();
  initFunnelTracking();
  initSplash();
  renderTools();
  renderProjects();
  renderTestimonials();
  initTheme();
  initNavigation();
  initFilters();
  initProjectModal();
  initCalendlyPopup();
  initAssessmentForm();
  initFAQ();
  initBackToTop();
  initDepthTilt();
  observeReveals();
  byId("year").textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", init);
