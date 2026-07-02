Act as a senior front-end developer and UI/UX designer. Build a complete, responsive portfolio website for an AI Automation Specialist.

PROJECT GOAL

Create a professional portfolio website for Emerlyn Bequio that presents her automation skills, case studies, experience, services, client feedback, and booking options.

Use the image located at:

assets/theme-reference.png

as the main visual inspiration.

Do not copy the music website or its content. Adapt its visual language into an original AI automation portfolio design.

The visual direction should include:

- Premium dark technology aesthetic
- Black and near-black backgrounds
- Electric magenta, pink, violet, and purple gradients
- Soft neon glows
- Curved or wave-inspired background graphics
- Glassmorphism cards
- Clean white typography
- Strong gradient headings
- Subtle animations and hover effects
- Professional layout suitable for Upwork clients and business owners

TECHNOLOGY

Use only:

- HTML5
- CSS3
- Vanilla JavaScript

Do not use React, Next.js, Bootstrap, Tailwind, or a build system.

Create this file structure:

portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── theme-reference.png
    ├── profile/
    ├── tools/
    ├── projects/
    ├── testimonials/
    └── resume/
        └── Emerlyn-Bequio-Resume.pdf

COLOR SYSTEM

Create reusable CSS variables for both dark and light themes.

Suggested dark theme:

--background: #050308
--surface: #0D0713
--surface-secondary: #160A20
--text-primary: #FFFFFF
--text-secondary: #B9B2C5
--pink: #FF2F92
--magenta: #E9168C
--purple: #8B5CF6
--deep-purple: #5B21B6
--border: rgba(255, 255, 255, 0.10)

Suggested light theme:

--background: #F8F6FB
--surface: #FFFFFF
--surface-secondary: #F0EAF8
--text-primary: #16101D
--text-secondary: #665D70
--border: rgba(69, 32, 92, 0.14)

Use gradients based on pink, magenta, violet, and purple.

DARK AND LIGHT MODE

Add a theme toggle in the navigation.

Requirements:

- Support dark mode and light mode
- Use the visitor’s system theme on the first visit
- Save the selected theme in localStorage
- Use a smooth transition when switching themes
- Ensure all cards, backgrounds, buttons, text, forms, and embedded booking areas remain readable in both themes
- Use accessible labels for the theme toggle

WEBSITE STRUCTURE

1. STICKY NAVIGATION

Include:

- Logo or text logo: EMTECH AUTOMATIONS
- Home
- About
- Tools
- Process
- Work
- Experience
- Feedback
- Contact
- “Book a Call” button
- Dark/light mode toggle
- Responsive mobile menu

The navigation should become slightly transparent with a backdrop blur when scrolling.

2. HERO SECTION

Create a bold hero section with:

Eyebrow text:
AI AUTOMATION SPECIALIST

Main headline:
I build automated systems that reduce manual work and help businesses operate efficiently.

Highlight important words using a pink-to-purple gradient.

Supporting paragraph:
I design practical automation systems using n8n, Zapier, Make.com, GoHighLevel, Airtable, Google Sheets, and AI tools.

Primary button:
View My Work

Secondary button:
Book a Discovery Call

Additional trust line:
Automation • CRM • Lead Management • Booking Systems • AI Workflows

Add a professional visual panel on the right side representing an automation workflow. Use connected cards or nodes such as:

Lead Captured → AI Qualification → CRM Update → Booking → Follow-Up

Use CSS and HTML for this visual. Do not require an image.

Add subtle animated neon waves, gradients, or glowing particles behind the hero. Animations must remain lightweight and must respect prefers-reduced-motion.

3. ABOUT ME

Create an About Me section with:

- Professional profile image placeholder
- Short professional introduction
- Background in virtual assistance, community support, customer service, and automation
- Explanation of how these experiences help in building practical client-focused systems
- Small information cards for:
  - Location: Philippines
  - Work setup: Remote
  - Focus: AI and Business Automation
  - Availability: Open to freelance opportunities

Add a Download Resume button linked to:

assets/resume/Emerlyn-Bequio-Resume.pdf

4. TOOLS AND PLATFORMS

Create a visually attractive tools section with categorized cards.

Automation Platforms:
- n8n
- Zapier
- Make.com
- GoHighLevel

