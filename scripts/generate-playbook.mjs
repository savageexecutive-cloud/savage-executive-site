import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT = path.join(__dirname, "../public/the-savage-advantage-playbook.pdf");

// Brand colors
const GOLD = [201, 162, 39];
const DARK = [10, 10, 10];
const WHITE = [255, 255, 255];
const MUTED = [180, 180, 180];
const SURFACE = [22, 22, 22];

// Discipline colors
const DISC_COLORS = {
  Clarity: [59, 130, 246],
  Stewardship: [16, 185, 129],
  Margin: [245, 158, 11],
  Wisdom: [139, 92, 246],
  Multiplication: [244, 63, 94],
};

const doc = new PDFDocument({
  size: "letter",
  margins: { top: 72, bottom: 72, left: 72, right: 72 },
  info: {
    Title: "The Savage Advantage Playbook",
    Author: "Steve Smith — Savage Executive",
    Subject: "Five disciplines that separate leaders who sustain from leaders who burn out.",
    Creator: "Savage Executive (savageexecutive.com)",
  },
});

const stream = fs.createWriteStream(OUTPUT);
doc.pipe(stream);

const W = 612; // letter width
const H = 792; // letter height
const M = 72; // margin
const CW = W - M * 2; // content width

// ─── Helpers ───────────────────────────────────────────────

function bg(color) {
  doc.save();
  doc.rect(0, 0, W, H).fill(color);
  doc.restore();
}

function goldLine(x, y, width) {
  doc.save();
  doc.rect(x, y, width, 2).fill(GOLD);
  doc.restore();
}

function heading(text, size, color, opts = {}) {
  doc.font("Helvetica-Bold").fontSize(size).fillColor(color);
  doc.text(text, opts);
}

function body(text, opts = {}) {
  doc.font("Helvetica").fontSize(11).fillColor(MUTED);
  doc.text(text, { lineGap: 5, ...opts });
}

function bodyBold(text, opts = {}) {
  doc.font("Helvetica-Bold").fontSize(11).fillColor(WHITE);
  doc.text(text, { lineGap: 5, ...opts });
}

// ─── PAGE 1: Cover ─────────────────────────────────────────

bg(DARK);

// Gold accent line at top
doc.rect(0, 0, W, 4).fill(GOLD);

// Title block — centered
doc.font("Helvetica").fontSize(11).fillColor(GOLD);
doc.text("SAVAGE EXECUTIVE", M, 200, { align: "center", width: CW });

doc.moveDown(1.5);
doc.font("Helvetica-Bold").fontSize(36).fillColor(WHITE);
doc.text("The Savage\nAdvantage Playbook", M, doc.y, { align: "center", width: CW });

doc.moveDown(1);
goldLine(W / 2 - 40, doc.y, 80);

doc.moveDown(1.5);
doc.font("Helvetica").fontSize(14).fillColor(MUTED);
doc.text(
  "Five disciplines that separate leaders\nwho sustain from leaders who burn out.",
  M,
  doc.y,
  { align: "center", width: CW }
);

doc.moveDown(4);
doc.font("Helvetica").fontSize(11).fillColor(GOLD);
doc.text("Steve Smith", M, doc.y, { align: "center", width: CW });
doc.font("Helvetica").fontSize(9).fillColor(MUTED);
doc.text("Fractional COO/CFO", M, doc.y, { align: "center", width: CW });
doc.text("savageexecutive.com", M, doc.y, { align: "center", width: CW });

// Footer
doc.font("Helvetica").fontSize(8).fillColor([80, 80, 80]);
doc.text(
  "© Savage Executive. All rights reserved.",
  M,
  H - 50,
  { align: "center", width: CW }
);

// ─── PAGE 2: Introduction ──────────────────────────────────

doc.addPage();
bg(DARK);

goldLine(M, 60, 48);

doc.y = 72;
heading("Why This Playbook Exists", 24, WHITE, { width: CW });

doc.moveDown(1);
body(
  "Most leaders are not short on vision. They are short on margin. They carry too much, delegate too little, and mistake urgency for importance every single day.",
  { width: CW }
);

doc.moveDown(0.8);
body(
  "After 11 years of executive leadership—building millions in reserves, managing multi-entity operations, and leading 160+ employees—I have seen the same pattern over and over:",
  { width: CW }
);

doc.moveDown(0.8);
bodyBold(
  "The leaders who burn out are not less talented. They simply lack the five disciplines you are about to learn.",
  { width: CW }
);

doc.moveDown(1.5);
heading("The Five Disciplines", 18, GOLD, { width: CW });

