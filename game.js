const SAVE_KEY = "balance-city-save-v1";

const badgeInfo = {
  clue: { icon: "🔍", name: "線索小高手" },
  change: { icon: "🔄", name: "勇敢再想一次" },
  balance: { icon: "⚖️", name: "三方守護者" },
  finish: { icon: "🌟", name: "時空修復員" }
};

const tutorials = [
  { icon: "👀", title: "第一步：看清楚故事", text: "先讀完事情是怎麼發生的，也注意每個人的心情。不要只聽到一句話，就急著說誰對、誰錯。" },
  { icon: "🪙", title: "第二步：用調查幣", text: "每一關有兩枚調查幣，只能打開兩條線索。請和同學討論：哪一條最能幫助大家看清楚事情？" },
  { icon: "⚡", title: "第三步：看看新消息", text: "調查後還會出現一則新消息。你可以保留原來的想法，也可以根據新線索勇敢改變。" },
  { icon: "⚖️", title: "最後：照顧三件事", text: "最後的決定要同時想想公平、關心和安全。沒有一個方法十全十美，但三條城市能量都不能掉到零！" }
];

const levels = {
  law: {
    id: "law",
    title: "藍色規則城",
    icon: "🏛️",
    className: "world-law",
    intro: "藍色規則城的居民很重視做事的方法。他們相信，遇到問題時要先找線索，再照著大家都知道的規則處理，才不會因為猜測而冤枉別人。",
    crisis: "星期五下午，五年一班剛辦完校慶義賣。班長把大家辛苦賺到的 2,000 元放進紅色信封，準備隔天捐給需要幫助的人。\n\n收攤時，走廊上有許多人搬桌子、收彩旗。十分鐘後，班長回到教室，卻發現紅色信封不見了。\n\n一位同學說，他最後看到小傑站在花盆旁。小傑沒有主動解釋，大家也還不知道他在那裡做什麼。",
    question: "你第一個想做什麼？",
    first: [
      { id: "teacher", title: "請老師幫忙處理", text: "先把大家知道的事情記下來，再一步一步查清楚。" },
      { id: "public", title: "公開問小傑", text: "請小傑立刻在全班面前說明，想快點得到答案。" },
      { id: "search", title: "檢查大家的書包", text: "大家一起接受檢查，希望能快點找到信封。" },
      { id: "anonymous", title: "設一個不寫名字的歸還箱", text: "先不追問是誰，讓拿到信封的人有機會放回來。" }
    ],
    clues: [
      { id: "rule", icon: "📘", title: "學校的失物做法", text: "學校提醒大家：撿到別人的東西，要趕快通知掉東西的人，或交給老師保管。這樣東西才不會又弄丟。" },
      { id: "camera", icon: "📷", title: "走廊的畫面", text: "畫面拍到一個人在花盆旁停下來，可是陽光太亮，只看得到模糊背影，不能確定那個人是誰。" },
      { id: "witness", icon: "👀", title: "同學看到的事", text: "這位同學站在走廊另一頭。他只看到有人彎下來，沒有看到那個人拿起信封，也沒看清楚手上有什麼。" },
      { id: "record", icon: "📝", title: "信封交給誰了？", text: "收攤記錄寫著：信封先交給班長。後來班長去搬箱子，卻沒有寫下自己把信封放在哪裡。" }
    ],
    surprise: "一位同學跑進教室說：『我看到小傑在花盆旁彎下去！』大家立刻轉頭看著小傑。\n\n老師再問清楚後，這位同學才說，當時自己站在走廊另一頭。他沒有看見信封，也沒有看清楚小傑手上拿了什麼。\n\n這句話是一條線索，還是只是讓人更容易猜錯呢？",
    finalQuestion: "知道這些線索後，你決定怎麼做？",
    final: [
      { id: "teacher", title: "請老師私下查清楚", text: "先整理線索，再分別詢問，不在大家面前責怪誰。", effects: { fair: 2, care: 1, order: 1 }, result: "老師先請同學不要移動花盆旁的東西，再把每個人看到的事情分開記下來。小傑可以在安靜的地方說明，其他同學也不會因為一句猜測就被認定犯錯。\n\n這個方法需要一點時間，但大家知道，每個人都會被公平對待。" },
      { id: "public", title: "當著全班問小傑", text: "很快得到說法，但小傑可能覺得大家已經認定是他。", effects: { fair: -1, care: -1, order: 2 }, result: "小傑立刻在全班面前回答：『我沒有拿信封。』事情很快有了回應，可是有些同學已經小聲討論，覺得他一定在說謊。\n\n即使後來找到別的線索，小傑也可能很難忘記大家懷疑他的眼神。" },
      { id: "search", title: "檢查全班書包", text: "可能很快找到，卻會讓沒有做錯事的人也被懷疑。", effects: { fair: -2, care: -2, order: 2 }, result: "全班把書包放到桌上，檢查很快就開始了。許多同學雖然願意配合，心裡卻覺得不舒服：自己沒有做錯事，為什麼也被當成可能拿走信封的人？\n\n秩序看起來恢復了，班上的信任卻少了一些。" },
      { id: "anonymous", title: "先設不寫名字的歸還箱", text: "給人改正的機會，同時保留已經找到的線索。", effects: { fair: 0, care: 2, order: -1 }, result: "老師放了一個不必寫名字的歸還箱，讓拿到信封的人有機會悄悄放回來。大家不再一直盯著小傑，班上的氣氛也比較放鬆。\n\n不過，如果放學前仍沒有人歸還，大家還是需要用更清楚的方法繼續找。" }
    ]
  },
  moral: {
    id: "moral",
    title: "溫暖互助林",
    icon: "🌳",
    className: "world-moral",
    intro: "溫暖互助林的居民很重視彼此的感受。他們相信，遇到問題時先聽對方說話、給人改正的機會，關係才不會因為一次事件就破裂。",
    crisis: "在這個平行時空裡，五年一班同樣弄丟了裝有 2,000 元義賣款的紅色信封。這筆錢明天早上就要送去捐款，大家都很著急。\n\n同學們不希望隨便懷疑小傑，卻又擔心只靠等待會來不及。有的人主張相信同學，有的人認為應該趕快請老師處理。\n\n小傑發現大家不時看向自己，低著頭站在教室後面，看起來有些緊張。",
    question: "你第一個想做什麼？",
    first: [
      { id: "talk", title: "大家一起聊一聊", text: "不點名，先說明這筆錢的重要。" },
      { id: "private", title: "私下關心小傑", text: "先問小傑看到了什麼，也聽他的說法。" },
      { id: "wait", title: "再等一天", text: "相信拿到的人會自己歸還。" },
      { id: "teacher", title: "請老師一起幫忙", text: "用溫和的方法，也留下清楚記錄。" }
    ],
    clues: [
      { id: "past", icon: "🤝", title: "小傑以前怎麼做", text: "上個月，小傑在操場撿到一個鉛筆盒。他沒有打開，而是立刻交給老師，最後順利還給原來的同學。" },
      { id: "deadline", icon: "⏰", title: "不能一直等", text: "義賣款明天早上九點前就要交給接受捐款的單位。如果今天沒有找到，原定的捐款可能要改時間。" },
      { id: "feeling", icon: "💬", title: "小傑的心情", text: "小傑以前曾因為一場誤會被同學排斥。從那次以後，他很害怕在全班面前被大家追問，也不太敢大聲替自己說明。" },
      { id: "place", icon: "🌺", title: "花盆旁找到什麼", text: "同學在花盆旁找到一枚小胸章，背面的別針已經鬆開。那是小傑今天別在書包上的胸章，但附近還沒看到信封。" }
    ],
    surprise: "小傑鼓起勇氣說：『我彎下去，是因為胸章掉在地上。我撿起胸章後就回教室了，沒有看到紅色信封。』\n\n這個說法和花盆旁找到的胸章對得起來，但還不能直接證明信封去了哪裡。\n\n這時，班長提醒大家：距離交出捐款只剩下一天。既要照顧小傑的感受，也不能讓事情一直拖下去。",
    finalQuestion: "現在要怎麼做，才不會只靠猜測？",
    final: [
      { id: "talk", title: "全班一起談，但不點名", text: "說明問題和最後時間，請知道事情的人提供線索。", effects: { fair: 1, care: 2, order: 0 }, result: "老師請大家圍成一圈，只談自己看到的事，不猜測是誰拿走信封。幾位原本不敢說話的同學，開始願意補充收攤時的情況。\n\n大家感受到尊重，也沒有先認定是某一個人。不過，這些說法還需要有人整理，才能變成有用的線索。" },
      { id: "private", title: "私下詢問相關同學", text: "照顧每個人的心情，也一個一個確認時間和位置。", effects: { fair: 1, care: 2, order: 1 }, result: "老師分別找幾位在走廊上的同學談話，讓每個人都能安心說出自己看到的事。小傑也說清楚胸章掉落的經過。\n\n大家慢慢拼出事情發生的順序，既沒有公開責怪誰，也讓調查繼續往前走。" },
      { id: "wait", title: "相信大家，再等一天", text: "給人時間改正，但可能錯過交出捐款的時間。", effects: { fair: 0, care: 2, order: -2 }, result: "班上決定先不追問，給拿到信封的人一整天主動歸還。大家感受到被信任，教室裡的緊張也少了一些。\n\n可是放學鐘聲越來越近，信封仍然沒有出現。若再沒有人負責處理，明早的捐款可能來不及。" },
      { id: "teacher", title: "請老師帶著大家找線索", text: "用清楚步驟調查，也不在大家面前責怪誰。", effects: { fair: 2, care: 1, order: 2 }, result: "老師先說明要查哪些地方、會詢問哪些人，也答應不公開指責任何同學。大家知道調查不是為了抓一個人，而是要把事情弄清楚。\n\n班上的不安慢慢降低，尋找信封的工作也有了清楚的方向。" }
    ]
  },
  balance: {
    id: "balance",
    title: "合作平衡島",
    icon: "⚖️",
    className: "world-balance",
    intro: "經過前兩個世界，你已經看到：只有規則，可能忘了照顧人的感受；只有關心，也可能讓事情一直沒有進展。合作平衡島需要把兩邊的優點放在一起。",
    crisis: "紅色信封仍然沒有找到，捐款時間也越來越近。教室裡有人擔心小傑被冤枉，也有人擔心義賣款再也找不回來。\n\n小衡把六張行動卡放到桌上。你們只能選三個步驟，而且要決定先做什麼、後做什麼。\n\n這一次沒有現成答案。請想一想：怎樣才能找到信封，又能公平、安心地對待每一個人？",
    clues: [
      { id: "envelope", icon: "✉️", title: "信封長什麼樣子", text: "紅色信封上貼著五年一班的圓形貼紙，裡面除了現金，還有一張寫著每個攤位收入的義賣清單。" },
      { id: "corner", icon: "🌺", title: "花盆後方的痕跡", text: "花盆底座旁有一道短短的紅色痕跡，像是紙張被風吹過地面時留下的。痕跡一路延伸到花盆後方。" },
      { id: "wind", icon: "🌬️", title: "收攤時的風", text: "下午突然吹起一陣大風，走廊窗戶當時全開著。幾張桌上的傳單也被吹到地上，大家忙著四處撿拾。" },
      { id: "timeline", icon: "🕒", title: "事情發生的順序", text: "同學重新對過時間後發現：小傑走到花盆旁以前，紅色信封就已經不在收款桌上了。" }
    ],
    surprise: "一位負責收彩旗的同學蹲下來時，在花盆底座後方看到一小片紅色。那個位置很窄，不移動花盆就看不清楚。\n\n再看看地上的紅色痕跡和收攤時的大風，信封也許不是被人拿走，而是被風吹到花盆後面。\n\n現在，你們要決定怎麼確認，又要避免在還沒查清楚前責怪任何人。",
    steps: [
      { id: "protect", icon: "🛡️", title: "先保護現場", text: "先不要移動花盆旁的東西。", effects: { fair: 0, care: 0, order: 1 } },
      { id: "report", icon: "🙋", title: "通知老師", text: "請老師一起記錄和處理。", effects: { fair: 1, care: 0, order: 1 } },
      { id: "check", icon: "🔍", title: "查看線索", text: "確認信封特徵和大家的位置。", effects: { fair: 2, care: 0, order: 0 } },
      { id: "name", icon: "📣", title: "公開說出名字", text: "直接說小傑最可疑。", effects: { fair: -2, care: -2, order: 1 } },
      { id: "private", icon: "🤝", title: "私下好好詢問", text: "聽完說法，不讓同學被圍觀。", effects: { fair: 1, care: 2, order: 0 } },
      { id: "return", icon: "📦", title: "設不寫名字的歸還處", text: "給人改正機會，也保留其他調查。", effects: { fair: 0, care: 2, order: -1 } }
    ]
  }
};

