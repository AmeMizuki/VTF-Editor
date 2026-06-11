// ===== i18n + theme management =====
var I18N = {
	en: {
		tagline: "Turn images, GIFs & video into sprays for any Source-engine game.",
		preview: "Preview",
		source: "Source",
		localFile: "Local file",
		orUrl: "…or paste an image / GIF / video URL",
		urlPlaceholder: "Paste an image URL…",
		load: "Load",
		sourceHint: "Works with Discord, imgur and X/Twitter links (PNG, JPG, WebP, animated GIF). Same-size images convert best; smaller ones are centered.",
		geometry: "Output Geometry",
		width: "Width",
		height: "Height",
		auto: "Auto",
		custom: "Custom",
		genMipmaps: "Generate mipmaps",
		scaleFit: "Scale to fit",
		singleImg: "Use single image for animation",
		encode: "Encode Settings",
		texFormat: "Texture format",
		sampling: "Sampling method",
		sampDefault: "Default (recommended)",
		sampPoint: "Point (for pixel art)",
		sampTri: "Trilinear",
		sampAniso: "Anisotropic",
		dither: "Use dithering",
		quality: "Compression quality",
		qFast: "Fast",
		qNormal: "Normal",
		qSlow: "Slow (recommended)",
		qVerySlow: "Very slow",
		export: "Export",
		fileName: "File name (without extension)",
		saveVtf: "Save as VTF",
		saveVmt: "Save as VMT",
		tipsTitle: "Tips & changelog",
		tipFadeT: "Fading spray:",
		tipFade: "enable mipmaps, load a main picture, then choose another picture under a mipmap of choice.",
		tipAnimT: "Animated spray:",
		tipAnim: "load an animated GIF or a video file, or use single-image mode for a frame strip.",
		videoTitle: "Video import settings",
		playbackSpeed: "Playback speed",
		import: "Import",
		videoNotice: "You might need to disable hardware acceleration in your browser if import fails or to improve performance.",
		themeDark: "🌙 Dark",
		themeLight: "☀️ Light",
		themeKawaii: "👼 Angel of Delusion",
		// dynamic (used from vtf.js)
		estFileSize: "Estimated file size",
		fetching: "Fetching…",
		failed: "Failed",
		notSupported: "Not a supported image or video",
		corsBlocked: "all sources blocked (CORS)",
		changedTo: "Changed to {w}x{h}",
		usingNoMip: "Using {w}x{h}, no mipmaps",
		invalidFilename: "Filename contains invalid characters",
		startFrame: "Start frame:",
		endFrame: "End frame:",
		startTime: "Start time (seconds):",
		endTime: "End time (seconds):",
		importAll: "Import all frames",
		confirmFrames: "The remaining frames are skipped as they would exceed the frame limit. Press Cancel to preserve all frames."
	},
	zh: {
		tagline: "將圖片、GIF 與影片轉換成任何 Source 引擎遊戲可用的噴漆。",
		preview: "預覽",
		source: "來源",
		localFile: "本機檔案",
		orUrl: "…或貼上圖片 / GIF / 影片網址",
		urlPlaceholder: "請輸入圖片網址…",
		load: "載入",
		sourceHint: "支援 Discord、imgur 與 X/Twitter 連結（PNG、JPG、WebP、動態 GIF）。相同尺寸的圖片轉換效果最佳，較小的會置中。",
		geometry: "輸出尺寸",
		width: "寬度",
		height: "高度",
		auto: "自動",
		custom: "自訂",
		genMipmaps: "產生 mipmap",
		scaleFit: "縮放至符合",
		singleImg: "使用單張圖片做動畫",
		encode: "編碼設定",
		texFormat: "材質格式",
		sampling: "取樣方式",
		sampDefault: "預設（建議）",
		sampPoint: "點取樣（適合像素圖）",
		sampTri: "三線性",
		sampAniso: "非等向性",
		dither: "使用抖色",
		quality: "壓縮品質",
		qFast: "快速",
		qNormal: "一般",
		qSlow: "慢（建議）",
		qVerySlow: "非常慢",
		export: "匯出",
		fileName: "檔案名稱（不含副檔名）",
		saveVtf: "另存為 VTF",
		saveVmt: "另存為 VMT",
		tipsTitle: "提示與更新紀錄",
		tipFadeT: "漸層噴漆：",
		tipFade: "啟用 mipmap、載入主圖，再於指定的 mipmap 下選擇另一張圖片。",
		tipAnimT: "動態噴漆：",
		tipAnim: "載入動態 GIF 或影片檔，或使用單張圖片模式做成連續影格。",
		videoTitle: "影片匯入設定",
		playbackSpeed: "播放速度",
		import: "匯入",
		videoNotice: "若匯入失敗或想提升效能，可能需要在瀏覽器中關閉硬體加速。",
		themeDark: "🌙 深色",
		themeLight: "☀️ 淺色",
		themeKawaii: "👼 妄想天使",
		estFileSize: "預估檔案大小",
		fetching: "讀取中…",
		failed: "失敗",
		notSupported: "不是支援的圖片或影片格式",
		corsBlocked: "所有來源都被封鎖（CORS）",
		changedTo: "已調整為 {w}x{h}",
		usingNoMip: "使用 {w}x{h}，無 mipmap",
		invalidFilename: "檔名含有無效字元",
		startFrame: "起始影格：",
		endFrame: "結束影格：",
		startTime: "起始時間（秒）：",
		endTime: "結束時間（秒）：",
		importAll: "匯入所有影格",
		confirmFrames: "其餘影格因超過影格上限而被略過。按「取消」可保留所有影格。"
	}
};

var currentLang = localStorage.getItem("vtf-lang") ||
	((navigator.language || "en").toLowerCase().indexOf("zh") === 0 ? "zh" : "en");

function t(key, vars) {
	var dict = I18N[currentLang] || I18N.en;
	var str = (dict[key] != null ? dict[key] : (I18N.en[key] != null ? I18N.en[key] : key));
	if (vars) {
		for (var k in vars) str = str.replace(new RegExp("\\{" + k + "\\}", "g"), vars[k]);
	}
	return str;
}

function applyI18n() {
	document.querySelectorAll("[data-i18n]").forEach(function (el) {
		el.textContent = t(el.getAttribute("data-i18n"));
	});
	document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
		el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
	});
	document.documentElement.lang = currentLang === "zh" ? "zh-Hant" : "en";
	var lt = document.getElementById("langToggle");
	if (lt) lt.textContent = currentLang === "zh" ? "EN" : "中";
}

function toggleLang() {
	currentLang = currentLang === "zh" ? "en" : "zh";
	localStorage.setItem("vtf-lang", currentLang);
	applyI18n();
}

// ----- Theme -----
var THEME_ORDER = ["dark", "light", "kawaii"];

function applyTheme(theme) {
	if (THEME_ORDER.indexOf(theme) === -1) theme = "dark";
	document.documentElement.setAttribute("data-theme", theme);
	var sel = document.getElementById("themeSelect");
	if (sel) sel.value = theme;
}

function setTheme(theme) {
	localStorage.setItem("vtf-theme", theme);
	applyTheme(theme);
}

(function initTheme() {
	var saved = localStorage.getItem("vtf-theme");
	if (!saved) saved = (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) ? "light" : "dark";
	document.documentElement.setAttribute("data-theme", saved);
})();

document.addEventListener("DOMContentLoaded", function () {
	applyI18n();
	applyTheme(document.documentElement.getAttribute("data-theme") || "dark");
});