CRM and Database:
- Airtable
- Google Sheets
- GoHighLevel CRM

Communication:
- Gmail
- Slack
- Telegram
- Discord

AI and Productivity:
- ChatGPT
- Gemini
- Google Workspace
- Canva
- Trello
- Asana

Use placeholders for tool logos inside assets/tools/.

Each tool card should include:

- Tool icon
- Tool name
- Short usage description
- Hover animation

Do not use fake proficiency percentages.

5. AUTOMATION PROCESS

Create a process section titled:

How I Build Automation Systems

Use six connected steps:

01. Discovery
Understand the business process, manual tasks, tools, and goals.

02. Process Mapping
Create a clear workflow showing triggers, actions, conditions, and outcomes.

03. System Design
Choose the correct automation platform, CRM, database, and integrations.

04. Build and Integration
Connect applications, configure actions, and create the automation logic.

05. Testing and Error Handling
Test different scenarios, validate data, prevent duplicates, and handle failed runs.

06. Documentation and Handover
Provide workflow documentation, usage instructions, and recommendations.

Display the steps as a horizontal process on desktop and a vertical timeline on mobile.

6. WORK AND CASE STUDIES

Create a featured case studies section.

Add these initial projects:

CASE STUDY 1
Title:
SmileCraft Dental Lead-to-Appointment System

Category:
GoHighLevel Automation

Description:
A lead management and appointment workflow designed to capture dental inquiries, organize contacts, support appointment scheduling, and automate follow-up communication.

Tools:
GoHighLevel, CRM, Forms, Calendar, Email Automation

CASE STUDY 2
Title:
BuildRight Construction Lead Management

Category:
Zapier Automation

Description:
A construction lead intake system that captures form submissions, stores leads in Airtable, sends client confirmations, notifies the team in Slack, and manages follow-up communication.

Tools:
Zapier, Typeform, Airtable, Gmail, Slack

CASE STUDY 3
Title:
AI Email Classification and Routing

Category:
Make.com and Gemini AI

Description:
An AI-assisted email workflow that reads incoming messages, identifies their purpose, routes them to the appropriate team or folder, logs the activity, and sends internal alerts.

Tools:
Make.com, Gemini AI, Gmail, Slack, Google Sheets

CASE STUDY 4
Title:
Construction Estimation and Resource Management

Category:
n8n Automation

Description:
A document-processing and resource allocation workflow that organizes project files, extracts information with AI, updates project records, and checks staff availability.

Tools:
n8n, Google Drive, Google Sheets, Gemini AI

Each project card must include:

- Project image placeholder
- Category badge
- Title
- Short description
- Tools used
- View Case Study button
- View Workflow button or optional external link

Add filtering buttons:

- All
- n8n
- Zapier
- Make.com
- GoHighLevel

Create a reusable project modal or expandable details panel. It should contain:

- Business problem
- Proposed solution
- Workflow overview
- Tools and integrations
- Main automation steps
- Error handling
- Business value
- Project status
- Screenshots

Do not invent client results, revenue numbers, or performance statistics.

7. WORK EXPERIENCE AND SKILLS

Create a two-column section.

Left column:
Professional experience timeline

Include editable placeholders for:

- AI Automation Specialist / Automation Builder
- Virtual Assistant
- Community Moderator
- Live Chat Customer Service Representative
- Social Media and Community Support

Each entry should show:

- Role
- Company
- Date range
- Location
- Two or three concise bullet points

Right column:
Skills grouped by category

Automation:
- Workflow design
- Trigger and action configuration
- Conditional logic
- Webhooks
- Data mapping
- Error handling
- Workflow testing
- Process documentation

CRM and Operations:
- Lead management
- Contact organization
- Appointment workflows
- Follow-up sequences
- Database management
- Internal notifications

Support and Administration:
- Customer service
- Community moderation
- Email management
- Research
- Data entry
- SOP execution

Do not add fake ratings or percentage bars.

8. CLIENT FEEDBACK

Create a testimonial section titled:

What Clients and Collaborators Say

Add three clearly marked placeholder testimonial cards.

Each card should include:

- Client image placeholder
- Client name placeholder
- Role or company placeholder
- Feedback text placeholder
- Project type

Add a small note inside the HTML comments explaining that placeholders must be replaced with authentic feedback before publishing.