doc.moveDown(0.8);
const disciplines = [
  ["Clarity", "Know what matters and eliminate the noise."],
  ["Stewardship", "Manage every resource as if it belongs to someone else—because it does."],
  ["Margin", "Build financial and operational breathing room so you can say yes to the right things."],
  ["Wisdom", "Make decisions from principle, not pressure."],
  ["Multiplication", "Build systems and people that scale beyond your personal capacity."],
];

for (const [name, desc] of disciplines) {
  const color = DISC_COLORS[name];
  doc.save();
  doc.rect(M, doc.y, 4, 30).fill(color);
  doc.restore();

  doc.font("Helvetica-Bold").fontSize(12).fillColor(WHITE);
  doc.text(name, M + 14, doc.y, { width: CW - 14 });
  doc.font("Helvetica").fontSize(10).fillColor(MUTED);
  doc.text(desc, M + 14, doc.y, { width: CW - 14 });
  doc.moveDown(0.6);
}

doc.moveDown(1);
body(
  "Each discipline stands on its own. Together, they create what I call the Savage Advantage—the compounding effect of leading with both intensity and wisdom.",
  { width: CW }
);

// ─── PAGE 3: Discipline 1 — Clarity ────────────────────────

doc.addPage();
bg(DARK);

const discColor1 = DISC_COLORS.Clarity;
doc.rect(0, 0, W, 4).fill(discColor1);

goldLine(M, 60, 48);
doc.y = 72;

doc.font("Helvetica").fontSize(10).fillColor(discColor1);
doc.text("DISCIPLINE 01", M, doc.y, { width: CW });
doc.moveDown(0.5);
heading("Clarity", 28, WHITE, { width: CW });
doc.moveDown(0.3);
doc.font("Helvetica").fontSize(13).fillColor(MUTED);
doc.text("Know what matters and eliminate the noise.", M, doc.y, { width: CW });

doc.moveDown(1.5);
heading("The Problem", 14, WHITE, { width: CW });
doc.moveDown(0.5);
body(
  "Most leaders operate in a fog. They confuse activity with progress, respond to whatever is loudest, and end each day feeling exhausted without knowing if they moved the needle. The urgent always crowds out the important.",
  { width: CW }
);

doc.moveDown(1);
heading("The Discipline", 14, WHITE, { width: CW });
doc.moveDown(0.5);
body(
  "Clarity is not just knowing your vision—it is knowing what to say no to. High-performing leaders can articulate, in one sentence, the single most important outcome for their organization this quarter. Everything else either supports that outcome or gets eliminated.",
  { width: CW }
);

doc.moveDown(1);
heading("Your Action Steps", 14, GOLD, { width: CW });
doc.moveDown(0.5);

const clarityActions = [
  "Write your One Sentence Priority for this quarter. If you cannot say it in one sentence, you do not have clarity yet.",
  "Audit your calendar for the past two weeks. What percentage of your time went to your top priority versus reactive tasks?",
  "Identify three commitments you can eliminate or delegate this week that do not directly serve your priority.",
  "Schedule a weekly 30-minute clarity review: What moved? What drifted? What needs to change?",
];

for (let i = 0; i < clarityActions.length; i++) {
  doc.font("Helvetica-Bold").fontSize(10).fillColor(GOLD);
  doc.text(`${i + 1}.`, M, doc.y, { continued: true, width: CW });
  doc.font("Helvetica").fontSize(10).fillColor(MUTED);
  doc.text(`  ${clarityActions[i]}`, { width: CW - 20 });
  doc.moveDown(0.4);
}

doc.moveDown(1);
doc.save();
doc.rect(M, doc.y, CW, 50).fill(SURFACE);
doc.restore();
doc.font("Helvetica-Bold").fontSize(10).fillColor(GOLD);
doc.text(" “", M + 12, doc.y + 10, { continued: true });
doc.font("Helvetica-Oblique").fontSize(10).fillColor(WHITE);
doc.text("If everything is a priority, nothing is a priority.”", { width: CW - 30 });

// ─── PAGE 4: Discipline 2 — Stewardship ────────────────────

doc.addPage();
bg(DARK);

const discColor2 = DISC_COLORS.Stewardship;
doc.rect(0, 0, W, 4).fill(discColor2);

goldLine(M, 60, 48);
doc.y = 72;

doc.font("Helvetica").fontSize(10).fillColor(discColor2);
doc.text("DISCIPLINE 02", M, doc.y, { width: CW });
doc.moveDown(0.5);
heading("Stewardship", 28, WHITE, { width: CW });
doc.moveDown(0.3);
doc.font("Helvetica").fontSize(13).fillColor(MUTED);
doc.text("Manage every resource as if it belongs to someone else.", M, doc.y, { width: CW });

