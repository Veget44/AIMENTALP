// Translation content for the two supported languages.
// Add more languages here later by adding another top-level key.
const translations = {
  en: {
    onboarding: {
      title: "What do you compete in?",
      subtext: "Pick all that apply — this just helps us pick better examples for you.",
      option_sport: "team or individual sport",
      option_esports: "competitive gaming",
      option_performing: "performing arts",
      option_other: "something else",
      continue: "continue",
    },
    home: {
      header_title: "Today",
      header_subtitle: "Pre-training check-in",
      streak: "day 12",
      level: "level 4 · focus builder",
      xp: "240 / 400 xp",
      mood_question: "How are you feeling right now?",
      mood_calm: "calm",
      mood_tense: "tense",
      mood_tired: "tired",
      mood_low: "low",
      selftalk_label: "today's self-talk · tailored for esports",
      selftalk_xp: "+20 xp",
      selftalk_line: "\u201cOne bad round doesn't decide the match. Reset, next round.\u201d",
      try_another: "try another",
      this_helped: "this helped · claim xp",
      pick_label: "pick your mindset · pre-match",
      pick_xp: "+15 xp",
      pick_hint: "Like a champion pick — choose the mindset you need right now.",
      pick_placeholder: "Pick one above to see your reframe.",
      archetypes: {
        warrior: {
          name: "warrior",
          before: "\u201cI already threw the last fight.\u201d",
          after: "\u201cThe last fight is over. This one hasn't started \u2014 I show up for it.\u201d",
        },
        guardian: {
          name: "guardian",
          before: "\u201cMy shield cracked, I'm exposed now.\u201d",
          after: "\u201cA crack isn't a break. I hold the line anyway.\u201d",
        },
        trickster: {
          name: "trickster",
          before: "\u201cThey read my last move, I'm predictable.\u201d",
          after: "\u201cOne read isn't a pattern. I adapt faster than they can punish.\u201d",
        },
        phoenix: {
          name: "phoenix",
          before: "\u201cI'm burned out, there's nothing left.\u201d",
          after: "\u201cBroken doesn't mean gone. I rebuild mid-fight if I have to.\u201d",
        },
      },
      community: "14 people checked in today",
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
      badge_label: "\u2018steady mind\u2019 badge",
      badge_remaining: "1 more to go",
      share_button: "share with teammates",
    },
  },
  ko: {
    onboarding: {
      title: "어떤 종목을 하시나요?",
      subtext: "해당하는 항목을 모두 선택해주세요. 더 알맞은 예시를 보여드리기 위한 것입니다.",
      option_sport: "단체 또는 개인 스포츠",
      option_esports: "e스포츠",
      option_performing: "공연 예술",
      option_other: "기타",
      continue: "계속하기",
    },
    home: {
      header_title: "오늘",
      header_subtitle: "훈련 전 체크인",
      streak: "12일째",
      level: "레벨 4 · 집중력 훈련가",
      xp: "240 / 400 xp",
      mood_question: "지금 기분은 어떤가요?",
      mood_calm: "차분함",
      mood_tense: "긴장됨",
      mood_tired: "지침",
      mood_low: "가라앉음",
      selftalk_label: "오늘의 셀프토크 · e스포츠 맞춤",
      selftalk_xp: "+20 xp",
      selftalk_line: "\u201c한 라운드가 경기 전체를 결정하지 않는다. 리셋하고 다음 라운드로.\u201d",
      try_another: "다른 문구 보기",
      this_helped: "도움이 됐어요 · xp 받기",
      pick_label: "오늘의 마인드 픽 · 경기 전",
      pick_xp: "+15 xp",
      pick_hint: "밴픽처럼, 지금 나에게 필요한 마인드를 골라보세요.",
      pick_placeholder: "위에서 하나를 선택하면 리프레임 문구가 보여요.",
      archetypes: {
        warrior: {
          name: "전사",
          before: "\u201c저번 판은 이미 망쳤어.\u201d",
          after: "\u201c저번 판은 끝났고, 이번 판은 아직 시작도 안 했어. 나는 이번 판에 나선다.\u201d",
        },
        guardian: {
          name: "수호자",
          before: "\u201c방패에 금이 갔어, 이제 뚫렸어.\u201d",
          after: "\u201c금이 갔다고 부서진 건 아니야. 그래도 자리는 지킨다.\u201d",
        },
        trickster: {
          name: "책사",
          before: "\u201c그때 그 수를 읽혔어, 나는 뻔해.\u201d",
          after: "\u201c한 번 읽혔다고 패턴이 되는 건 아니야. 나는 더 빠르게 바꾼다.\u201d",
        },
        phoenix: {
          name: "불사조",
          before: "\u201c다 타버렸어, 더는 남은 게 없어.\u201d",
          after: "\u201c부러진 건 사라진 게 아니야. 싸우는 중에도 다시 붙이면 돼.\u201d",
        },
      },
      community: "오늘 14명이 체크인했어요",
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
      badge_label: "'평정심' 배지",
      badge_remaining: "1회 남음",
      share_button: "팀원과 공유하기",
    },
  },
};

let currentLang = "en";

function applyTranslations() {
  const dict = translations[currentLang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const path = el.getAttribute("data-i18n").split(".");
    let value = dict;
    for (const key of path) value = value[key];
    if (value !== undefined) el.textContent = value;
  });
  document.documentElement.lang = currentLang === "ko" ? "ko" : "en";
}

function toggleLanguage() {
  currentLang = currentLang === "en" ? "ko" : "en";
  applyTranslations();
  if (selectedArchetype) showArchetype(selectedArchetype);
}

// --- Pick-style self-talk (esports-inspired, see Dr. Kim's champion-select concept) ---
let selectedArchetype = null;

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

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

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

// Toggle mood selection on the home screen (visual only).
document.querySelectorAll(".mood-pill").forEach((pill) => {
  pill.addEventListener("click", () => {
    document.querySelectorAll(".mood-pill").forEach((p) => p.classList.remove("selected"));
    pill.classList.add("selected");
  });
});

applyTranslations();