Do not create fake testimonials or fake client names.

9. CONTACT AND BOOKING

Create a contact section with two columns.

Left side:

- Contact heading
- Short invitation to discuss automation needs
- Email
- Location
- Availability
- Social links
- Contact form

Contact form fields:

- Full Name
- Email
- Company
- Service Needed
- Project Description
- Preferred Contact Method

Include client-side validation and clear success/error messages.

Do not pretend the form sends data without a configured backend. Add a clearly marked code comment showing where Formspree, Web3Forms, Airtable, or a webhook endpoint can be connected.

Right side:

Create an embedded booking area inside the website.

Add tabs or buttons for:

- Calendly
- Google Calendar Appointment Schedule

Create configuration variables in script.js:

const BOOKING_CONFIG = {
    provider: "calendly",
    calendlyUrl: "PASTE_CALENDLY_URL_HERE",
    googleCalendarUrl: "PASTE_GOOGLE_CALENDAR_BOOKING_URL_HERE"
};

When the provider is Calendly, load the Calendly inline embed.

When the provider is Google Calendar, show the Google Calendar appointment scheduling page in a responsive iframe.

If no valid booking URL has been added, display a professionally designed setup message instead of a broken iframe.

The booking area must:

- Stay inside the website
- Be responsive on mobile
- Have a loading state
- Have an external “Open Booking Page” fallback link
- Clearly state the visitor’s selected timezone when available
- Remain readable in dark and light mode

10. FOOTER

Include:

- EMTECH AUTOMATIONS logo
- Short professional description
- Navigation links
- Social links
- Email address
- Copyright year generated automatically with JavaScript
- Back-to-top button

DESIGN REQUIREMENTS

- Use CSS Grid and Flexbox
- Use CSS variables throughout
- Use clamp() for responsive typography
- Use semantic HTML
- Maintain strong spacing and visual hierarchy
- Add rounded cards and glowing borders without making the design distracting
- Use glassmorphism carefully
- Add hover, reveal, and scroll animations
- Keep animations professional and lightweight
- Do not copy the layout exactly from the reference image
- Avoid excessive neon effects behind body text
- Ensure the light version looks intentionally designed, not simply color-inverted
- Make the website fully responsive at 320px, 768px, 1024px, and large desktop widths

ACCESSIBILITY

- Use sufficient color contrast
- Add visible keyboard focus states
- Add alt text placeholders for images
- Add aria-labels where required
- Make the mobile menu keyboard accessible
- Make the project modal keyboard accessible
- Allow the Escape key to close menus and modals
- Respect prefers-reduced-motion
- Use properly associated labels for form fields

SEO

Add:

- Appropriate page title
- Meta description
- Open Graph tags
- Favicon placeholder
- Semantic heading hierarchy
- Basic JSON-LD Person or ProfessionalService structured data
- Descriptive image alt text

JAVASCRIPT FEATURES

Implement:

- Dark/light theme toggle
- Mobile navigation
- Active navigation link while scrolling
- Smooth scrolling
- Case study filtering
- Project details modal
- Contact form validation
- Booking provider selection
- Booking embed fallback handling
- Current year in footer
- Back-to-top button
- Lightweight scroll reveal animations

CONTENT MANAGEMENT

Keep all major editable content easy to locate.

In script.js, create structured arrays or objects for:

- Projects
- Testimonials
- Experience
- Tool categories

Render these reusable items with JavaScript where practical.

Add comments identifying where I should replace:

- Profile photo
- Resume
- Case study screenshots
- Project URLs
- Tool icons
- Testimonials
- Email address
- Social links
- Calendly URL
- Google Calendar booking URL
- Contact form endpoint

FINAL OUTPUT

Create all required files and write complete working code.

Do not leave unfinished functions.

Do not use lorem ipsum.

Do not use fake business results or fake testimonials.

After creating the files:

1. Check for HTML, CSS, and JavaScript errors.
2. Verify that all navigation links work.
3. Verify that dark and light modes work.
4. Verify that the mobile menu works.
5. Verify that project filters and modals work.
6. Verify that the booking area shows a fallback message before a URL is configured.
7. Explain briefly how to preview the website using VS Code Live Server.
8. Explain where I should add my personal content, images, resume, case study links, and booking URL.