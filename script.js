// Translation content for the two supported languages.
const translations = {
  en: {
    meta: { top_label: "concept prototype · live preview" },
    onboarding: {
      eyebrow: "step 1 of 1",
      title: "Build your training loop",
      subtext: "A couple quick picks so we tailor the self-talk and mindset content to you.",
      arena_label: "your arena",
      option_sport: "team or individual sport",
      option_esports: "competitive gaming",
      option_performing: "performing arts",
      option_coaching: "coach or staff",
      option_other: "something else",
      goal_label: "what are you working on",
      goal_focus: "focus",
      goal_confidence: "confidence",
      goal_reset: "emotional reset",
      goal_routine: "consistency",
      continue: "continue",
    },
    flow: {
      mood_question: "How are you feeling right now?",
      game_question: "Which game are you playing today?",
      game_hint: "We'll tailor role-based self-talk to it.",
      role_question: "Pick your role",
      role_placeholder: "Pick a role above to see your reframe.",
      selftalk_question: "Read this before you start",
      checklist_question: "Before you start",
      back: "back",
      next: "continue",
      next_selftalk: "this helped · continue",
      next_finish: "finish check-in",
    },
    home: {
      header_title: "Today",
      header_subtitle: "Pre-training check-in",
      streak: "day 12",
      level: "tier II · focus track",
      xp: "240 / 400 xp",
      mood_question: "How are you feeling right now?",
      moods: { calm: "calm", focused: "focused", tense: "tense", tired: "tired", low: "low", wired: "wired" },
      start_checkin: "start today's check-in",
      start_checkin_hint: "takes about 3 minutes",
      selftalk: {
        tabs: { pre: "pre-match", mid: "mid-match", recovery: "recovery" },
        lines: {
          pre: [
            "\u201cNervous energy is just readiness with no name yet.\u201d",
            "\u201cI don't need to feel ready. I need to start.\u201d",
            "\u201cOne good round starts with one calm breath.\u201d",
          ],
          mid: [
            "\u201cOne bad round doesn't decide the match. Reset, next round.\u201d",
            "\u201cThe mistake already happened. The next play hasn't.\u201d",
            "\u201cTilt is a choice I can put down right now.\u201d",
          ],
          recovery: [
            "\u201cA loss is information, not an identity.\u201d",
            "\u201cI review the tape, not the scoreboard, to know how I played.\u201d",
            "\u201cTomorrow's session starts now, not after I feel better.\u201d",
          ],
        },
      },
      try_another: "try another",
      games: {
        lol: {
          label: "League of Legends",
          roles: {
            top: { name: "top", before: "\u201cI'm losing my lane, the game is over.\u201d", after: "\u201cOne lane isn't the game. I play for the map, not just my lane.\u201d" },
            jungle: { name: "jungle", before: "\u201cBoth lanes are behind, it's on me.\u201d", after: "\u201cI can't be in two places at once. I make the next path count.\u201d" },
            mid: { name: "mid", before: "\u201cI need to carry this whole game myself.\u201d", after: "\u201cI don't have to win it alone. I win my moments.\u201d" },
            adc: { name: "adc", before: "\u201cI have no peel, I can't do anything.\u201d", after: "\u201cI play the fights I can win, and wait for the ones I can't.\u201d" },
            support: { name: "support", before: "\u201cNo one sees what I actually do.\u201d", after: "\u201cThe scoreboard doesn't show vision, saves, or timing. I know my value.\u201d" },
          },
        },
        valorant: {
          label: "Valorant",
          roles: {
            duelist: { name: "duelist", before: "\u201cI died first again, I threw the round.\u201d", after: "\u201cOne entry doesn't decide the round. My team plays off what I learned.\u201d" },
            controller: { name: "controller", before: "\u201cI wasted my smokes, we're exposed.\u201d", after: "\u201cOne line isn't the whole round. I still have control to give.\u201d" },
            initiator: { name: "initiator", before: "\u201cI didn't get the read, we're walking in blind.\u201d", after: "\u201cOne missed read isn't a blind team. I adjust with what I have.\u201d" },
            sentinel: { name: "sentinel", before: "\u201cThey flanked through me, it's my fault.\u201d", after: "\u201cOne flank isn't a broken site. I reset and hold again.\u201d" },
          },
        },
        traditional: {
          label: "Traditional sport",
          roles: {
            attacker: { name: "attacker", before: "\u201cI missed that chance, I'm not a finisher.\u201d", after: "\u201cOne miss doesn't erase my instincts. The next chance is what matters.\u201d" },
            midfielder: { name: "midfielder", before: "\u201cI'm running everywhere and it's not enough.\u201d", after: "\u201cThe pass no one sees still moves the game forward.\u201d" },
            defender: { name: "defender", before: "\u201cThat mistake cost us a goal.\u201d", after: "\u201cOne mistake ends when play moves on. I refocus on the next ball.\u201d" },
            goalkeeper: { name: "goalkeeper", before: "\u201cEveryone saw that mistake, I let the team down.\u201d", after: "\u201cI don't need a clean sheet to be doing my job right now. I make the next save.\u201d" },
          },
        },
        other: {
          label: "other / generic",
          roles: {
            warrior: { name: "warrior", before: "\u201cI already threw the last fight.\u201d", after: "\u201cThe last fight is over. This one hasn't started \u2014 I show up for it.\u201d" },
            guardian: { name: "guardian", before: "\u201cMy shield cracked, I'm exposed now.\u201d", after: "\u201cA crack isn't a break. I hold the line anyway.\u201d" },
            trickster: { name: "trickster", before: "\u201cThey read my last move, I'm predictable.\u201d", after: "\u201cOne read isn't a pattern. I adapt faster than they can punish.\u201d" },
            phoenix: { name: "phoenix", before: "\u201cI'm burned out, there's nothing left.\u201d", after: "\u201cBroken doesn't mean gone. I rebuild mid-fight if I have to.\u201d" },
            scout: { name: "scout", before: "\u201cI missed the signs, I'm always behind.\u201d", after: "\u201cI don't need every signal. I need the next one.\u201d" },
            anchor: { name: "anchor", before: "\u201cEveryone's watching, I can't think straight.\u201d", after: "\u201cThe crowd is noise. My breath is the only signal I follow.\u201d" },
          },
        },
      },
      checklist_label: "before you start",
      checklist_items: [
        "2-minute breathing reset",
        "Say today's self-talk line out loud",
        "Visualize your first play",
      ],
      community_label: "training group · this week",
      community_rows: [
        { name: "player_072", streak: "9 day streak" },
        { name: "player_015", streak: "21 day streak" },
        { name: "player_138", streak: "4 day streak" },
      ],
      community_footer: "14 people checked in today",
    },
    summary: {
      title: "Today's check-in complete",
      subtitle: "Nice work, see you tomorrow",
      xp_value: "+45",
      xp_label: "xp earned",
      streak_value: "day 13",
      streak_label: "streak",
      mood_shift_label: "today's mood shift",
      before_label: "before",
      before_value: "tense",
      after_label: "after",
      after_value: "calm",
      week_label: "this week",
      days: ["M", "T", "W", "T", "F", "S", "S"],
      badges_label: "badges",
      badges: { steady: "steady mind", comeback: "comeback", routine: "iron routine" },
      badge_remaining: "\u2018comeback\u2019 badge · 1 clutch reset to go",
      back_home: "back to home",
      share_button: "share with teammates",
    },
  },
  ko: {
    meta: { top_label: "컨셉 프로토타입 · 실시간 미리보기" },
    onboarding: {
      eyebrow: "1단계 중 1단계",
      title: "나만의 훈련 루틴 만들기",
      subtext: "몇 가지만 선택하면 셀프토크와 마인드셋 콘텐츠를 맞춤 제공해드려요.",
      arena_label: "나의 종목",
      option_sport: "단체 또는 개인 스포츠",
      option_esports: "e스포츠",
      option_performing: "공연 예술",
      option_coaching: "코치 / 스태프",
      option_other: "기타",
      goal_label: "지금 필요한 것",
      goal_focus: "집중력",
      goal_confidence: "자신감",
      goal_reset: "감정 리셋",
      goal_routine: "꾸준함",
      continue: "계속하기",
    },
    flow: {
      mood_question: "지금 기분은 어떤가요?",
      game_question: "오늘 어떤 게임을 하나요?",
      game_hint: "선택한 게임에 맞는 역할별 셀프토크를 보여드려요.",
      role_question: "오늘의 역할을 선택하세요",
      role_placeholder: "위에서 역할을 선택하면 리프레임 문구가 보여요.",
      selftalk_question: "시작하기 전에 읽어보세요",
      checklist_question: "시작 전 체크리스트",
      back: "뒤로",
      next: "계속하기",
      next_selftalk: "도움이 됐어요 · 계속하기",
      next_finish: "체크인 완료하기",
    },
    home: {
      header_title: "오늘",
      header_subtitle: "훈련 전 체크인",
      streak: "12일째",
      level: "티어 II · 집중력 트랙",
      xp: "240 / 400 xp",
      mood_question: "지금 기분은 어떤가요?",
      moods: { calm: "차분함", focused: "집중됨", tense: "긴장됨", tired: "지침", low: "가라앉음", wired: "흥분됨" },
      start_checkin: "오늘의 체크인 시작하기",
      start_checkin_hint: "약 3분 정도 걸려요",
      selftalk: {
        tabs: { pre: "경기 전", mid: "경기 중", recovery: "회복" },
        lines: {
          pre: [
            "\u201c긴장은 아직 이름 붙지 않은 준비 상태일 뿐이다.\u201d",
            "\u201c완벽히 준비될 필요 없다. 시작하면 된다.\u201d",
            "\u201c좋은 판은 침착한 숨 한 번에서 시작된다.\u201d",
          ],
          mid: [
            "\u201c한 라운드가 경기 전체를 결정하지 않는다. 리셋하고 다음 라운드로.\u201d",
            "\u201c실수는 이미 지나갔다. 다음 플레이는 아직 오지 않았다.\u201d",
            "\u201c틸트는 지금 내려놓을 수 있는 선택이다.\u201d",
          ],
          recovery: [
            "\u201c패배는 나를 규정하지 않는다, 정보일 뿐이다.\u201d",
            "\u201c내가 어떻게 했는지는 스코어보드가 아니라 리플레이로 안다.\u201d",
            "\u201c내일의 훈련은 기분이 나아진 다음이 아니라 지금부터 시작된다.\u201d",
          ],
        },
      },
      try_another: "다른 문구 보기",
      games: {
        lol: {
          label: "리그 오브 레전드",
          roles: {
            top: { name: "탑", before: "\u201c라인전에서 밀렸어, 게임은 끝났어.\u201d", after: "\u201c라인 하나가 게임 전체는 아니야. 나는 맵 전체를 본다.\u201d" },
            jungle: { name: "정글", before: "\u201c양쪽 라인이 다 터졌어, 내 책임이야.\u201d", after: "\u201c동시에 두 곳에 있을 순 없어. 다음 동선을 제대로 만든다.\u201d" },
            mid: { name: "미드", before: "\u201c이 게임은 나 혼자 다 캐리해야 해.\u201d", after: "\u201c혼자 다 이길 필요 없어. 내 순간들을 이긴다.\u201d" },
            adc: { name: "원딜", before: "\u201c보호를 못 받아서 아무것도 할 수 없어.\u201d", after: "\u201c이길 수 있는 싸움만 골라서 한다. 나머진 기다린다.\u201d" },
            support: { name: "서포터", before: "\u201c내가 뭘 하는지 아무도 몰라줘.\u201d", after: "\u201c스코어보드엔 안 보이지만 시야, 세이브, 타이밍은 내가 안다.\u201d" },
          },
        },
        valorant: {
          label: "발로란트",
          roles: {
            duelist: { name: "듀얼리스트", before: "\u201c또 먼저 죽었어, 라운드를 던졌어.\u201d", after: "\u201c한 번의 진입이 라운드를 결정하지 않아. 팀은 내가 얻은 정보로 플레이한다.\u201d" },
            controller: { name: "컨트롤러", before: "\u201c스모크를 낭비했어, 우리 다 노출됐어.\u201d", after: "\u201c한 번의 실수가 라운드 전부는 아니야. 아직 컨트롤할 게 남아있다.\u201d" },
            initiator: { name: "이니시에이터", before: "\u201c정보를 못 따냈어, 팀이 눈 감고 들어가.\u201d", after: "\u201c한 번 놓쳤다고 팀이 무너진 건 아니야. 있는 정보로 조정한다.\u201d" },
            sentinel: { name: "센티널", before: "\u201c저 플랭크를 뚫렸어, 내 잘못이야.\u201d", after: "\u201c플랭크 한 번이 사이트 전체는 아니야. 다시 자리를 잡는다.\u201d" },
          },
        },
        traditional: {
          label: "전통 스포츠",
          roles: {
            attacker: { name: "공격수", before: "\u201c그 찬스를 놓쳤어, 나는 결정력이 없어.\u201d", after: "\u201c한 번의 실축이 내 감각을 지우진 않아. 다음 찬스가 중요하다.\u201d" },
            midfielder: { name: "미드필더", before: "\u201c이렇게 뛰는데도 부족해.\u201d", after: "\u201c아무도 못 본 패스도 경기를 앞으로 나아가게 한다.\u201d" },
            defender: { name: "수비수", before: "\u201c그 실수가 실점으로 이어졌어.\u201d", after: "\u201c실수는 휘슬이 울리면 끝난다. 다음 볼에 다시 집중한다.\u201d" },
            goalkeeper: { name: "골키퍼", before: "\u201c다들 그 실수를 봤어, 팀을 실망시켰어.\u201d", after: "\u201c지금 무실점이 아니어도 내 역할은 여전히 유효하다. 다음 선방을 만든다.\u201d" },
          },
        },
        other: {
          label: "기타 / 범용",
          roles: {
            warrior: { name: "전사", before: "\u201c저번 판은 이미 망쳤어.\u201d", after: "\u201c저번 판은 끝났고, 이번 판은 아직 시작도 안 했어. 나는 이번 판에 나선다.\u201d" },
            guardian: { name: "수호자", before: "\u201c방패에 금이 갔어, 이제 뚫렸어.\u201d", after: "\u201c금이 갔다고 부서진 건 아니야. 그래도 자리는 지킨다.\u201d" },
            trickster: { name: "책사", before: "\u201c그때 그 수를 읽혔어, 나는 뻔해.\u201d", after: "\u201c한 번 읽혔다고 패턴이 되는 건 아니야. 나는 더 빠르게 바꾼다.\u201d" },
            phoenix: { name: "불사조", before: "\u201c다 타버렸어, 더는 남은 게 없어.\u201d", after: "\u201c부러진 건 사라진 게 아니야. 싸우는 중에도 다시 붙이면 돼.\u201d" },
            scout: { name: "정찰병", before: "\u201c신호를 놓쳤어, 나는 항상 뒤처져.\u201d", after: "\u201c모든 신호를 다 볼 필요는 없어. 다음 신호 하나면 충분해.\u201d" },
            anchor: { name: "닻", before: "\u201c다들 보고 있어, 생각이 하나도 안 나.\u201d", after: "\u201c관중은 소음일 뿐이야. 내가 따라갈 신호는 내 호흡 하나뿐이다.\u201d" },
          },
        },
      },
      checklist_label: "시작 전 체크리스트",
      checklist_items: [
        "2분 호흡 리셋",
        "오늘의 셀프토크 문구 소리 내어 말하기",
        "첫 플레이 시각화하기",
      ],
      community_label: "훈련 그룹 · 이번 주",
      community_rows: [
        { name: "player_072", streak: "9일 연속" },
        { name: "player_015", streak: "21일 연속" },
        { name: "player_138", streak: "4일 연속" },
      ],
      community_footer: "오늘 14명이 체크인했어요",
    },
    summary: {
      title: "오늘의 체크인 완료",
      subtitle: "수고했어요, 내일 또 만나요",
      xp_value: "+45",
      xp_label: "획득 경험치",
      streak_value: "13일째",
      streak_label: "연속 기록",
      mood_shift_label: "오늘의 감정 변화",
      before_label: "시작 전",
      before_value: "긴장됨",
      after_label: "종료 후",
      after_value: "차분함",
      week_label: "이번 주",
      days: ["월", "화", "수", "목", "금", "토", "일"],
      badges_label: "배지",
      badges: { steady: "평정심", comeback: "컴백", routine: "꾸준함의 정석" },
      badge_remaining: "'컴백' 배지 · 클러치 리셋 1회 남음",
      back_home: "홈으로 돌아가기",
      share_button: "팀원과 공유하기",
    },
  },
};

