/* =====================================================
   1. CONFIG: to edit...
   ===================================================== */
const CONFIG = {
  sisterName: "Me",
  gfName: "Baba",
  dateText: "October 13, 2026",

  // Final message. One string per paragraph.
  finalMessage: [
    "10/5/26<br>12:08am",
    "Hello, my love",
    "Happy 3rd Anniversary, love. Thank you for being my crying shoulder at all times, for making me feel special, and for loving me unconditionally. Sorry for the mistakes I've done, and thank you for forgiving and accepting me always. I love you so much, mahal. I hope our love last forever, because I'm at my happiest with you. Happy 3rd Anniversary, baba. I love you till the clock stops!",
    "— Lai"
  ],

  // EmailJS values.
  // it is set in the EmailJS template's "To Email" field.
  emailjs: {
    serviceId: "service_oqil0eq",
    templateId: "template_bgzjpt4",
    publicKey: "ML7s7cpQIOeVKnw4M"
  }
};

/* Escalating NO messages. The last one hides the NO button. */
const NO_MESSAGES = [
  "Are you sure? 🥺",
  "Are you REALLY sure?",
  "Baba... think about wachu doin' 😭",
  "Okay but why are you like this 😭",
  "Umiyak na lang...",
  "YES na kase 👀",
  "Last chance na baaa 💗",
  "Alisin na lang"
];

/* =====================================================
   2. QUESTIONS: add, remove or edit freely.
   id = key in state.answers, emailLabel/emoji = used in the email,
   icon = a key from ICONS below. The email updates automatically.
   ===================================================== */
const QUESTIONS = [
  { id: "dateType", title: "What kind of date do you want?", hint: "Pick the adventure.", emailLabel: "DATE TYPE", emoji: "🍽️", options: [
    { id: "food", label: "Food trip", icon: "food" },
    { id: "rooftop", label: "Rooftop date", icon: "rooftop" },
    { id: "picnic", label: "Picnic date", icon: "picnic" },
    { id: "explore", label: "Sightseeing / exploring", icon: "city" },
    { id: "surprise", label: "Surprise me", icon: "dice" } ] },
  { id: "dateVibe", title: "What kind of vibe are we going for?", hint: "Set the mood.", emailLabel: "VIBE", emoji: "💕", options: [
    { id: "romantic", label: "Romantic", icon: "heart" },
    { id: "chaotic", label: "Chaotic", icon: "laugh" },
    { id: "cozy", label: "Soft & cozy", icon: "cloud" },
    { id: "fancy", label: "Fancy", icon: "sparkle" },
    { id: "whatever", label: "Kanya kanya na", icon: "wind" } ] },
  { id: "outfit", title: "What are we wearing?", hint: "Dress code, decided by you.", emailLabel: "OUTFIT", emoji: "👗", options: [
    { id: "dressy", label: "Dressy", icon: "dress" },
    { id: "casual", label: "Casual", icon: "shirt" },
    { id: "matching", label: "Matching colors", icon: "pair" },
    { id: "comfy", label: "Comfy", icon: "shoe" },
    { id: "secret", label: "Kanya kanya na din", icon: "help" } ] },
  { id: "foodDecision", title: "Who gets to choose the food?", hint: "This one is serious.", emailLabel: "FOOD DECISION", emoji: "🤝", options: [
    { id: "sister", label: CONFIG.sisterName, icon: "person" },
    { id: "gf", label: CONFIG.gfName, icon: "person" },
    { id: "together", label: "We decide together", icon: "people" },
    { id: "hungrier", label: "Whoever is hungrier", icon: "food" } ] },
  { id: "timeOfDay", title: "What time should we start?", hint: "Last one!", emailLabel: "TIME OF DAY", emoji: "🕒", options: [
    { id: "morning", label: "Morning", icon: "sun" },
    { id: "afternoon", label: "Afternoon", icon: "sunset" },
    { id: "evening", label: "Evening", icon: "moon" } ] }
];

/* =====================================================
   3. ICONS: simple outline SVG paths (24x24), all one style
   ===================================================== */
