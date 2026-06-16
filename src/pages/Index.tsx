import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG = 'https://cdn.poehali.dev/projects/efc88290-2e0c-4654-a4e6-e421b8887faf/files/6f183052-b0a1-41d0-a119-94faafc8f425.jpg';

const systems = [
  { icon: 'TrendingUp', title: 'Чёрный рынок', desc: 'Тёплый ствол, левый товар, наличка из рук в руки. Цены диктует улица, а не закон.', color: 'cyan' },
  { icon: 'Banknote', title: 'Деньги и долги', desc: 'Крыша, отжим, обнал и честный бизнес для прикрытия. Поднимай капитал — или уходи в минус.', color: 'magenta' },
  { icon: 'Users', title: 'Мультиплеер', desc: 'Сотни людей на районе в реальном времени. Город живёт по своим понятиям круглосуточно.', color: 'cyan' },
  { icon: 'MessageSquare', title: 'Голос и связь', desc: 'Голосовой и текстовый чат с радиусом слышимости. Решай вопросы — или молчи на стрелке.', color: 'magenta' },
  { icon: 'Shield', title: 'Бригады', desc: 'Сколачивай свою бригаду, держи район, дели сферы влияния и объявляй войну конкурентам.', color: 'cyan' },
  { icon: 'Handshake', title: 'Дела сообща', desc: 'Совместные дела, налёты и крупные схемы. По одному тут не выживают — нужна команда.', color: 'magenta' },
];

const stats = [
  { value: '512', label: 'Людей в сети' },
  { value: '64', label: 'Бригад' },
  { value: 'UE5', label: 'Движок' },
  { value: '24/7', label: 'Город живёт' },
];

export default function Index() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-border/50 backdrop-blur-md bg-background/70">
        <nav className="container flex items-center justify-between h-16">
          <div className="font-display text-2xl font-bold tracking-widest">
            <span className="text-neon-cyan glow-cyan">ЧЁРНАЯ</span>
            <span className="text-foreground"> ВОЛГА</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider text-muted-foreground font-display">
            <a href="#systems" className="hover:text-neon-cyan transition-colors">Понятия</a>
            <a href="#world" className="hover:text-neon-cyan transition-colors">Район</a>
            <a href="#join" className="hover:text-neon-cyan transition-colors">Вписаться</a>
          </div>
          <Button className="bg-neon-cyan/10 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background uppercase font-display tracking-wider box-glow-cyan rounded-sm">
            Личный кабинет
          </Button>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center grid-bg scanlines">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Чёрная Волга" className="w-full h-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/85 to-transparent" />
        </div>

        <div className="container relative z-10 text-center">
          <div className={loaded ? 'animate-float-up' : 'opacity-0'} style={{ animationDelay: '0.1s' }}>
            <p className="text-neon-magenta glow-magenta uppercase tracking-[0.4em] text-sm mb-6 font-display animate-flicker">
              Unreal Engine 5 · Криминальный RP
            </p>
          </div>
          <h1 className={`font-display font-bold leading-none mb-6 ${loaded ? 'animate-float-up' : 'opacity-0'}`} style={{ animationDelay: '0.25s' }}>
            <span className="block text-6xl md:text-9xl text-foreground animate-glitch cursor-default">ДОБРО</span>
            <span className="block text-6xl md:text-9xl text-neon-cyan glow-cyan animate-glitch cursor-default">ПОЖАЛОВАТЬ</span>
            <span className="block text-2xl md:text-4xl text-neon-magenta glow-magenta tracking-[0.3em] mt-4">НА РАЙОН</span>
          </h1>
          <p className={`max-w-xl mx-auto text-muted-foreground text-lg mb-10 ${loaded ? 'animate-float-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            Криминальная Россия, где ты сам решаешь, кем стать: вором в законе, барыгой или честным мужиком, что держит район.
          </p>
          <div className={`flex flex-wrap gap-4 justify-center ${loaded ? 'animate-float-up' : 'opacity-0'}`} style={{ animationDelay: '0.55s' }}>
            <Button size="lg" className="bg-neon-cyan text-background hover:bg-neon-cyan/80 uppercase font-display tracking-widest text-base px-8 box-glow-cyan rounded-sm">
              <Icon name="Play" className="mr-2" size={18} /> Начать путь
            </Button>
            <Button size="lg" variant="outline" className="border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-background uppercase font-display tracking-widest text-base px-8 rounded-sm bg-transparent">
              <Icon name="Compass" className="mr-2" size={18} /> О районе
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neon-cyan animate-bounce">
          <Icon name="ChevronDown" size={28} />
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-card/40">
        <div className="container grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {stats.map((s) => (
            <div key={s.label} className="py-10 text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-neon-cyan glow-cyan">{s.value}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SYSTEMS */}
      <section id="systems" className="py-28 grid-bg relative">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-neon-magenta uppercase tracking-[0.3em] text-sm mb-3 font-display">Жизнь по понятиям</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold">
              ЗАКОНЫ <span className="text-neon-cyan glow-cyan">УЛИЦЫ</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systems.map((sys) => {
              const isCyan = sys.color === 'cyan';
              return (
                <div
                  key={sys.title}
                  className={`group relative p-8 bg-card/60 border rounded-sm transition-all duration-300 hover:-translate-y-2 ${
                    isCyan ? 'border-neon-cyan/30 hover:box-glow-cyan' : 'border-neon-magenta/30 hover:box-glow-magenta'
                  }`}
                >
                  <div className={`inline-flex p-3 rounded-sm mb-5 ${isCyan ? 'bg-neon-cyan/10 text-neon-cyan' : 'bg-neon-magenta/10 text-neon-magenta'}`}>
                    <Icon name={sys.icon} size={28} />
                  </div>
                  <h3 className={`font-display text-2xl font-semibold mb-3 uppercase tracking-wide ${isCyan ? 'group-hover:text-neon-cyan group-hover:glow-cyan' : 'group-hover:text-neon-magenta group-hover:glow-magenta'} transition-all`}>
                    {sys.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{sys.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORLD CTA */}
      <section id="world" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        </div>
        <div className="container relative z-10 text-center max-w-3xl">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            РАЙОН <span className="text-neon-magenta glow-magenta">НЕ СПИТ</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Дождь по капотам старых иномарок, свет фонарей в тумане. В каждом дворе — своя сходка, долг или разборка. Тут нет сценария — только твои решения и твоё слово.
          </p>
        </div>
      </section>

      {/* JOIN */}
      <section id="join" className="py-28 grid-bg">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            ПОРА <span className="text-neon-cyan glow-cyan">ВПИСАТЬСЯ</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Создай персонажа, заходи на район и впиши своё имя в историю улиц.
          </p>
          <Button size="lg" className="bg-neon-magenta text-background hover:bg-neon-magenta/80 uppercase font-display tracking-widest text-lg px-12 py-6 box-glow-magenta rounded-sm">
            <Icon name="Zap" className="mr-2" size={22} /> Зайти в игру
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl font-bold tracking-widest">
            <span className="text-neon-cyan">ЧЁРНАЯ</span><span className="text-foreground"> ВОЛГА</span>
          </div>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">Built on Unreal Engine 5 · 2026</p>
          <div className="flex gap-4 text-muted-foreground">
            <Icon name="MessageCircle" size={20} className="hover:text-neon-cyan transition-colors cursor-pointer" />
            <Icon name="Youtube" size={20} className="hover:text-neon-cyan transition-colors cursor-pointer" />
            <Icon name="Send" size={20} className="hover:text-neon-cyan transition-colors cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}
