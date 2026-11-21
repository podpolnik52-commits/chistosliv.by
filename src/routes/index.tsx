import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CheckCircle2, BellRing, Copy, AlertTriangle } from "lucide-react";
import {
  Phone, MessageCircle, Clock, BadgeCheck, Sparkles, MapPin, Truck, Droplets,
  Home, Trees, Factory, CalendarClock, FileText, Waves, ChevronDown, Calculator, Send,
} from "lucide-react";

const PHONE = "+375291953535";
const PHONE_LABEL = "+375 29 195-35-35";
const WA = "https://wa.me/375291953535";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "chistosliv.by — откачка канализации в Минске, ассенизатор" },
      { name: "description", content: "Откачка выгребных ям, септиков и станций в Минске и Минском районе. Выезд в день звонка, цена заранее, шланг до 40 м." },
      { property: "og:title", content: "chistosliv.by — откачка канализации в Минске" },
      { property: "og:description", content: "Ямы, септики, станции, ЖБО. Срочный выезд, цена до выезда, документы для юрлиц." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Home, t: "Выгребные ямы", d: "Откачка ямы любого объёма — от небольших до больших дворовых." },
  { icon: Droplets, t: "Септики", d: "Жидкая часть и ил из камер — по регламенту, без повреждений." },
  { icon: Waves, t: "Автономные станции", d: "Удаление избыточного ила — бактерии станции остаются живы." },
  { icon: Trees, t: "Дачные туалеты", d: "Садоводства и бытовки — быстро, без разбора будки." },
  { icon: Factory, t: "ЖБО для бизнеса", d: "Кафе, АЗС, автомойки — по договору, с документами." },
  { icon: CalendarClock, t: "По графику", d: "Регулярная откачка — и вы больше не вспоминаете о яме." },
];

const pains = [
  ["Яма переполнена, а в доме праздник?", "Приезжаем в день звонка — без записи на следующую неделю."],
  ["Стыдно перед соседями за запах?", "Работаем аккуратно: без луж и «ароматов» на весь двор."],
  ["Боитесь доплат на месте?", "Называем цену по телефону — до выезда машины."],
  ["Яма снова полная через месяц?", "Подберём график — и проблема исчезнет из вашей жизни."],
];

const steps = [
  ["Звонок или заявка", "Расскажите про яму и адрес — сразу назову стоимость."],
  ["Выезд", "Шланг до 40 м — узкие дворы и садоводства не проблема."],
  ["Откачка", "Вакуум поднимает всё в цистерну. Вокруг сухо и чисто."],
  ["Оплата и документы", "Наличные или карта. Юрлицам — договор и акты."],
  ["График", "Подскажу периодичность и напомню, когда пора."],
];

const prices = {
  private: [["Выгребная яма дома", "откачка под ноль"], ["Яма в садоводстве", "откачка + туалет"], ["Септик", "жидкость + ил"], ["Станция очистки", "обслуживание"], ["Деревянный туалет", "откачка"], ["Яма под баней", "откачка"]],
  business: [["Кафе, столовые", "вывоз ЖБО по графику"], ["Магазины, АЗС", "откачка и документы"], ["Автомойки", "отстойники, грязеуловители"], ["Стройки, бытовки", "туалеты под ключ"], ["Садоводства (СНТ)", "обслуживание колодцев"], ["Договор", "регулярное обслуживание"]],
};