// Role icons are language-independent, so they live outside the translation tree.
const roleIcons = {
  lol: { top: "ti-sword", jungle: "ti-trees", mid: "ti-bolt", adc: "ti-target", support: "ti-shield-heart" },
  valorant: { duelist: "ti-crosshair", controller: "ti-cloud", initiator: "ti-eye", sentinel: "ti-shield-lock" },
  traditional: { attacker: "ti-target-arrow", midfielder: "ti-repeat", defender: "ti-shield", goalkeeper: "ti-hand-stop" },
  other: { warrior: "ti-sword", guardian: "ti-shield", trickster: "ti-chess-knight", phoenix: "ti-feather", scout: "ti-binoculars", anchor: "ti-anchor" },
};

let currentLang = "en";
let currentPhase = "pre";
let phaseLineIndex = { pre: 0, mid: 0, recovery: 0 };
let currentGame = "lol";
let selectedRole = null;

const STEPS = ["mood", "game", "role", "selftalk", "checklist"];
let currentStepIndex = 0;

function applyTranslations() {
  const dict = translations[currentLang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const path = el.getAttribute("data-i18n").split(".");
    let value = dict;
    for (const key of path) value = value === undefined ? undefined : value[key];
    if (value !== undefined) el.textContent = value;
  });
  document.documentElement.lang = currentLang === "ko" ? "ko" : "en";
}