const ICONS = {
  mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 8l9 6 9-6"/>',
  heart: '<path d="M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6-8 11-8 11z"/>',
  food: '<path d="M3 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6a2 2 0 0 0 2 2h3zm0 0v7"/>',
  rooftop: '<path d="M3 21h18M5 21V10h14v11M4.5 8h15M7 8v2M12 8v2M17 8v2M12 2.5v3M10.5 4h3M9 14h.01M15 14h.01M9 18h.01M15 18h.01"/>',
  picnic: '<path d="M3 11h18l-2 9H5zM7 11a5 5 0 0 1 10 0M9 15v2M12 15v2M15 15v2"/>',
  city: '<path d="M3 21h18M5 21V9l5-3v15M10 21V4l9 5v12M13 12h3M13 16h3"/>',
  dice: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1"/><circle cx="16" cy="8" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="8" cy="16" r="1"/><circle cx="16" cy="16" r="1"/>',
  laugh: '<circle cx="12" cy="12" r="10"/><path d="M8 13a4 4 0 0 0 8 0zM9 9h.01M15 9h.01"/>',
  cloud: '<path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.8A6 6 0 0 0 4.6 12 3.5 3.5 0 0 0 6.5 19z"/>',
  sparkle: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  wind: '<path d="M3 8h10a3 3 0 1 0-3-3M3 12h14a3 3 0 1 1-3 3M3 16h7"/>',
  dress: '<path d="M9 2h6l-1 6 5 14H5l5-14z"/>',
  shirt: '<path d="M8 3L3 6l2 4 3-1v12h8V9l3 1 2-4-5-3a4 4 0 0 1-8 0z"/>',
  pair: '<circle cx="9" cy="12" r="6"/><circle cx="15" cy="12" r="6"/>',
  shoe: '<path d="M2 17v-3l4-1 3-4 2 2 3 1c3 1 7 2 8 5v2H2zM2 20h20"/>',
  help: '<circle cx="12" cy="12" r="10"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7M12 17h.01"/>',
  person: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  people: '<circle cx="9" cy="8" r="3.5"/><circle cx="17" cy="9" r="2.5"/><path d="M2 20a7 7 0 0 1 14 0M16 14a5 5 0 0 1 6 5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/>',
  sunset: '<path d="M17 18a5 5 0 0 0-10 0M12 9V3M4 18H2M22 18h-2M3 22h18M5.6 11.6l1.4 1.4M18.4 11.6L17 13"/>',
  moon: '<path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z"/>'
};
const icon = (name, cls = "") => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* =====================================================
   4. STATE: everything that must survive between screens
   ===================================================== */
const state = { noCount: 0, step: 0, answers: {}, isSending: false, hasSent: false };

/* =====================================================
   5. SCREEN NAVIGATION (no page reloads)
   ===================================================== */
function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.toggle("active", s.id === id));
  window.scrollTo(0, 0);
  const h = document.querySelector(`#${id} h1, #${id} h2`);
  if (h) { h.tabIndex = -1; h.focus({ preventScroll: true }); } // helps screen readers
}
document.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", () => show(b.dataset.go)));

/* Fill in names, date, icons and the final message */
function fillText() {
  document.querySelectorAll("[data-name=sister]").forEach(e => e.textContent = CONFIG.sisterName);
  document.querySelectorAll("[data-name=gf]").forEach(e => e.textContent = CONFIG.gfName);
  document.querySelectorAll("[data-date]").forEach(e => e.textContent = CONFIG.dateText);
  document.querySelectorAll("[data-icon]").forEach(e => e.innerHTML = icon(e.dataset.icon));
  $("letterText").innerHTML = CONFIG.finalMessage.map(p => `<p>${esc(p)}</p>`).join("");
}

/* Floating hearts: a few light elements, drifting up slowly */
function makeHearts() {
  const colors = ["--sky-deep", "--pink-deep", "--sky-deep", "--purple-deep"];
  for (let i = 0; i < 10; i++) {
    const h = document.createElement("span");
    h.innerHTML = icon("heart");
    h.style.cssText = `left:${Math.random() * 95}%;width:${18 + Math.random() * 22}px;color:var(${colors[i % 4]});animation-duration:${14 + Math.random() * 10}s;animation-delay:${-Math.random() * 20}s`;
    $("hearts").appendChild(h);
  }
  // twinkling sparkles (mostly blue)
  for (let i = 0; i < 12; i++) {
    const sp = document.createElement("span");
    sp.className = "sp";
    sp.innerHTML = icon("sparkle");
    sp.style.cssText = `left:${Math.random() * 95}%;top:${Math.random() * 95}%;width:${14 + Math.random() * 14}px;color:var(${colors[i % 4]});animation-delay:${Math.random() * 3}s`;
    $("hearts").appendChild(sp);
  }
}

