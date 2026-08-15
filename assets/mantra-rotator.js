(() => {
  const mantras = [
    { text: "Build the system that makes the old failure obsolete.", theme: "systems" },
    { text: "See the whole. Strengthen the essential. Remove the drag.", theme: "systems" },
    { text: "Design for the world arriving—not the one disappearing.", theme: "systems" },
    { text: "Waste nothing: not talent, trust, time, or intelligence.", theme: "systems" },
    { text: "Make every part serve the mission—and the mission serve life.", theme: "systems" },
    { text: "The future belongs to those who architect it responsibly.", theme: "systems" },
    { text: "Think beyond the horizon. Act precisely where you stand.", theme: "cosmos" },
    { text: "Stay humble before the unknown—and relentless in its pursuit.", theme: "cosmos" },
    { text: "Defend this fragile signal against the noise.", theme: "cosmos" },
    { text: "Let evidence outrank ego. Let wonder sharpen judgment.", theme: "cosmos" },
    { text: "We are brief. Build what deserves to endure.", theme: "cosmos" },
    { text: "Carry the mission with the gravity of worlds.", theme: "cosmos" },
    { text: "Quality is the weapon no shortcut can defeat.", theme: "quality" },
    { text: "Do it clean. Do it right. Make it last.", theme: "quality" },
    { text: "The machine reveals the mind that built it.", theme: "quality" },
    { text: "Precision under pressure is character made visible.", theme: "quality" },
    { text: "Care is not softness. Care is operational superiority.", theme: "quality" },
    { text: "Refuse the false choice between soul and system.", theme: "quality" },
    { text: "Excellence is trained before it is tested.", theme: "virtue" },
    { text: "Power earns legitimacy through disciplined service.", theme: "virtue" },
    { text: "Govern the self. Then govern the system.", theme: "virtue" },
    { text: "Choose the good, build the capable, demand the true.", theme: "virtue" },
    { text: "Order without wisdom becomes another form of chaos.", theme: "virtue" },
    { text: "Build institutions worthy of the people they protect.", theme: "virtue" },
    { text: "Question the assumption before it becomes the breach.", theme: "inquiry" },
    { text: "Certainty is a blind spot wearing armor.", theme: "inquiry" },
    { text: "Ask until the real problem has nowhere left to hide.", theme: "inquiry" },
    { text: "Know what you know. Name what you do not. Move anyway.", theme: "inquiry" },
    { text: "The strongest leader makes truth safe to speak.", theme: "inquiry" },
    { text: "Clarity begins where performance theater ends.", theme: "inquiry" },
    { text: "Win before the threat knows the contest has begun.", theme: "strategy" },
    { text: "See first. Decide faster. Move without waste.", theme: "strategy" },
    { text: "The cleanest victory leaves no chaos behind.", theme: "strategy" },
    { text: "Make intelligence the high ground.", theme: "strategy" },
    { text: "Shape the field. Deny the opening. Preserve the force.", theme: "strategy" },
    { text: "Never confuse motion with advantage.", theme: "strategy" },
    { text: "Meet force with awareness. Redirect it toward resolution.", theme: "harmony" },
    { text: "Stand centered when the system turns violent.", theme: "harmony" },
    { text: "Control the encounter without becoming the conflict.", theme: "harmony" },
    { text: "Absorb the signal. Release the noise. Return with purpose.", theme: "harmony" },
    { text: "The strongest response uses only the force required.", theme: "harmony" },
    { text: "Protect the whole—even while neutralizing the threat.", theme: "harmony" }
  ];

  const root = document.querySelector("[data-mantra-rotator]");
  if (!root) return;

  const output = root.querySelector("[data-mantra-text]");
  const discipline = root.querySelector("[data-mantra-discipline]");
  const counter = root.querySelector("[data-mantra-counter]");
  const toggle = root.querySelector("[data-mantra-toggle]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const labels = {
    systems: "SYSTEMS VISION",
    cosmos: "COSMIC PERSPECTIVE",
    quality: "QUALITY & CRAFT",
    virtue: "VIRTUE IN COMMAND",
    inquiry: "THE EDGE OF INQUIRY",
    strategy: "STRATEGIC ADVANTAGE",
    harmony: "HARMONIZED FORCE"
  };

  let bag = [];
  let current = -1;
  let timer = 0;
  let paused = false;

  function refill() {
    bag = mantras.map((_, index) => index);
    for (let i = bag.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [bag[i], bag[j]] = [bag[j], bag[i]];
    }
    if (bag[bag.length - 1] === current && bag.length > 1) {
      [bag[bag.length - 1], bag[0]] = [bag[0], bag[bag.length - 1]];
    }
  }

  function next() {
    if (!bag.length) refill();
    current = bag.pop();
    const mantra = mantras[current];
    root.classList.add("is-changing");
    window.setTimeout(() => {
      output.textContent = mantra.text;
      discipline.textContent = labels[mantra.theme];
      counter.textContent = `${String(current + 1).padStart(2, "0")} / 42`;
      root.dataset.theme = mantra.theme;
      root.classList.remove("is-changing");
      root.classList.remove("is-counting");
      void root.offsetWidth;
      if (!paused && !reduceMotion.matches) root.classList.add("is-counting");
    }, reduceMotion.matches ? 0 : 360);
  }

  function schedule() {
    window.clearInterval(timer);
    if (!paused && !reduceMotion.matches) timer = window.setInterval(next, 15000);
  }

  toggle?.addEventListener("click", () => {
    paused = !paused;
    toggle.textContent = paused ? "RESUME" : "PAUSE";
    toggle.setAttribute("aria-pressed", String(paused));
    root.classList.toggle("is-paused", paused);
    schedule();
  });

  reduceMotion.addEventListener?.("change", schedule);
  refill();
  next();
  schedule();
})();