const faq = [
  ["Сколько стоит откачка?", "Цена зависит от объёма, удалённости адреса и подъезда. Точную сумму называем по телефону до выезда — на месте она не меняется."],
  ["Как быстро приедете?", "Обычно в день обращения. В пиковый сезон — на следующий день, договариваемся о точном времени."],
  ["Работаете зимой?", "Да, круглый год, в том числе в мороз."],
  ["Как часто нужно откачивать яму?", "Семья из 3–4 человек заполняет яму 3–4 м³ за 1–2 месяца. Откачивайте на 80% заполнения — воспользуйтесь калькулятором выше."],
  ["Даёте документы юрлицам?", "Да: договор, акты на вывоз ЖБО — для проверок и бухгалтерии."],
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Pains />
      <Services />
      <FillCalculator />
      <Prices />
      <Steps />
      <Prepare />
      <Faq />
      <RequestForm />
      <Footer />
      <MobileBar />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-deep text-accent"><Truck className="h-5 w-5" /></span>
          <span className="font-display text-base font-bold uppercase leading-tight">chistosliv.by <span className="text-water">· ассенизатор</span></span>
        </a>
        <nav className="hidden gap-6 text-sm font-semibold text-muted-foreground md:flex">
          <a href="#services" className="hover:text-foreground">Услуги</a>
          <a href="#calc" className="hover:text-foreground">Калькулятор</a>
          <a href="#prices" className="hover:text-foreground">Цены</a>
          <a href="#faq" className="hover:text-foreground">Вопросы</a>
        </nav>
        <a href={`tel:${PHONE}`} className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground shadow-accent transition hover:-translate-y-0.5">
          <Phone className="h-4 w-4" /><span className="hidden sm:inline">{PHONE_LABEL}</span><span className="sm:hidden">Позвонить</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="grid-bg relative overflow-hidden bg-deep text-deep-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-deep-foreground/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" /> Сегодня принимаем заявки
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] md:text-6xl">
            Яма чистая —<br /><span className="text-accent">дом без запаха</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-deep-foreground/75">
            Откачка выгребных ям, септиков и станций в Минске и Минском районе. Приезжаем, откачиваем, увозим — быстро и аккуратно.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} className="flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-bold text-accent-foreground shadow-accent transition hover:-translate-y-0.5"><Phone className="h-5 w-5" />{PHONE_LABEL}</a>
            <a href="#request" className="rounded-full border border-deep-foreground/30 px-6 py-3.5 font-bold transition hover:bg-deep-foreground/10">Заявка онлайн</a>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[[Clock, "Выезд", "в день звонка"], [BadgeCheck, "Цена", "до выезда"], [Sparkles, "Чисто", "без луж"], [MapPin, "Минск", "и район"]].map(([I, a, b]) => {
              const Icon = I as typeof Clock;
              return (
                <div key={a as string}>
                  <Icon className="h-5 w-5 text-accent" />
                  <dt className="mt-2 font-bold">{a as string}</dt>
                  <dd className="text-sm text-deep-foreground/60">{b as string}</dd>
                </div>
              );
            })}
          </dl>
        </div>
        <PumpScheme />
      </div>
    </section>
  );
}

function PumpScheme() {
  return (
    <div className="relative rounded-3xl border border-deep-foreground/15 bg-deep-foreground/5 p-6">
      <div className="mb-3 flex justify-between font-mono text-[10px] uppercase tracking-widest text-deep-foreground/50">
        <span>Схема · откачка</span><span>шланг до 40 м · цистерна до 15 м³</span>
      </div>
      <svg viewBox="0 0 400 260" className="w-full">
        {/* truck */}
        <rect x="20" y="40" width="190" height="90" rx="40" className="fill-deep stroke-deep-foreground/40" strokeWidth="2" />
        <clipPath id="tank"><rect x="22" y="42" width="186" height="86" rx="38" /></clipPath>
        <g clipPath="url(#tank)"><rect x="20" y="40" width="190" height="90" className="animate-fill-tank fill-sludge" style={{ transformBox: "fill-box" }} /></g>
        <rect x="210" y="60" width="60" height="70" rx="8" className="fill-accent" />
        <rect x="222" y="70" width="36" height="22" rx="3" className="fill-deep" />
        <circle cx="70" cy="140" r="16" className="fill-deep stroke-deep-foreground/50" strokeWidth="4" />
        <circle cx="160" cy="140" r="16" className="fill-deep stroke-deep-foreground/50" strokeWidth="4" />
        <circle cx="240" cy="140" r="16" className="fill-deep stroke-deep-foreground/50" strokeWidth="4" />
        <line x1="0" y1="158" x2="400" y2="158" className="stroke-deep-foreground/30" strokeWidth="2" />
        {/* hose */}
        <path d="M40 60 C 0 60, 10 175, 60 175 L 300 175 L 320 190" fill="none" className="stroke-deep-foreground/30" strokeWidth="8" strokeLinecap="round" />
        <path d="M320 190 L 300 175 L 60 175 C 10 175, 0 60, 40 60" fill="none" className="animate-flow stroke-accent" strokeWidth="3" strokeDasharray="8 12" strokeLinecap="round" />
        {/* pit */}
        <rect x="290" y="180" width="90" height="70" className="fill-deep stroke-deep-foreground/40" strokeWidth="2" />
        <clipPath id="pit"><rect x="292" y="182" width="86" height="66" /></clipPath>
        <g clipPath="url(#pit)"><rect x="290" y="180" width="90" height="70" className="animate-drain-pit fill-sludge" style={{ transformBox: "fill-box" }} /></g>
        <text x="335" y="174" textAnchor="middle" className="fill-deep-foreground/60 font-mono text-[9px]">ЯМА</text>
        <text x="115" y="30" textAnchor="middle" className="fill-deep-foreground/60 font-mono text-[9px]">ЦИСТЕРНА НАПОЛНЯЕТСЯ</text>
      </svg>
    </div>
  );
}