const freshState = () => ({
  screen: "start",
  tutorialPage: 0,
  stats: { fair: 6, care: 6, order: 6 },
  completed: [],
  badges: [],
  sound: true,
  levelId: null,
  phase: "brief",
  coins: 2,
  clues: [],
  initial: null,
  selectedSteps: [],
  before: null,
  lastResult: null
});

let state = freshState();
let toastTimer;

function loadSave() {
  try {
    const saved = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (saved && saved.stats && Array.isArray(saved.completed)) {
      state = { ...freshState(), ...saved, screen: saved.completed.length ? "map" : "start" };
    }
  } catch (_) { /* start fresh */ }
}

function save() {
  const safe = {
    stats: state.stats,
    completed: state.completed,
    badges: state.badges,
    sound: state.sound
  };
  localStorage.setItem(SAVE_KEY, JSON.stringify(safe));
}

function addBadge(id) {
  if (!state.badges.includes(id)) state.badges.push(id);
}

function clamp(value) { return Math.max(0, Math.min(10, value)); }

function applyEffects(effects) {
  state.stats = {
    fair: clamp(state.stats.fair + (effects.fair || 0)),
    care: clamp(state.stats.care + (effects.care || 0)),
    order: clamp(state.stats.order + (effects.order || 0))
  };
}

