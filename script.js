// Bumped by +1 on every deploy so it's easy to confirm which version is live.
const BUILD_NUMBER = 2;

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
      save_this: "save this",
      saved: "saved",
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
            starter: { name: "starter", before: "\u201cI always start slow, I'm behind before I begin.\u201d", after: "\u201cA slow start isn't a lost performance. I build into it.\u201d" },
            steady: { name: "steady", before: "\u201cMy hands are shaking, I look nervous.\u201d", after: "\u201cShaking hands don't decide the outcome. My focus does.\u201d" },
            adapter: { name: "adapter", before: "\u201cThe plan fell apart, now what.\u201d", after: "\u201cPlans change. I still know how to respond.\u201d" },
            closer: { name: "closer", before: "\u201cI always fade at the end.\u201d", after: "\u201cThe finish is just the next part I execute, not a verdict on me.\u201d" },
            communicator: { name: "communicator", before: "\u201cNo one's talking to me, I feel alone out here.\u201d", after: "\u201cI don't need noise to feel connected. I bring my own steadiness.\u201d" },
            recoverer: { name: "recoverer", before: "\u201cThat setback ruined everything.\u201d", after: "\u201cA setback is one moment. My response is the next one.\u201d" },
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
      reset_demo: "reset demo data",
      favorites_button: "view your saved lines",
    },
    favorites: {
      title: "your saved lines",
      subtitle: "what you and your coach can review together",
      selftalk_section: "self-talk you've saved",
      roles_section: "role reframes you've saved",
      empty_selftalk: "Nothing saved yet — tap the heart on a self-talk line to keep it here.",
      empty_roles: "Nothing saved yet — tap the heart on a role reframe to keep it here.",
      coach_note: "In a real version, your coach would see this same list on their side — so they know which line to remind you of, and when.",
      back: "back to home",
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
      save_this: "저장하기",
      saved: "저장됨",
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
            starter: { name: "시작", before: "\u201c난 항상 늦게 시작해, 시작하기도 전에 뒤처져.\u201d", after: "\u201c느린 시작이 전체를 망치지 않아. 거기서부터 만들어간다.\u201d" },
            steady: { name: "평정", before: "\u201c손이 떨려, 긴장한 게 티 나.\u201d", after: "\u201c떨리는 손이 결과를 정하지 않아. 내 집중이 정한다.\u201d" },
            adapter: { name: "적응", before: "\u201c계획이 다 틀어졌어, 이제 어떡하지.\u201d", after: "\u201c계획은 바뀔 수 있어. 나는 여전히 대응하는 법을 안다.\u201d" },
            closer: { name: "마무리", before: "\u201c나는 항상 막판에 무너져.\u201d", after: "\u201c마무리는 나를 평가하는 게 아니라 그냥 다음에 할 일이다.\u201d" },
            communicator: { name: "소통", before: "\u201c아무도 나한테 말을 안 걸어, 혼자인 것 같아.\u201d", after: "\u201c소음이 없어도 연결될 수 있어. 내 안정감을 내가 가져온다.\u201d" },
            recoverer: { name: "회복", before: "\u201c그 실패가 모든 걸 망쳤어.\u201d", after: "\u201c그 순간은 지나갔다. 내 다음 반응이 중요하다.\u201d" },
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
      reset_demo: "데모 데이터 초기화",
      favorites_button: "저장한 문구 보기",
    },
    favorites: {
      title: "저장한 문구",
      subtitle: "나와 코치가 함께 확인할 수 있는 문구",
      selftalk_section: "저장한 셀프토크",
      roles_section: "저장한 역할별 리프레임",
      empty_selftalk: "아직 저장한 문구가 없어요 — 셀프토크 문구의 하트를 눌러 저장해보세요.",
      empty_roles: "아직 저장한 역할 리프레임이 없어요 — 하트를 눌러 저장해보세요.",
      coach_note: "실제 버전에서는 코치도 같은 목록을 볼 수 있어서, 언제 어떤 문구로 상기시켜줘야 할지 알 수 있어요.",
      back: "홈으로 돌아가기",
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
  other: { starter: "ti-flag", steady: "ti-scale", adapter: "ti-refresh", closer: "ti-target", communicator: "ti-message-circle", recoverer: "ti-battery-charging" },
};


// --- persistence: keep mood / game / role / checklist / streak / xp across reloads ---
const STORAGE_KEY = "aimentalp_demo_state_v1";
const XP_PER_LEVEL = 400;
const XP_PER_CHECKIN = 45;

function loadState() {
  let s = null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) s = JSON.parse(raw);
  } catch (e) {
    // localStorage unavailable (private mode, etc.) — fall back to defaults, nothing persists.
  }
  if (!s) {
    s = { streakDay: 12, xpTotal: 240, mood: "calm", game: "lol", rolesByGame: {}, checklist: [true, false, false] };
  }
  // Fill in favorites for states saved before this feature existed.
  if (!s.favoriteSelfTalk) s.favoriteSelfTalk = { pre: [false, false, false], mid: [false, false, false], recovery: [false, false, false] };
  if (!s.favoriteRoles) s.favoriteRoles = {};
  return s;
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    // Ignore write failures — the demo still works in-memory for this session.
  }
}

