/* =========================================================
   Unes Rahimi — script.js
   1. متن‌های دوزبانه
   2. تغییر زبان
   3. منوی موبایل
   4. اسکرول: نوار پیشرفت، حالت منو، دکمه بازگشت به بالا
   5. پررنگ کردن لینک بخش فعال
   6. انیمیشن ورود عناصر
   ========================================================= */

"use strict";

/* ---------- 1. متن‌ها ---------- */
const translations = {
  fa: {
    pageTitle: "یونس رحیمی — Unes Rahimi",
    metaDescription: "وب‌سایت شخصی یونس رحیمی؛ ایده‌ها، تجربه‌ها و مسیر رشد من.",
    skipLink: "رفتن به محتوای اصلی",
    navAbout: "درباره من",
    navValues: "مهم‌ها برای یونس",
    navCareer: "مسیر حرفه‌ای",
    navSkills: "توانمندی‌ها",

    /* --- مسیر حرفه‌ای --- */
    careerTitle: "مسیر حرفه‌ای",
    stat1Value: "5+",
    stat1Label: "سال تجربه در خرده‌فروشی",
    stat2Value: "3",
    stat2Label: "نفر در تیمی که هدایت می‌کنم",
    stat3Value: "2024",
    stat3Label: "شروع مدیریت فروشگاه",
    profileP1: "فردی کنجکاو، خلاق و رشدمحور هستم؛ با پیشینه تحصیلی در علوم ورزشی و حدود پنج سال تجربه در حوزه خرده‌فروشی در KOMONO.",
    profileP2: "در این مسیر، مهارت‌های عملی در رهبری تیم، آموزش کارکنان، تجربه مشتری و بهبود عملکرد فروش به دست آورده‌ام. برای یادگیری مداوم، حل خلاقانه مسائل و تبدیل ایده‌ها به نتایج معنادار ارزش زیادی قائلم.",
    profileP3: "فراتر از کار حرفه‌ای، به کشف ایده‌های تازه، توسعه مهارت‌های دیجیتال و کار روی پروژه‌های شخصی علاقه دارم؛ پروژه‌هایی که به من فرصت یادگیری، آزمودن و رشد می‌دهند.",
    companyMeta: "خرده‌فروشی و مدیریت فروشگاه · 2021 — اکنون",
    companyIntro: "از سال 2021 در KOMONO هستم؛ مسیری که با فروش شروع شد، با مسئولیت‌های سرپرستی ادامه پیدا کرد و امروز به مدیریت شعبه رسیده.",
    stage1Summary: "نقطه شروع: شناخت نزدیک مشتری، محصول و ریتم روزانه فروشگاه.",
    stage2Summary: "از فروش به هماهنگی: پذیرفتن مسئولیت روند کار تیم و عملیات روزانه.",
    stage3Summary: "مسئولیت کامل یک شعبه: هدایت تیمی سه‌نفره، آموزش نیروهای جدید و تمرکز بر فروش و تجربه مشتری.",
    role3Title: "مدیر فروشگاه",
    role3Date: "2024 — اکنون",
    role3Tasks: [
      "مسئولیت کامل مدیریت شعبه KOMONO",
      "رهبری و هماهنگی یک تیم سه‌نفره",
      "آموزش و توسعه اعضای جدید تیم",
      "مدیریت عملیات روزانه فروشگاه و تقسیم مسئولیت‌های کارکنان",
      "پایش عملکرد فروش و تلاش برای بهبود نتایج",
      "حفظ استانداردهای تجربه و خدمات مشتری",
      "هماهنگی فعالیت‌های فروش و پشتیبانی از اهداف کسب‌وکار"
    ],
    role2Title: "سرپرست فروشگاه",
    role2Date: "2023",
    role2Tasks: [
      "هماهنگی عملیات روزانه فروشگاه",
      "پشتیبانی از عملکرد و روند کاری تیم",
      "کمک به هماهنگی کارکنان و مدیریت فروشگاه"
    ],
    role1Title: "کارشناس فروش",
    role1Date: "2021",
    role1Tasks: [
      "خدمات مشتری و ایجاد ارتباط مثبت با مشتریان",
      "معرفی محصولات و انجام فرایند فروش",
      "پشتیبانی از فعالیت‌های روزانه فروشگاه"
    ],

    /* --- تحصیلات و مهارت‌ها --- */
    navEducation: "تحصیلات",
    educationTitle: "تحصیلات",
    eduStatusCurrent: "در حال تحصیل",
    eduStatusDone: "فارغ‌التحصیل",
    degreeMsc: "کارشناسی ارشد مدیریت علوم ورزشی",
    degreeBsc: "کارشناسی علوم ورزشی",
    university: "دانشگاه فردوسی مشهد، ایران",
    skillsTitle: "توانمندی‌های کلیدی",
    skillsIntro: "مهارت‌هایی که در کار روزانه فروشگاه، از کف فروش تا مدیریت شعبه، شکل گرفته‌اند.",
    skillGroup1: "مدیریت فروشگاه و کسب‌وکار",
    skillList1: [
      "مدیریت فروشگاه خرده‌فروشی",
      "مدیریت عملیات روزانه",
      "بهبود عملکرد فروش",
      "رهبری تیم",
      "آموزش و توسعه کارکنان",
      "هماهنگی تیم"
    ],
    skillGroup2: "مشتری و ارتباطات",
    skillList2: [
      "مدیریت تجربه مشتری",
      "ایجاد ارتباط با مشتری",
      "مهارت‌های ارتباطی و بین‌فردی",
      "حل مسئله"
    ],
    skillGroup3: "نقاط قوت فردی",
    skillList3: [
      "تفکر خلاق",
      "کنجکاوی و یادگیری مداوم",
      "انعطاف‌پذیری",
      "ابتکار عمل",
      "تبدیل ایده به عمل"
    ],

    brandText: "برند شخصی من بازتابی از کنجکاوی، خلاقیت، رشد و اثرگذاریه. به یادگیری از دل تجربه، دیدن زاویه‌های مختلف و تبدیل ایده به عمل باور دارم.",
    navContact: "ارتباط",
    tagline: "ایده‌ها رو زندگی کن.",
    heroButton: "بیشتر درباره من",
    heroButton2: "در ارتباط باشیم",
    aboutTitle: "در مسیر شناختن",
    aboutP1: "من یونس‌ام؛ آدمی کنجکاو، ایده‌پرداز و علاقه‌مند به کشف دنیای اطرافم. همیشه برام جذابه که چیزها رو از زاویه‌های متفاوت ببینم، سؤال بپرسم و ایده‌هایی رو دنبال کنم که شاید در نگاه اول فقط یک فکر ساده به نظر برسن.",
    aboutP2: "دوست دارم تجربه کنم، یاد بگیرم، بسازم و به چیزهایی که توی ذهنم شکل می‌گیرن، فرصت واقعی شدن بدم. برای من رشد کردن فقط بیشتر دونستن نیست؛ یعنی خودم رو بهتر بشناسم، نگاه تازه‌ای پیدا کنم و از هر تجربه چیزی با خودم ببرم.",
    aboutP3: "هنوز در حال کشف کردنم؛ هم دنیای اطرافم رو و هم خودم رو. این‌جا بخشی از مسیر منه؛ مسیری که قرار نیست از قبل همه‌چیزش معلوم باشه.",
    quote: "با فکر شروع کن؛ با تجربه ادامه بده.",
    valuesTitle: "مهم‌ها برای یونس",
    value1Title: "کنجکاوی",
    value1Text: "سؤال پرسیدن و دیدن چیزها از زاویه‌های تازه.",
    value2Title: "ایده‌پردازی",
    value2Text: "پیدا کردن امکان‌های تازه و تبدیل فکر به عمل.",
    value3Title: "رشد",
    value3Text: "یاد گرفتن، تجربه کردن و شناخت بهتر خودم.",
    value4Title: "اثرگذاری",
    value4Text: "ساختن چیزهایی که معنا داشته باشن و به کار بیان.",
    contactTitle: "بیایم در ارتباط باشیم.",
    contactDescription: "اگه زمینه‌ای برای گفت‌وگو، تبادل ایده یا همکاری مشترک می‌بینی، خوشحال می‌شم از طریق راه‌های زیر باهام در ارتباط باشی.",
    phoneLabel: "تلفن",
    imageAlt: "پرتره یونس رحیمی",
    languageButton: "EN",
    languageLabel: "تغییر زبان به انگلیسی",
    menuOpen: "باز کردن منو",
    menuClose: "بستن منو",
    backToTop: "بازگشت به بالا"
  },

  en: {
    pageTitle: "Unes Rahimi — Make Your Mark",
    metaDescription: "The personal website of Unes Rahimi: ideas, experiences, and a journey of growth.",
    skipLink: "Skip to main content",
    navAbout: "About",
    navValues: "What Matters",
    navCareer: "Career",
    navSkills: "Competencies",

    /* --- Career --- */
    careerTitle: "Professional Journey",
    stat1Value: "5+",
    stat1Label: "Years of retail experience",
    stat2Value: "3",
    stat2Label: "Team members I lead",
    stat3Value: "2024",
    stat3Label: "Store Manager since",
    profileP1: "I am a curious, creative, and growth-oriented professional with a background in Sport Sciences and approximately five years of experience in retail at KOMONO.",
    profileP2: "Through this experience, I have developed practical skills in team leadership, employee training, customer experience, and sales performance improvement. I value continuous learning, creative problem-solving, and the opportunity to turn ideas into meaningful results.",
    profileP3: "Beyond my professional career, I am interested in exploring new ideas, developing digital skills, and working on personal projects that allow me to learn, experiment, and grow.",
    companyMeta: "Retail & Store Management · 2021 — Present",
    companyIntro: "I joined KOMONO in 2021. The path began on the sales floor, grew through supervisory responsibility, and today means running a branch.",
    stage1Summary: "Where it began: getting close to the customer, the product, and the daily rhythm of the store.",
    stage2Summary: "From selling to coordinating: taking responsibility for team workflow and daily operations.",
    stage3Summary: "Full ownership of a branch: leading a three-person team, training new staff, and focusing on sales and customer experience.",
    role3Title: "Store Manager",
    role3Date: "2024 — Present",
    role3Tasks: [
      "Full responsibility for managing a KOMONO branch",
      "Leading and coordinating a team of three employees",
      "Training and developing new team members",
      "Managing daily store operations and staff responsibilities",
      "Monitoring sales performance and working to improve results",
      "Maintaining customer experience and service standards",
      "Coordinating sales activities and supporting business objectives"
    ],
    role2Title: "Store Supervisor",
    role2Date: "2023",
    role2Tasks: [
      "Coordinating daily store operations",
      "Supporting team performance and workflow",
      "Assisting with staff coordination and store management"
    ],
    role1Title: "Sales Associate",
    role1Date: "2021",
    role1Tasks: [
      "Customer service and building positive customer relationships",
      "Product presentation and sales operations",
      "Supporting daily store activities"
    ],

    /* --- Education & Skills --- */
    navEducation: "Education",
    educationTitle: "Education",
    eduStatusCurrent: "In progress",
    eduStatusDone: "Completed",
    degreeMsc: "Master's in Sport Management",
    degreeBsc: "Bachelor of Science in Sport Sciences",
    university: "Ferdowsi University of Mashhad, Iran",
    skillsTitle: "Core Competencies",
    skillsIntro: "Skills shaped by daily work in retail — from the sales floor to running a branch.",
    skillGroup1: "Store & Business Management",
    skillList1: [
      "Retail Store Management",
      "Daily Operations Management",
      "Sales Performance Improvement",
      "Team Leadership",
      "Staff Training & Development",
      "Team Coordination"
    ],
    skillGroup2: "Customer & Communication",
    skillList2: [
      "Customer Experience Management",
      "Customer Relationship Building",
      "Communication & Interpersonal Skills",
      "Problem-Solving"
    ],
    skillGroup3: "Personal Strengths",
    skillList3: [
      "Creative Thinking",
      "Curiosity & Continuous Learning",
      "Adaptability",
      "Taking Initiative",
      "Turning Ideas into Action"
    ],

    brandText: "My personal brand reflects curiosity, creativity, growth, and impact. I believe in learning through experience, exploring different perspectives, and turning ideas into action.",
    navContact: "Contact",
    tagline: "Turn ideas into impact.",
    heroButton: "More about me",
    heroButton2: "Let's connect",
    aboutTitle: "A Journey of Discovery",
    aboutP1: "I'm Unes — a curious thinker who loves exploring the world around me and coming up with new ideas. I enjoy looking at things from different perspectives, asking questions, and following ideas that might seem simple at first.",
    aboutP2: "I like to experiment, learn, create, and give the ideas in my mind a chance to become real. To me, growth isn't just about knowing more. It's about understanding myself better, discovering new perspectives, and taking something meaningful from every experience.",
    aboutP3: "I'm still discovering — both the world around me and myself. This is a glimpse into my journey, one where not everything has to be figured out in advance.",
    quote: "Start with an idea. Keep going through experience.",
    valuesTitle: "What Matters to Me",
    value1Title: "Curiosity",
    value1Text: "Asking questions and seeing things from new perspectives.",
    value2Title: "Ideas",
    value2Text: "Exploring new possibilities and turning thoughts into action.",
    value3Title: "Growth",
    value3Text: "Learning, experiencing, and understanding myself better.",
    value4Title: "Impact",
    value4Text: "Creating things that have meaning and make a difference.",
    contactTitle: "Let's Connect.",
    contactDescription: "If you see room for a conversation, an exchange of ideas, or a collaboration, I'd be happy to hear from you through any of the channels below.",
    phoneLabel: "Phone",
    imageAlt: "Portrait of Unes Rahimi",
    languageButton: "فا",
    languageLabel: "Switch language to Persian",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    backToTop: "Back to top"
  }
};

