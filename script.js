const drills = [
  {
    name: "Sharks & Minnows - Basic",
    activityType: "Kickstart Game",
    primaryConcept: "Drive",
    secondaryConcept: "Press",
    duration: 7,
    players: "Whole team",
    setup: "Grid with defined start and end lines",
    instructions: "Minnows dribble across the field while sharks try to win the ball. If a minnow loses the ball, they become a shark.",
    coachingCues: ["Drive", "Keep the ball close", "Change direction", "Press"]
  },
  {
    name: "1v1 With Transition",
    activityType: "Main Activity",
    primaryConcept: "Drive",
    secondaryConcept: "Press",
    duration: 10,
    players: "Groups of 4 (2 grids)",
    setup: "Attacker and defender face each other. Goal behind defender. Cone gate behind attacker.",
    instructions: "Play begins when attacker moves. Attacker tries to score. Defender presses to win the ball. If defender wins it, they attack the cone gate. Attacker must recover and defend. Play ends on goal, gate, out, or after 15-20 seconds.",
    coachingCues: ["Press", "Recover", "Attack", "Defend"]
  },
  {
    name: "3v1 Rondo",
    activityType: "Main Activity",
    primaryConcept: "Support",
    secondaryConcept: "Cover",
    duration: 10,
    players: "Groups of 4",
    setup: "3 attackers form a triangle with 1 defender inside",
    instructions: "Attackers keep possession and complete passes. Defender tries to intercept. On turnover, roles switch immediately.",
    coachingCues: ["Support", "Move after pass", "Create angles"]
  },
  {
    name: "Ball Mastery Circuit",
    activityType: "Warmup",
    primaryConcept: "Drive",
    secondaryConcept: "Support",
    duration: 8,
    players: "Whole team",
    setup: "Each player has a ball in a marked grid with cones for turning points.",
    instructions: "Players move through a sequence of ball touches including toe taps, inside-inside touches, outside cuts, and pull-backs. Rotate movements every 30-45 seconds and finish each round with a short acceleration into space.",
    coachingCues: ["Soft touches", "Stay balanced", "Keep your head up", "Explode after the move"]
  },
  {
    name: "Open Play",
    activityType: "Free Play",
    primaryConcept: "Support",
    secondaryConcept: "Drive",
    duration: 10,
    players: "Whole team",
    setup: "Set up a free play area with small goals or end zones depending on numbers.",
    instructions: "Let players play freely with minimal stoppages. Encourage them to solve problems on their own, combine with teammates, and restart quickly when the ball goes out.",
    coachingCues: ["Be brave on the ball", "Find space", "Play quickly", "Enjoy the game"]
  },
  {
    name: "Standard Game",
    activityType: "Scrimmage",
    primaryConcept: "Cover",
    secondaryConcept: "Support",
    duration: 15,
    players: "Whole team",
    setup: "Split teams evenly and play to goals on an appropriately sized field.",
    instructions: "Organize teams and play a normal game with match-like restarts. Allow the game to flow, stepping in only briefly for key coaching moments or substitutions.",
    coachingCues: ["Spread out", "Communicate", "Transition quickly", "Compete"]
  },
  {
    name: "Protect the Castle",
    activityType: "Kickstart",
    primaryConcept: "Press",
    secondaryConcept: "Cover",
    duration: 7,
    players: "All players, split into two teams",
    setup: "20x20 grid with 3-4 soccer balls in the center as the castle",
    instructions: "Attackers dribble into the center and try to knock a ball out of the castle. Defenders press attackers and recover to protect the center. If an attacker knocks a ball out, they collect it and return it to their side. If a defender wins the ball, they dribble it out of the grid.",
    coachingCues: ["Press", "Recover", "Protect the castle"]
  },
  {
    name: "1v1 Turn & Cover",
    activityType: "Main Activity",
    primaryConcept: "Cover",
    secondaryConcept: "Press",
    duration: 10,
    players: "Pairs, multiple channels",
    setup: "12-15 yard channel, small goal behind defender, attacker starts with back to goal, defender starts slightly behind",
    instructions: "Play begins when the attacker turns. The attacker tries to turn and attack goal. The defender recovers goal-side and stays between attacker and goal. Winning the ball is secondary to positioning. Do not lunge.",
    coachingCues: ["Recover", "Goal-side", "Stay on your feet", "Turn strong", "Protect the ball"]
  },
  {
    name: "2v2 Deep Start - Press & Counter",
    activityType: "Main Activity",
    primaryConcept: "Press",
    secondaryConcept: "Cover",
    duration: 10,
    players: "Groups of 4",
    setup: "One half of the field, midfield line as the escape line, two attackers start deep with the ball, two defenders start balanced",
    instructions: "Attackers try to cross midfield under control. Defenders try to win the ball cleanly. After winning the ball, defenders attack freely for 3-5 seconds, then reset.",
    coachingCues: ["Who presses?", "Recover", "Win it clean", "Attack"]
  },
  {
    name: "Gate Attack Chaos",
    activityType: "Kickstart",
    primaryConcept: "Drive",
    secondaryConcept: "Support",
    duration: 7,
    players: "All players",
    setup: "20x20 grid with 4 small gates spread around",
    instructions: "Players dribble freely and score by dribbling through any gate. After scoring, they immediately turn and find another gate.",
    coachingCues: ["Find a gate!", "Drive!", "Change direction!"]
  },
  {
    name: "Drive -> Power Strike",
    activityType: "Main Activity",
    primaryConcept: "Drive",
    secondaryConcept: "Support",
    duration: 10,
    players: "Individual reps, rotating goalkeeper",
    setup: "Players start 15-20 yards from goal with a ball",
    instructions: "Each player drives toward goal and shoots using the laces. Rotate goalkeeper regularly.",
    coachingCues: ["Drive!", "Hit it with your laces!", "Lean forward!"]
  },
  {
    name: "1v1 Gate Break",
    activityType: "Main Activity",
    primaryConcept: "Drive",
    secondaryConcept: "Press",
    duration: 10,
    players: "Pairs",
    setup: "15x15 grid with 3 gates on the far side",
    instructions: "The attacker tries to dribble through any gate. The defender tries to win the ball.",
    coachingCues: ["Attack the gate!", "Change speed!"]
  },
  {
    name: "Treasure Pass",
    activityType: "Kickstart",
    primaryConcept: "Support",
    secondaryConcept: "Drive",
    duration: 7,
    players: "4v4",
    setup: "Small grid with cones scattered as targets",
    instructions: "Teams score by passing the ball over a cone to a teammate. The cones represent passing into space.",
    coachingCues: ["Find space!", "Lead the pass!"]
  },
  {
    name: "2v1 Drive + Support",
    activityType: "Main Activity",
    primaryConcept: "Support",
    secondaryConcept: "Drive",
    duration: 10,
    players: "Groups of 3",
    setup: "Two attackers versus one defender",
    instructions: "The ball carrier drives forward while the teammate moves into support space for a pass. Use passing to beat the defender.",
    coachingCues: ["Give them an option!", "Support!"]
  },
  {
    name: "Set Play Support",
    activityType: "Main Activity",
    primaryConcept: "Support",
    secondaryConcept: "Drive",
    duration: 10,
    players: "Small groups",
    setup: "Start from your own half using throw-ins or goal kicks",
    instructions: "Run the sequence: restart, sideline run, drive forward, pass inside, continue the attack across midfield.",
    coachingCues: ["Lead the runner!", "Down the line!", "Then inside!"]
  },
  {
    name: "Numbers Advantage Game",
    activityType: "Kickstart",
    primaryConcept: "Drive",
    secondaryConcept: "Support",
    duration: 7,
    players: "4 attackers versus 3 defenders",
    setup: "Small field",
    instructions: "Attackers try to score with a numerical advantage. Defenders win by clearing the ball out. Rotate defenders often.",
    coachingCues: ["Drive!", "Support!"]
  },
  {
    name: "3v2 Attack Waves",
    activityType: "Main Activity",
    primaryConcept: "Drive",
    secondaryConcept: "Support",
    duration: 10,
    players: "Groups of 5",
    setup: "3 attackers versus 2 defenders starting near midfield",
    instructions: "Attackers try to score. Defenders try to stop the attack. Emphasize quick attacking decisions.",
    coachingCues: ["Drive if open!", "Support the ball!"]
  },
  {
    name: "Quick Restart Game",
    activityType: "Main Activity",
    primaryConcept: "Support",
    secondaryConcept: "Drive",
    duration: 10,
    players: "Small-sided groups",
    setup: "Continuous small game with frequent restarts",
    instructions: "Play continuously with fast restarts such as throw-ins, goal kicks, and kickoffs. Players must react quickly and organize.",
    coachingCues: ["Quick!", "Support!"]
  },
  {
    name: "Magic Ball",
    activityType: "Kickstart",
    primaryConcept: "Press",
    secondaryConcept: "Cover",
    duration: 7,
    players: "4v4",
    setup: "Normal small-sided game with the coach holding a second ball",
    instructions: "Play a normal game. During play, the coach throws in a second magic ball worth extra points. Players must quickly switch to the new ball.",
    coachingCues: ["Attack!", "Press!", "Recover!"]
  },
  {
    name: "3v3 Continuous Play",
    activityType: "Main Activity",
    primaryConcept: "Drive",
    secondaryConcept: "Press",
    duration: 10,
    players: "3v3",
    setup: "Small-sided field",
    instructions: "Teams play continuously. When possession changes, teams immediately switch roles and attack the opposite direction.",
    coachingCues: ["Drive!", "Support!", "Press!", "Recover!"]
  },
  {
    name: "Set Play Review",
    activityType: "Main Activity",
    primaryConcept: "Support",
    secondaryConcept: "Drive",
    duration: 10,
    players: "Small groups",
    setup: "Restart scenarios using throw-ins and goal kicks",
    instructions: "Repeat the structured pattern: sideline run, drive, pass inside, continue the attack.",
    coachingCues: ["Lead the runner!", "Down the line!", "Then inside!"]
  }
];