function renderSelfTalkLine() {
  const lines = translations[currentLang].home.selftalk.lines[currentPhase];
  const idx = phaseLineIndex[currentPhase] % lines.length;
  document.getElementById("selftalk-line").textContent = lines[idx];
}

// --- role grid rendered per selected game ---
function renderRoleGrid() {
  const grid = document.getElementById("archetype-grid");
  grid.innerHTML = "";
  const gameData = translations[currentLang].home.games[currentGame];
  document.getElementById("role-question-game").textContent = gameData.label;
  const roles = gameData.roles;
  Object.keys(roles).forEach((roleKey) => {
    const btn = document.createElement("button");
    btn.className = "archetype-chip";
    btn.dataset.role = roleKey;
    if (roleKey === selectedRole) btn.classList.add("selected");
    const icon = roleIcons[currentGame][roleKey] || "ti-user";
    btn.innerHTML = '<i class="ti ' + icon + '"></i><span>' + roles[roleKey].name + "</span>";
    btn.addEventListener("click", () => showRole(roleKey));
    grid.appendChild(btn);
  });
}

function showRole(roleKey) {
  selectedRole = roleKey;
  const data = translations[currentLang].home.games[currentGame].roles[roleKey];
  document.getElementById("archetype-before").textContent = data.before;
  document.getElementById("archetype-after").textContent = data.after;
  document.getElementById("archetype-result").classList.remove("hidden");
  document.getElementById("archetype-placeholder").classList.add("hidden");
  document.querySelectorAll(".archetype-chip").forEach((chip) => {
    chip.classList.toggle("selected", chip.dataset.role === roleKey);
  });
  updateFlowNav();
}

