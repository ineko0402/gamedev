// 評価記号 → 数値化（あなたの指定順）
const ratingMap = {
    "☆": 1, // 傑作
    "◯": 2, // まあ良い
    "◎": 3, // 独創的
    "◇": 4, // 何もない
    "△": 5, // 微妙
    "✕": 6  // 悪い
};

let data = [];
let contents = [];
let genres = [];
const defaultUnlockedContents = ["埋蔵金", "動物", "ロボット", "時代劇", "忍者", "リバーシ", "ゴルフ", "マラソン"];
const defaultUnlockedGenres = ["テーブルゲーム", "アドベンチャー", "素材集", "パズル", "教育"];
const ratingLabels = { "☆": "傑作", "◯": "まあ良い", "◎": "独創的", "◇": "ふつう", "△": "微妙", "✕": "悪い" };
const storageKey = "gamedev-unlocked-items";
const selection = document.getElementById("selection");
const selectionLabel = document.getElementById("selectionLabel");
const resultsTitle = document.getElementById("resultsTitle");
const resultsNote = document.getElementById("resultsNote");
const resultList = document.getElementById("resultList");
const contentTab = document.getElementById("contentTab");
const genreTab = document.getElementById("genreTab");
const settingsDialog = document.getElementById("settingsDialog");
const settingsList = document.getElementById("settingsList");
const settingsSearch = document.getElementById("settingsSearch");
const contentSettingsTab = document.getElementById("contentSettingsTab");
const genreSettingsTab = document.getElementById("genreSettingsTab");
const openSettings = document.getElementById("openSettings");

let mode = "content";
let settingsMode = "content";
let unlocked = { content: new Set(), genre: new Set() };

async function init() {
    selection.disabled = true;
    openSettings.disabled = true;

    try {
        const response = await fetch("data.json?v=20260815.1");
        if (!response.ok) throw new Error(`データの読み込みに失敗しました: ${response.status}`);

        data = await response.json();
        contents = [...new Set(data.map(row => row.content))];
        genres = [...new Set(data.map(row => row.genre))];
        unlocked = loadUnlocked();
        selection.disabled = false;
        openSettings.disabled = false;
        populateSelection();
    } catch (error) {
        resultsNote.textContent = "相性データを読み込めませんでした。ページを再読み込みしてください。";
        resultList.innerHTML = '<li class="empty">データの読み込みに失敗しました。</li>';
        console.error(error);
    }
}

function loadUnlocked() {
    try {
        const saved = JSON.parse(localStorage.getItem(storageKey));
        if (saved) return { content: new Set(saved.content), genre: new Set(saved.genre) };
    } catch (_) { /* 初回または保存データ不正時は初期解放項目を使用 */ }
    return {
        content: new Set(defaultUnlockedContents.filter(item => contents.includes(item))),
        genre: new Set(defaultUnlockedGenres.filter(item => genres.includes(item)))
    };
}

function saveUnlocked() {
    localStorage.setItem(storageKey, JSON.stringify({ content: [...unlocked.content], genre: [...unlocked.genre] }));
}

function setMode(nextMode) {
    mode = nextMode;
    contentTab.classList.toggle("is-active", mode === "content");
    genreTab.classList.toggle("is-active", mode === "genre");
    contentTab.setAttribute("aria-selected", mode === "content");
    genreTab.setAttribute("aria-selected", mode === "genre");
    populateSelection();
}

function populateSelection() {
    const items = mode === "content" ? contents : genres;
    const available = items.filter(item => unlocked[mode].has(item));
    selection.innerHTML = "";
    selectionLabel.textContent = `${mode === "content" ? "内容" : "ジャンル"}を選ぶ`;
    resultsTitle.textContent = `相性のよい${mode === "content" ? "ジャンル" : "内容"}`;
    if (!available.length) {
        selection.add(new Option("解放済みの項目がありません", ""));
        selection.disabled = true;
    } else {
        selection.disabled = false;
        available.forEach(item => selection.add(new Option(item, item)));
    }
    renderResults();
}

function renderResults() {
    const selected = selection.value;
    const targetType = mode === "content" ? "genre" : "content";
    const rows = data
        .filter(row => row[mode] === selected && unlocked[targetType].has(row[targetType]))
        .sort((a, b) => ratingMap[a.rating] - ratingMap[b.rating]);
    resultList.innerHTML = "";
    resultsNote.textContent = selected ? `${selected}との組み合わせ（評価順）` : "解放設定から項目を選択してください。";
    if (!rows.length) {
        resultList.innerHTML = '<li class="empty">表示できる組み合わせがありません。</li>';
        return;
    }
    rows.forEach(row => {
        const item = document.createElement("li");
        item.className = "result-item";
        item.innerHTML = `<span class="rating" data-rate="${ratingMap[row.rating]}">${row.rating}</span><span class="result-name">${row[targetType]}</span><span class="rating-label">${ratingLabels[row.rating]}</span>`;
        resultList.appendChild(item);
    });
}

function renderSettings() {
    const query = settingsSearch.value.trim().toLocaleLowerCase();
    const items = (settingsMode === "content" ? contents : genres).filter(item => item.toLocaleLowerCase().includes(query));
    settingsList.innerHTML = "";
    items.forEach(item => {
        const label = document.createElement("label");
        label.className = "setting-row";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = unlocked[settingsMode].has(item);
        checkbox.addEventListener("change", () => {
            checkbox.checked ? unlocked[settingsMode].add(item) : unlocked[settingsMode].delete(item);
            saveUnlocked();
            populateSelection();
        });
        label.append(checkbox, document.createTextNode(item));
        settingsList.appendChild(label);
    });
}

function setSettingsMode(nextMode) {
    settingsMode = nextMode;
    contentSettingsTab.classList.toggle("is-active", settingsMode === "content");
    genreSettingsTab.classList.toggle("is-active", settingsMode === "genre");
    renderSettings();
}

contentTab.addEventListener("click", () => setMode("content"));
genreTab.addEventListener("click", () => setMode("genre"));
selection.addEventListener("change", renderResults);
openSettings.addEventListener("click", () => { settingsSearch.value = ""; renderSettings(); settingsDialog.showModal(); });
contentSettingsTab.addEventListener("click", () => setSettingsMode("content"));
genreSettingsTab.addEventListener("click", () => setSettingsMode("genre"));
settingsSearch.addEventListener("input", renderSettings);
document.getElementById("unlockAll").addEventListener("click", () => { unlocked[settingsMode] = new Set(settingsMode === "content" ? contents : genres); saveUnlocked(); renderSettings(); populateSelection(); });
document.getElementById("lockAll").addEventListener("click", () => {
    if (!window.confirm(`解放済みの${settingsMode === "content" ? "内容" : "ジャンル"}をすべて解除しますか？`)) return;
    unlocked[settingsMode].clear();
    saveUnlocked();
    renderSettings();
    populateSelection();
});
document.getElementById("resetDefaults").addEventListener("click", () => {
    if (!window.confirm("内容・ジャンルの解放設定を初期状態に戻しますか？")) return;
    unlocked = {
        content: new Set(defaultUnlockedContents.filter(item => contents.includes(item))),
        genre: new Set(defaultUnlockedGenres.filter(item => genres.includes(item)))
    };
    saveUnlocked();
    renderSettings();
    populateSelection();
});
document.getElementById("scrollTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
window.addEventListener("scroll", () => document.getElementById("scrollTop").classList.toggle("is-visible", window.scrollY > 300), { passive: true });

init();