const practiceBlocks = [
  { id: "free-play", name: "Free Play", drill: null, notes: "" },
  { id: "warmup", name: "Warmup", drill: null, notes: "" },
  { id: "kickstart-game", name: "Kickstart Game", drill: null, notes: "" },
  { id: "batch-block-1", name: "Batch Block 1", drill: null, notes: "" },
  { id: "batch-block-2", name: "Batch Block 2", drill: null, notes: "" },
  { id: "scrimmage", name: "Scrimmage", drill: null, notes: "" }
];

let selectedBlockId = null;
let searchQuery = "";
let selectedSessionFocus = "All";
let selectedConcept = "All";
let selectedActivityType = "All";
let libraryMessage = "";

const drillLibraryEl = document.getElementById("drill-library");
const practiceBuilderEl = document.getElementById("practice-builder");
const totalTimeEl = document.getElementById("total-time");
const selectionStatusEl = document.getElementById("selection-status");
const sessionFocusFilterEl = document.getElementById("session-focus-filter");
const drillSearchEl = document.getElementById("drill-search");
const conceptFilterEl = document.getElementById("concept-filter");
const activityFilterEl = document.getElementById("activity-filter");
const libraryMessageEl = document.getElementById("library-message");
const coreConcepts = ["Drive", "Support", "Press", "Cover"];

