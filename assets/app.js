(function () {
  "use strict";

  const chapters = window.SIGNAL_CHAPTERS || [];
  const STORAGE_KEY = "signals-study-progress-v1";
  const PDF_PAGE_OFFSET = 14;
  const $ = (selector, root) => (root || document).querySelector(selector);
  const $$ = (selector, root) => Array.from((root || document).querySelectorAll(selector));

  const allSections = chapters.flatMap((chapter, chapterIndex) =>
    chapter.sections.map((section, sectionIndex) => ({
      ...section,
      chapter,
      chapterIndex,
      sectionIndex
    }))
  );
  const sectionById = new Map(allSections.map((section) => [section.id, section]));
  const chapterById = new Map(chapters.map((chapter) => [chapter.id, chapter]));
  const totalSections = allSections.length;
  const allFormulas = [];
  allSections.forEach((section) => {
    (section.formulas || []).forEach((formula, index) => {
      allFormulas.push({
        ...formula,
        id: `${section.id}-formula-${index}`,
        formulaIndex: index,
        section,
        chapter: section.chapter,
        plainExpr: decodeHtml(formula.expr)
      });
    });
  });
  const formulaById = new Map(allFormulas.map((formula) => [formula.id, formula]));

  const ui = {
    filter: "all",
    searchIndex: 0,
    searchResults: [],
    expanded: new Set(),
    noteSaveTimer: null,
    mindmapZoom: 1,
    formulaChapter: "all",
    formulaQuery: "",
    formulaMode: "browse",
    formulaRecallId: null,
    formulaRevealed: false
  };

  const CHAPTER_GROUPS = {
    ch1: {
      "1.0": "引言",
      "1.1": "信号的描述和分类",
      "1.2": "信号的基本特性",
      "1.3": "信号的基本运算",
      "1.4": "奇异信号",
      "1.5": "系统的描述",
      "1.6": "系统的特性和分类",
      "1.7": "信号与系统的分析方法",
      ex: "本章习题与复盘"
    },
    ch2: {
      "2.1": "连续时间基本信号",
      "2.2": "卷积积分",
      "2.3": "信号的相关分析",
      "2.4": "零输入响应",
      "2.5": "零状态响应",
      ex: "本章习题与复盘"
    },
    ch3: {
      "3.0": "引言",
      "3.1": "信号的正交分解",
      "3.2": "连续时间傅里叶级数",
      "3.3": "周期信号频谱",
      "3.4": "连续时间傅里叶变换",
      "3.5": "傅里叶变换性质",
      "3.6": "周期信号的傅里叶变换",
      "3.7": "抽样定理",
      "3.8": "连续系统频域分析",
      "3.9": "相关函数与能量谱",
      ex: "本章习题与复盘"
    },
    ch4: {
      "4.0": "引言",
      "4.1": "拉普拉斯变换",
      "4.2": "单边拉氏变换性质",
      "4.3": "逆变换",
      "4.4": "系统复频域分析",
      "4.5": "微分方程的复频域解",
      "4.6": "RLC 系统分析",
      "4.7": "系统表示与模拟",
      "4.8": "系统函数与特性",
      ex: "本章习题与复盘"
    },
    ch5: {
      "5.0": "引言",
      "5.1": "离散时间基本信号",
      "5.2": "卷积和",
      "5.3": "离散系统基本概念",
      "5.4": "离散系统响应",
      ex: "本章习题与复盘"
    },
    ch6: {
      "6.0": "引言",
      "6.1": "周期序列傅里叶级数",
      "6.2": "离散时间傅里叶变换",
      "6.3": "周期序列的 DTFT",
      "6.4": "DTFT 性质",
      "6.5": "离散傅里叶变换",
      "6.6": "离散系统频域分析",
      ex: "本章习题与复盘"
    },
    ch7: {
      "7.0": "引言",
      "7.1": "Z 变换",
      "7.2": "双边 Z 变换性质",
      "7.3": "Z 域逆变换",
      "7.4": "单边 Z 变换",
      "7.5": "离散系统 Z 域分析",
      "7.6": "差分方程的 Z 域解",
      "7.7": "系统表示与模拟",
      "7.8": "系统函数与特性",
      ex: "本章习题与复盘"
    },
    ch8: {
      "8.0": "引言",
      "8.1": "状态方程建立",
      "8.2": "状态方程求解",
      "8.3": "可控性与可观测性",
      ex: "本章习题与复盘"
    }
  };

  const defaultState = {
    version: 1,
    read: {},
    mastered: {},
    bookmarks: {},
    notes: {},
    lastSection: null
  };

  let state = loadState();

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function stripHtml(value) {
    return String(value == null ? "" : value).replace(/<[^>]*>/g, "");
  }

  function decodeHtml(value) {
    const element = document.createElement("textarea");
    element.innerHTML = String(value == null ? "" : value);
    return element.value.replace(/\u00a0/g, " ").trim();
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return structuredCloneSafe(defaultState);
      const parsed = JSON.parse(raw);
      return normalizeState(parsed);
    } catch (error) {
      return structuredCloneSafe(defaultState);
    }
  }

  function structuredCloneSafe(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function normalizeState(input) {
    return {
      version: 1,
      read: input && typeof input.read === "object" && input.read ? input.read : {},
      mastered: input && typeof input.mastered === "object" && input.mastered ? input.mastered : {},
      bookmarks: input && typeof input.bookmarks === "object" && input.bookmarks ? input.bookmarks : {},
      notes: input && typeof input.notes === "object" && input.notes ? input.notes : {},
      lastSection: input && typeof input.lastSection === "string" ? input.lastSection : null
    };
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      showToast("浏览器未允许保存学习数据");
    }
  }

  function isRead(section) {
    return Boolean(state.read[section.id] || state.mastered[section.id]);
  }

  function isMastered(section) {
    return Boolean(state.mastered[section.id]);
  }

  function sectionProgress(section) {
    if (isMastered(section)) return 1;
    if (isRead(section)) return 0.5;
    return 0;
  }

  function chapterStats(chapter) {
    const total = chapter.sections.length;
    const read = chapter.sections.filter(isRead).length;
    const mastered = chapter.sections.filter(isMastered).length;
    const progress = total
      ? chapter.sections.reduce((sum, section) => sum + sectionProgress(section), 0) / total
      : 0;
    return { total, read, mastered, progress };
  }

  function totalStats() {
    const read = allSections.filter(isRead).length;
    const mastered = allSections.filter(isMastered).length;
    const progress = totalSections
      ? allSections.reduce((sum, section) => sum + sectionProgress(section), 0) / totalSections
      : 0;
    return { read, mastered, progress };
  }

  function statusLabel(section) {
    if (isMastered(section)) return "已掌握";
    if (isRead(section)) return "学习中";
    return "未开始";
  }

  function statusClass(section) {
    if (isMastered(section)) return "mastered";
    if (isRead(section)) return "read";
    return "";
  }

  function pct(value) {
    return Math.round(value * 100);
  }

  function sourcePage(section) {
    return Math.max(15, section.pages[0] + PDF_PAGE_OFFSET);
  }

  function sourceUrl(section) {
    return `assets/book.pdf#page=${sourcePage(section)}&zoom=page-width`;
  }

  function groupKey(section) {
    if (/^\d+\.\d+\.\d+$/.test(section.no)) {
      return section.no.split(".").slice(0, 2).join(".");
    }
    if (/^\d+\.\d+$/.test(section.no)) return section.no;
    return "ex";
  }

  function buildGroups(chapter) {
    const map = new Map();
    chapter.sections.forEach((section) => {
      const key = groupKey(section);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(section);
    });
    const labels = CHAPTER_GROUPS[chapter.id] || {};
    return Array.from(map.entries()).map(([key, sections]) => ({
      key,
      label: labels[key] || (key === "ex" ? "本章习题" : sections[0].title),
      sections
    }));
  }

  function parseRoute() {
    const raw = (location.hash || "#/overview").replace(/^#\/?/, "");
    const parts = raw.split("/").filter(Boolean);
    if (parts[0] === "chapter" && chapterById.has(parts[1])) {
      return {
        view: "chapter",
        chapterId: parts[1],
        sectionId: parts[2] && sectionById.has(parts[2]) ? parts[2] : null
      };
    }
    if (parts[0] === "formulas") {
      return { view: "formulas" };
    }
    return { view: "overview" };
  }

  function navigate(hash) {
    if (location.hash === hash) {
      render();
      return;
    }
    location.hash = hash;
  }

  function render() {
    const route = parseRoute();
    closeMobileNav();
    const fullscreenMap = $(".mindmap-card.fullscreen");
    if (fullscreenMap) fullscreenMap.classList.remove("fullscreen");
    document.body.classList.remove("mindmap-open");
    if (route.view === "chapter") {
      renderChapter(route.chapterId, route.sectionId);
      document.title = `第 ${chapterById.get(route.chapterId).num} 章 · ${chapterById.get(route.chapterId).title}`;
    } else if (route.view === "formulas") {
      renderFormulas();
      document.title = "公式速查卡 · 信号与系统";
    } else {
      renderOverview();
      document.title = "信号与系统 · 学习台";
    }
    updateGlobalProgress();
    updateSidebarActive(route);
    scrollToTop();
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function renderSidebar() {
    const nav = $("#chapterNav");
    nav.innerHTML = chapters.map((chapter) => {
      const stats = chapterStats(chapter);
      return `
        <a href="#/chapter/${chapter.id}" data-nav-chapter="${chapter.id}">
          <span class="nav-number">${chapter.num}</span>
          <span class="nav-copy">
            <strong>${escapeHtml(chapter.title)}</strong>
            <span class="nav-bar"><i style="width:${pct(stats.progress)}%"></i></span>
          </span>
          <span class="nav-percent">${pct(stats.progress)}%</span>
        </a>`;
    }).join("");
    $("#chapterCount").textContent = `${chapters.length} 章`;
    $$("[data-formula-count]").forEach((element) => {
      element.textContent = String(allFormulas.length);
    });
  }

  function updateSidebarActive(route) {
    $$("[data-nav-chapter]").forEach((link) => {
      link.classList.toggle("active", route.view === "chapter" && link.dataset.navChapter === route.chapterId);
    });
    $$("[data-nav-formulas]").forEach((link) => {
      link.classList.toggle("active", route.view === "formulas");
    });
  }

  function updateGlobalProgress() {
    const stats = totalStats();
    const percent = pct(stats.progress);
    const ring = $("#totalRing");
    ring.style.setProperty("--progress", percent);
    $("#totalPercent").innerHTML = `${percent}<small>%</small>`;
    $("#totalProgressText").textContent = `${stats.read} / ${totalSections} 小节`;
    $("#masteredText").textContent = `已掌握 ${stats.mastered} 节`;

    chapters.forEach((chapter) => {
      const chapterData = chapterStats(chapter);
      const nav = $(`[data-nav-chapter="${chapter.id}"]`);
      if (nav) {
        const bar = $(".nav-bar i", nav);
        const label = $(".nav-percent", nav);
        if (bar) bar.style.width = `${pct(chapterData.progress)}%`;
        if (label) label.textContent = `${pct(chapterData.progress)}%`;
      }
      $$(`[data-chapter-progress="${chapter.id}"]`).forEach((bar) => {
        bar.style.width = `${pct(chapterData.progress)}%`;
      });
      $$(`[data-chapter-percent="${chapter.id}"]`).forEach((label) => {
        label.textContent = `${pct(chapterData.progress)}%`;
      });
      $$(`[data-chapter-read="${chapter.id}"]`).forEach((label) => {
        label.textContent = `${chapterData.read}/${chapterData.total}`;
      });
      $$(`[data-chapter-mastered="${chapter.id}"]`).forEach((label) => {
        label.textContent = `${chapterData.mastered}/${chapterData.total}`;
      });
    });
  }

  function renderBreadcrumb(route) {
    const crumb = $("#breadcrumb");
    if (route.view === "chapter") {
      const chapter = chapterById.get(route.chapterId);
      crumb.innerHTML = `
        <a href="#/overview">学习总览</a>
        <span class="separator">/</span>
        <span class="current">第 ${chapter.num} 章 · ${escapeHtml(chapter.title)}</span>`;
    } else if (route.view === "formulas") {
      crumb.innerHTML = `
        <a href="#/overview">学习总览</a>
        <span class="separator">/</span>
        <span class="current">公式速查卡</span>`;
    } else {
      crumb.innerHTML = `
        <span class="current">学习总览</span>
        <span class="separator">/</span>
        <span>${chapters.length} 章 · ${totalSections} 个学习单元</span>`;
    }
  }

  function renderOverview() {
    renderBreadcrumb({ view: "overview" });
    const stats = totalStats();
    const notesCount = Object.values(state.notes).filter((note) => String(note).trim()).length;
    const bookmarksCount = allSections.filter((section) => state.bookmarks[section.id]).length;
    const target = getContinueTarget();
    const targetChapter = target.chapter;
    const targetStats = chapterStats(targetChapter);

    const chapterCards = chapters.map((chapter) => {
      const chapterData = chapterStats(chapter);
      return `
        <article class="chapter-card" style="--chapter-accent:${chapter.accent}">
          <a class="chapter-card-link" href="#/chapter/${chapter.id}" aria-label="进入第 ${chapter.num} 章"></a>
          <div class="chapter-card-top">
            <div>
              <span class="chapter-id">CHAPTER ${chapter.num}</span>
              <h3>${escapeHtml(chapter.title)}</h3>
            </div>
            <span class="chapter-tag">${escapeHtml(chapter.tag)}</span>
          </div>
          <p>${escapeHtml(chapter.overview)}</p>
          <div class="chapter-card-progress">
            <div class="progress-track"><i style="width:${pct(chapterData.progress)}%"></i></div>
            <span>${pct(chapterData.progress)}%</span>
          </div>
          <div class="chapter-card-foot">
            <span>${chapterData.total} 个小节</span>
            <span>教材 p.${chapter.pages[0]}–${chapter.pages[1]}</span>
          </div>
        </article>`;
    }).join("");

    $("#appView").innerHTML = `
      <section class="hero">
        <div class="hero-copy">
          <span class="hero-kicker">SIGNALS &amp; SYSTEMS · STUDY WORKBENCH</span>
          <h1>把复杂系统，<br>拆成<em>可掌握的信号</em>。</h1>
          <p>依据《信号与系统（修订版）》构建的八章学习台。按小节推进、用思维导图串起结构，让每一次学习都有清晰的进度与落点。</p>
          <div class="hero-actions">
            <a class="button primary" href="#/chapter/${target.chapter.id}/${target.id}">
              继续学习
              <svg><use href="#icon-arrow"></use></svg>
            </a>
            <a class="button ghost-light" href="assets/book.pdf#page=15" target="_blank" rel="noreferrer">
              <svg><use href="#icon-pdf"></use></svg>
              翻阅原书
            </a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="oscilloscope">
            <span class="osc-label">LTI RESPONSE / TIME DOMAIN</span>
            <svg viewBox="0 0 520 200" preserveAspectRatio="none" aria-hidden="true">
              <path class="wave-ghost" d="M0 138 C40 138 40 108 80 108 S120 158 160 158 S200 78 240 78 S280 132 320 132 S360 112 400 112 S440 140 520 140"/>
              <path class="wave-main" d="M0 102 C24 102 24 87 48 87 S72 126 96 126 S120 60 144 60 S168 119 192 119 S216 78 240 78 S264 113 288 113 S312 52 336 52 S360 95 384 95 S408 72 432 72 S456 118 480 118 S504 108 520 108"/>
              <circle cx="336" cy="52" r="3.2" fill="#f4c982"/>
            </svg>
            <span class="osc-meta">f(t) → h(t) → y(t)</span>
          </div>
          <div class="hero-stats">
            <div class="hero-stat"><strong>${chapters.length}</strong><span>独立章节</span></div>
            <div class="hero-stat"><strong>${totalSections}</strong><span>学习小节</span></div>
            <div class="hero-stat"><strong>397</strong><span>教材页数</span></div>
          </div>
        </div>
      </section>

      <div class="section-heading">
        <div>
          <span class="eyebrow">LEARNING SNAPSHOT</span>
          <h2>学习概览</h2>
        </div>
        <p>每个小节设“已阅读 / 已掌握”两级状态，进度按 50% 与 100% 计入章节和总进度。</p>
      </div>

      <section class="overview-stats">
        <article class="stat-card">
          <span class="eyebrow">TOTAL PROGRESS</span>
          <strong>${pct(stats.progress)}<small>%</small></strong>
          <p>总学习进度</p>
        </article>
        <article class="stat-card">
          <span class="eyebrow">STUDIED</span>
          <strong>${stats.read}<small>/ ${totalSections}</small></strong>
          <p>至少阅读过的小节</p>
        </article>
        <article class="stat-card">
          <span class="eyebrow">MASTERED</span>
          <strong>${stats.mastered}<small>节</small></strong>
          <p>完成自检并标记掌握</p>
        </article>
        <article class="stat-card">
          <span class="eyebrow">NOTES &amp; MARKS</span>
          <strong>${notesCount + bookmarksCount}<small>项</small></strong>
          <p>${notesCount} 条笔记 · ${bookmarksCount} 个书签</p>
        </article>
      </section>

      <article class="continue-card">
        <div class="continue-index" style="background:${targetChapter.accent}">${targetChapter.num}</div>
        <div class="continue-copy">
          <span class="eyebrow">PICK UP WHERE YOU LEFT OFF</span>
          <strong>${escapeHtml(target.no)} ${escapeHtml(target.title)}</strong>
          <p>${escapeHtml(targetChapter.title)} · 本章进度 ${pct(targetStats.progress)}% · ${statusLabel(target)}</p>
        </div>
        <a class="button secondary" href="#/chapter/${targetChapter.id}/${target.id}">
          进入小节
          <svg><use href="#icon-arrow"></use></svg>
        </a>
      </article>

      <div class="section-heading">
        <div>
          <span class="eyebrow">CHAPTER ROADMAP</span>
          <h2>八章知识版图</h2>
        </div>
        <p>章节彼此独立，每章自带知识思维导图；从任意节点都能回到对应小节。</p>
      </div>
      <section class="chapter-grid">${chapterCards}</section>

      <div class="section-heading">
        <div>
          <span class="eyebrow">TOOLS &amp; NEXT ITERATION</span>
          <h2>学习工具</h2>
        </div>
        <p>公式速查已经上线；其余入口继续为后续扩展预留。</p>
      </div>
      <section class="feature-grid">
        <button class="feature-card" type="button" data-feature="章节自测">
          <span class="feature-badge">PLANNED</span>
          <span class="feature-icon"><svg><use href="#icon-target"></use></svg></span>
          <strong>章节自测</strong>
          <p>按小节生成选择、判断与公式填空，自动记录薄弱点。</p>
        </button>
        <button class="feature-card" type="button" data-feature="错题本">
          <span class="feature-badge">PLANNED</span>
          <span class="feature-icon"><svg><use href="#icon-note"></use></svg></span>
          <strong>错题本</strong>
          <p>把习题与自测错题关联回知识节点，形成复盘闭环。</p>
        </button>
        <a class="feature-card feature-card-live" href="#/formulas">
          <span class="feature-badge">LIVE</span>
          <span class="feature-icon"><svg><use href="#icon-spark"></use></svg></span>
          <strong>公式速查卡</strong>
          <p>汇总 ${allFormulas.length} 张公式卡，支持章节筛选、复制与随机抽背。</p>
        </a>
        <button class="feature-card" type="button" data-feature="学习打卡">
          <span class="feature-badge">PLANNED</span>
          <span class="feature-icon"><svg><use href="#icon-clock"></use></svg></span>
          <strong>学习打卡</strong>
          <p>记录每日学习时长与连续天数，生成周度学习回顾。</p>
        </button>
      </section>`;
  }

  function getContinueTarget() {
    if (state.lastSection && sectionById.has(state.lastSection)) {
      const last = sectionById.get(state.lastSection);
      if (!isMastered(last)) return last;
    }
    return allSections.find((section) => !isMastered(section)) || allSections[0];
  }

  function filteredFormulas() {
    const query = ui.formulaQuery.trim().toLowerCase();
    const terms = query.split(/\s+/).filter(Boolean);
    return allFormulas.filter((formula) => {
      if (ui.formulaChapter !== "all" && formula.chapter.id !== ui.formulaChapter) {
        return false;
      }
      if (!terms.length) return true;
      const haystack = [
        formula.label,
        formula.plainExpr,
        formula.note,
        formula.section.no,
        formula.section.title,
        formula.chapter.num,
        formula.chapter.title
      ].join(" ").toLowerCase();
      return terms.every((term) => haystack.includes(term));
    });
  }

  function renderFormulas() {
    renderBreadcrumb({ view: "formulas" });
    const chapterFilters = chapters.map((chapter) => {
      const count = allFormulas.filter((formula) => formula.chapter.id === chapter.id).length;
      return `
        <button class="formula-chapter-chip ${ui.formulaChapter === chapter.id ? "active" : ""}"
          type="button" data-formula-chapter="${chapter.id}" style="--chip-accent:${chapter.accent}">
          <span>${chapter.num}</span>${escapeHtml(chapter.title)}<i>${count}</i>
        </button>`;
    }).join("");

    $("#appView").innerHTML = `
      <section class="formula-hero">
        <div class="formula-hero-copy">
          <span class="hero-kicker">FORMULA INDEX · QUICK RECALL</span>
          <h1>公式速查<span>卡</span></h1>
          <p>把全书公式变成随手可查、可复制、可抽背的知识卡。按章节筛选，或直接搜索概念与符号，快速回到对应推导与教材页。</p>
          <div class="formula-hero-actions">
            <button class="button primary" type="button" data-formula-mode="recall">
              <svg><use href="#icon-spark"></use></svg>
              随机抽背
            </button>
            <a class="button secondary" href="#/overview">
              返回学习总览
              <svg><use href="#icon-arrow"></use></svg>
            </a>
          </div>
        </div>
        <div class="formula-hero-side">
          <span class="formula-monogram" aria-hidden="true">ƒ</span>
          <div class="formula-hero-stats">
            <div><strong>${allFormulas.length}</strong><span>张公式卡</span></div>
            <div><strong>${chapters.length}</strong><span>个章节</span></div>
            <div><strong>${totalSections}</strong><span>个知识落点</span></div>
          </div>
        </div>
      </section>

      <section class="formula-controls">
        <div class="formula-control-top">
          <label class="formula-search-box" for="formulaSearch">
            <svg><use href="#icon-search"></use></svg>
            <input id="formulaSearch" type="search" autocomplete="off"
              placeholder="搜索公式名称、符号或概念，如「卷积」「Sa」「稳定性」" value="${escapeHtml(ui.formulaQuery)}">
            <button type="button" class="formula-clear-search ${ui.formulaQuery ? "" : "is-hidden"}"
              data-action="clear-formula-search" aria-label="清空公式搜索">
              <svg><use href="#icon-close"></use></svg>
            </button>
          </label>
          <div class="formula-mode-switch" aria-label="公式查看模式">
            <button type="button" data-formula-mode="browse" class="${ui.formulaMode === "browse" ? "active" : ""}">
              卡片索引
            </button>
            <button type="button" data-formula-mode="recall" class="${ui.formulaMode === "recall" ? "active" : ""}">
              随机抽背
            </button>
          </div>
        </div>
        <div class="formula-chapter-filter">
          <button class="formula-chapter-chip ${ui.formulaChapter === "all" ? "active" : ""}"
            type="button" data-formula-chapter="all" style="--chip-accent:var(--accent)">
            <span>ALL</span>全部公式<i>${allFormulas.length}</i>
          </button>
          ${chapterFilters}
        </div>
        <div class="formula-result-bar">
          <span id="formulaResultCount"></span>
          <span>点击公式卡可复制，点击小节名可回到知识板块</span>
        </div>
      </section>

      <div class="formula-results" id="formulaResults"></div>`;

    renderFormulaResults();
  }

  function renderFormulaResults() {
    const results = filteredFormulas();
    const container = $("#formulaResults");
    if (!container) return;
    const resultCount = $("#formulaResultCount");
    if (resultCount) {
      resultCount.textContent = ui.formulaMode === "browse"
        ? `找到 ${results.length} / ${allFormulas.length} 张公式卡`
        : `当前抽背范围：${results.length} 张公式卡`;
    }
    $$("[data-formula-chapter]").forEach((button) => {
      button.classList.toggle("active", button.dataset.formulaChapter === ui.formulaChapter);
    });
    $$("[data-formula-mode]").forEach((button) => {
      button.classList.toggle("active", button.dataset.formulaMode === ui.formulaMode);
    });
    const clearButton = $(".formula-clear-search");
    if (clearButton) clearButton.classList.toggle("is-hidden", !ui.formulaQuery);

    if (!results.length) {
      container.innerHTML = `
        <div class="formula-empty">
          <span class="formula-empty-mark">∅</span>
          <h3>没有匹配的公式卡</h3>
          <p>尝试缩短关键词，或切换到其他章节。</p>
          <button class="button secondary" type="button" data-action="reset-formula-filter">重置筛选</button>
        </div>`;
      return;
    }

    if (ui.formulaMode === "recall") {
      if (!ui.formulaRecallId || !results.some((formula) => formula.id === ui.formulaRecallId)) {
        chooseRandomFormula(false);
      }
      const formula = formulaById.get(ui.formulaRecallId);
      container.innerHTML = renderRecallCard(formula, results.length);
      return;
    }

    container.innerHTML = `
      <div class="formula-card-grid">
        ${results.map((formula, index) => renderFormulaCard(formula, index)).join("")}
      </div>`;
  }

  function renderFormulaCard(formula, index) {
    const chapter = formula.chapter;
    const section = formula.section;
    return `
      <article class="formula-card" style="--card-accent:${chapter.accent}">
        <div class="formula-card-top">
          <span class="formula-card-id">CH ${chapter.num} · ${escapeHtml(section.no)}</span>
          <button class="formula-copy-button" type="button" data-copy-formula="${formula.id}"
            title="复制公式" aria-label="复制 ${escapeHtml(formula.label)}">
            <svg><use href="#icon-copy"></use></svg>
          </button>
        </div>
        <span class="formula-card-label">${escapeHtml(formula.label)}</span>
        <div class="formula-card-expression">${formula.expr}</div>
        ${formula.note ? `<p class="formula-card-note">${escapeHtml(formula.note)}</p>` : ""}
        <footer class="formula-card-footer">
          <a href="#/chapter/${chapter.id}/${section.id}">
            <span>${escapeHtml(section.no)}</span>${escapeHtml(section.title)}
          </a>
          <a href="${sourceUrl(section)}" target="_blank" rel="noreferrer">p.${section.pages[0]}</a>
        </footer>
        <span class="formula-card-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
      </article>`;
  }

  function renderRecallCard(formula, poolSize) {
    const chapter = formula.chapter;
    const section = formula.section;
    return `
      <div class="recall-shell">
        <div class="recall-heading">
          <span><strong>随机抽背</strong> · 在当前 ${poolSize} 张卡片中抽取</span>
          <span>先回忆，再显示公式</span>
        </div>
        <article class="recall-card" style="--card-accent:${chapter.accent}">
          <header class="recall-card-top">
            <div>
              <span class="recall-chapter">CH ${chapter.num} · ${escapeHtml(chapter.title)}</span>
              <span class="recall-section">${escapeHtml(section.no)} ${escapeHtml(section.title)}</span>
            </div>
            <button class="formula-copy-button" type="button" data-copy-formula="${formula.id}"
              title="复制公式" aria-label="复制当前公式">
              <svg><use href="#icon-copy"></use></svg>
            </button>
          </header>
          <div class="recall-prompt">
            <span class="eyebrow">RECALL THIS FORMULA</span>
            <h2>${escapeHtml(formula.label)}</h2>
            <p>回忆公式的完整形式、符号含义与适用条件。</p>
          </div>
          <div class="recall-answer ${ui.formulaRevealed ? "revealed" : "answer-hidden"}">
            <div class="recall-answer-content">
              <span class="recall-answer-label">公式</span>
              <div class="recall-expression">${formula.expr}</div>
              ${formula.note ? `<p>${escapeHtml(formula.note)}</p>` : ""}
            </div>
            ${ui.formulaRevealed ? "" : `
              <button class="recall-cover" type="button" data-action="formula-reveal">
                <span class="recall-cover-icon"><svg><use href="#icon-spark"></use></svg></span>
                <strong>点击显示公式</strong>
                <span>先在心里完整复述一遍</span>
              </button>`}
          </div>
          <footer class="recall-actions">
            <button class="button secondary" type="button" data-action="formula-reveal">
              ${ui.formulaRevealed ? "隐藏答案" : "显示答案"}
            </button>
            <button class="button primary" type="button" data-action="formula-next">
              换一张
              <svg><use href="#icon-arrow"></use></svg>
            </button>
            <a class="button secondary" href="#/chapter/${chapter.id}/${section.id}">查看对应小节</a>
            <a class="recall-source" href="${sourceUrl(section)}" target="_blank" rel="noreferrer">
              <svg><use href="#icon-pdf"></use></svg>教材 p.${section.pages[0]}
            </a>
          </footer>
        </article>
        <div class="recall-shortcuts">
          <span><kbd>Space</kbd> 显示 / 隐藏答案</span>
          <span><kbd>→</kbd> 换一张</span>
        </div>
      </div>`;
  }

  function chooseRandomFormula(avoidCurrent) {
    const results = filteredFormulas();
    if (!results.length) {
      ui.formulaRecallId = null;
      ui.formulaRevealed = false;
      return;
    }
    let pool = results;
    if (avoidCurrent && results.length > 1) {
      pool = results.filter((formula) => formula.id !== ui.formulaRecallId);
    }
    const choice = pool[Math.floor(Math.random() * pool.length)];
    ui.formulaRecallId = choice.id;
    ui.formulaRevealed = false;
  }

  function setFormulaMode(mode) {
    if (mode !== "browse" && mode !== "recall") return;
    ui.formulaMode = mode;
    if (mode === "recall") chooseRandomFormula(false);
    renderFormulaResults();
  }

  function setFormulaChapter(chapterId) {
    if (chapterId !== "all" && !chapterById.has(chapterId)) return;
    ui.formulaChapter = chapterId;
    const results = filteredFormulas();
    if (ui.formulaMode === "recall" && !results.some((formula) => formula.id === ui.formulaRecallId)) {
      chooseRandomFormula(false);
    }
    renderFormulaResults();
  }

  function toggleFormulaAnswer() {
    ui.formulaRevealed = !ui.formulaRevealed;
    renderFormulaResults();
  }

  function nextFormulaCard() {
    chooseRandomFormula(true);
    ui.formulaRevealed = false;
    renderFormulaResults();
  }

  function resetFormulaFilter() {
    ui.formulaChapter = "all";
    ui.formulaQuery = "";
    const input = $("#formulaSearch");
    if (input) input.value = "";
    renderFormulaResults();
  }

  async function copyFormula(formulaId) {
    const formula = formulaById.get(formulaId);
    if (!formula) return;
    const text = formula.plainExpr;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        fallbackCopyText(text);
      }
      showToast(`已复制：${formula.label}`);
    } catch (error) {
      try {
        fallbackCopyText(text);
        showToast(`已复制：${formula.label}`);
      } catch (fallbackError) {
        showToast("复制失败，请手动选择公式");
      }
    }
  }

  function fallbackCopyText(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    if (!copied) throw new Error("Copy command failed");
  }

  function renderChapter(chapterId, sectionId) {
    const chapter = chapterById.get(chapterId);
    if (!chapter) {
      navigate("#/overview");
      return;
    }
    ui.mindmapZoom = 1;
    renderBreadcrumb({ view: "chapter", chapterId });
    const stats = chapterStats(chapter);
    if (sectionId) {
      ui.expanded.add(sectionId);
      state.lastSection = sectionId;
      saveState();
    }

    $("#appView").innerHTML = `
      <section class="chapter-hero" style="--chapter-accent:${chapter.accent}">
        <div class="chapter-hero-grid">
          <div>
            <div class="chapter-title-row">
              <span class="chapter-number">${chapter.num}</span>
              <div>
                <span class="chapter-tag">CHAPTER ${chapter.num} · ${escapeHtml(chapter.tag)}</span>
                <h1>${escapeHtml(chapter.title)}</h1>
                <p class="chapter-overview">${escapeHtml(chapter.overview)}</p>
              </div>
            </div>
            <div class="chapter-meta">
              <span><svg><use href="#icon-bookmark"></use></svg>${stats.total} 个学习单元</span>
              <span><svg><use href="#icon-pdf"></use></svg>教材 p.${chapter.pages[0]}–${chapter.pages[1]}</span>
              <span><svg><use href="#icon-clock"></use></svg>建议 3–6 小时</span>
            </div>
          </div>
          <aside class="chapter-progress-panel">
            <div class="chapter-progress-head">
              <strong data-chapter-percent="${chapter.id}">${pct(stats.progress)}%</strong>
              <span>CHAPTER PROGRESS</span>
            </div>
            <div class="progress-track">
              <i data-chapter-progress="${chapter.id}" style="width:${pct(stats.progress)}%;background:${chapter.accent}"></i>
            </div>
            <div class="chapter-progress-split">
              <div>
                <strong data-chapter-read="${chapter.id}">${stats.read}/${stats.total}</strong>
                <span>已阅读</span>
              </div>
              <div>
                <strong data-chapter-mastered="${chapter.id}">${stats.mastered}/${stats.total}</strong>
                <span>已掌握</span>
              </div>
            </div>
            <div class="chapter-actions">
              <button class="button secondary" type="button" data-action="next-section" data-chapter="${chapter.id}">
                继续本章
                <svg><use href="#icon-arrow"></use></svg>
              </button>
              <a class="button secondary" href="assets/book.pdf#page=${chapter.pages[0] + PDF_PAGE_OFFSET}&zoom=page-width" target="_blank" rel="noreferrer">
                <svg><use href="#icon-pdf"></use></svg>教材
              </a>
            </div>
          </aside>
        </div>
      </section>

      ${renderMindmapCard(chapter)}

      <section class="sections-toolbar">
        <div>
          <span class="eyebrow">INDEPENDENT LEARNING BLOCKS</span>
          <h2>小节学习板块</h2>
          <p>每个板块可独立展开、记录笔记与更新进度。点击知识导图节点也可直达。</p>
        </div>
        <div class="toolbar-actions">
          <button type="button" data-filter="all" class="${ui.filter === "all" ? "active" : ""}">全部</button>
          <button type="button" data-filter="learning" class="${ui.filter === "learning" ? "active" : ""}">未掌握</button>
          <button type="button" data-filter="mastered" class="${ui.filter === "mastered" ? "active" : ""}">已掌握</button>
          <button type="button" data-filter="bookmarked" class="${ui.filter === "bookmarked" ? "active" : ""}">书签</button>
          <button type="button" data-action="toggle-all">展开全部</button>
        </div>
      </section>
      <div class="sections-list" id="sectionsList"></div>
      <article class="exercises-banner" style="--chapter-accent:${chapter.accent}">
        <div>
          <span class="eyebrow">REVIEW LOOP</span>
          <h3>学完一节，回到导图复述一次</h3>
          <p>能在不看笔记的情况下说清“概念 → 公式 → 适用条件”，再标记为已掌握。</p>
        </div>
        <a class="button secondary" href="assets/book.pdf#page=${chapter.sections[chapter.sections.length - 1].pages[0] + PDF_PAGE_OFFSET}&zoom=page-width" target="_blank" rel="noreferrer">
          查看本章习题
          <svg><use href="#icon-arrow"></use></svg>
        </a>
      </article>`;

    renderSectionList(chapter);
    bindMindmap(chapter);
    if (sectionId) {
      setTimeout(() => {
        const card = document.getElementById(`section-${sectionId}`);
        if (card) {
          card.scrollIntoView({ behavior: "smooth", block: "start" });
          card.classList.add("target-flash");
          setTimeout(() => card.classList.remove("target-flash"), 1600);
        }
      }, 90);
    }
  }

  function renderSectionList(chapter) {
    const list = $("#sectionsList");
    if (!list) return;
    let sections = chapter.sections;
    if (ui.filter === "learning") sections = sections.filter((section) => !isMastered(section));
    if (ui.filter === "mastered") sections = sections.filter(isMastered);
    if (ui.filter === "bookmarked") sections = sections.filter((section) => state.bookmarks[section.id]);

    if (!sections.length) {
      list.innerHTML = `
        <div class="search-empty">
          <div>
            <strong>这个筛选下还没有小节</strong>
            <p>切换筛选条件，或继续学习并添加书签。</p>
          </div>
        </div>`;
      return;
    }

    list.innerHTML = sections.map((section) => renderSectionCard(section, chapter)).join("");
  }

  function renderSectionCard(section, chapter) {
    const progress = sectionProgress(section);
    const open = ui.expanded.has(section.id);
    const bookmarked = Boolean(state.bookmarks[section.id]);
    const note = state.notes[section.id] || "";
    const formulaHtml = (section.formulas || []).map((formula) => `
      <div class="formula-item">
        <span class="formula-label">${escapeHtml(formula.label)}</span>
        <span class="formula">${formula.expr}</span>
        ${formula.note ? `<span class="formula-note">${escapeHtml(formula.note)}</span>` : ""}
      </div>`).join("");

    return `
      <article class="section-card ${open ? "open" : ""} ${isMastered(section) ? "mastered" : ""}"
        id="section-${section.id}"
        data-section-card="${section.id}"
        style="--section-accent:${chapter.accent}">
        <div class="section-summary-row">
          <button class="section-toggle" type="button" data-action="toggle-section" data-section="${section.id}" aria-expanded="${open}">
            <span class="section-code">${escapeHtml(section.no)}</span>
            <span class="section-title-wrap">
              <strong>${escapeHtml(section.title)}</strong>
              <small>${section.summary}</small>
            </span>
          </button>
          <div class="section-status">
            <div class="section-progress">
              <div class="progress-track"><i style="width:${pct(progress)}%"></i></div>
              <div class="section-progress-foot">
                <span class="status-pill ${statusClass(section)}" data-role="status">${statusLabel(section)}</span>
                <span class="section-percent" data-role="percent">${pct(progress)}%</span>
              </div>
            </div>
            <span class="toggle-chevron"><svg><use href="#icon-chevron"></use></svg></span>
          </div>
        </div>
        <div class="section-detail">
          <div class="detail-intro">
            <p>${section.summary}</p>
            <a class="source-link" href="${sourceUrl(section)}" target="_blank" rel="noreferrer">
              <svg><use href="#icon-pdf"></use></svg>教材 p.${section.pages[0]}
            </a>
          </div>
          <div class="knowledge-columns">
            <section class="knowledge-panel">
              <h4>核心要点</h4>
              <ul>${(section.points || []).map((point) => `<li>${point}</li>`).join("")}</ul>
            </section>
            <section class="knowledge-panel">
              <h4>关键公式 / 关系</h4>
              <div class="formula-list">${formulaHtml || '<span class="muted">以概念理解为主，暂无核心公式。</span>'}</div>
            </section>
          </div>
          <div class="pitfall"><strong>易错点</strong><span>${escapeHtml(section.pitfall)}</span></div>
          <div class="check-row">
            <svg><use href="#icon-check"></use></svg>
            <span><strong>自检：</strong>${escapeHtml(section.check)}</span>
          </div>
          <div class="section-actions">
            <button class="state-button ${isRead(section) ? "active" : ""}" type="button"
              data-action="read" data-section="${section.id}" aria-pressed="${isRead(section)}">
              <svg><use href="#icon-check"></use></svg>
              <span>${isRead(section) ? "已阅读" : "标记已阅读"}</span>
            </button>
            <button class="state-button ${isMastered(section) ? "active" : ""}" type="button"
              data-action="master" data-section="${section.id}" aria-pressed="${isMastered(section)}">
              <svg><use href="#icon-target"></use></svg>
              <span>${isMastered(section) ? "已掌握" : "标记已掌握"}</span>
            </button>
            <button class="state-button ${bookmarked ? "bookmarked" : ""}" type="button"
              data-action="bookmark" data-section="${section.id}" aria-pressed="${bookmarked}">
              <svg><use href="#icon-bookmark"></use></svg>
              <span>${bookmarked ? "已收藏" : "收藏"}</span>
            </button>
            <button class="state-button ${note.trim() ? "note-active" : ""}" type="button"
              data-action="toggle-note" data-section="${section.id}">
              <svg><use href="#icon-note"></use></svg>
              <span>笔记</span>
            </button>
            <a class="source-link" href="${sourceUrl(section)}" target="_blank" rel="noreferrer">
              <svg><use href="#icon-pdf"></use></svg>打开教材页
            </a>
          </div>
          <div class="note-editor ${note.trim() ? "visible" : ""}" data-note-editor="${section.id}">
            <label>
              <span>我的笔记</span>
              <span class="notes-status" data-note-status="${section.id}">自动保存于本机</span>
            </label>
            <textarea data-note-input="${section.id}" placeholder="记下推导、疑问、例题结论或老师强调的考点…">${escapeHtml(note)}</textarea>
          </div>
        </div>
      </article>`;
  }

  function renderMindmapCard(chapter) {
    return `
      <article class="mindmap-card" data-mindmap-card="${chapter.id}">
        <div class="mindmap-head">
          <div>
            <span class="eyebrow">KNOWLEDGE MAP</span>
            <h2>第 ${chapter.num} 章 · 知识思维导图</h2>
            <p>点击任意分枝或末级节点，可直接跳转到对应小节。</p>
          </div>
          <div class="mindmap-tools">
            <button class="icon-button" type="button" data-mind-action="zoom-out" aria-label="缩小导图"><svg><use href="#icon-minus"></use></svg></button>
            <button class="icon-button" type="button" data-mind-action="fit" aria-label="适应宽度"><svg><use href="#icon-expand"></use></svg></button>
            <button class="icon-button" type="button" data-mind-action="zoom-in" aria-label="放大导图"><svg><use href="#icon-plus"></use></svg></button>
            <button class="icon-button" type="button" data-mind-action="fullscreen" aria-label="全屏查看导图"><svg><use href="#icon-expand"></use></svg></button>
          </div>
        </div>
        <div class="mindmap-scroll" tabindex="0" aria-label="知识导图画布，可上下、左右滚动浏览">${renderMindmapSvg(chapter)}</div>
        <div class="mindmap-note">滚轮或双指可上下左右浏览；桌面端也可拖动空白区域平移。点击节点跳转小节。</div>
      </article>`;
  }

  function wrapText(text, maxChars, maxLines) {
    const raw = String(text || "");
    const chunks = [];
    let index = 0;
    while (index < raw.length && chunks.length < maxLines) {
      let end = Math.min(raw.length, index + maxChars);
      if (end < raw.length) {
        const segment = raw.slice(index, end);
        const lastSpace = segment.lastIndexOf(" ");
        if (lastSpace > 3) end = index + lastSpace;
      }
      chunks.push(raw.slice(index, end));
      index = end;
      while (raw[index] === " ") index += 1;
    }
    if (index < raw.length && chunks.length) {
      chunks[chunks.length - 1] = `${chunks[chunks.length - 1].slice(0, Math.max(1, maxChars - 1))}…`;
    }
    return chunks;
  }

  function renderMindmapSvg(chapter) {
    const groups = buildGroups(chapter);
    const leafHeight = 30;
    const leafGap = 8;
    const groupPadding = 18;
    const branchGap = 18;
    let cursor = 28;
    const layout = groups.map((group) => {
      const contentHeight = group.sections.length * leafHeight + Math.max(0, group.sections.length - 1) * leafGap;
      const groupHeight = Math.max(48, contentHeight + groupPadding);
      const branchY = cursor + groupHeight / 2;
      const startY = cursor + (groupHeight - contentHeight) / 2;
      const item = { ...group, groupHeight, branchY, startY };
      cursor += groupHeight + branchGap;
      return item;
    });
    const height = cursor + 20;
    const rootX = 24;
    const rootW = 174;
    const branchX = 232;
    const branchW = 210;
    const leafX = 478;
    const leafW = 430;
    const rootY = 26;
    const accent = chapter.accent;
    const rootTitleLines = wrapText(chapter.title, 8, 3);
    const coreLines = wrapText(chapter.core, 13, 3);

    const rootSvg = `
      <g class="mind-root">
        <rect x="${rootX}" y="${rootY}" width="${rootW}" height="148" rx="20" style="fill:var(--deep)"/>
        <text x="${rootX + 16}" y="${rootY + 24}" class="mind-eyebrow" style="fill:#d9b276;font-size:8px;font-weight:700;letter-spacing:1.5px">CHAPTER ${chapter.num}</text>
        ${rootTitleLines.map((line, index) => `
          <text x="${rootX + 16}" y="${rootY + 47 + index * 18}" style="fill:#fff8ec;font-family:var(--serif);font-size:14px;font-weight:700">${escapeHtml(line)}</text>`).join("")}
        <line x1="${rootX + 16}" y1="${rootY + 100}" x2="${rootX + rootW - 20}" y2="${rootY + 100}" stroke="rgba(255,255,255,.16)"/>
        ${coreLines.map((line, index) => `
          <text x="${rootX + 16}" y="${rootY + 117 + index * 11}" style="fill:rgba(255,248,236,.56);font-size:7px">${escapeHtml(line)}</text>`).join("")}
      </g>`;

    const branches = layout.map((group, groupIndex) => {
      const path = `M${rootX + rootW} ${rootY + 74} C${rootX + rootW + 28} ${rootY + 74}, ${branchX - 28} ${group.branchY}, ${branchX} ${group.branchY}`;
      const branchLines = wrapText(`${group.key === "ex" ? "" : group.key + " "}${group.label}`, 14, 2);
      const leafSvg = group.sections.map((section, index) => {
        const y = group.startY + index * (leafHeight + leafGap);
        const label = `${section.no} ${section.title}`;
        const shortLabel = label.length > 34 ? `${label.slice(0, 33)}…` : label;
        return `
          <g class="mind-leaf" data-goto-chapter="${chapter.id}" data-goto-section="${section.id}" role="link" tabindex="0" aria-label="跳转到 ${escapeHtml(label)}">
            <title>${escapeHtml(label)}</title>
            <rect x="${leafX}" y="${y}" width="${leafW}" height="${leafHeight}" rx="8"
              style="fill:var(--surface);stroke:color-mix(in srgb, ${accent} 25%, var(--line));stroke-width:1"/>
            <circle cx="${leafX + 13}" cy="${y + leafHeight / 2}" r="2.3" style="fill:${accent}"/>
            <text x="${leafX + 23}" y="${y + 19}" style="fill:var(--ink);font-size:8.5px">${escapeHtml(shortLabel)}</text>
          </g>`;
      }).join("");
      const leafPaths = group.sections.map((section, index) => {
        const y = group.startY + index * (leafHeight + leafGap) + leafHeight / 2;
        return `<path class="mind-branch" d="M${branchX + branchW} ${group.branchY} C${branchX + branchW + 22} ${group.branchY}, ${leafX - 22} ${y}, ${leafX} ${y}" style="stroke:${accent};stroke-opacity:.38"/>`;
      }).join("");
      return `
        <path class="mind-branch" d="${path}" style="stroke:${accent};stroke-opacity:.52"/>
        ${leafPaths}
        <g class="mind-branch-label" data-goto-chapter="${chapter.id}" data-goto-section="${group.sections[0].id}" role="link" tabindex="0" aria-label="跳转到 ${escapeHtml(group.label)}">
          <title>${escapeHtml(group.label)} · ${group.sections.length} 个小节</title>
          <rect x="${branchX}" y="${group.branchY - 23}" width="${branchW}" height="46" rx="11"
            style="fill:${accent};fill-opacity:${groupIndex % 2 === 0 ? ".12" : ".07"};stroke:${accent};stroke-opacity:.35"/>
          ${branchLines.map((line, index) => `
            <text x="${branchX + 14}" y="${group.branchY + (branchLines.length === 1 ? 4 : -2 + index * 13)}"
              style="fill:var(--ink);font-size:9.5px;font-weight:600">${escapeHtml(line)}</text>`).join("")}
          <text x="${branchX + branchW - 11}" y="${group.branchY + 3}" text-anchor="end"
            style="fill:${accent};font-family:var(--mono);font-size:7px">${group.sections.length}</text>
        </g>
        ${leafSvg}`;
    }).join("");

    return `
      <svg viewBox="0 0 940 ${Math.ceil(height)}" role="img" aria-label="第 ${chapter.num} 章知识思维导图" data-mindmap-svg>
        ${rootSvg}
        ${branches}
      </svg>`;
  }

  function bindMindmap(chapter) {
    const card = $(`[data-mindmap-card="${chapter.id}"]`);
    if (!card) return;
    card.querySelectorAll("[data-goto-section]").forEach((node) => {
      node.addEventListener("click", () => goToSection(chapter.id, node.dataset.gotoSection));
      node.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          goToSection(chapter.id, node.dataset.gotoSection);
        }
      });
    });
    bindMindmapPanning(card);
  }

  function bindMindmapPanning(card) {
    const scroll = $(".mindmap-scroll", card);
    if (!scroll || scroll.dataset.panBound === "true") return;
    scroll.dataset.panBound = "true";

    let drag = null;
    scroll.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      if (!card.classList.contains("fullscreen")) return;
      if (event.target.closest("[data-goto-section]")) return;
      drag = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        startLeft: scroll.scrollLeft,
        startTop: scroll.scrollTop,
        moved: false
      };
      scroll.setPointerCapture(event.pointerId);
    });

    scroll.addEventListener("pointermove", (event) => {
      if (!drag || drag.pointerId !== event.pointerId) return;
      const dx = event.clientX - drag.startX;
      const dy = event.clientY - drag.startY;
      if (!drag.moved && Math.hypot(dx, dy) > 3) {
        drag.moved = true;
        scroll.classList.add("is-panning");
      }
      if (!drag.moved) return;
      scroll.scrollLeft = drag.startLeft - dx;
      scroll.scrollTop = drag.startTop - dy;
      event.preventDefault();
    });

    const finishDrag = (event) => {
      if (!drag || drag.pointerId !== event.pointerId) return;
      if (scroll.hasPointerCapture(event.pointerId)) {
        scroll.releasePointerCapture(event.pointerId);
      }
      scroll.classList.remove("is-panning");
      drag = null;
    };
    scroll.addEventListener("pointerup", finishDrag);
    scroll.addEventListener("pointercancel", finishDrag);
    scroll.addEventListener("lostpointercapture", () => {
      scroll.classList.remove("is-panning");
      drag = null;
    });
    scroll.addEventListener("dragstart", (event) => event.preventDefault());
  }

  function goToSection(chapterId, sectionId) {
    ui.expanded.add(sectionId);
    state.lastSection = sectionId;
    saveState();
    const target = `#/chapter/${chapterId}/${sectionId}`;
    if (location.hash === target) {
      renderChapter(chapterId, sectionId);
    } else {
      location.hash = target;
    }
  }

  function toggleSection(sectionId) {
    const card = document.getElementById(`section-${sectionId}`);
    if (!card) return;
    const open = !card.classList.contains("open");
    card.classList.toggle("open", open);
    const button = $(".section-toggle", card);
    if (button) button.setAttribute("aria-expanded", String(open));
    if (open) {
      ui.expanded.add(sectionId);
      state.lastSection = sectionId;
      saveState();
    } else {
      ui.expanded.delete(sectionId);
    }
  }

  function updateSectionCard(sectionId) {
    const section = sectionById.get(sectionId);
    const card = document.getElementById(`section-${sectionId}`);
    if (!section || !card) return;
    const progress = sectionProgress(section);
    const read = isRead(section);
    const mastered = isMastered(section);
    const bookmarked = Boolean(state.bookmarks[sectionId]);
    const note = state.notes[sectionId] || "";
    card.classList.toggle("mastered", mastered);
    const bar = $(".section-progress .progress-track i", card);
    if (bar) bar.style.width = `${pct(progress)}%`;
    const status = $('[data-role="status"]', card);
    if (status) {
      status.textContent = statusLabel(section);
      status.className = `status-pill ${statusClass(section)}`;
    }
    const percent = $('[data-role="percent"]', card);
    if (percent) percent.textContent = `${pct(progress)}%`;
    const readButton = $('[data-action="read"]', card);
    if (readButton) {
      readButton.classList.toggle("active", read);
      readButton.setAttribute("aria-pressed", String(read));
      const label = $("span", readButton);
      if (label) label.textContent = read ? "已阅读" : "标记已阅读";
    }
    const masterButton = $('[data-action="master"]', card);
    if (masterButton) {
      masterButton.classList.toggle("active", mastered);
      masterButton.setAttribute("aria-pressed", String(mastered));
      const label = $("span", masterButton);
      if (label) label.textContent = mastered ? "已掌握" : "标记已掌握";
    }
    const bookmarkButton = $('[data-action="bookmark"]', card);
    if (bookmarkButton) {
      bookmarkButton.classList.toggle("bookmarked", bookmarked);
      bookmarkButton.setAttribute("aria-pressed", String(bookmarked));
      const label = $("span", bookmarkButton);
      if (label) label.textContent = bookmarked ? "已收藏" : "收藏";
    }
    const noteButton = $('[data-action="toggle-note"]', card);
    if (noteButton) noteButton.classList.toggle("note-active", Boolean(note.trim()));
    updateGlobalProgress();
  }

  function handleRead(sectionId) {
    const section = sectionById.get(sectionId);
    if (!section) return;
    if (isMastered(section)) {
      delete state.mastered[sectionId];
      state.read[sectionId] = true;
    } else if (state.read[sectionId]) {
      delete state.read[sectionId];
    } else {
      state.read[sectionId] = true;
    }
    state.lastSection = sectionId;
    saveState();
    updateSectionCard(sectionId);
    refreshFilteredList(section);
  }

  function handleMaster(sectionId) {
    const section = sectionById.get(sectionId);
    if (!section) return;
    if (isMastered(section)) {
      delete state.mastered[sectionId];
    } else {
      state.mastered[sectionId] = true;
      state.read[sectionId] = true;
    }
    state.lastSection = sectionId;
    saveState();
    updateSectionCard(sectionId);
    refreshFilteredList(section);
  }

  function handleBookmark(sectionId) {
    if (state.bookmarks[sectionId]) delete state.bookmarks[sectionId];
    else state.bookmarks[sectionId] = true;
    saveState();
    updateSectionCard(sectionId);
    refreshFilteredList(sectionById.get(sectionId));
  }

  function refreshFilteredList(section) {
    if (ui.filter === "all") return;
    const shouldRefresh =
      ui.filter === "bookmarked" ||
      ui.filter === "learning" ||
      ui.filter === "mastered";
    if (shouldRefresh) renderSectionList(section.chapter);
  }

  function toggleNote(sectionId) {
    const card = document.getElementById(`section-${sectionId}`);
    if (!card) return;
    const editor = $(`[data-note-editor="${sectionId}"]`, card);
    if (!editor) return;
    editor.classList.toggle("visible");
    if (editor.classList.contains("visible")) {
      const textarea = $("textarea", editor);
      if (textarea) setTimeout(() => textarea.focus(), 40);
    }
  }

  function saveNote(sectionId, value, statusElement) {
    state.notes[sectionId] = value;
    state.lastSection = sectionId;
    if (statusElement) statusElement.textContent = "正在保存…";
    clearTimeout(ui.noteSaveTimer);
    ui.noteSaveTimer = setTimeout(() => {
      saveState();
      if (statusElement) {
        statusElement.textContent = "已自动保存";
        setTimeout(() => {
          if (statusElement.isConnected) statusElement.textContent = "自动保存于本机";
        }, 1200);
      }
      const card = document.getElementById(`section-${sectionId}`);
      const noteButton = card && $('[data-action="toggle-note"]', card);
      if (noteButton) noteButton.classList.toggle("note-active", Boolean(value.trim()));
    }, 380);
  }

  function handleNextSection(chapterId) {
    const chapter = chapterById.get(chapterId);
    if (!chapter) return;
    const target = chapter.sections.find((section) => !isMastered(section)) ||
      chapter.sections.find((section) => !isRead(section)) ||
      chapter.sections[0];
    goToSection(chapter.id, target.id);
  }

  function toggleAllSections() {
    const route = parseRoute();
    if (route.view !== "chapter") return;
    const chapter = chapterById.get(route.chapterId);
    const allOpen = chapter.sections.every((section) => ui.expanded.has(section.id));
    if (allOpen) {
      chapter.sections.forEach((section) => ui.expanded.delete(section.id));
    } else {
      chapter.sections.forEach((section) => ui.expanded.add(section.id));
    }
    renderSectionList(chapter);
    const button = $('[data-action="toggle-all"]');
    if (button) button.textContent = allOpen ? "展开全部" : "收起全部";
  }

  function setFilter(filter) {
    ui.filter = filter;
    const route = parseRoute();
    if (route.view !== "chapter") return;
    const chapter = chapterById.get(route.chapterId);
    $$(".toolbar-actions [data-filter]").forEach((button) => {
      button.classList.toggle("active", button.dataset.filter === filter);
    });
    renderSectionList(chapter);
  }

  function handleMindAction(action) {
    const card = $(".mindmap-card");
    if (!card) return;
    const scroll = $(".mindmap-scroll", card);
    const svg = $("svg[data-mindmap-svg]", card);
    if (action === "fullscreen") {
      card.classList.toggle("fullscreen");
      const isFullscreen = card.classList.contains("fullscreen");
      document.body.classList.toggle("mindmap-open", isFullscreen);
      const fullscreenButton = $('[data-mind-action="fullscreen"]', card);
      if (fullscreenButton) {
        fullscreenButton.setAttribute("aria-label", isFullscreen ? "退出导图全屏" : "全屏查看导图");
        fullscreenButton.classList.toggle("active", isFullscreen);
      }
      if (isFullscreen) {
        if (scroll) scroll.scrollTo({ top: 0, left: 0 });
        setTimeout(() => {
          const active = $("[data-mindmap-svg]");
          if (active) active.style.width = "";
          if (scroll) scroll.focus({ preventScroll: true });
        }, 140);
      }
      return;
    }
    if (action === "fit") {
      ui.mindmapZoom = 1;
      if (svg) {
        svg.style.width = "";
        svg.style.height = "";
      }
      if (scroll) {
        scroll.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
      return;
    }
    if (action === "zoom-in") ui.mindmapZoom = Math.min(1.8, ui.mindmapZoom + 0.15);
    if (action === "zoom-out") ui.mindmapZoom = Math.max(0.75, ui.mindmapZoom - 0.15);
    if (svg) {
      const baseWidth = 940;
      svg.style.width = `${Math.round(baseWidth * ui.mindmapZoom)}px`;
      svg.style.maxWidth = "none";
    }
  }

  function openSearch() {
    const modal = $("#searchModal");
    if (!modal) return;
    modal.hidden = false;
    document.body.classList.add("modal-open");
    const input = $("#searchInput");
    input.value = "";
    renderSearchResults("");
    setTimeout(() => input.focus(), 40);
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.hidden = true;
    if (!$$(".modal-layer:not([hidden])").length) {
      document.body.classList.remove("modal-open");
    }
  }

  function searchSections(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      return allSections.slice(0, 7).map((section) => ({ section, score: 0 }));
    }
    const terms = q.split(/\s+/).filter(Boolean);
    return allSections
      .map((section) => {
        const title = section.title.toLowerCase();
        const no = section.no.toLowerCase();
        const summary = section.summary.toLowerCase();
        const points = (section.points || []).join(" ").toLowerCase();
        const formulas = (section.formulas || []).map((formula) => `${formula.label} ${formula.expr}`).join(" ").toLowerCase();
        const keywords = (section.keywords || []).join(" ").toLowerCase();
        const haystack = `${no} ${title} ${summary} ${points} ${formulas} ${keywords}`;
        if (!terms.every((term) => haystack.includes(term))) return null;
        let score = 0;
        terms.forEach((term) => {
          if (no === term || no.includes(term)) score += 40;
          if (title.includes(term)) score += 22;
          if (keywords.includes(term)) score += 10;
          if (summary.includes(term)) score += 6;
          if (points.includes(term)) score += 3;
        });
        return { section, score };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, 16);
  }

  function renderSearchResults(query) {
    const results = searchSections(query);
    ui.searchResults = results;
    ui.searchIndex = 0;
    const container = $("#searchResults");
    if (!results.length) {
      container.innerHTML = `<div class="search-empty"><div><strong>没有找到相关内容</strong><p>试试更短的关键词，如“变换”“稳定”“卷积”。</p></div></div>`;
      return;
    }
    container.innerHTML = results.map((result, index) => {
      const section = result.section;
      const chapter = section.chapter;
      return `
        <button class="search-result ${index === 0 ? "selected" : ""}" type="button"
          data-search-chapter="${chapter.id}" data-search-section="${section.id}">
          <span class="search-result-code">${escapeHtml(section.no)}</span>
          <span class="search-result-copy">
            <strong>${highlightText(section.title, query)}</strong>
            <span>${highlightText(stripHtml(section.summary), query)}</span>
          </span>
          <span class="search-result-chapter">第 ${chapter.num} 章</span>
        </button>`;
    }).join("");
  }

  function highlightText(text, query) {
    const escaped = escapeHtml(text);
    const q = query.trim();
    if (!q) return escaped;
    const safeQuery = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    try {
      return escaped.replace(new RegExp(`(${safeQuery})`, "gi"), "<mark>$1</mark>");
    } catch (error) {
      return escaped;
    }
  }

  function selectSearchResult(index) {
    const result = ui.searchResults[index];
    if (!result) return;
    closeModal("searchModal");
    goToSection(result.section.chapter.id, result.section.id);
  }

  function openSettings() {
    $("#settingsModal").hidden = false;
    document.body.classList.add("modal-open");
  }

  function toggleTheme() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("signals-theme", next);
    } catch (error) {
      // Theme persistence is optional.
    }
  }

  function exportData() {
    const payload = {
      app: "signals-study",
      version: 1,
      exportedAt: new Date().toISOString(),
      data: state
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `信号与系统-学习数据-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast("学习数据已导出");
  }

  function importData(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        const imported = parsed.data || parsed;
        if (!imported || typeof imported !== "object") throw new Error("Invalid data");
        state = normalizeState(imported);
        saveState();
        closeModal("settingsModal");
        render();
        showToast("学习数据已导入");
      } catch (error) {
        showToast("导入失败：文件格式不正确");
      }
    };
    reader.readAsText(file);
  }

  function resetProgress() {
    if (!window.confirm("确定重置所有“已阅读 / 已掌握”进度吗？笔记和书签会保留。")) return;
    state.read = {};
    state.mastered = {};
    state.lastSection = null;
    saveState();
    closeModal("settingsModal");
    render();
    showToast("学习进度已重置");
  }

  function showToast(message) {
    const region = $("#toastRegion");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    region.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("out");
      setTimeout(() => toast.remove(), 220);
    }, 2200);
  }

  function openMobileNav() {
    document.body.classList.add("nav-open");
    $("#menuButton").setAttribute("aria-expanded", "true");
  }

  function closeMobileNav() {
    document.body.classList.remove("nav-open");
    const button = $("#menuButton");
    if (button) button.setAttribute("aria-expanded", "false");
  }

  function handleDocumentClick(event) {
    const target = event.target;
    const actionElement = target.closest("[data-action]");
    if (actionElement) {
      const action = actionElement.dataset.action;
      const sectionId = actionElement.dataset.section;
      if (action === "toggle-section") toggleSection(sectionId);
      if (action === "read") handleRead(sectionId);
      if (action === "master") handleMaster(sectionId);
      if (action === "bookmark") handleBookmark(sectionId);
      if (action === "toggle-note") toggleNote(sectionId);
      if (action === "toggle-all") toggleAllSections();
      if (action === "next-section") handleNextSection(actionElement.dataset.chapter);
      if (action === "formula-reveal") toggleFormulaAnswer();
      if (action === "formula-next") nextFormulaCard();
      if (action === "clear-formula-search") {
        ui.formulaQuery = "";
        const input = $("#formulaSearch");
        if (input) {
          input.value = "";
          input.focus();
        }
        renderFormulaResults();
      }
      if (action === "reset-formula-filter") resetFormulaFilter();
      return;
    }

    const filterButton = target.closest("[data-filter]");
    if (filterButton) {
      setFilter(filterButton.dataset.filter);
      return;
    }

    const formulaMode = target.closest("[data-formula-mode]");
    if (formulaMode) {
      setFormulaMode(formulaMode.dataset.formulaMode);
      return;
    }

    const formulaChapter = target.closest("[data-formula-chapter]");
    if (formulaChapter) {
      setFormulaChapter(formulaChapter.dataset.formulaChapter);
      return;
    }

    const copyButton = target.closest("[data-copy-formula]");
    if (copyButton) {
      copyFormula(copyButton.dataset.copyFormula);
      return;
    }

    const mindButton = target.closest("[data-mind-action]");
    if (mindButton) {
      handleMindAction(mindButton.dataset.mindAction);
      return;
    }

    const searchResult = target.closest("[data-search-section]");
    if (searchResult) {
      closeModal("searchModal");
      goToSection(searchResult.dataset.searchChapter, searchResult.dataset.searchSection);
      return;
    }

    if (target.closest("[data-open-settings]")) {
      openSettings();
      return;
    }

    if (target.closest("[data-close-modal]")) {
      const modal = target.closest(".modal-layer");
      if (modal) closeModal(modal.id);
      return;
    }

    const searchTerm = target.closest("[data-search-term]");
    if (searchTerm) {
      const input = $("#searchInput");
      input.value = searchTerm.dataset.searchTerm;
      input.focus();
      renderSearchResults(input.value);
      return;
    }

    const feature = target.closest("[data-feature]");
    if (feature) {
      showToast(`「${feature.dataset.feature}」已预留入口，可在下一轮加入`);
      return;
    }

    if (target.id === "sidebarScrim") closeMobileNav();
  }

  function bindEvents() {
    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("hashchange", render);
    window.addEventListener("resize", () => {
      if (window.innerWidth > 980) closeMobileNav();
    });

    $("#menuButton").addEventListener("click", () => {
      if (document.body.classList.contains("nav-open")) closeMobileNav();
      else openMobileNav();
    });
    $("#themeButton").addEventListener("click", toggleTheme);
    $("#searchTrigger").addEventListener("click", openSearch);
    $("#exportButton").addEventListener("click", exportData);
    $("#resetButton").addEventListener("click", resetProgress);
    $("#importInput").addEventListener("change", (event) => {
      importData(event.target.files && event.target.files[0]);
      event.target.value = "";
    });

    const searchInput = $("#searchInput");
    searchInput.addEventListener("input", () => renderSearchResults(searchInput.value));
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        ui.searchIndex = Math.min(ui.searchResults.length - 1, ui.searchIndex + 1);
        updateSearchSelection();
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        ui.searchIndex = Math.max(0, ui.searchIndex - 1);
        updateSearchSelection();
      }
      if (event.key === "Enter") {
        event.preventDefault();
        selectSearchResult(ui.searchIndex);
      }
    });

    document.addEventListener("input", (event) => {
      if (event.target.id === "formulaSearch") {
        ui.formulaQuery = event.target.value;
        renderFormulaResults();
        return;
      }
      const textarea = event.target.closest("[data-note-input]");
      if (!textarea) return;
      const sectionId = textarea.dataset.noteInput;
      const status = $(`[data-note-status="${sectionId}"]`);
      saveNote(sectionId, textarea.value, status);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        $$(".modal-layer:not([hidden])").forEach((modal) => closeModal(modal.id));
        const full = $(".mindmap-card.fullscreen");
        if (full) {
          full.classList.remove("fullscreen");
          document.body.classList.remove("mindmap-open");
        }
        closeMobileNav();
      }
      const tag = (event.target.tagName || "").toLowerCase();
      const inField = tag === "input" || tag === "textarea" || event.target.isContentEditable;
      const route = parseRoute();
      if (route.view === "formulas" && ui.formulaMode === "recall" && !inField) {
        if (event.code === "Space") {
          event.preventDefault();
          toggleFormulaAnswer();
          return;
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          nextFormulaCard();
          return;
        }
      }
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        openSearch();
      } else if (event.key === "/" && !inField) {
        event.preventDefault();
        openSearch();
      } else if (event.key.toLowerCase() === "t" && !inField && !event.ctrlKey && !event.metaKey) {
        toggleTheme();
      }
    });
  }

  function updateSearchSelection() {
    $$(".search-result").forEach((result, index) => {
      result.classList.toggle("selected", index === ui.searchIndex);
      if (index === ui.searchIndex) result.scrollIntoView({ block: "nearest" });
    });
  }

  function init() {
    if (!chapters.length) {
      $("#appView").innerHTML = `<div class="search-empty">知识数据加载失败，请确认 data 目录完整。</div>`;
      return;
    }
    renderSidebar();
    bindEvents();
    render();
  }

  init();
})();