function effectText(effects) {
  const labels = { fair: "公平規則", care: "關心別人", order: "安全秩序" };
  return Object.entries(labels).map(([key, label]) => {
    const value = effects[key] || 0;
    const sign = value > 0 ? `＋${value}` : value < 0 ? `－${Math.abs(value)}` : "不變";
    const cls = value > 0 ? "up" : value < 0 ? "down" : "";
    return `<span class="effect-pill ${cls}">${label} ${sign}</span>`;
  }).join("");
}

const soundFiles = {
  tap: "sound/ui-tap.mp3",
  world: "sound/world-enter.mp3",
  clue: "sound/clue-open.mp3",
  alert: "sound/new-message.mp3",
  clear: "sound/level-clear.mp3",
  collapse: "sound/city-collapse.mp3",
  ending: "sound/ending.mp3"
};

const soundVolumes = {
  tap: .34,
  world: .45,
  clue: .42,
  alert: .42,
  clear: .48,
  collapse: .42,
  ending: .48
};

const soundPlayers = Object.fromEntries(Object.entries(soundFiles).map(([name, src]) => {
  const audio = new Audio(src);
  audio.preload = "auto";
  audio.volume = soundVolumes[name];
  return [name, audio];
}));

function fallbackBeep(type = "tap") {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const frequencies = { tap: 420, world: 500, clue: 610, alert: 230, clear: 650, collapse: 180, ending: 720 };
    osc.frequency.value = frequencies[type] || 420;
    osc.type = ["clear", "ending"].includes(type) ? "sine" : "triangle";
    gain.gain.setValueAtTime(.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .14);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + .15);
  } catch (_) { /* sound is optional */ }
}