doc.moveDown(1.5);
heading("The Problem", 14, WHITE, { width: CW });
doc.moveDown(0.5);
body(
  "Leaders who treat organizational resources as their own tend to either hoard them from fear or spend them recklessly from ambition. Both extremes destroy trust and starve the mission. When finances are managed reactively—paycheck to paycheck, quarter to quarter—there is no room for strategic investment.",
  { width: CW }
);

doc.moveDown(1);
heading("The Discipline", 14, WHITE, { width: CW });
doc.moveDown(0.5);
body(
  "Stewardship is a posture, not a policy. It means every dollar, every hour, and every person has been entrusted to you for a purpose. You do not own these resources—you manage them. This mindset transforms how you budget, how you hire, and how you make decisions under pressure.",
  { width: CW }
);

doc.moveDown(1);
heading("Your Action Steps", 14, GOLD, { width: CW });
doc.moveDown(0.5);

const stewActions = [
  "Review your last three months of expenses. Identify the top three line items that grew without a clear strategic reason.",
  "Build a simple monthly financial rhythm: revenue review, expense audit, and cash flow forecast—even if it takes only 30 minutes.",
  "Ask yourself: If this organization were handed to me by someone I deeply respect, would they be proud of how I am managing it?",
  "Identify one area where you are under-investing (people, systems, training) and one area where you are over-spending (comfort, tradition, inertia).",
];

for (let i = 0; i < stewActions.length; i++) {
  doc.font("Helvetica-Bold").fontSize(10).fillColor(GOLD);
  doc.text(`${i + 1}.`, M, doc.y, { continued: true, width: CW });
  doc.font("Helvetica").fontSize(10).fillColor(MUTED);
  doc.text(`  ${stewActions[i]}`, { width: CW - 20 });
  doc.moveDown(0.4);
}

// ─── PAGE 5: Discipline 3 — Margin ────────────────────────

doc.addPage();
bg(DARK);

const discColor3 = DISC_COLORS.Margin;
doc.rect(0, 0, W, 4).fill(discColor3);

goldLine(M, 60, 48);
doc.y = 72;

doc.font("Helvetica").fontSize(10).fillColor(discColor3);
doc.text("DISCIPLINE 03", M, doc.y, { width: CW });
doc.moveDown(0.5);
heading("Margin", 28, WHITE, { width: CW });
doc.moveDown(0.3);
doc.font("Helvetica").fontSize(13).fillColor(MUTED);
doc.text("Build breathing room so you can say yes to the right things.", M, doc.y, { width: CW });

doc.moveDown(1.5);
heading("The Problem", 14, WHITE, { width: CW });
doc.moveDown(0.5);
body(
  "Organizations without margin are organizations in survival mode. When there is no financial cushion, every unexpected expense becomes a crisis. When there is no time margin, leaders cannot think strategically because they are drowning in the operational. Margin is not a luxury—it is infrastructure.",
  { width: CW }
);

doc.moveDown(1);
heading("The Discipline", 14, WHITE, { width: CW });
doc.moveDown(0.5);
body(
  "Margin is built, not found. It requires the discipline to spend less than you earn, to schedule less than your capacity, and to hold reserves that fund vision rather than just cover emergencies. Leaders with margin can seize opportunities others cannot because they have already created the room to move.",
  { width: CW }
);

doc.moveDown(1);
heading("Your Action Steps", 14, GOLD, { width: CW });
doc.moveDown(0.5);

const marginActions = [
  "Calculate your current reserves: How many months of operating expenses could your organization survive without new revenue?",
  "Set a target: 3 months of reserves within 12 months. Work backwards to determine how much you need to set aside monthly.",
  "Block two hours of unscheduled strategic thinking time on your calendar each week. Protect it like a board meeting.",
  "Identify one revenue stream or cost reduction that could add 5–10% margin to your current budget within 90 days.",
];

for (let i = 0; i < marginActions.length; i++) {
  doc.font("Helvetica-Bold").fontSize(10).fillColor(GOLD);
  doc.text(`${i + 1}.`, M, doc.y, { continued: true, width: CW });
  doc.font("Helvetica").fontSize(10).fillColor(MUTED);
  doc.text(`  ${marginActions[i]}`, { width: CW - 20 });
  doc.moveDown(0.4);
}

doc.moveDown(1);
doc.save();
doc.rect(M, doc.y, CW, 50).fill(SURFACE);
doc.restore();
doc.font("Helvetica-Bold").fontSize(10).fillColor(GOLD);
doc.text(" “", M + 12, doc.y + 10, { continued: true });
doc.font("Helvetica-Oblique").fontSize(10).fillColor(WHITE);
doc.text("Margin is not what is left over. It is what you build first.”", { width: CW - 30 });

