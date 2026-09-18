/* ==========================================================================
   SMART RADAR PRO & CRAFT — Interactive Engine
   Tabs, Scrollspy, Form Clipboard Auto-Copy, and RU/EN Multilingual System
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Multilingual Translations Dictionary ---
  const i18n = {
    ru: {
      nav_services: "Разработка",
      nav_process: "Подход",
      nav_terminal: "Портфолио",
      nav_features: "Архитектура",
      nav_faq: "FAQ",
      nav_brief: "Контакты",
      btn_launch_bot: "Запустить бота",
      btn_header_cta: "Обсудить задачу",
      hero_badge: "Digital Engineering · Флагманский кейс: Smart Radar Pro",
      hero_title: "Разработка сайтов, ботов <span class=\"grad-text\">и сложных систем</span>",
      hero_desc: "Проектирую и создаю коммерческие сайты, Telegram-боты, парсеры и AI-решения напрямую, без агентских наценок и посредников. Мой флагманский кейс в портфолио — действующий крипто-терминал Smart Radar Pro.",
      hero_btn_discuss: "Обсудить задачу",
      hero_btn_portfolio: "Смотреть кейс",
      stat_direct: "Без посредников",
      stat_speed: "Скорость верстки",
      stat_live_case: "Флагманский кейс",
      stat_custody: "Zero-Custody MCP",
      services_kicker: "01 / Заказная разработка",
      services_title: "Разработка сайтов, ботов <span class=\"grad-text\">и скриптов</span>",
      services_desc: "Проектирую и разрабатываю коммерческие цифровые продукты напрямую, без посредников, шаблонов и раздутых агентских смет. Индивидуальный расчет под вашу бизнес-задачу.",
      s1_title: "Сайты и премиальные лендинги",
      s1_desc: "Современные адаптивные сайты и посадочные страницы в эстетике Liquid Glass. Высокая скорость загрузки (<300 мс), чистая верстка, конверсионная структура и мгновенная отправка заявок в Telegram.",
      s1_i1: "Уникальный дизайн и интерактивные анимации",
      s1_i2: "Идеальная адаптивность для смартфонов и ПК",
      s1_i3: "Базовое SEO, микроразметка Schema.org и быстрая индексация",
      s2_title: "Telegram-боты под ключ",
      s2_desc: "Многофункциональные боты для бизнеса: прием платежей, автоматизация услуг, платные подписки, CRM-процессы, парсинг данных и интеграция с внешними API.",
      s2_i1: "Интерактивные инлайн-меню и Mini Apps",
      s2_i2: "Подключение баз данных (SQLite, PostgreSQL)",
      s2_i3: "Развертывание на вашем VPS-сервере с инструкцией",
      s3_title: "Парсеры и скрипты автоматизации",
      s3_desc: "Автоматизированный сбор и нормализация открытых данных с карт (2GIS, Яндекс, Google), маркетплейсов, агрегаторов и криптобирж. Выгрузка в Excel, Google Таблицы или Telegram.",
      s3_i1: "Обход капч и анти-бот защит",
      s3_i2: "Очистка, валидация и структурирование данных",
      s3_i3: "Регулярный авто-мониторинг цен и изменений",
      s4_title: "Интеграция ИИ и MCP-агентов",
      s4_desc: "Внедрение нейросетевых решений (Gemini, Claude, OpenAI) в ваши существующие процессы. Создание автономных AI-пайплайнов, умных саммари новостей и Zero-Custody торговых мостов.",
      s4_i1: "Интеграция по протоколу Model Context Protocol (MCP)",
      s4_i2: "Написание кастомных промптов и контекстных баз",
      s4_i3: "Полная изоляция приватных данных заказчика",
      badge_high_craft: "High Craft",
      badge_turnkey: "Turnkey",
      badge_automation: "Automation",
      badge_modern: "Next-Gen",
      eval_label: "Стоимость",
      eval_custom: "Индивидуальная оценка под задачу",
      process_kicker: "02 / Подход к работе",
      process_title: "Прозрачный процесс <span class=\"grad-text\">без сюрпризов</span>",
      process_desc: "Никаких пустых обещаний и бесконечных созвонов. Работаем короткими и проверяемыми шагами.",
      p1_title: "Разбор задачи",
      p1_desc: "Фиксируем цель, сценарий пользователя, ключевые ограничения и технические критерии готовности.",
      p2_title: "Проектирование",
      p2_desc: "Формируем архитектуру, структуру данных и логику до того, как тратить время на оформление.",
      p3_title: "Сборка и демо",
      p3_desc: "Разработка ведется этапами. Вы видите реальный прогресс на промежуточных версиях вживую.",
      p4_title: "Запуск и передача",
      p4_desc: "Тестируем на реальных нагрузках, развертываем на сервере и передаем понятную инструкцию по работе.",
      terminal_kicker: "03 / Кейс в портфолио",
      terminal_title: "Крипто-терминал <span class=\"grad-text\">Smart Radar Pro</span>",
      terminal_desc: "Действующий боевой продукт, разработанный с нуля: распределенный мониторинг стаканов 5 бирж, ончейн-анализ китов Polymarket, интеллектуальный сбор B2B-лидов и безопасный Zero-Custody контур. Оцените работу интерфейса и логику модулей в интерактивном окне:",
      tab_cex: "CEX Арбитраж",
      tab_poly: "Polymarket Киты",
      tab_leads: "Lead Finder (CRM)",
      tab_analysis: "3-Факторный Анализ",
      tab_mcp: "Zero-Custody MCP",
      t_cex_title: "Межбиржевой CEX Арбитраж",
      t_cex_desc: "Непрерывный мониторинг спредов между Bybit, Gate, Bitget, BingX, MEXC. Автоматическая проверка состояния блокчейн-сетей на ввод и вывод, вычет всех биржевых и сетевых комиссий.",
      t_cex_f1: "Прямые ссылки на торговые терминалы пар в каждом сигнале",
      t_cex_f2: "Исключение фальшивых спредов с закрытыми кошельками",
      t_cex_f3: "Мгновенный расчет чистой прибыли с учетом объёма в стакане",
      btn_test_signal: "Получать сигналы в боте ↗",
      t_poly_title: "Polymarket Киты & Детектор скачков",
      t_poly_desc: "Мониторинг ончейн-транзакций лучших китовых кошельков Gnosis Safe на рынках предсказаний Polymarket + детекция аномальных сдвигов вероятностей (>55%) с экспресс-анализом новостей от нейросети Gemini.",
      t_poly_f1: "Виртуальный баланс $3000 USDC для симуляции копи-трейдинга",
      t_poly_f2: "Прямые ссылки на события Polymarket в каждом уведомлении",
      t_poly_f3: "Возможность глушить неинтересных китов в 1 клик",
      btn_test_poly: "Открыть Polymarket модуль ↗",
      t_leads_title: "B2B Lead Finder & Карточки клиентов",
      t_leads_desc: "Поиск организаций по 2GIS, Яндекс.Картам, Google Maps и Firecrawl. Уникальный фильтр «Без сайта» находит бизнесы, которым жизненно необходима разработка сайта или маркетинг под ключ.",
      t_leads_f1: "Встроенная мини-CRM (Новый, Связался, Переговоры, Клиент)",
      t_leads_f2: "Прямой переход в WhatsApp и Telegram (t.me/+) в 1 клик",
      t_leads_f3: "Кнопка готового оффера для быстрой отправки в любой мессенджер",
      btn_test_leads: "Попробовать Lead Finder ↗",
      t_analysis_title: "3-Факторный Технический Скоринг",
      t_analysis_desc: "Запуск детального анализа любого крипто-актива командой /analyze. Синтез тренда (EMA), импульса (RSI, MACD, Bollinger Bands) и макро-доминации BTC со сложными индикаторами объема.",
      t_analysis_f1: "Point of Control (POC) — горизонтальный профиль объемов",
      t_analysis_f2: "Дисбаланс стенок биржевых стаканов (CEX walls orderbook)",
      t_analysis_f3: "Дивергенция цены и реального объема торгов",
      btn_test_analyze: "Запустить /analyze в боте ↗",
      t_mcp_title: "Zero-Custody ИИ-Терминал (MCP)",
      t_mcp_desc: "Подключение локальных ИИ-агентов (Cursor, Claude Code) через Model Context Protocol. Ваши приватные ключи и API бирж хранятся ТОЛЬКО у вас на ПК, бот никогда их не видит.",
      t_mcp_f1: "ИИ-агент сканирует рынок и подготавливает ордер на вашем ПК",
      t_mcp_f2: "Бот присылает вам уведомление с кнопками «Одобрить» / «Отклонить»",
      t_mcp_f3: "Полный контроль за каждой транзакцией в один клик",
      btn_test_mcp: "Подробнее об MCP в FAQ ↗",
      features_kicker: "04 / Архитектура кейса",
      features_title: "Что под капотом <span class=\"grad-text\">Smart Radar Pro</span>",
      features_desc: "Технический разбор ключевых подсистем: какие инженерные задачи стояли при разработке и как они реализованы на уровне боевого кода и архитектуры.",
      feat_arb_title: "Автоматический CEX Арбитраж",
      feat_arb_desc: "Парсинг стаканов и спредов между крупнейшими биржами: Bybit, Gate, Bitget, BingX, MEXC. Авто-верификация доступности депозитов и выводов, расчет чистой прибыли с комиссиями.",
      feat_arb_i1: "Прямой переход в веб-терминалы обеих бирж",
      feat_arb_i2: "Фильтр минимального спреда и объема",
      feat_arb_i3: "Симуляция баланса $3000 USDC",
      feat_poly_title: "Polymarket Suite & Копи-трейдинг",
      feat_poly_desc: "Ончейн-мониторинг кошельков топ-китов, алерты на резкие скачки вероятностей (>55%) с саммари новостей от Gemini AI, безрисковая демо-торговля и возможность глушить китов.",
      feat_poly_i1: "Мгновенные ссылки на рынки предсказаний",
      feat_poly_i2: "Виртуальный счет для тестирования стратегий",
      feat_poly_i3: "Поддержка личных отслеживаемых адресов",
      feat_leads_title: "Lead Finder: Поиск клиентов на картах",
      feat_leads_desc: "Поиск действующих бизнесов без сайтов в любом городе по 2GIS, Яндекс.Картам, Google Maps и Firecrawl. Готовая мини-CRM, быстрый контакт в WhatsApp/Telegram и экспорт в Excel/CSV.",
      feat_leads_i1: "Фильтр компаний строго БЕЗ сайта",
      feat_leads_i2: "Готовый продающий оффер в 1 клик",
      feat_leads_i3: "Удаление ненужных карточек и статусы",
      feat_mcp_title: "Zero-Custody ИИ-Терминал (MCP)",
      feat_mcp_desc: "Интеграция вашего бота с локальными ИИ-агентами (Cursor, Claude Code) по протоколу MCP. Ключи и деньги остаются в безопасности на вашем ПК, подтверждение сделок — в Telegram.",
      feat_mcp_i1: "Никакой передачи API-ключей и паролей сторонним серверам",
      feat_mcp_i2: "Подтверждение ордеров кнопками Approve / Reject",
      feat_mcp_i3: "Полная документация и SDK в /faq",
      feat_tier: "Доступность",
      faq_kicker: "05 / Вопросы и ответы",
      faq_title: "Коротко <span class=\"grad-text\">о главном</span>",
      faq_desc: "Часто задаваемые вопросы о заказной разработке, оценке проектов и флагманском кейсе.",
      faq_q1: "Можно ли протестировать бота Smart Radar Pro перед заказом своего проекта?",
      faq_a1: "Да, Smart Radar Pro находится в открытом доступе как действующий публичный кейс. Вы можете запустить его в Telegram по ссылке @SmartRadarProBot и лично оценить качество архитектуры, скорость отклика, логику сигналов арбитража, модуль поиска клиентов и работу Zero-Custody контура.",
      faq_q2: "Почему на заказную разработку нет фиксированных цен?",
      faq_a2: "Каждый проект уникален: простой лендинг-визитка, сложный парсер с обходом защит или автоматизированный торговый бот с базой данных требуют разного объема работы. Фиксированные «пакетные» цены обычно либо завышены, либо заставляют делать шаблонно. Мы оцениваем конкретную задачу прозрачно и справедливо.",
      faq_q3: "Безопасен ли Zero-Custody режим (MCP)?",
      faq_a3: "Да, на 100%. При интеграции локального ИИ-агента (Cursor или Claude Code) по протоколу MCP ваши приватные ключи и биржевые API-ключи хранятся исключительно на вашем личном компьютере. Сервер бота передает только аналитику, а любое действие требует подтверждения кнопкой в Telegram.",
      faq_q4: "Как работает модуль Lead Finder без платных API?",
      faq_a4: "Бот использует интеллектуальный движок сбора открытых публичных данных из картографических сервисов (2GIS, Яндекс.Карты, Google Maps), фильтрует компании без сайтов и нормализует телефоны. Также доступно подключение личных бесплатных ключей Firecrawl и 2GIS.",
      faq_q5: "Можно ли заказать разработку MVP или доработку скрипта?",
      faq_a5: "Да. Часто разумнее запустить минимальную рабочую версию (MVP) за несколько дней, проверить спрос или протестировать торговую гипотезу, и только затем масштабировать продукт.",
      brief_kicker: "Есть задача?",
      brief_title: "Давайте <span class=\"grad-text\">обсудим её</span>",
      brief_desc: "Заполните короткий бриф. Заявка автоматически сформируется, скопируется в буфер обмена и откроется чат Telegram с разработчиком.",
      form_name: "Как вас зовут?",
      form_contact: "Как с вами связаться?",
      form_service: "Что вас интересует?",
      form_task: "Коротко о задаче",
      form_submit: "Сформировать заявку и открыть Telegram"
    },
    en: {
      nav_services: "Engineering",
      nav_process: "Process",
      nav_terminal: "Portfolio",
      nav_features: "Architecture",
      nav_faq: "FAQ",
      nav_brief: "Contacts",
      btn_launch_bot: "Launch Bot",
      btn_header_cta: "Discuss Project",
      hero_badge: "Digital Engineering · Flagship Showcase: Smart Radar Pro",
      hero_title: "Custom Web, Telegram Bots <span class=\"grad-text\">& Automation Systems</span>",
      hero_desc: "Bespoke engineering of high-performance websites, complex Telegram bots, parsers, and AI pipelines directly with an engineer. Flagship portfolio showcase: live production terminal Smart Radar Pro.",
      hero_btn_discuss: "Discuss Project",
      hero_btn_portfolio: "Explore Showcase",
      stat_direct: "Direct Access",
      stat_speed: "Load Speed",
      stat_live_case: "Flagship Showcase",
      stat_custody: "Zero-Custody MCP",
      services_kicker: "01 / Custom Engineering",
      services_title: "Websites, Telegram Bots <span class=\"grad-text\">& Custom Scripts</span>",
      services_desc: "Bespoke digital engineering without bloated agencies or boilerplate templates. Transparent individual assessment tailored to your project scope.",
      s1_title: "Websites & Premium Landings",
      s1_desc: "Modern responsive websites in iOS Liquid Glass aesthetics. Sub-300ms load speeds, clean architecture, conversion focus, and Telegram lead routing.",
      s1_i1: "Unique design and tactile micro-interactions",
      s1_i2: "Pixel-perfect responsiveness across mobile and desktop",
      s1_i3: "SEO optimization, Schema.org microdata, and fast indexing",
      s2_title: "Custom Telegram Bots",
      s2_desc: "High-performance Telegram bots: crypto trading terminals, automated payments, recurring subscriptions, CRM pipelines, and third-party API hooks.",
      s2_i1: "Interactive inline keyboards and Telegram Mini Apps",
      s2_i2: "Robust database integration (SQLite, PostgreSQL)",
      s2_i3: "Deployment on your private VPS with documentation",
      s3_title: "Parsers & Automation Scripts",
      s3_desc: "Automated scraping and normalization of public data from maps (2GIS, Yandex, Google), market feeds, and crypto exchanges into Excel or APIs.",
      s3_i1: "Anti-bot and captcha bypassing",
      s3_i2: "Data cleaning, validation, and structured output",
      s3_i3: "Scheduled real-time price and change monitoring",
      s4_title: "AI Integration & MCP Core",
      s4_desc: "Deploy modern LLM models (Gemini, Claude, OpenAI) directly into your business logic. Autonomous AI pipelines, news summaries, and trading bridges.",
      s4_i1: "Integration via Model Context Protocol (MCP)",
      s4_i2: "Custom system prompt and vector context design",
      s4_i3: "Complete isolation of sensitive client data",
      badge_high_craft: "High Craft",
      badge_turnkey: "Turnkey",
      badge_automation: "Automation",
      badge_modern: "Next-Gen",
      eval_label: "Pricing",
      eval_custom: "Tailored individual assessment",
      process_kicker: "02 / Engineering Process",
      process_title: "Transparent Process <span class=\"grad-text\">Without Surprises</span>",
      process_desc: "No empty promises or endless meetings. We operate in verified, iterative stages.",
      p1_title: "Requirement Scoping",
      p1_desc: "Define the core objective, user journey, technical constraints, and readiness criteria.",
      p2_title: "Architecture & Wireframing",
      p2_desc: "Establish data schemas, logic flows, and architecture before styling.",
      p3_title: "Development & Live Demos",
      p3_desc: "Built incrementally. You inspect functional working prototypes at each phase.",
      p4_title: "Deployment & Delivery",
      p4_desc: "Real-world load testing, production VPS deployment, and clear operation documentation.",
      terminal_kicker: "03 / Portfolio Showcase",
      terminal_title: "Flagship Case: <span class=\"grad-text\">Smart Radar Pro</span>",
      terminal_desc: "A production-grade product engineered from the ground up: 5-exchange orderbook scanning, Polymarket whale tracker, B2B lead generation parser, and Zero-Custody security. Test live system logic right in this terminal window:",
      tab_cex: "CEX Arbitrage",
      tab_poly: "Polymarket Whales",
      tab_leads: "Lead Finder (CRM)",
      tab_analysis: "3-Pillar Scoring",
      tab_mcp: "Zero-Custody MCP",
      t_cex_title: "Cross-CEX Spot Arbitrage",
      t_cex_desc: "Continuous spread monitoring across Bybit, Gate, Bitget, BingX, MEXC. Automated blockchain deposit/withdrawal network validation and net fee calculation.",
      t_cex_f1: "Direct clickable links to trading pair terminals in every signal",
      t_cex_f2: "Exclusion of fake spreads with suspended wallets",
      t_cex_f3: "Instant net profit calculation accounting for order book depth",
      btn_test_signal: "Get Signals in Bot ↗",
      t_poly_title: "Polymarket Whale Tracker & Spikes",
      t_poly_desc: "On-chain monitoring of top Gnosis Safe whale wallets on Polymarket + probability spike detector (>55%) paired with instant Gemini AI news summaries.",
      t_poly_f1: "Virtual $3000 USDC balance to test copy-trading risk-free",
      t_poly_f2: "Direct links to official Polymarket event pages in each alert",
      t_poly_f3: "1-click muting options for specific wallets",
      btn_test_poly: "Explore Polymarket Module ↗",
      t_leads_title: "B2B Lead Finder & Mini-CRM",
      t_leads_desc: "Extract businesses across 2GIS, Yandex Maps, Google Maps, and Firecrawl. Unique «No Website» filter discovers companies primed for digital packaging.",
      t_leads_f1: "Built-in mini-CRM (New, Contacted, In Negotiation, Client)",
      t_leads_f2: "1-click direct outreach via WhatsApp and Telegram (t.me/+)",
      t_leads_f3: "1-tap copyable pitch template ready for any messenger",
      btn_test_leads: "Try Lead Finder ↗",
      t_analysis_title: "3-Pillar Technical Scoring",
      t_analysis_desc: "Launch deep technical analysis on any crypto asset with /analyze. Synthesizes Trend (EMA), Momentum (RSI/MACD/BB), and Macro BTC dominance with volume indicators.",
      t_analysis_f1: "Point of Control (POC) horizontal volume profile",
      t_analysis_f2: "CEX order book walls bid/ask depth imbalance",
      t_analysis_f3: "Price and volume divergence detection",
      btn_test_analyze: "Run /analyze in Bot ↗",
      t_mcp_title: "Zero-Custody AI Terminal (MCP)",
      t_mcp_desc: "Connect local AI agents (Cursor, Claude Code) using the Model Context Protocol. Your private keys and exchange API keys stay 100% on your local PC.",
      t_mcp_f1: "Local AI scans market and constructs transactions securely",
      t_mcp_f2: "Bot sends instant approval alerts with Approve / Reject buttons",
      t_mcp_f3: "Full control over every order execution",
      btn_test_mcp: "Learn More in FAQ ↗",
      features_kicker: "04 / Case Architecture",
      features_title: "Under the Hood of <span class=\"grad-text\">Smart Radar Pro</span>",
      features_desc: "Deep architectural breakdown of key subsystems: technical challenges encountered and production solutions implemented.",
      feat_arb_title: "Automated CEX Arbitrage",
      feat_arb_desc: "Real-time spread detection between Bybit, Gate, Bitget, BingX, MEXC. Automated network checks, fee deduction, and direct trading links.",
      feat_arb_i1: "Direct click-to-trade links for both exchanges",
      feat_arb_i2: "Custom minimum spread and volume filters",
      feat_arb_i3: "$3000 USDC demo trading balance",
      feat_poly_title: "Polymarket Intelligence Suite",
      feat_poly_desc: "Whale transaction radar, probability shifts >55% with Gemini AI summaries, simulated risk-free demo trading, and wallet mute controls.",
      feat_poly_i1: "Instant links to prediction markets",
      feat_poly_i2: "Virtual account for testing copy-trading",
      feat_poly_i3: "Personal custom wallet tracking",
      feat_leads_title: "Lead Finder: Map Prospecting",
      feat_leads_desc: "Prospect active businesses without websites across 2GIS, Yandex Maps, Google Maps, and Firecrawl. Mini-CRM, 1-click messaging, and Excel/CSV export.",
      feat_leads_i1: "Target businesses operating without websites",
      feat_leads_i2: "1-tap universal pitch template",
      feat_leads_i3: "Card deletion and pipeline management",
      feat_mcp_title: "Zero-Custody AI Terminal (MCP)",
      feat_mcp_desc: "Integrate local AI agents (Cursor, Claude) via Model Context Protocol. Keys and funds remain strictly on your PC; trade approvals in Telegram.",
      feat_mcp_i1: "Zero private key or credential transfer to external servers",
      feat_mcp_i2: "Single-click Approve / Reject trade controls",
      feat_mcp_i3: "Complete documentation and SDK in /faq",
      feat_tier: "Availability",
      faq_kicker: "05 / FAQ",
      faq_title: "Everything <span class=\"grad-text\">You Need to Know</span>",
      faq_desc: "Frequently asked questions regarding custom engineering, estimates, and our showcase bot.",
      faq_q1: "Can I test Smart Radar Pro before commissioning my project?",
      faq_a1: "Yes, Smart Radar Pro is publicly accessible as a production portfolio case. You can launch it on Telegram (@SmartRadarProBot) and inspect the architecture, real-time speed, arbitrage logic, B2B lead generation, and Zero-Custody AI setup.",
      faq_q2: "Why is there no fixed price table for custom work?",
      faq_a2: "Every project has unique requirements: a focused landing page, a complex parser with anti-bot bypass, or an algorithmic trading bot require different effort. Fixed packages either overcharge or force cookie-cutter solutions. We provide fair, transparent quotes based strictly on project scope.",
      faq_q3: "Is Zero-Custody mode (MCP) truly secure?",
      faq_a3: "Yes, 100%. When connecting a local AI agent (Cursor or Claude Code) via MCP, your private keys and exchange API secrets never leave your local machine. The bot server transmits telemetry, and every execution requires your explicit tap in Telegram.",
      faq_q4: "How does Lead Finder function without paid API keys?",
      faq_a4: "The bot uses a smart public data extraction engine across 2GIS, Yandex Maps, and Google Maps, filtering out businesses that already own websites. Users can also connect their personal free API keys for 2GIS or Firecrawl.",
      faq_q5: "Can I commission an MVP or script iteration?",
      faq_a5: "Absolutely. Often the smartest approach is delivering a minimal working prototype (MVP) within a few days to validate market demand or test trading strategies before scaling.",
      brief_kicker: "Have a project?",
      brief_title: "Let's <span class=\"grad-text\">Build It Together</span>",
      brief_desc: "Fill out the quick brief below. Your order will be automatically structured, copied to your clipboard, and opened directly in Telegram.",
      form_name: "What is your name?",
      form_contact: "How can we reach you?",
      form_service: "What are you looking for?",
      form_task: "Tell us about your project",
      form_submit: "Generate Order & Open Telegram"
    }
  };

  // --- 2. Language Switching Engine ---
  let currentLang = "ru";
  const langToggle = document.getElementById("langToggle");

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    langToggle.textContent = lang === "ru" ? "RU / EN" : "EN / RU";

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (i18n[lang] && i18n[lang][key]) {
        el.innerHTML = i18n[lang][key];
      }
    });

    // Update form placeholders
    const nameInput = document.getElementById("fName");
    const contactInput = document.getElementById("fContact");
    const taskInput = document.getElementById("fTask");
    if (nameInput) nameInput.placeholder = lang === "ru" ? "Иван" : "Alexander";
    if (contactInput) contactInput.placeholder = lang === "ru" ? "@username или телефон" : "@username or email";
    if (taskInput) taskInput.placeholder = lang === "ru" ? "Опишите цель проекта, пожелания или вопросы..." : "Describe your project goal, requirements, or questions...";
  }

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      setLanguage(currentLang === "ru" ? "en" : "ru");
    });
  }

  // --- 3. Interactive Terminal Tabs ---
  const tabs = document.querySelectorAll(".t-tab");
  const panes = document.querySelectorAll(".tab-pane");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => t.classList.remove("active"));
      panes.forEach(p => p.classList.remove("active"));

      tab.classList.add("active");
      const activePane = document.getElementById(target);
      if (activePane) {
        activePane.classList.add("active");
      }
    });
  });

  // --- 4. Service Link to Brief Select ---
  document.querySelectorAll("[data-service]").forEach(link => {
    link.addEventListener("click", (e) => {
      const svc = link.getAttribute("data-service");
      const select = document.getElementById("fService");
      if (select && svc) {
        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].value === svc || select.options[i].text.includes(svc)) {
            select.selectedIndex = i;
            break;
          }
        }
      }
    });
  });

  // --- 5. Interactive Brief Form Handler (Clipboard + Telegram) ---
  const briefForm = document.getElementById("briefForm");
  const formStatus = document.getElementById("formStatus");

  if (briefForm) {
    briefForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(briefForm);
      const name = formData.get("name") || "";
      const contact = formData.get("contact") || "";
      const service = formData.get("service") || "";
      const task = formData.get("task") || "";

      const orderText = `Заявка с сайта (Smart Radar Pro & Craft)
Имя: ${name}
Контакт: ${contact}
Услуга / Модуль: ${service}
Задача:
${task}`;

      const tgUrl = briefForm.dataset.telegram || "https://t.me/vovan9805";

      try {
        await navigator.clipboard.writeText(orderText);
        if (formStatus) {
          formStatus.style.color = "var(--green)";
          formStatus.textContent = currentLang === "ru"
            ? "Заявка скопирована в буфер обмена! Перенаправляю в Telegram..."
            : "Order copied to clipboard! Redirecting to Telegram...";
        }
      } catch (err) {
        if (formStatus) {
          formStatus.style.color = "var(--cyan)";
          formStatus.textContent = currentLang === "ru"
            ? "Открываю Telegram для отправки сообщения..."
            : "Opening Telegram to send your request...";
        }
      }

      setTimeout(() => {
        window.open(tgUrl, "_blank", "noopener,noreferrer");
      }, 700);
    });
  }

  // --- 6. Mobile Menu Burger Toggle ---
  const burgerBtn = document.getElementById("burgerBtn");
  const navMenu = document.getElementById("navMenu");

  if (burgerBtn && navMenu) {
    burgerBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      burgerBtn.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        burgerBtn.classList.remove("active");
      });
    });
  }

  // --- 7. Scrollspy Active Navigation Highlight ---
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset + 140;

    sections.forEach(sec => {
      const secHeight = sec.offsetHeight;
      const secTop = sec.offsetTop;
      const secId = sec.getAttribute("id");

      if (scrollY > secTop && scrollY <= secTop + secHeight) {
        document.querySelectorAll(".nav-link").forEach(a => {
          a.classList.remove("active");
          if (a.getAttribute("href") === `#${secId}`) {
            a.classList.add("active");
          }
        });
      }
    });
  });
});