const STORAGE_KEY = "siteLanguage";


function initWebsite() {
  const root = document.documentElement;
  const navbar = document.getElementById("navbar");
  const navLinks = document.getElementById("navLinks");
  const menuToggle = document.getElementById("menuToggle");
  const languageToggle = document.getElementById("languageToggle");
  const progressBar = document.getElementById("scrollProgress");
  const backToTop = document.getElementById("backToTop");
  const yearEl = document.getElementById("currentYear");

  let currentLanguage = "fa";

  if (yearEl) yearEl.textContent = new Date().getFullYear();


  /* ---------- 2. تغییر زبان ---------- */
  function setLanguage(language) {
    currentLanguage = translations[language] ? language : "fa";
    const t = translations[currentLanguage];

    root.lang = currentLanguage;
    root.dir = currentLanguage === "fa" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = t[el.dataset.i18n];
      if (typeof value === "string") {
        el.textContent = value;
      } else {
        console.warn(`Missing translation: "${el.dataset.i18n}" (${currentLanguage})`);
      }
    });

    // لیست‌ها: هر آیتم آرایه به یک <li> تبدیل می‌شود
    document.querySelectorAll("[data-i18n-list]").forEach((list) => {
      const items = t[list.dataset.i18nList];
      if (!Array.isArray(items)) {
        console.warn(`Missing list: "${list.dataset.i18nList}" (${currentLanguage})`);
        return;
      }
      list.replaceChildren(...items.map((text) => {
        const li = document.createElement("li");
        li.textContent = text;
        return li;
      }));
    });

    document.title = t.pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.metaDescription);
    document.querySelector(".portrait-image")?.setAttribute("alt", t.imageAlt);
    backToTop?.setAttribute("aria-label", t.backToTop);

    if (languageToggle) {
      languageToggle.textContent = t.languageButton;
      languageToggle.setAttribute("aria-label", t.languageLabel);
    }

    updateMenuLabel();
    updateScroll();

    try {
      localStorage.setItem(STORAGE_KEY, currentLanguage);
    } catch (_) {
      /* اگر حافظه مرورگر در دسترس نباشد، تغییر زبان همچنان کار می‌کند */
    }
  }

  languageToggle?.addEventListener("click", () => {
    setLanguage(currentLanguage === "fa" ? "en" : "fa");
  });


  /* ---------- 3. منوی موبایل ---------- */
  function isMenuOpen() {
    return document.body.classList.contains("menu-open");
  }

  function updateMenuLabel() {
    if (!menuToggle) return;
    const t = translations[currentLanguage];
    menuToggle.setAttribute("aria-label", isMenuOpen() ? t.menuClose : t.menuOpen);
  }

  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    menuToggle?.setAttribute("aria-expanded", String(open));
    updateMenuLabel();
  }

  menuToggle?.addEventListener("click", () => setMenu(!isMenuOpen()));

  // با کلیک روی هر لینک، منو بسته شود
  navLinks?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  // بستن با کلید Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isMenuOpen()) {
      setMenu(false);
      menuToggle?.focus();
    }
  });

  // اگر صفحه بزرگ شد، منوی موبایل بسته شود
  window.matchMedia("(min-width: 1025px)").addEventListener("change", (e) => {
    if (e.matches) setMenu(false);
  });


  /* ---------- 4. رویدادهای اسکرول ---------- */
  let ticking = false;
  // در بخش ۶ مقدار واقعی می‌گیرد (فقط وقتی انیمیشن مجاز است)
  let updateJourney = () => {};

  function updateScroll() {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;

    if (progressBar) progressBar.style.transform = `scaleX(${progress})`;
    updateJourney();
    navbar?.classList.toggle("is-scrolled", scrollTop > 8);
    backToTop?.classList.toggle("is-visible", scrollTop > window.innerHeight * 0.8);

    ticking = false;
  }

  // requestAnimationFrame باعث می‌شود اسکرول روان بماند
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateScroll);
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);


  /* ---------- 5. لینک بخش فعال در منو ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const menuItems = navLinks ? navLinks.querySelectorAll('a[href^="#"]') : [];

  if ("IntersectionObserver" in window && menuItems.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        menuItems.forEach((link) => {
          const active = link.getAttribute("href") === `#${id}`;
          link.classList.toggle("is-active", active);
          if (active) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    }, {
      // بخش زمانی فعال است که از وسط صفحه عبور کند
      rootMargin: "-45% 0px -50% 0px"
    });

    sections.forEach((section) => sectionObserver.observe(section));
  }


  /* ---------- 6. انیمیشن ورود عناصر ---------- */
  const revealGroups = [
    ".hero-tagline",
    ".hero-mark",
    ".hero-actions",
    ".section-heading",
    ".about-content > p",
    ".pull-quote",
    ".stat",
    ".profile > p",
    ".journey-head",
    ".journey-intro",
    ".edu-card",
    ".comp-row",
    ".value-card",
    ".contact-heading",
    ".contact-list li"
  ];

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if ("IntersectionObserver" in window && !reducedMotion) {
    root.classList.add("motion-ready");

    revealGroups.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el, index) => {
        el.classList.add("reveal");
        // عناصر هم‌گروه با کمی تأخیر پشت سر هم ظاهر شوند
        el.style.setProperty("--delay", `${Math.min(index, 5) * 90}ms`);
      });
    });

    // عناصر Hero کمی بعد از عنوان ظاهر شوند
    document.querySelectorAll(".hero .reveal").forEach((el, i) => {
      el.style.setProperty("--delay", `${250 + i * 110}ms`);
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px"
    });

    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    /* مسیر حرفه‌ای: خط نارنجی همراه اسکرول جلو می‌رود
       و هر نقش وقتی خط به آن می‌رسد روشن می‌شود (فقط رو به جلو) */
    const journey = document.querySelector(".journey");

    if (journey) {
      const stages = [...journey.querySelectorAll(".stage")];
      const verticalLayout = window.matchMedia("(max-width: 860px)");
      let reached = 0;

      updateJourney = () => {
        const rect = journey.getBoundingClientRect();
        const vh = window.innerHeight;
        const vertical = verticalLayout.matches;

        // افقی: در حدود نیم صفحه اسکرول پر می‌شود / عمودی: هم‌پای خواندن
        const raw = vertical
          ? (vh * 0.6 - rect.top) / rect.height
          : (vh * 0.85 - rect.top) / (vh * 0.5);

        reached = Math.max(reached, Math.min(Math.max(raw, 0), 1));
        journey.style.setProperty("--journey-progress", reached.toFixed(4));

        if (reached === 0) return;

        stages.forEach((stage) => {
          if (stage.classList.contains("is-reached")) return;
          const node = stage.querySelector(".stage-node").getBoundingClientRect();
          let position;

          if (vertical) {
            position = (node.top + node.height / 2 - rect.top) / rect.height;
          } else {
            const centerX = node.left + node.width / 2;
            position = (root.dir === "rtl" ? rect.right - centerX : centerX - rect.left) / rect.width;
          }

          if (reached >= position - 0.02) stage.classList.add("is-reached");
        });
      };
    }

    // شروع انیمیشن‌های Hero بعد از رندر اول
    requestAnimationFrame(() => {
      requestAnimationFrame(() => root.classList.add("is-loaded"));
    });
  }


  /* ---------- شروع ---------- */
  let savedLanguage = "fa";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "fa" || stored === "en") savedLanguage = stored;
  } catch (_) {
    /* زبان پیش‌فرض: فارسی */
  }

  setLanguage(savedLanguage);
}


if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initWebsite);
} else {
  initWebsite();
}