/* =====================================================
   6. OPENING + THE YES / NO SCREEN
   NO never moves. Each NO tap: new message, YES grows, NO shrinks.
   ===================================================== */
const root = document.documentElement;
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Opening: the envelope opens
$("openBtn").addEventListener("click", () => {
  $("openBtn").disabled = true;
  $("s-open").classList.add("opened"); // CSS animates the envelope
  setTimeout(() => show("s-invite"), reduced ? 0 : 750);
});

function resetInvite() {
  state.noCount = 0;
  $("noMsg").innerHTML = "&nbsp;";
  $("noBtn").hidden = false;
  $("yesBtn").classList.remove("mega");
  root.style.setProperty("--yes", 1);
  root.style.setProperty("--no", 1);
}
$("noBtn").addEventListener("click", () => {
  const n = ++state.noCount;
  $("noMsg").textContent = NO_MESSAGES[Math.min(n, NO_MESSAGES.length) - 1];
  if (n < NO_MESSAGES.length) {
    // YES grows, NO shrinks. Both stay on one row, so the growth is capped to fit small phones.
    root.style.setProperty("--yes", 1 + n * 0.09);
    root.style.setProperty("--no", Math.max(1 - n * 0.045, 0.68));
  } else {
    // Final tap: NO disappears completely and YES becomes the big, only option
    root.style.setProperty("--yes", 2);
    $("noBtn").hidden = true;
    $("yesBtn").classList.add("mega");
  }
});
$("resetBtn").addEventListener("click", resetInvite);

/* =====================================================
   7. CELEBRATION: confetti + a burst of hearts (kept light)
   ===================================================== */
function confetti(count = 70) {
  const css = getComputedStyle(root);
  const cols = ["--sky", "--pink", "--purple", "--sky-deep", "--pink-deep"].map(v => css.getPropertyValue(v).trim());
  for (let i = 0; i < count; i++) {
    const p = document.createElement("i");
    p.style.cssText = `left:${Math.random() * 100}%;background:${cols[i % cols.length]};border-radius:${i % 3 ? "3px" : "50%"};animation-delay:${Math.random() * 0.6}s;animation-duration:${2 + Math.random() * 1.5}s`;
    $("confetti").appendChild(p);
  }
}
function heartBurst() {
  const cols = ["--pink-deep", "--sky-deep", "--purple-deep"];
  for (let i = 0; i < 14; i++) {
    const h = document.createElement("span");
    h.className = "hb";
    h.innerHTML = icon("heart");
    h.style.cssText = `color:var(--${cols[i % 3].slice(2)});--dx:${(Math.random() - 0.5) * 320}px;--dy:${-(100 + Math.random() * 260)}px;--r:${(Math.random() - 0.5) * 60}deg`;
    $("confetti").appendChild(h);
  }
}
function celebrate() {
  confetti(); heartBurst();
  setTimeout(() => $("confetti").innerHTML = "", 4500);
}
$("yesBtn").addEventListener("click", () => { celebrate(); show("s-yes"); });
$("planBtn").addEventListener("click", () => { state.step = 0; renderQuestion(); show("s-plan"); });

/* =====================================================
   8. PLANNER: one question per screen, cards built from QUESTIONS.
   Answers stay in state.answers, so Back/Next never loses a choice.
   ===================================================== */
const pad = n => String(n).padStart(2, "0");
const chosen = q => q.options.find(o => o.id === state.answers[q.id]);

function renderQuestion() {
  const q = QUESTIONS[state.step];
  $("progress").textContent = `${pad(state.step + 1)} / ${pad(QUESTIONS.length)}`;
  $("segs").innerHTML = QUESTIONS.map((_, i) => `<i class="${i <= state.step ? "on" : ""}"></i>`).join("");
  $("qTitle").textContent = q.title;
  $("qHint").textContent = q.hint || "";
  $("options").innerHTML = "";
  q.options.forEach((o, idx) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "opt";
    b.style.setProperty("--i", idx); // staggers the entrance
    b.setAttribute("aria-pressed", state.answers[q.id] === o.id);
    b.innerHTML = `${icon(o.icon, "ico")}<span>${esc(o.label)}</span><span class="check" aria-hidden="true">✓</span>`;
    b.addEventListener("click", () => {
      state.answers[q.id] = o.id; // remember the choice
      [...$("options").children].forEach(c => c.setAttribute("aria-pressed", c === b));
      $("nextBtn").disabled = false;
    });
    $("options").appendChild(b);
  });
  $("nextBtn").disabled = !state.answers[q.id];
  $("nextBtn").textContent = state.step === QUESTIONS.length - 1 ? "Seal the date →" : "Next →";
  const w = $("qWrap"); w.classList.remove("swap"); void w.offsetWidth; w.classList.add("swap"); // replay slide-in
}
$("nextBtn").addEventListener("click", () => {
  if (state.step < QUESTIONS.length - 1) { state.step++; renderQuestion(); window.scrollTo(0, 0); }
  else { renderSummary(); show("s-card"); }
});
$("backBtn").addEventListener("click", () => {
  if (state.step > 0) { state.step--; renderQuestion(); } else show("s-yes");
});