let state = loadState();

let currentLang = "en";
let currentPhase = "pre";
let phaseLineIndex = { pre: 0, mid: 0, recovery: 0 };
let currentGame = state.game;
let selectedRole = state.rolesByGame[currentGame] || null;

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
  document.getElementById("build-number").textContent = " · build #" + BUILD_NUMBER;
}

function formatStreak(n) {
  return currentLang === "ko" ? n + "일째" : "day " + n;
}

function updateStatsUI() {
  const level = Math.floor(state.xpTotal / XP_PER_LEVEL) + 1;
  const xpInLevel = state.xpTotal % XP_PER_LEVEL;
  const levelText = currentLang === "ko" ? "티어 " + level + " · 집중력 트랙" : "tier " + level + " · focus track";
  document.getElementById("level-text").textContent = levelText;
  document.getElementById("xp-text").textContent = xpInLevel + " / " + XP_PER_LEVEL + " xp";
  document.getElementById("xp-progress-fill").style.width = Math.round((xpInLevel / XP_PER_LEVEL) * 100) + "%";
  document.getElementById("streak-text").textContent = formatStreak(state.streakDay);
}

function renderSelfTalkLine() {
  const lines = translations[currentLang].home.selftalk.lines[currentPhase];
  const idx = phaseLineIndex[currentPhase] % lines.length;
  document.getElementById("selftalk-line").textContent = lines[idx];
  updateFavoriteButton(
    document.getElementById("btn-favorite-selftalk"),
    !!state.favoriteSelfTalk[currentPhase][idx]
  );
}

function updateFavoriteButton(btn, isActive) {
  btn.classList.toggle("active", isActive);
  const icon = btn.querySelector("i");
  icon.className = isActive ? "ti ti-heart-filled" : "ti ti-heart";
  btn.querySelector("span").textContent = isActive ? translations[currentLang].flow.saved : translations[currentLang].flow.save_this;
}

// If the performer has already saved a favorite line for this phase, lead with it —
// that's the "surface it at the right time" behavior instead of a random/blank start.
function jumpToFavoriteOrFirst(phase) {
  const favs = state.favoriteSelfTalk[phase];
  const favIdx = favs.findIndex((f) => f);
  phaseLineIndex[phase] = favIdx >= 0 ? favIdx : 0;
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

  if (selectedRole && roles[selectedRole]) {
    displayRoleResult(selectedRole);
  } else {
    document.getElementById("archetype-result").classList.add("hidden");
    document.getElementById("archetype-placeholder").classList.remove("hidden");
  }
}

function displayRoleResult(roleKey) {
  const data = translations[currentLang].home.games[currentGame].roles[roleKey];
  document.getElementById("archetype-before").textContent = data.before;
  document.getElementById("archetype-after").textContent = data.after;
  document.getElementById("archetype-result").classList.remove("hidden");
  document.getElementById("archetype-placeholder").classList.add("hidden");
  updateFavoriteButton(
    document.getElementById("btn-favorite-role"),
    !!state.favoriteRoles[currentGame + ":" + roleKey]
  );
}

function showRole(roleKey) {
  selectedRole = roleKey;
  state.rolesByGame[currentGame] = roleKey;
  saveState();
  displayRoleResult(roleKey);
  document.querySelectorAll(".archetype-chip").forEach((chip) => {
    chip.classList.toggle("selected", chip.dataset.role === roleKey);
  });
  updateFlowNav();
}

function selectGame(gameKey) {
  currentGame = gameKey;
  selectedRole = state.rolesByGame[currentGame] || null;
  state.game = gameKey;
  saveState();
  document.querySelectorAll(".game-row").forEach((row) => {
    row.classList.toggle("selected", row.dataset.game === gameKey);
  });
  renderRoleGrid();
  updateFlowNav();
}

