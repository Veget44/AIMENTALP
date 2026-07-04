// Translation content for the two supported languages.
// Add more languages here later by adding another top-level key.
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
    home: {
      header_title: "Today",
      header_subtitle: "Pre-training check-in",
      streak: "day 12",
      level: "tier II · focus track",
      xp: "240 / 400 xp",
      mood_question: "How are you feeling right now?",
      moods: { calm: "calm", focused: "focused", tense: "tense", tired: "tired", low: "low", wired: "wired" },
      selftalk: {
        label: "self-talk · tailored for esports",
        xp_tag: "+20 xp",
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
      this_helped: "this helped · claim xp",
      pick_label: "pick your mindset · pre-match",
      pick_xp: "+15 xp",
      pick_hint: "Like a champion pick — choose the mindset you need right now.",
      pick_placeholder: "Pick one above to see your reframe.",
      archetypes: {
        warrior: { name: "warrior", before: "\u201cI already threw the last fight.\u201d", after: "\u201cThe last fight is over. This one hasn't started \u2014 I show up for it.\u201d" },
        guardian: { name: "guardian", before: "\u201cMy shield cracked, I'm exposed now.\u201d", after: "\u201cA crack isn't a break. I hold the line anyway.\u201d" },
        trickster: { name: "trickster", before: "\u201cThey read my last move, I'm predictable.\u201d", after: "\u201cOne read isn't a pattern. I adapt faster than they can punish.\u201d" },
        phoenix: { name: "phoenix", before: "\u201cI'm burned out, there's nothing left.\u201d", after: "\u201cBroken doesn't mean gone. I rebuild mid-fight if I have to.\u201d" },
        scout: { name: "scout", before: "\u201cI missed the signs, I'm always behind.\u201d", after: "\u201cI don't need every signal. I need the next one.\u201d" },
        anchor: { name: "anchor", before: "\u201cEveryone's watching, I can't think straight.\u201d", after: "\u201cThe crowd is noise. My breath is the only signal I follow.\u201d" },
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
    home: {
      header_title: "오늘",
      header_subtitle: "훈련 전 체크인",
      streak: "12일째",
      level: "티어 II · 집중력 트랙",
      xp: "240 / 400 xp",
      mood_question: "지금 기분은 어떤가요?",
      moods: { calm: "차분함", focused: "집중됨", tense: "긴장됨", tired: "지침", low: "가라앉음", wired: "흥분됨" },
      selftalk: {
        label: "셀프토크 · e스포츠 맞춤",
        xp_tag: "+20 xp",
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
      this_helped: "도움이 됐어요 · xp 받기",
      pick_label: "오늘의 마인드 픽 · 경기 전",
      pick_xp: "+15 xp",
      pick_hint: "밴픽처럼, 지금 나에게 필요한 마인드를 골라보세요.",
      pick_placeholder: "위에서 하나를 선택하면 리프레임 문구가 보여요.",
      archetypes: {
        warrior: { name: "전사", before: "\u201c저번 판은 이미 망쳤어.\u201d", after: "\u201c저번 판은 끝났고, 이번 판은 아직 시작도 안 했어. 나는 이번 판에 나선다.\u201d" },
        guardian: { name: "수호자", before: "\u201c방패에 금이 갔어, 이제 뚫렸어.\u201d", after: "\u201c금이 갔다고 부서진 건 아니야. 그래도 자리는 지킨다.\u201d" },
        trickster: { name: "책사", before: "\u201c그때 그 수를 읽혔어, 나는 뻔해.\u201d", after: "\u201c한 번 읽혔다고 패턴이 되는 건 아니야. 나는 더 빠르게 바꾼다.\u201d" },
        phoenix: { name: "불사조", before: "\u201c다 타버렸어, 더는 남은 게 없어.\u201d", after: "\u201c부러진 건 사라진 게 아니야. 싸우는 중에도 다시 붙이면 돼.\u201d" },
        scout: { name: "정찰병", before: "\u201c신호를 놓쳤어, 나는 항상 뒤처져.\u201d", after: "\u201c모든 신호를 다 볼 필요는 없어. 다음 신호 하나면 충분해.\u201d" },
        anchor: { name: "닻", before: "\u201c다들 보고 있어, 생각이 하나도 안 나.\u201d", after: "\u201c관중은 소음일 뿐이야. 내가 따라갈 신호는 내 호흡 하나뿐이다.\u201d" },
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
      share_button: "팀원과 공유하기",
    },
  },
};

let currentLang = "en";
let currentPhase = "pre";
let phaseLineIndex = { pre: 0, mid: 0, recovery: 0 };
let selectedArchetype = null;

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

function toggleLanguage() {
  currentLang = currentLang === "en" ? "ko" : "en";
  applyTranslations();
  renderSelfTalkLine();
  if (selectedArchetype) showArchetype(selectedArchetype);
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
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

// --- pick-style self-talk (esports-inspired mindset picker) ---
function showArchetype(key) {
  selectedArchetype = key;
  const data = translations[currentLang].home.archetypes[key];
  document.getElementById("archetype-before").textContent = data.before;
  document.getElementById("archetype-after").textContent = data.after;
  document.getElementById("archetype-result").classList.remove("hidden");
  document.getElementById("archetype-placeholder").classList.add("hidden");
  document.querySelectorAll(".archetype-chip").forEach((chip) => {
    chip.classList.toggle("selected", chip.dataset.archetype === key);
  });
}

document.querySelectorAll(".archetype-chip").forEach((chip) => {
  chip.addEventListener("click", () => showArchetype(chip.dataset.archetype));
});

document.getElementById("lang-toggle").addEventListener("click", toggleLanguage);
document.getElementById("btn-to-home").addEventListener("click", () => showScreen("screen-home"));
document.getElementById("btn-to-summary").addEventListener("click", () => showScreen("screen-summary"));
document.getElementById("btn-restart").addEventListener("click", () => showScreen("screen-onboarding"));

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

// Toggle mood selection on the home screen (single-select, visual only).
document.querySelectorAll(".mood-tile").forEach((tile) => {
  tile.addEventListener("click", () => {
    document.querySelectorAll(".mood-tile").forEach((t) => t.classList.remove("selected"));
    tile.classList.add("selected");
  });
});

applyTranslations();
renderSelfTalkLine();