function selectGame(gameKey) {
  currentGame = gameKey;
  selectedRole = null;
  document.querySelectorAll(".game-row").forEach((row) => {
    row.classList.toggle("selected", row.dataset.game === gameKey);
  });
}

function toggleLanguage() {
  currentLang = currentLang === "en" ? "ko" : "en";
  const roleToRestore = selectedRole;
  applyTranslations();
  renderSelfTalkLine();
  renderFlowStep();
  if (roleToRestore) showRole(roleToRestore);
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// --- guided flow engine: one step visible at a time, with progress + nav ---
function renderFlowStep() {
  const stepId = STEPS[currentStepIndex];

  document.querySelectorAll(".step-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.step === stepId);
  });

  const dotsEl = document.getElementById("flow-dots");
  dotsEl.innerHTML = "";
  STEPS.forEach((_, i) => {
    const dot = document.createElement("span");
    if (i < currentStepIndex) dot.classList.add("done");
    if (i === currentStepIndex) dot.classList.add("current");
    dotsEl.appendChild(dot);
  });
  document.getElementById("flow-step-label").textContent =
    currentLang === "ko"
      ? (currentStepIndex + 1) + " / " + STEPS.length + " 단계"
      : "step " + (currentStepIndex + 1) + " / " + STEPS.length;

  if (stepId === "role") renderRoleGrid();
  if (stepId === "selftalk") renderSelfTalkLine();

  updateFlowNav();
}