function toggleLanguage() {
  currentLang = currentLang === "en" ? "ko" : "en";
  applyTranslations();
  renderSelfTalkLine();
  renderFlowStep();
  updateStatsUI();
  if (document.getElementById("screen-favorites").classList.contains("active")) {
    renderFavoritesScreen();
  }
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

function finishCheckin() {
  state.streakDay += 1;
  state.xpTotal += XP_PER_CHECKIN;
  saveState();
  updateStatsUI();
  document.getElementById("summary-xp-value").textContent = "+" + XP_PER_CHECKIN;
  document.getElementById("summary-streak-value").textContent = formatStreak(state.streakDay);
  showScreen("screen-summary");
}

function goFlowNext() {
  if (currentStepIndex === STEPS.length - 1) {
    finishCheckin();
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
  currentPhase = "pre";
  document.querySelectorAll(".phase-tab").forEach((t) => t.classList.toggle("selected", t.dataset.phase === "pre"));
  jumpToFavoriteOrFirst("pre");
  showScreen("screen-flow");
  renderFlowStep();
}

function restoreUIFromState() {
  // Mood
  document.querySelectorAll(".mood-tile").forEach((tile) => {
    tile.classList.toggle("selected", tile.dataset.mood === state.mood);
  });
  // Game
  document.querySelectorAll(".game-row").forEach((row) => {
    row.classList.toggle("selected", row.dataset.game === state.game);
  });
  // Checklist
  document.querySelectorAll('#checklist input[type="checkbox"]').forEach((input) => {
    const idx = Number(input.dataset.index);
    input.checked = !!state.checklist[idx];
  });
  updateStatsUI();
}

// --- self-talk phase tabs + cycling lines ---
document.querySelectorAll(".phase-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".phase-tab").forEach((t) => t.classList.remove("selected"));
    tab.classList.add("selected");
    currentPhase = tab.dataset.phase;
    jumpToFavoriteOrFirst(currentPhase);
    renderSelfTalkLine();
  });
});

document.getElementById("btn-try-another").addEventListener("click", () => {
  phaseLineIndex[currentPhase] = phaseLineIndex[currentPhase] + 1;
  renderSelfTalkLine();
});

document.getElementById("btn-favorite-selftalk").addEventListener("click", () => {
  const lines = translations[currentLang].home.selftalk.lines[currentPhase];
  const idx = phaseLineIndex[currentPhase] % lines.length;
  state.favoriteSelfTalk[currentPhase][idx] = !state.favoriteSelfTalk[currentPhase][idx];
  saveState();
  renderSelfTalkLine();
});

document.getElementById("btn-favorite-role").addEventListener("click", () => {
  if (!selectedRole) return;
  const key = currentGame + ":" + selectedRole;
  state.favoriteRoles[key] = !state.favoriteRoles[key];
  saveState();
  displayRoleResult(selectedRole);
});

function renderFavoritesScreen() {
  const dict = translations[currentLang];
  const phaseLabels = dict.home.selftalk.tabs;

  const selftalkList = document.getElementById("favorites-selftalk-list");
  selftalkList.innerHTML = "";
  let anySelfTalk = false;
  ["pre", "mid", "recovery"].forEach((phase) => {
    const lines = dict.home.selftalk.lines[phase];
    state.favoriteSelfTalk[phase].forEach((isFav, idx) => {
      if (!isFav) return;
      anySelfTalk = true;
      const item = document.createElement("div");
      item.className = "saved-item";
      item.innerHTML =
        '<i class="ti ti-heart-filled"></i><div class="saved-item-text"><p class="saved-item-tag">' +
        phaseLabels[phase] +
        '</p><p class="saved-item-line">' +
        lines[idx] +
        "</p></div>";
      selftalkList.appendChild(item);
    });
  });
  if (!anySelfTalk) {
    selftalkList.innerHTML = '<p class="saved-empty">' + dict.favorites.empty_selftalk + "</p>";
  }

  const rolesList = document.getElementById("favorites-roles-list");
  rolesList.innerHTML = "";
  let anyRoles = false;
  Object.keys(state.favoriteRoles).forEach((key) => {
    if (!state.favoriteRoles[key]) return;
    const [game, role] = key.split(":");
    const gameData = dict.home.games[game];
    if (!gameData || !gameData.roles[role]) return;
    anyRoles = true;
    const item = document.createElement("div");
    item.className = "saved-item";
    item.innerHTML =
      '<i class="ti ti-heart-filled"></i><div class="saved-item-text"><p class="saved-item-tag">' +
      gameData.label +
      " · " +
      gameData.roles[role].name +
      '</p><p class="saved-item-line">' +
      gameData.roles[role].after +
      "</p></div>";
    rolesList.appendChild(item);
  });
  if (!anyRoles) {
    rolesList.innerHTML = '<p class="saved-empty">' + dict.favorites.empty_roles + "</p>";
  }
}

function showFavorites() {
  renderFavoritesScreen();
  showScreen("screen-favorites");
}

document.getElementById("btn-to-favorites").addEventListener("click", showFavorites);
document.getElementById("btn-favorites-back").addEventListener("click", () => showScreen("screen-home"));

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
document.getElementById("btn-reset-demo").addEventListener("click", () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    // ignore
  }
  location.reload();
});

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

// Mood selection (single-select, persisted).
document.querySelectorAll(".mood-tile").forEach((tile) => {
  tile.addEventListener("click", () => {
    document.querySelectorAll(".mood-tile").forEach((t) => t.classList.remove("selected"));
    tile.classList.add("selected");
    state.mood = tile.dataset.mood;
    saveState();
  });
});

// Checklist items (persisted).
document.querySelectorAll('#checklist input[type="checkbox"]').forEach((input) => {
  input.addEventListener("change", () => {
    const idx = Number(input.dataset.index);
    state.checklist[idx] = input.checked;
    saveState();
  });
});

applyTranslations();
renderSelfTalkLine();
restoreUIFromState();