function formatDuration(duration) {
  return `${Number(duration) || 0} min`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getShortInstructions(text) {
  const normalizedText = String(text ?? "").trim();
  if (!normalizedText) {
    return "No instructions available.";
  }

  const sentences = normalizedText.match(/[^.!?]+[.!?]?/g)?.map((sentence) => sentence.trim()).filter(Boolean) ?? [];
  return sentences.slice(0, 2).join(" ");
}

function renderCuesList(cues = []) {
  const visibleCues = cues.slice(0, 4);

  if (!visibleCues.length) {
    return "<p class=\"cue-empty\">No coaching cues listed.</p>";
  }

  return `
    <ul class="cue-list">
      ${visibleCues.map((cue) => `<li>${escapeHtml(cue)}</li>`).join("")}
    </ul>
  `;
}

function getTotalPracticeTime() {
  return practiceBlocks.reduce((total, block) => total + (Number(block.drill?.duration) || 0), 0);
}

function normalizeActivityType(activityType) {
  if (String(activityType).toLowerCase().includes("kickstart")) {
    return "Kickstart";
  }

  return activityType;
}

function getConceptOptions() {
  return ["All", ...coreConcepts];
}

function getActivityTypeOptions() {
  const activityTypes = new Set(drills.map((drill) => normalizeActivityType(drill.activityType)).filter(Boolean));
  return ["All", ...Array.from(activityTypes).sort((a, b) => a.localeCompare(b))];
}

function getSessionFocusOptions() {
  return ["All", "Attacking", "Defending", "Balanced"];
}

function matchesSessionFocus(drill) {
  if (selectedSessionFocus === "All" || selectedSessionFocus === "Balanced") {
    return true;
  }

  if (selectedSessionFocus === "Attacking") {
    return drill.primaryConcept === "Drive" || drill.primaryConcept === "Support";
  }

  return drill.primaryConcept === "Press" || drill.primaryConcept === "Cover";
}

function shuffleItems(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

function getPracticeGeneratorPool(sessionFocus, activityType) {
  const normalizedActivityType = normalizeActivityType(activityType);

  return drills.filter((drill) => {
    if (normalizeActivityType(drill.activityType) !== normalizedActivityType) {
      return false;
    }

    if (["Free Play", "Warmup", "Scrimmage"].includes(normalizedActivityType)) {
      return true;
    }

    if (sessionFocus === "Attacking") {
      return drill.primaryConcept === "Drive" || drill.primaryConcept === "Support";
    }

    if (sessionFocus === "Defending") {
      return drill.primaryConcept === "Press" || drill.primaryConcept === "Cover";
    }

    return true;
  });
}

function chooseUniqueDrills(pool, count, usedNames) {
  const available = shuffleItems(pool).filter((drill) => !usedNames.has(drill.name));
  const selected = available.slice(0, count);

  selected.forEach((drill) => {
    usedNames.add(drill.name);
  });

  return selected;
}

function generatePracticeFromSessionFocus(sessionFocus) {
  if (!["Attacking", "Defending", "Balanced"].includes(sessionFocus)) {
    return;
  }

  const usedNames = new Set();
  const freePlayChoices = getPracticeGeneratorPool(sessionFocus, "Free Play");
  const warmupChoices = getPracticeGeneratorPool(sessionFocus, "Warmup");
  const kickstartChoices = getPracticeGeneratorPool(sessionFocus, "Kickstart");
  const mainActivityChoices = getPracticeGeneratorPool(sessionFocus, "Main Activity");
  const scrimmageChoices = getPracticeGeneratorPool(sessionFocus, "Scrimmage");

  const [freePlayDrill] = chooseUniqueDrills(freePlayChoices, 1, usedNames);
  const [warmupDrill] = chooseUniqueDrills(warmupChoices, 1, usedNames);
  const [kickstartDrill] = chooseUniqueDrills(kickstartChoices, 1, usedNames);
  const mainDrills = chooseUniqueDrills(mainActivityChoices, 2, usedNames);
  const [scrimmageDrill] = chooseUniqueDrills(scrimmageChoices, 1, usedNames);

  const freePlayBlock = practiceBlocks.find((block) => block.id === "free-play");
  const warmupBlock = practiceBlocks.find((block) => block.id === "warmup");
  const kickstartBlock = practiceBlocks.find((block) => block.id === "kickstart-game");
  const batchBlockOne = practiceBlocks.find((block) => block.id === "batch-block-1");
  const batchBlockTwo = practiceBlocks.find((block) => block.id === "batch-block-2");
  const scrimmageBlock = practiceBlocks.find((block) => block.id === "scrimmage");

  if (freePlayBlock) {
    freePlayBlock.drill = freePlayDrill ?? null;
  }

  if (warmupBlock) {
    warmupBlock.drill = warmupDrill ?? null;
  }

  if (kickstartBlock) {
    kickstartBlock.drill = kickstartDrill ?? null;
  }

  if (batchBlockOne) {
    batchBlockOne.drill = mainDrills[0] ?? null;
  }

  if (batchBlockTwo) {
    batchBlockTwo.drill = mainDrills[1] ?? null;
  }

  if (scrimmageBlock) {
    scrimmageBlock.drill = scrimmageDrill ?? null;
  }

  libraryMessage = "";
}

function populateFilters() {
  sessionFocusFilterEl.innerHTML = getSessionFocusOptions()
    .map((focus) => `<option value="${escapeHtml(focus)}">${escapeHtml(focus)}</option>`)
    .join("");

  conceptFilterEl.innerHTML = getConceptOptions()
    .map((concept) => `<option value="${escapeHtml(concept)}">${escapeHtml(concept)}</option>`)
    .join("");

  activityFilterEl.innerHTML = getActivityTypeOptions()
    .map((activityType) => `<option value="${escapeHtml(activityType)}">${escapeHtml(activityType)}</option>`)
    .join("");

  sessionFocusFilterEl.value = selectedSessionFocus;
  conceptFilterEl.value = selectedConcept;
  activityFilterEl.value = selectedActivityType;
}

function getFilteredDrills() {
  const normalizedSearch = searchQuery.trim().toLowerCase();

  return drills.filter((drill) => {
    const matchesFocus = matchesSessionFocus(drill);

    const matchesConcept = selectedConcept === "All"
      || drill.primaryConcept === selectedConcept
      || drill.secondaryConcept === selectedConcept;

    const matchesActivityType = selectedActivityType === "All"
      || normalizeActivityType(drill.activityType) === selectedActivityType;

    const searchFields = [
      drill.name,
      drill.activityType,
      drill.primaryConcept,
      drill.secondaryConcept,
      drill.instructions,
      ...(drill.coachingCues ?? [])
    ].filter(Boolean).join(" ").toLowerCase();

    const matchesSearch = !normalizedSearch || searchFields.includes(normalizedSearch);

    return matchesFocus && matchesConcept && matchesActivityType && matchesSearch;
  });
}

function updateHeader() {
  totalTimeEl.textContent = formatDuration(getTotalPracticeTime());
  libraryMessageEl.textContent = libraryMessage;

  if (!selectedBlockId) {
    selectionStatusEl.textContent = "Select a practice block to start assigning drills.";
    return;
  }

  const selectedBlock = practiceBlocks.find((block) => block.id === selectedBlockId);
  selectionStatusEl.textContent = `Selected block: ${selectedBlock.name}. Click any drill to assign it.`;
}

function assignDrillToSelectedBlock(drill) {
  if (!selectedBlockId) {
    libraryMessage = "Select a practice block first to assign this drill.";
    updateHeader();
    return;
  }

  const block = practiceBlocks.find((item) => item.id === selectedBlockId);
  block.drill = drill;
  libraryMessage = "";
  render();
}

function removeDrillFromBlock(blockId) {
  const block = practiceBlocks.find((item) => item.id === blockId);
  block.drill = null;
  render();
}

function updateBlockNotes(blockId, notes) {
  const block = practiceBlocks.find((item) => item.id === blockId);
  block.notes = notes;
}

function renderDrillLibrary() {
  const filteredDrills = getFilteredDrills();

  if (!drills.length) {
    drillLibraryEl.innerHTML = `
      <div class="drill-card disabled" aria-disabled="true">
        <h3>No drills loaded</h3>
        <p>Paste your drills array into <code>script.js</code> to populate the library.</p>
      </div>
    `;
    return;
  }

  if (!filteredDrills.length) {
    drillLibraryEl.innerHTML = `
      <div class="drill-card" aria-disabled="true">
        <h3>No matching drills</h3>
        <p>Try adjusting your search or filters.</p>
      </div>
    `;
    return;
  }

  drillLibraryEl.innerHTML = filteredDrills.map((drill) => `
    <button
      class="drill-card"
      type="button"
      data-drill-name="${escapeHtml(drill.name)}"
    >
      <div class="card-top">
        <div>
          <h3>${drill.name ?? "Untitled Drill"}</h3>
          <p>${drill.activityType ?? "Unspecified activity"}</p>
        </div>
        <span class="meta-pill">${formatDuration(drill.duration)}</span>
      </div>
      <div class="card-details">
        <div>
          <span class="detail-label">Primary Concept</span>
          <strong>${drill.primaryConcept ?? "Not set"}</strong>
        </div>
        <div>
          <span class="detail-label">Activity Type</span>
          <strong>${drill.activityType ?? "Not set"}</strong>
        </div>
      </div>
      <div class="drill-summary">
        <span class="detail-label">Instructions</span>
        <p class="summary-text">${getShortInstructions(drill.instructions)}</p>
      </div>
      <div class="drill-summary">
        <span class="detail-label">Coaching Cues</span>
        ${renderCuesList(drill.coachingCues)}
      </div>
    </button>
  `).join("");

  drillLibraryEl.querySelectorAll("[data-drill-name]").forEach((button) => {
    button.addEventListener("click", () => {
      const drill = drills.find((item) => item.name === button.dataset.drillName);
      assignDrillToSelectedBlock(drill);
    });
  });
}

function renderPracticeBlocks() {
  practiceBuilderEl.innerHTML = practiceBlocks.map((block) => `
    <article
      class="practice-block ${block.id === selectedBlockId ? "selected" : ""}"
      data-block-id="${block.id}"
      tabindex="0"
      role="button"
      aria-pressed="${block.id === selectedBlockId}"
    >
      <div class="block-top">
        <div>
          <h3 class="block-name">${block.name}</h3>
          <p>${block.drill ? "Assigned drill" : "No drill assigned yet"}</p>
        </div>
        ${block.drill ? `<span class="meta-pill">${formatDuration(block.drill.duration)}</span>` : ""}
      </div>
      <div class="assigned-drill ${block.drill ? "" : "empty"}">
        ${block.drill ? `
          <div class="block-top">
            <div>
              <strong class="assigned-title">${block.drill.name}</strong>
              <div class="block-details">
                <div>
                  <span class="detail-label">Concept</span>
                  <span>${block.drill.primaryConcept ?? "Not set"}</span>
                </div>
                <div>
                  <span class="detail-label">Duration</span>
                  <span>${formatDuration(block.drill.duration)}</span>
                </div>
              </div>
            </div>
            <button class="remove-button" type="button" data-remove-id="${block.id}">Remove</button>
          </div>
          <div class="drill-summary">
            <span class="detail-label">Instructions</span>
            <p class="summary-text">${getShortInstructions(block.drill.instructions)}</p>
          </div>
          <div class="drill-summary">
            <span class="detail-label">Coaching Cues</span>
            ${renderCuesList(block.drill.coachingCues)}
          </div>
        ` : "Click this block to select it, then choose a drill from the library."}
      </div>
      <div class="notes-area">
        <label class="detail-label" for="notes-${block.id}">Notes</label>
        <textarea
          id="notes-${block.id}"
          class="block-notes"
          data-notes-id="${block.id}"
          rows="3"
          placeholder="Add notes for this block..."
        >${block.notes}</textarea>
      </div>
    </article>
  `).join("");

  practiceBuilderEl.querySelectorAll("[data-block-id]").forEach((blockEl) => {
    const selectBlock = () => {
      selectedBlockId = blockEl.dataset.blockId;
      libraryMessage = "";
      render();
    };

    blockEl.addEventListener("click", (event) => {
      if (event.target.closest("[data-remove-id], [data-notes-id]")) {
        return;
      }
      selectBlock();
    });

    blockEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectBlock();
      }
    });
  });

  practiceBuilderEl.querySelectorAll("[data-remove-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      removeDrillFromBlock(button.dataset.removeId);
    });
  });

  practiceBuilderEl.querySelectorAll("[data-notes-id]").forEach((textarea) => {
    textarea.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    textarea.addEventListener("keydown", (event) => {
      event.stopPropagation();
    });

    textarea.addEventListener("input", () => {
      updateBlockNotes(textarea.dataset.notesId, textarea.value);
    });
  });
}

function render() {
  updateHeader();
  renderDrillLibrary();
  renderPracticeBlocks();
}

populateFilters();

sessionFocusFilterEl.addEventListener("change", () => {
  selectedSessionFocus = sessionFocusFilterEl.value;
  generatePracticeFromSessionFocus(selectedSessionFocus);
  render();
});

drillSearchEl.addEventListener("input", () => {
  searchQuery = drillSearchEl.value;
  renderDrillLibrary();
});

conceptFilterEl.addEventListener("change", () => {
  selectedConcept = conceptFilterEl.value;
  renderDrillLibrary();
});

activityFilterEl.addEventListener("change", () => {
  selectedActivityType = activityFilterEl.value;
  renderDrillLibrary();
});

render();