function updateFlowNav() {
  const stepId = STEPS[currentStepIndex];
  const nextBtn = document.getElementById("btn-flow-next");
  const t = translations[currentLang].flow;

  let label = t.next;
  if (stepId === "selftalk") label = t.next_selftalk;
  if (stepId === "checklist") label = t.next_finish;
  nextBtn.textContent = label;

  nextBtn.disabled = stepId === "role" && !selectedRole;
}

function goFlowNext() {
  if (currentStepIndex === STEPS.length - 1) {
    showScreen("screen-summary");
    return;
  }
  currentStepIndex += 1;
  renderFlowStep();
}

function goFlowBack() {
  if (currentStepIndex === 0) {
    showScreen("screen-home");
    return;
  }
  currentStepIndex -= 1;
  renderFlowStep();
}

function startCheckin() {
  currentStepIndex = 0;
  showScreen("screen-flow");
  renderFlowStep();
}

// --- self-talk phase tabs + cycling lines ---
document.querySelectorAll(".phase-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".phase-tab").forEach((t) => t.classList.remove("selected"));
    tab.classList.add("selected");
    currentPhase = tab.dataset.phase;
    renderSelfTalkLine();
  });
});

document.getElementById("btn-try-another").addEventListener("click", () => {
  phaseLineIndex[currentPhase] = phaseLineIndex[currentPhase] + 1;
  renderSelfTalkLine();
});