function playSound(type = "tap") {
  if (!state.sound) return;
  const audio = soundPlayers[type] || soundPlayers.tap;
  if (!audio) return fallbackBeep(type);
  try {
    audio.pause();
    audio.currentTime = 0;
    const playback = audio.play();
    if (playback) playback.catch(() => fallbackBeep(type));
  } catch (_) {
    fallbackBeep(type);
  }
}

function toast(message) {
  const el = document.getElementById("toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

function updateHeader() {
  const header = document.getElementById("statusHeader");
  header.classList.toggle("hidden", state.screen === "start" || state.screen === "tutorial");
  ["fair", "care", "order"].forEach(key => {
    const value = state.stats[key];
    const valueEl = document.getElementById(`${key}Value`);
    const fillEl = document.getElementById(`${key}Fill`);
    if (valueEl) valueEl.textContent = value;
    if (fillEl) fillEl.style.width = `${value * 10}%`;
  });
  document.getElementById("soundButton").textContent = state.sound ? "🔊" : "🔇";
}

function render() {
  updateHeader();
  const game = document.getElementById("game");
  if (state.screen === "start") game.innerHTML = renderStart();
  if (state.screen === "tutorial") game.innerHTML = renderTutorial();
  if (state.screen === "map") game.innerHTML = renderMap();
  if (state.screen === "level") game.innerHTML = renderLevel();
  if (state.screen === "ending") game.innerHTML = renderEnding();
  game.focus({ preventScroll: true });
}

function renderStart() {
  return `<section class="screen start-screen">
    <div class="start-card">
      <span class="eyebrow">✨ 五年級思考冒險</span>
      <h1>天秤之城</h1>
      <div class="subtitle">平行時空</div>
      <p class="lead">同一件事，在不同的世界會有不同結果。找線索、說理由，幫城市找回平衡！</p>
      <button class="primary-button" data-action="start">開始冒險　➜</button>
    </div>
  </section>`;
}

function renderTutorial() {
  const item = tutorials[state.tutorialPage];
  return `<section class="screen tutorial-screen">
    <div class="tutorial-wrap">
      <img class="guide" src="assets/images/xiaoheng-guide.png" alt="引導機器人小衡">
      <div class="speech-card">
        <div class="tutorial-icon">${item.icon}</div>
        <h2>${item.title}</h2>
        <p>${item.text}</p>
        <div class="tutorial-nav">
          <button class="secondary-button ${state.tutorialPage === 0 ? "hidden" : ""}" data-action="tutorial-prev">← 上一步</button>
          <div class="dots" aria-label="教學進度">${tutorials.map((_, i) => `<span class="dot ${i === state.tutorialPage ? "on" : ""}"></span>`).join("")}</div>
          <button class="primary-button blue" data-action="tutorial-next">${state.tutorialPage === tutorials.length - 1 ? "前往城市地圖" : "我懂了，下一步"}</button>
        </div>
      </div>
    </div>
  </section>`;
}

function levelAvailable(id) {
  if (id === "law") return true;
  if (id === "moral") return state.completed.includes("law");
  return state.completed.includes("law") && state.completed.includes("moral");
}

function landmark(id, label, caption, className) {
  const available = levelAvailable(id);
  const done = state.completed.includes(id);
  return `<button class="landmark ${className} ${available ? "" : "locked"} ${done ? "done" : ""}" data-action="open-level" data-level="${id}" ${available && !done ? "" : "disabled"}>
    <b>${label}</b><small>${done ? "任務完成" : available ? caption : "先完成上一關"}</small>
  </button>`;
}

function renderMap() {
  const badges = Object.keys(badgeInfo).map(id => {
    const got = state.badges.includes(id);
    return `<span class="mini-badge ${got ? "" : "empty"}" title="${badgeInfo[id].name}">${badgeInfo[id].icon}</span>`;
  }).join("");
  const allDone = state.completed.length === 3;
  return `<section class="screen map-screen">
    <div class="map-heading"><h2>${allDone ? "三個世界都修復了！" : "請選擇下一個世界"}</h2><p>${allDone ? "穿過中央傳送門，看看你讓城市變成什麼模樣。" : "每完成一關，就會打開新的道路。"}</p></div>
    ${landmark("law", "🏛️ 藍色規則城", "第一關・公平的方法", "landmark-law")}
    ${landmark("moral", "🌳 溫暖互助林", "第二關・關心與信任", "landmark-moral")}
    ${landmark("balance", "⚖️ 合作平衡島", "最後關・排出處理步驟", "landmark-balance")}
    ${allDone ? `<button class="primary-button" style="position:absolute;left:50%;top:31%;transform:translate(-50%,-50%);z-index:5" data-action="show-ending">查看城市結局</button>` : ""}
    <div class="badge-dock"><b>我的思考徽章</b><div class="badge-row">${badges}</div></div>
  </section>`;
}

function renderLevel() {
  const level = levels[state.levelId];
  let body = "";
  if (state.phase === "brief") body = renderBrief(level);
  if (state.phase === "initial") body = renderInitial(level);
  if (state.phase === "clues") body = renderClues(level);
  if (state.phase === "surprise") body = renderSurprise(level);
  if (state.phase === "final") body = level.id === "balance" ? renderSteps(level) : renderFinal(level);
  if (state.phase === "result") body = renderResult(level);
  if (state.phase === "collapse") body = renderCollapse(level);
  return `<section class="screen level-screen ${level.className}"><div class="game-panel">
    <div class="panel-top"><span class="world-tag">${level.icon} ${level.title}</span><span class="phase-tag">${phaseName()}</span></div>
    ${body}
  </div></section>`;
}

function phaseName() {
  return ({ brief: "危機快報", initial: "第一次想法", clues: "找線索", surprise: "新消息", final: "最後決定", result: "城市變化", collapse: "裂痕警報" })[state.phase];
}

function renderBrief(level) {
  return `<h2>🚨 危機快報</h2><p>${level.intro}</p><div class="story-box">${level.crisis}</div>
    <p class="tip-box">先把故事讀完，再和同組同學說說你注意到什麼。</p>
    <div class="panel-actions"><button class="primary-button blue" data-action="begin-choice">先做第一次決定</button></div>`;
}

function renderInitial(level) {
  const options = level.first || [
    { id: "observe", title: "先找線索", text: "看清楚信封可能去了哪裡。" },
    { id: "ask", title: "先詢問大家", text: "聽聽每個人看到的事情。" },
    { id: "name", title: "直接說出名字", text: "先指出最可疑的人。" },
    { id: "wait", title: "先等一等", text: "看看事情會不會自己解決。" }
  ];
  return `<h2>${level.question || "你第一個想做什麼？"}</h2><p>這不是考試。選出你現在最想做的事。</p>
    <div class="option-grid">${options.map(o => `<button class="option-button" data-action="pick-initial" data-choice="${o.id}"><b>${o.title}</b><small>${o.text}</small></button>`).join("")}</div>`;
}

function renderClues(level) {
  return `<div class="panel-top"><div><h2>用調查幣找線索</h2><p style="margin:0">只能選兩條。點第二次可以取消。</p></div><span class="coin-tag">🪙 剩下 ${state.coins} 枚</span></div>
    <div class="clue-grid">${level.clues.map(c => {
      const opened = state.clues.includes(c.id);
      return `<button class="clue-button ${opened ? "opened" : ""}" data-action="toggle-clue" data-clue="${c.id}" ${state.coins === 0 && !opened ? "disabled" : ""}><b>${c.icon} ${c.title}</b><small>${opened ? c.text : "花一枚調查幣查看"}</small></button>`;
    }).join("")}</div>
    <div class="panel-actions"><button class="primary-button green" data-action="show-surprise" ${state.clues.length === 2 ? "" : "disabled"}>我找好兩條線索了</button></div>`;
}

function renderSurprise(level) {
  return `<h2>⚡ 新消息來了！</h2><div class="new-info"><strong>請再想一次</strong>${level.surprise}</div>
    <p class="tip-box">改變想法不代表答錯。能用新線索再想一次，是很棒的能力。</p>
    <div class="panel-actions"><button class="primary-button" data-action="show-final">做最後決定</button></div>`;
}

function renderFinal(level) {
  return `<h2>${level.finalQuestion}</h2><p>每個方法都有好處，也有要付出的代價。先說理由，再按下決定。</p>
    <div class="option-grid">${level.final.map(o => `<button class="option-button" data-action="pick-final" data-choice="${o.id}"><b>${o.title}</b><small>${o.text}</small></button>`).join("")}</div>`;
}

function renderSteps(level) {
  return `<div class="panel-top"><div><h2>排出三個處理步驟</h2><p style="margin:0">依照你想做的順序點選。再點一次可以取消。</p></div><span class="coin-tag">已選 ${state.selectedSteps.length} / 3</span></div>
    <div class="step-grid">${level.steps.map(s => {
      const index = state.selectedSteps.indexOf(s.id);
      return `<button class="step-card ${index >= 0 ? "selected" : ""}" data-action="toggle-step" data-step="${s.id}">${index >= 0 ? `<span class="step-number">${index + 1}</span>` : ""}<b>${s.icon} ${s.title}</b><small>${s.text}</small></button>`;
    }).join("")}</div>
    <div class="panel-actions"><button class="primary-button" data-action="submit-steps" ${state.selectedSteps.length === 3 ? "" : "disabled"}>照這個順序處理</button></div>`;
}

function renderResult(level) {
  const r = state.lastResult;
  const newBadges = r.newBadges || [];
  return `<div class="result-hero"><img src="assets/images/xiaoheng-guide.png" alt="小衡"><div><h2>${r.title}</h2><p>${r.story}</p></div></div>
    <div class="effect-row">${effectText(r.effects)}</div>
    ${newBadges.length ? `<div class="badge-award">得到新徽章：${newBadges.map(id => `<strong>${badgeInfo[id].icon} ${badgeInfo[id].name}</strong>`).join("、")}</div>` : ""}
    <div class="panel-actions"><button class="primary-button blue" data-action="finish-level">${state.completed.length === 3 ? "回地圖查看結局" : "回到城市地圖"}</button></div>`;
}

function renderCollapse(level) {
  return `<div class="result-hero"><img src="assets/images/xiaoheng-guide.png" alt="小衡"><div><h2>⚠️ 城市裂痕變大了！</h2><p>有一條城市狀態掉到零。先回到做決定以前，再試一次不同的方法。</p></div></div>
    <div class="panel-actions"><button class="primary-button" data-action="retry-level">倒轉時間，再想一次</button></div>`;
}

function getEnding() {
  const { fair, care, order } = state.stats;
  const values = [fair, care, order];
  const spread = Math.max(...values) - Math.min(...values);
  if (Math.min(...values) >= 6 && spread <= 3) return { title: "平衡天秤城", icon: "🌈", text: "三個世界的道路重新亮了起來，居民也回到中央廣場。你讓規則、關心和安全一起發揮力量。大家知道：好決定不只要看最後結果，也要看過程中有沒有找線索、公平對待別人。" };
  if (fair <= 3) return { title: "迷霧指責城", icon: "🌫️", text: "城市很快恢復了安靜，可是街道上出現一層迷霧。居民遇到問題時常急著找人負責，還沒找到足夠線索就先責怪別人。這座城市最需要的，是慢一點查清楚、給每個人說明的機會。" };
  if (care <= 3) return { title: "冷冰規則城", icon: "🧊", text: "城市的規則牌整整齊齊，居民卻很少互相說話。大家知道每一步要怎麼做，卻漸漸不敢說出自己的感受。這座城市需要多問一句『你還好嗎？』，也要多聽一聽別人的需要。" };
  if (order <= 3) return { title: "溫柔混亂島", icon: "🍃", text: "島上的居民都很友善，也願意原諒別人，可是遇到重要事情時，常常沒有人負責完成。這座城市需要把好心變成清楚、做得到的步驟，才能真正幫助每一個人。" };
  return { title: "修復中的天秤城", icon: "🛠️", text: "城市的燈光已經慢慢恢復，但三種力量還有一些差距。有些地方很重視規則，有些地方更重視感受。你可以倒轉時間，試試不同決定，看看城市會不會出現新的變化。" };
}

function renderEnding() {
  const ending = getEnding();
  return `<section class="screen ending-screen"><div class="ending-card">
    <img src="assets/images/xiaoheng-guide.png" alt="小衡">
    <div><span class="eyebrow">${ending.icon} 你的城市結局</span><h2>${ending.title}</h2><p>${ending.text}</p>
      <div class="final-stats"><div>⚖️ 公平<br>${state.stats.fair}</div><div>❤️ 關心<br>${state.stats.care}</div><div>🛡️ 安全<br>${state.stats.order}</div></div>
      <p><strong>小衡的問題：</strong>哪一關最難決定？如果再玩一次，你會改變哪個選擇？</p>
      <div class="panel-actions"><button class="secondary-button" data-action="go-map">回地圖看看</button><button class="primary-button" data-action="reset">倒轉全部時間</button></div>
    </div>
  </div></section>`;
}

function startLevel(id) {
  if (!levelAvailable(id) || state.completed.includes(id)) return;
  state.screen = "level";
  state.levelId = id;
  state.phase = "brief";
  state.coins = 2;
  state.clues = [];
  state.initial = null;
  state.selectedSteps = [];
  state.before = { ...state.stats };
  state.lastResult = null;
  render();
}

function completeChoice(level, choice) {
  const oldBadges = [...state.badges];
  applyEffects(choice.effects);
  if (Object.values(state.stats).some(v => v === 0)) {
    state.phase = "collapse";
    playSound("collapse");
    render();
    return;
  }
  addBadge("clue");
  if (level.id !== "balance" && state.initial && choice.id !== state.initial) addBadge("change");
  const vals = Object.values(state.stats);
  if (Math.max(...vals) - Math.min(...vals) <= 3) addBadge("balance");
  if (!state.completed.includes(level.id)) state.completed.push(level.id);
  if (state.completed.length === 3) addBadge("finish");
  const newBadges = state.badges.filter(id => !oldBadges.includes(id));
  state.lastResult = {
    title: newBadges.includes("balance") ? "城市的三種力量更接近了！" : "你的決定改變了城市",
    story: choice.result,
    effects: choice.effects,
    newBadges
  };
  state.phase = "result";
  save();
  playSound("clear");
  render();
}

function completeSteps(level) {
  const effects = { fair: 0, care: 0, order: 0 };
  state.selectedSteps.forEach(id => {
    const step = level.steps.find(s => s.id === id);
    Object.keys(effects).forEach(key => effects[key] += step.effects[key] || 0);
  });
  const hasCheck = state.selectedSteps.includes("check");
  const hasPrivate = state.selectedSteps.includes("private");
  const foundEnvelope = hasCheck && state.selectedSteps[0] !== "name";
  const result = foundEnvelope
    ? "你們先保護花盆旁的現場，再沿著紅色痕跡仔細查看。老師協助移開花盆後，大家終於在底座後方找到完整的紅色信封，裡面的 2,000 元一元也沒有少。\n\n小傑鬆了一口氣，同學們也明白：事情看起來很可疑時，更要先找線索，不能急著找一個人責怪。"
    : hasPrivate
      ? "大家願意在不被圍觀的情況下好好說明，事情發生的順序慢慢清楚了。小傑也不再那麼緊張。\n\n不過，你們還沒有仔細查看花盆後方，信封仍然沒有找到。下一步需要把大家的說法和現場線索放在一起。"
      : "你們很快採取行動，教室裡暫時安靜下來，但紅色痕跡和收攤時的大風沒有被好好查看。\n\n有些同學開始懷疑小傑，事情卻還沒有真正查清楚。大家需要再想想：怎麼做才不會因為著急而冤枉別人？";
  completeChoice(level, { id: state.selectedSteps.join("-"), effects, result });
}

document.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button || button.disabled) return;
  const action = button.dataset.action;
  const specialSounds = {
    start: "world",
    "open-level": "world",
    "show-surprise": "alert",
    "finish-level": "world",
    "show-ending": "ending"
  };
  const playsAfterDecision = ["pick-final", "submit-steps", "toggle-clue", "toggle-sound"];
  if (!playsAfterDecision.includes(action)) playSound(specialSounds[action] || "tap");

  if (action === "start") { state.screen = "tutorial"; state.tutorialPage = 0; render(); }
  if (action === "tutorial-prev") { state.tutorialPage = Math.max(0, state.tutorialPage - 1); render(); }
  if (action === "tutorial-next") {
    if (state.tutorialPage < tutorials.length - 1) state.tutorialPage += 1;
    else state.screen = "map";
    render();
  }
  if (action === "go-map") { state.screen = "map"; render(); }
  if (action === "open-level") startLevel(button.dataset.level);
  if (action === "begin-choice") { state.phase = "initial"; render(); }
  if (action === "pick-initial") { state.initial = button.dataset.choice; state.phase = "clues"; render(); toast("已記下你的第一次想法"); }
  if (action === "toggle-clue") {
    const id = button.dataset.clue;
    const index = state.clues.indexOf(id);
    if (index >= 0) {
      state.clues.splice(index, 1);
      state.coins += 1;
      playSound("tap");
    }
    else if (state.coins > 0) {
      state.clues.push(id);
      state.coins -= 1;
      playSound("clue");
    }
    render();
  }
  if (action === "show-surprise") { state.phase = "surprise"; render(); }
  if (action === "show-final") { state.phase = "final"; render(); }
  if (action === "pick-final") {
    const level = levels[state.levelId];
    completeChoice(level, level.final.find(o => o.id === button.dataset.choice));
  }
  if (action === "toggle-step") {
    const id = button.dataset.step;
    const index = state.selectedSteps.indexOf(id);
    if (index >= 0) state.selectedSteps.splice(index, 1);
    else if (state.selectedSteps.length < 3) state.selectedSteps.push(id);
    else toast("一次只能選三個步驟");
    render();
  }
  if (action === "submit-steps") completeSteps(levels[state.levelId]);
  if (action === "retry-level") {
    state.stats = { ...state.before };
    state.phase = "final";
    state.lastResult = null;
    render();
  }
  if (action === "finish-level") { state.screen = "map"; render(); }
  if (action === "show-ending") { state.screen = "ending"; render(); }
  if (action === "toggle-sound") {
    state.sound = !state.sound;
    save();
    updateHeader();
    if (state.sound) playSound("tap");
  }
  if (action === "reset") {
    if (window.confirm("要把三個世界全部重新開始嗎？")) {
      const sound = state.sound;
      state = freshState();
      state.sound = sound;
      localStorage.removeItem(SAVE_KEY);
      render();
    }
  }
});

loadSave();
render();