function SectionHead({ k, t, d }: { k: string; t: string; d?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <div className="font-mono text-xs font-bold uppercase tracking-widest text-water">{k}</div>
      <h2 className="mt-2 text-3xl font-bold md:text-4xl">{t}</h2>
      {d && <p className="mt-3 text-muted-foreground">{d}</p>}
    </div>
  );
}

function Pains() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid gap-4 md:grid-cols-2">
        {pains.map(([q, a], i) => (
          <div key={q} className="group rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1">
            <div className="font-mono text-xs text-muted-foreground">0{i + 1}</div>
            <h3 className="mt-2 text-lg font-bold">{q}</h3>
            <p className="mt-2 text-muted-foreground"><span className="font-bold text-foreground">→ </span>{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-secondary/60 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead k="Услуги" t="Что откачиваем и вывозим" d="Если вашей ситуации нет в списке — позвоните, почти наверняка решаемо." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl bg-card p-6 shadow-card transition hover:-translate-y-1">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-deep text-accent"><Icon className="h-6 w-6" /></span>
              <h3 className="mt-4 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl bg-deep p-6 text-deep-foreground md:grid-cols-4">
          {[["до 40 м", "длина шланга"], ["до 15 м³", "объём цистерны"], ["Юрлицам", "договор и акты"], ["365 дней", "круглый год"]].map(([a, b]) => (
            <div key={a}><div className="font-display text-2xl font-bold text-accent">{a}</div><div className="text-sm text-deep-foreground/60">{b}</div></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FillCalculator() {
  const [volume, setVolume] = useState(4);
  const [people, setPeople] = useState(3);
  const [type, setType] = useState<"pit" | "septic">("pit");
  const days = useMemo(() => {
    // ~0.15 м³ на человека в сутки для ямы без перелива; септик обслуживается по илу
    if (type === "septic") return Math.round(365 / (people > 4 ? 2 : 1));
    return Math.max(3, Math.round((volume * 0.8) / (people * 0.025)));
  }, [volume, people, type]);
  const label = days >= 60 ? `≈ ${Math.round(days / 30)} мес.` : `≈ ${days} дн.`;

  return (
    <section id="calc" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHead k="Калькулятор" t="Когда пора откачивать?" d="Ориентир из практики: откачивать стоит при заполнении на 80%, не дожидаясь переполнения." />
      <div className="grid gap-6 rounded-3xl border border-border bg-card p-6 shadow-card md:grid-cols-[1.3fr_1fr] md:p-10">
        <div className="space-y-8">
          <div className="flex gap-2">
            {(["pit", "septic"] as const).map((v) => (
              <button key={v} onClick={() => setType(v)} className={`rounded-full px-4 py-2 text-sm font-bold transition ${type === v ? "bg-deep text-deep-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}>
                {v === "pit" ? "Выгребная яма" : "Септик / станция"}
              </button>
            ))}
          </div>
          {type === "pit" && (
            <Range label="Объём ямы" value={volume} unit="м³" min={1} max={15} onChange={setVolume} />
          )}
          <Range label="Человек живёт" value={people} unit="чел." min={1} max={10} onChange={setPeople} />
        </div>
        <div className="flex flex-col justify-between rounded-2xl bg-deep p-6 text-deep-foreground">
          <div>
            <Calculator className="h-6 w-6 text-accent" />
            <div className="mt-4 text-sm text-deep-foreground/60">Откачка примерно раз в</div>
            <div className="font-display text-5xl font-bold text-accent">{label}</div>
            <p className="mt-3 text-sm text-deep-foreground/60">Точный график подскажу после первого выезда.</p>
          </div>
          <div className="mt-6 grid gap-2">
            <a href="#request" className="rounded-full bg-accent px-5 py-3 text-center font-bold text-accent-foreground">Заказать откачку</a>
            <button onClick={() => downloadReminder(days)} className="flex items-center justify-center gap-2 rounded-full border border-deep-foreground/30 px-5 py-3 font-bold transition hover:bg-deep-foreground/10">
              <BellRing className="h-4 w-4" />Напоминание в календарь
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function downloadReminder(days: number) {
  const d = new Date(Date.now() + days * 86400000);
  const ymd = d.toISOString().slice(0, 10).replace(/-/g, "");
  const ics = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//chistosliv.by//RU", "BEGIN:VEVENT",
    `UID:${Date.now()}@chistosliv.by`, `DTSTART;VALUE=DATE:${ymd}`,
    "SUMMARY:Пора откачать яму — chistosliv.by",
    `DESCRIPTION:Позвоните ассенизатору: ${PHONE_LABEL}`,
    "BEGIN:VALARM", "TRIGGER:-P2D", "ACTION:DISPLAY", "DESCRIPTION:Скоро откачка ямы", "END:VALARM",
    "END:VEVENT", "END:VCALENDAR",
  ].join("\r\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
  a.download = "otkachka-napominanie.ics";
  a.click();
}

const signs = ["Неприятный запах во дворе или в доме", "Вода в раковине и унитазе уходит медленно", "Уровень в яме выше 2/3", "Бульканье в трубах", "Мокрая земля вокруг ямы"];
const prep = ["Освободите подъезд для машины (ширина от 3 м)", "Откройте люк или покажите, где он", "Уберите машины и ворота с пути шланга", "Привяжите собак 🙂", "Скажите, если яма не откачивалась больше года"];

function Prepare() {
  const [checked, setChecked] = useState<string[]>([]);
  const toggle = (x: string) => setChecked((c) => (c.includes(x) ? c.filter((y) => y !== x) : [...c, x]));
  const level = checked.length;
  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-20 md:grid-cols-2">
      <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
        <AlertTriangle className="h-6 w-6 text-sludge" />
        <h3 className="mt-3 text-xl font-bold">Тест: пора ли вызывать?</h3>
        <p className="mt-1 text-sm text-muted-foreground">Отметьте, что замечаете:</p>
        <ul className="mt-4 space-y-2">
          {signs.map((x) => (
            <li key={x}>
              <label className="flex cursor-pointer items-center gap-3 rounded-xl bg-muted px-4 py-3 text-sm font-semibold">
                <input type="checkbox" checked={checked.includes(x)} onChange={() => toggle(x)} className="h-5 w-5 accent-primary" />{x}
              </label>
            </li>
          ))}
        </ul>
        <div className={`mt-4 rounded-xl px-4 py-3 text-sm font-bold ${level >= 2 ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground"}`}>
          {level === 0 ? "Пока всё в порядке — но проверяйте уровень раз в месяц." : level === 1 ? "Стоит запланировать откачку в ближайшие дни." : "Пора вызывать — позвоните сегодня, чтобы не было перелива."}
        </div>
        {level >= 2 && <a href={`tel:${PHONE}`} className="mt-3 inline-flex items-center gap-2 font-bold text-primary"><Phone className="h-4 w-4" />{PHONE_LABEL}</a>}
      </div>
      <div className="rounded-3xl bg-deep p-6 text-deep-foreground md:p-8">
        <CheckCircle2 className="h-6 w-6 text-accent" />
        <h3 className="mt-3 text-xl font-bold">Как подготовиться к приезду</h3>
        <p className="mt-1 text-sm text-deep-foreground/60">Пять минут — и откачка пройдёт быстрее.</p>
        <ul className="mt-4 space-y-3">
          {prep.map((x, i) => (
            <li key={x} className="flex gap-3"><span className="font-display font-bold text-accent">{i + 1}</span><span>{x}</span></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Range({ label, value, unit, min, max, onChange }: { label: string; value: number; unit: string; min: number; max: number; onChange: (n: number) => void }) {
  return (
    <label className="block">
      <div className="flex justify-between font-semibold"><span>{label}</span><span className="font-display text-water">{value} {unit}</span></div>
      <input type="range" min={min} max={max} value={value} onChange={(e) => onChange(Number(e.target.value))} className="mt-3 w-full accent-primary" />
    </label>
  );
}

function Prices() {
  const [tab, setTab] = useState<"private" | "business">("private");
  return (
    <section id="prices" className="bg-secondary/60 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead k="Цены" t="Честная цена — до выезда" d="Стоимость зависит от объёма, удалённости, подъезда и периодичности. Назову её по телефону." />
        <div className="mb-6 inline-flex rounded-full bg-card p-1 shadow-card">
          {(["private", "business"] as const).map((v) => (
            <button key={v} onClick={() => setTab(v)} className={`rounded-full px-5 py-2 text-sm font-bold transition ${tab === v ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}>
              {v === "private" ? "Частным лицам" : "Бизнесу"}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-[1.5fr_1fr]">
          <ul className="divide-y divide-border rounded-2xl bg-card shadow-card">
            {prices[tab].map(([a, b]) => (
              <li key={a} className="flex items-center justify-between gap-4 px-6 py-4">
                <span className="font-semibold">{a}</span><span className="text-right text-sm text-muted-foreground">{b}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl bg-deep p-6 text-deep-foreground">
            <FileText className="h-6 w-6 text-accent" />
            <h3 className="mt-3 text-xl font-bold">Документы для юрлиц</h3>
            <p className="mt-2 text-sm text-deep-foreground/70">Договор и акты на вывоз ЖБО — для проверок и бухгалтерии всё в порядке.</p>
            <a href={`tel:${PHONE}`} className="mt-6 inline-flex items-center gap-2 font-bold text-accent"><Phone className="h-4 w-4" />Узнать цену</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <SectionHead k="Как работаем" t="От звонка до чистой ямы" />
      <ol className="grid gap-4 md:grid-cols-5">
        {steps.map(([t, d], i) => (
          <li key={t} className="relative rounded-2xl border border-border bg-card p-5">
            <div className="font-display text-4xl font-bold text-accent">{i + 1}</div>
            <h3 className="mt-2 font-bold">{t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 pb-20">
      <SectionHead k="Вопросы" t="Частые вопросы" />
      <div className="space-y-3">
        {faq.map(([q, a], i) => (
          <div key={q} className="rounded-2xl border border-border bg-card">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-bold">
              {q}<ChevronDown className={`h-5 w-5 shrink-0 transition ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && <p className="px-6 pb-5 text-muted-foreground">{a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

function RequestForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [kind, setKind] = useState("Выгребная яма");
  const [urgent, setUrgent] = useState(true);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("Любое");
  const [volume, setVolume] = useState("");
  const [distance, setDistance] = useState("");
  const [copied, setCopied] = useState(false);
  const when = urgent ? "Срочно, сегодня" : `Дата: ${date || "любая"}, время: ${time}`;
  const text = `Здравствуйте! Заявка на откачку.\nИмя: ${name}\nТелефон: ${phone}\nАдрес: ${address}\nЧто: ${kind}${volume ? `\nОбъём: ~${volume} м³` : ""}${distance ? `\nОт машины до ямы: ~${distance} м` : ""}\n${when}`;
  const ok = phone.trim().length >= 7 && address.trim().length > 2;

  return (
    <section id="request" className="grid-bg bg-deep py-20 text-deep-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold md:text-5xl">Яма переполнена?<br /><span className="text-accent">Приедем сегодня.</span></h2>
          <p className="mt-4 text-deep-foreground/70">Оставьте заявку — она откроется в WhatsApp, останется только нажать «Отправить». Или просто позвоните.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} className="flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-bold text-accent-foreground"><Phone className="h-5 w-5" />{PHONE_LABEL}</a>
            <a href={WA} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-deep-foreground/30 px-6 py-3.5 font-bold"><MessageCircle className="h-5 w-5" />WhatsApp</a>
            <a href={`viber://chat?number=%2B${PHONE.slice(1)}`} className="flex items-center gap-2 rounded-full border border-deep-foreground/30 px-6 py-3.5 font-bold"><MessageCircle className="h-5 w-5" />Viber</a>
            <button type="button" onClick={() => { void navigator.clipboard.writeText(PHONE_LABEL); setCopied(true); setTimeout(() => setCopied(false), 2000); }} className="flex items-center gap-2 rounded-full px-4 py-3.5 text-sm font-bold text-deep-foreground/70 hover:text-deep-foreground">
              <Copy className="h-4 w-4" />{copied ? "Скопировано" : "Скопировать номер"}
            </button>
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); if (ok) window.open(`${WA}?text=${encodeURIComponent(text)}`, "_blank"); }}
          className="space-y-4 rounded-3xl bg-card p-6 text-card-foreground shadow-card md:p-8"
        >
          <Field label="Имя" value={name} onChange={setName} placeholder="Иван" />
          <Field label="Телефон *" value={phone} onChange={setPhone} placeholder="+375 29 ..." type="tel" />
          <Field label="Адрес *" value={address} onChange={setAddress} placeholder="Минский р-н, д. ..." />
          <label className="block text-sm font-semibold">Что откачать
            <select value={kind} onChange={(e) => setKind(e.target.value)} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3">
              {["Выгребная яма", "Септик", "Автономная станция", "Дачный туалет", "ЖБО для бизнеса"].map((o) => <option key={o}>{o}</option>)}
            </select>
          </label>
          <label className="flex items-center gap-3 text-sm font-semibold">
            <input type="checkbox" checked={urgent} onChange={(e) => setUrgent(e.target.checked)} className="h-5 w-5 accent-primary" /> Срочно, сегодня
          </label>
          {!urgent && (
            <div className="grid grid-cols-2 gap-3">
              <Field label="Дата" value={date} onChange={setDate} placeholder="" type="date" />
              <label className="block text-sm font-semibold">Время
                <select value={time} onChange={(e) => setTime(e.target.value)} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3">
                  {["Любое", "Утро (8–12)", "День (12–16)", "Вечер (16–20)"].map((o) => <option key={o}>{o}</option>)}
                </select>
              </label>
            </div>
          )}
          <div className="grid grid-cols-2 gap-3">
            <Field label="Объём ямы, м³" value={volume} onChange={setVolume} placeholder="если знаете" type="number" />
            <Field label="От машины до ямы, м" value={distance} onChange={setDistance} placeholder="примерно" type="number" />
          </div>
          {distance && Number(distance) > 40 && <p className="text-sm font-semibold text-destructive">Шланг — до 40 м. Позвоните, подскажем, как подъехать ближе.</p>}
          <button disabled={!ok} className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-bold text-primary-foreground transition disabled:opacity-40">
            <Send className="h-5 w-5" />Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder, type = "text" }: { label: string; value: string; onChange: (v: string) => void; placeholder: string; type?: string }) {
  return (
    <label className="block text-sm font-semibold">{label}
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border pb-24 pt-8 md:pb-8">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-5 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} chistosliv.by — откачка канализации, Минск и Минский район</span>
        <a href={`tel:${PHONE}`} className="font-bold text-foreground">{PHONE_LABEL}</a>
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-2 rounded-full bg-accent py-3 font-bold text-accent-foreground"><Phone className="h-4 w-4" />Позвонить</a>
      <a href={WA} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-deep py-3 font-bold text-deep-foreground"><MessageCircle className="h-4 w-4" />WhatsApp</a>
    </div>
  );
}