// ─── PAGE 6: Discipline 4 — Wisdom ────────────────────────

doc.addPage();
bg(DARK);

const discColor4 = DISC_COLORS.Wisdom;
doc.rect(0, 0, W, 4).fill(discColor4);

goldLine(M, 60, 48);
doc.y = 72;

doc.font("Helvetica").fontSize(10).fillColor(discColor4);
doc.text("DISCIPLINE 04", M, doc.y, { width: CW });
doc.moveDown(0.5);
heading("Wisdom", 28, WHITE, { width: CW });
doc.moveDown(0.3);
doc.font("Helvetica").fontSize(13).fillColor(MUTED);
doc.text("Make decisions from principle, not pressure.", M, doc.y, { width: CW });

doc.moveDown(1.5);
heading("The Problem", 14, WHITE, { width: CW });
doc.moveDown(0.5);
body(
  "Pressure-driven decisions feel decisive in the moment but create compounding problems over time. Hiring too fast because you are desperate. Cutting the wrong expenses because the board is anxious. Saying yes to a partnership because you are afraid of missing out. Reactive leadership looks bold but is actually fragile.",
  { width: CW }
);

doc.moveDown(1);
heading("The Discipline", 14, WHITE, { width: CW });
doc.moveDown(0.5);
body(
  "Wisdom is applied knowledge filtered through experience and principle. It means having a decision-making framework that does not change based on the emotional temperature of the room. Wise leaders slow down before the biggest decisions, seek counsel from people with nothing to gain, and weigh short-term cost against long-term consequence.",
  { width: CW }
);

doc.moveDown(1);
heading("Your Action Steps", 14, GOLD, { width: CW });
doc.moveDown(0.5);

const wisdomActions = [
  "Identify your three most trusted advisors—people who will tell you the truth even when it is uncomfortable. When was the last time you asked them for honest feedback?",
  "Before your next major decision, write down: What does this look like in 10 days? 10 months? 10 years?",
  "Create a personal decision-making framework: What are your non-negotiable principles? Write them down and post them where you work.",
  "Practice the 24-hour rule: No major decision gets made the same day it is proposed. Sleep on it. Pressure hates patience.",
];

for (let i = 0; i < wisdomActions.length; i++) {
  doc.font("Helvetica-Bold").fontSize(10).fillColor(GOLD);
  doc.text(`${i + 1}.`, M, doc.y, { continued: true, width: CW });
  doc.font("Helvetica").fontSize(10).fillColor(MUTED);
  doc.text(`  ${wisdomActions[i]}`, { width: CW - 20 });
  doc.moveDown(0.4);
}

// ─── PAGE 7: Discipline 5 — Multiplication ─────────────────

doc.addPage();
bg(DARK);

const discColor5 = DISC_COLORS.Multiplication;
doc.rect(0, 0, W, 4).fill(discColor5);

goldLine(M, 60, 48);
doc.y = 72;

doc.font("Helvetica").fontSize(10).fillColor(discColor5);
doc.text("DISCIPLINE 05", M, doc.y, { width: CW });
doc.moveDown(0.5);
heading("Multiplication", 28, WHITE, { width: CW });
doc.moveDown(0.3);
doc.font("Helvetica").fontSize(13).fillColor(MUTED);
doc.text("Build systems and people that scale beyond your capacity.", M, doc.y, { width: CW });

doc.moveDown(1.5);
heading("The Problem", 14, WHITE, { width: CW });
doc.moveDown(0.5);
body(
  "Most leaders are the ceiling of their organization. When they are present, things work. When they are not, things drift. This is not leadership—it is dependency. If the organization cannot function without you for two weeks, you have not built an organization. You have built a job that owns you.",
  { width: CW }
);

doc.moveDown(1);
heading("The Discipline", 14, WHITE, { width: CW });
doc.moveDown(0.5);
body(
  "Multiplication means building capacity in others and in systems so the organization grows beyond your personal energy. It means hiring people who are better than you in their area, creating processes that run without your oversight, and investing in the development of the next generation of leaders.",
  { width: CW }
);

doc.moveDown(1);
heading("Your Action Steps", 14, GOLD, { width: CW });
doc.moveDown(0.5);

const multActions = [
  "List everything only you can do. Now be honest: cut that list in half. The items you removed? Delegate them this month.",
  "Identify your top two emerging leaders. Schedule monthly development conversations with them—not about tasks, but about their growth.",
  "Document one core process this week that currently lives only in your head. Write it down so someone else could execute it without you.",
  "Ask yourself: If I were gone for 30 days, what would break? That is your multiplication priority list.",
];