document.querySelectorAll(".game-row").forEach((row) => {
  row.addEventListener("click", () => selectGame(row.dataset.game));
});

document.getElementById("lang-toggle").addEventListener("click", toggleLanguage);
document.getElementById("btn-to-home").addEventListener("click", () => showScreen("screen-home"));
document.getElementById("btn-start-checkin").addEventListener("click", startCheckin);
document.getElementById("btn-flow-next").addEventListener("click", goFlowNext);
document.getElementById("btn-flow-back").addEventListener("click", goFlowBack);
document.getElementById("btn-back-home").addEventListener("click", () => showScreen("screen-home"));
document.getElementById("btn-share").addEventListener("click", () => showScreen("screen-home"));

// Toggle option selection state on the onboarding screen (visual only, no persistence).
document.querySelectorAll(".option").forEach((opt) => {
  opt.addEventListener("click", () => {
    opt.classList.toggle("selected");
    const check = opt.querySelector(".check-icon");
    if (opt.classList.contains("selected")) {
      if (!check) {
        const icon = document.createElement("i");
        icon.className = "ti ti-check check-icon";
        opt.appendChild(icon);
      }
    } else if (check) {
      check.remove();
    }
  });
});

// Toggle goal chips (multi-select, visual only).
document.querySelectorAll(".chip-tile").forEach((chip) => {
  chip.addEventListener("click", () => chip.classList.toggle("selected"));
});

// Toggle mood selection (single-select, visual only).
document.querySelectorAll(".mood-tile").forEach((tile) => {
  tile.addEventListener("click", () => {
    document.querySelectorAll(".mood-tile").forEach((t) => t.classList.remove("selected"));
    tile.classList.add("selected");
  });
});

applyTranslations();
renderSelfTalkLine();