/* =====================================================
   9. DATE TICKET: tiles built from the actual answers
   ===================================================== */
function renderSummary() {
  const tint = i => ["--sky-deep", "--pink-deep", "--sky-deep", "--purple-deep"][i % 4];
  $("tiles").innerHTML = QUESTIONS.map((q, i) => {
    const o = chosen(q);
    return `<div class="tile" style="--c:var(${tint(i)})">${icon(o.icon, "ico")}<small>${esc(q.emailLabel)}</small><b>${esc(o.label)}</b></div>`;
  }).join("");
}

/* =====================================================
   10. RECEIPT EMAIL (EmailJS): ALWAYS sent from this one form.
   Email address is required; the message is optional.
   ===================================================== */
const NO_MESSAGE_TEXT = "No personal message was added, but she still said YES to the date! 💗";
function showError(msg) { $("formError").textContent = msg; $("formError").hidden = false; }

/* Build the choices section from state.answers, so new questions appear automatically */
function buildChoices() {
  const rows = QUESTIONS.map(q => ({ emoji: q.emoji, label: q.emailLabel, value: chosen(q).label }));
  const text = rows.map(r => `${r.emoji} ${r.label}\n${r.value}`).join("\n\n");
  const html = rows.map(r =>
    `<div style="background:#f7f1ff;border-radius:14px;padding:12px 16px;margin:8px 0;">` +
    `<div style="font-size:12px;letter-spacing:1px;font-weight:bold;color:#8a6fd1;">${r.emoji} ${esc(r.label)}</div>` +
    `<div style="font-size:18px;color:#3b3358;">${esc(r.value)}</div></div>`).join("");
  return { text, html };
}

$("sendBtn").addEventListener("click", async () => {
  if (state.isSending || state.hasSent) return; // blocks duplicate sends
  const raw = $("msg").value;
  const message = raw.trim() ? raw : NO_MESSAGE_TEXT; // her words exactly as typed, or the default line
  const guestName = $("guestName").value.trim();
  $("formError").hidden = true;

  // Validation (the message is NOT required)
  if (QUESTIONS.some(q => !state.answers[q.id])) return showError("Some date choices are missing. Go back and pick one for every question.");
  if (!guestName) {
  return showError("Please enter your name first.");
}
  const c = CONFIG.emailjs;
  if (c.serviceId.startsWith("EMAILJS_") || c.templateId.startsWith("EMAILJS_") || c.publicKey.startsWith("EMAILJS_"))
    return showError("Email isn't set up yet (EmailJS values are still placeholders).");
  if (typeof emailjs === "undefined") return showError("Couldn't load the email service. Check your internet connection and try again.");

  state.isSending = true;
  $("sendBtn").disabled = true;
  $("sendBtn").textContent = "Sending...";
  const choices = buildChoices();
  try {
    const res = await emailjs.send(c.serviceId, c.templateId, {
      sister_name: CONFIG.sisterName, gf_name: CONFIG.gfName, anniversary_date: CONFIG.dateText,
      choices_html: choices.html, choices_text: choices.text,
      message: message, guest_name: guestName
    }, { publicKey: c.publicKey });
    if (res.status !== 200) throw new Error("Unexpected status " + res.status);
    state.hasSent = true; // success only after EmailJS confirms; the button stays disabled
    show("s-message"); // final message is the last screen
    celebrate();
  } catch (err) {
    console.error(err);
    showError("The receipt couldn't be sent. Your message, email and choices are still here, so please try again.");
    $("sendBtn").disabled = false;
    $("sendBtn").textContent = "Send my anniversary receipt 💌";
  } finally {
    state.isSending = false;
  }
});

/* Start */
fillText();
makeHearts();