for (let i = 0; i < multActions.length; i++) {
  doc.font("Helvetica-Bold").fontSize(10).fillColor(GOLD);
  doc.text(`${i + 1}.`, M, doc.y, { continued: true, width: CW });
  doc.font("Helvetica").fontSize(10).fillColor(MUTED);
  doc.text(`  ${multActions[i]}`, { width: CW - 20 });
  doc.moveDown(0.4);
}

doc.moveDown(1);
doc.save();
doc.rect(M, doc.y, CW, 50).fill(SURFACE);
doc.restore();
doc.font("Helvetica-Bold").fontSize(10).fillColor(GOLD);
doc.text(" “", M + 12, doc.y + 10, { continued: true });
doc.font("Helvetica-Oblique").fontSize(10).fillColor(WHITE);
doc.text("The goal is not to be needed. The goal is to build something that no longer needs you to survive.”", { width: CW - 30 });

// ─── PAGE 8: Closing + CTA ────────────────────────────────

doc.addPage();
bg(DARK);

doc.rect(0, 0, W, 4).fill(GOLD);

goldLine(M, 60, 48);
doc.y = 72;

heading("What Happens Next", 28, WHITE, { width: CW });

doc.moveDown(1);
body(
  "You now have the framework. Five disciplines. Twenty action steps. A lens for evaluating every decision, every hire, every dollar, and every hour of your leadership.",
  { width: CW }
);

doc.moveDown(0.8);
body(
  "But frameworks do not change organizations—implementation does. Knowledge without execution is just entertainment.",
  { width: CW }
);

doc.moveDown(1);
heading("Three ways to go deeper:", 16, GOLD, { width: CW });

doc.moveDown(1);

// Option 1
doc.font("Helvetica-Bold").fontSize(12).fillColor(WHITE);
doc.text("1. Take the Savage Advantage Scorecard", M, doc.y, { width: CW });
doc.moveDown(0.3);
body(
  "Rate yourself across all five disciplines. Fifteen questions. Two minutes. You will see exactly where you are strong and where the gaps are. Visit savageexecutive.com/scorecard",
  { width: CW }
);

doc.moveDown(1);

// Option 2
doc.font("Helvetica-Bold").fontSize(12).fillColor(WHITE);
doc.text("2. Read The Briefing", M, doc.y, { width: CW });
doc.moveDown(0.3);
body(
  "Weekly insights on leadership, stewardship, and strategy for leaders who carry real weight. Each post is built around these five disciplines. Visit savageexecutive.com/blog",
  { width: CW }
);

doc.moveDown(1);

// Option 3
doc.font("Helvetica-Bold").fontSize(12).fillColor(WHITE);
doc.text("3. Book a Clarity Call", M, doc.y, { width: CW });
doc.moveDown(0.3);
body(
  "A focused conversation about where your organization is today and what it would take to build the financial foundation, operational excellence, and strategic clarity to get where you want to go.",
  { width: CW }
);
doc.moveDown(0.3);
doc.font("Helvetica-Bold").fontSize(11).fillColor(GOLD);
doc.text("savageexecutive.com", M, doc.y, { width: CW });

doc.moveDown(3);

// Final sign-off
goldLine(M, doc.y, CW);
doc.moveDown(1);
doc.font("Helvetica-Oblique").fontSize(14).fillColor(WHITE);
doc.text("Lead with clarity. Build with strategy.", M, doc.y, { align: "center", width: CW });
doc.font("Helvetica-Oblique").fontSize(14).fillColor(GOLD);
doc.text("Multiply what matters.", M, doc.y, { align: "center", width: CW });

doc.moveDown(2);
doc.font("Helvetica").fontSize(10).fillColor(MUTED);
doc.text("Steve Smith", M, doc.y, { align: "center", width: CW });
doc.text("Fractional COO/CFO • Savage Executive", M, doc.y, { align: "center", width: CW });

// Footer
doc.font("Helvetica").fontSize(8).fillColor([80, 80, 80]);
doc.text(
  "© Savage Executive. All rights reserved. savageexecutive.com",
  M,
  H - 50,
  { align: "center", width: CW }
);

// ─── Finalize ──────────────────────────────────────────────

doc.end();
stream.on("finish", () => {
  const stats = fs.statSync(OUTPUT);
  console.log(`✓ Playbook generated: ${OUTPUT}`);
  console.log(`  Size: ${(stats.size / 1024).toFixed(1)} KB`);
  console.log(`  Pages: 8`);
});
