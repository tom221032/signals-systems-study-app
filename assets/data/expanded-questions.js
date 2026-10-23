(function () {
  "use strict";

  const chapters = window.SIGNAL_CHAPTERS || [];
  const videoIndex = window.SIGNAL_VIDEO_INDEX || { episodes: [] };
  const baseQuestions = window.SIGNAL_QUESTION_BANK || [];
  const sections = chapters.flatMap((chapter) =>
    chapter.sections.map((section) => ({ ...section, chapter })));
  const sectionById = new Map(sections.map((section) => [section.id, section]));
  const usage = new Map();
  const output = [];

  const typeNames = ["概念判断", "公式应用", "综合辨析"];

  function sectionFormula(section) {
    return (section.formulas || []).map((formula) => `
      <p><strong>${formula.label}</strong>：<span class="math">${formula.expr}</span>
      ${formula.note ? `（${formula.note}）` : ""}</p>`).join("");
  }

  function pickSections(episode) {
    const candidates = (episode.sectionIds || [])
      .map((id) => sectionById.get(id))
      .filter(Boolean);
    if (!candidates.length) return [];
    const sorted = [...candidates].sort((a, b) =>
      (usage.get(a.id) || 0) - (usage.get(b.id) || 0));
    const chosen = sorted.slice(0, 3);
    while (chosen.length < 3 && candidates.length) {
      chosen.push(candidates[chosen.length % candidates.length]);
    }
    chosen.forEach((section) => usage.set(section.id, (usage.get(section.id) || 0) + 1));
    return chosen;
  }

  function makeQuestion(episode, section, variant) {
    const chapter = section.chapter;
    const formulas = section.formulas || [];
    const points = section.points || [];
    const episodeLabel = typeof episode.episode === "number"
      ? `第${episode.episode}集`
      : episode.episode;
    const titlePrefix = `${episodeLabel} · ${section.no}`;
    let title;
    let prompt;
    let analysis;
    let steps;
    let answer;
    let technique;

    if (variant === 1 && formulas.length) {
      title = `${titlePrefix} ${typeNames[variant]}：写出核心关系`;
      prompt = `<p>结合视频与本小节，写出关键公式或关系，并说明各符号和适用条件。</p>${sectionFormula(section)}`;
      analysis = `<p>本问考查公式的来源、符号含义和适用条件，不能只抄公式。</p>`;
      steps = [
        `先回到本小节的核心概念：${section.summary}`,
        ...formulas.map((formula) => `${formula.label}：${formula.expr}。${formula.note || ""}`),
        ...points.slice(0, 2)
      ];
      answer = `<p>${section.summary}</p>`;
      technique = `<p>按“定义式 → 每个符号 → 成立条件 → 典型信号”顺序回答；计算前先检查定义域或收敛条件。</p>`;
    } else if (variant === 2) {
      title = `${titlePrefix} ${typeNames[variant]}：识别易错条件`;
      prompt = `<p>请用本小节知识说明“${section.pitfall}”为什么容易出错，并给出正确判断方法。</p>`;
      analysis = `<p>本题不是单纯背结论，而是要求从定义和适用条件定位错误来源。</p>`;
      steps = [
        ...points.slice(0, 3),
        `回到教材 ${section.no} 的定义或公式，检查变量范围、初始条件、周期/收敛条件。`,
        `用反例或边界情形验证结论：${section.check}`
      ];
      answer = `<p>${section.summary}</p><p>核心判断依据：${points[0] || section.pitfall}</p>`;
      technique = `<p>先写定义，再代边界；遇到“总是/一定/直接”等绝对表述时，优先检查反例。</p>`;
    } else {
      title = `${titlePrefix} ${typeNames[variant]}`;
      prompt = `<p>${section.check}</p>`;
      analysis = `<p>本题对应${episodeLabel}《${episode.title}》中的 ${section.no} ${section.title}。</p>`;
      steps = [
        ...points.slice(0, 4),
        `自检时用自己的话复述“${section.summary}”。`
      ];
      answer = `<p>${section.summary}</p>`;
      technique = `<p>采用“概念—关系—适用条件—小例子”的四步回答法，至少写出一个公式或判断标准。</p>`;
    }

    return {
      id: `q-v${episode.episode}-${variant + 1}`,
      category: chapter.title,
      title,
      sectionIds: [section.id],
      episodeIds: [episode.episode],
      source: `视频第 ${episode.episode} 集《${episode.title}》；教材 p.${section.pages[0]}–${section.pages[1]}`,
      difficulty: ["基础", "重点", "进阶"][variant],
      prompt,
      analysis,
      steps,
      answer,
      technique,
      pitfalls: [section.pitfall]
    };
  }

  videoIndex.episodes.forEach((episode) => {
      const existing = baseQuestions.filter((question) => {
        const match = String(question.source || "").match(/视频第\s*(\d+)\s*集/);
        return match && Number(match[1]) === episode.episode;
      }).length;
      const needed = episode.episode < 6 ? Math.max(0, 3 - existing) : 3;
      if (!needed) return;
      const chosen = pickSections(episode);
      for (let variant = 0; variant < needed; variant += 1) {
        const section = chosen[variant];
        if (section) output.push(makeQuestion(episode, section, variant));
      }
    });

  const chapter6 = chapters.find((chapter) => chapter.id === "ch6");
  if (chapter6) {
    chapter6.sections
      .filter((section) => section.id !== "s6-ex")
      .forEach((rawSection, index) => {
        const section = { ...rawSection, chapter: chapter6 };
        const base = makeQuestion({
          episode: "教材第6章",
          title: "教材深挖（无对应视频）"
        }, section, index % 3);
        base.id = `q-ch6-${index + 1}`;
        base.category = "离散系统频域（教材深挖）";
        base.episodeIds = [];
        base.source = `教材第 6 章 p.${section.pages[0]}–${section.pages[1]}；无对应视频`;
        base.title = `${section.no} 教材深挖 · ${base.title.split("：").slice(-1)[0]}`;
        output.push(base);
      });
  }

  window.SIGNAL_EXPANDED_QUESTIONS = output;
})();
