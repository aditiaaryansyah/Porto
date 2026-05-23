import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import heroImg from "@/assets/hero-soto.jpg";
import menuIga from "@/assets/menu-iga.jpg";
import menuBetawi from "@/assets/menu-betawi.jpg";
import menuDaging from "@/assets/menu-daging.jpg";
import menuAyam from "@/assets/menu-ayam.jpg";
import aboutImg from "@/assets/about-resto.jpg";
import { MapPin, Phone, Clock, Instagram, MessageCircle, Star, Utensils, Flame, Leaf } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Soto Iga Juara — Soto Iga, Betawi & Daging Premium" },
      {
        name: "description",
        content:
          "Soto Iga Juara — sajian soto iga, soto betawi, dan soto daging dengan kuah kaya rempah. Pesan langsung via WhatsApp.",
      },
      { property: "og:title", content: "Soto Iga Juara" },
      {
        property: "og:description",
        content: "Soto premium dengan kuah kaya rempah. Pesan via WhatsApp sekarang.",
      },
    ],
  }),
  component: Index,
});

const WA_NUMBER = "6281234567890";
const waLink = (text: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

const menus = [
  {
    name: "Soto Iga",
    desc: "Iga sapi empuk dengan kuah bening kaya rempah, taburan bawang goreng & jeruk nipis.",
    price: "Rp 45.000",
    img: menuIga,
    badge: "Signature",
  },
  {
    name: "Soto Betawi",
    desc: "Kuah santan creamy dengan potongan daging, kentang, dan tomat segar khas Betawi.",
    price: "Rp 42.000",
    img: menuBetawi,
    badge: "Favorit",
  },
  {
    name: "Soto Daging",
    desc: "Kuah bening kuning dengan irisan daging sapi pilihan, gurih dan menghangatkan.",
    price: "Rp 38.000",
    img: menuDaging,
  },
  {
    name: "Soto Ayam",
    desc: "Kuah kuning kunyit dengan suwiran ayam kampung, soun, dan telur rebus.",
    price: "Rp 32.000",
    img: menuAyam,
  },
];

const testimoni = [
  {
    name: "Andini P.",
    role: "Food Blogger",
    text: "Kuah soto iganya juara banget! Dagingnya empuk, bumbunya nendang. Wajib coba!",
  },
  {
    name: "Reza H.",
    role: "Pelanggan Setia",
    text: "Soto Betawinya creamy dan gurih, porsinya pas. Sudah jadi tempat langganan keluarga.",
  },
  {
    name: "Sinta L.",
    role: "Pecinta Kuliner",
    text: "Tempatnya nyaman, pelayanan ramah, dan rasa sotonya konsisten. Pesan via WA juga cepat!",
  },
];

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Nav />
      <Hero />
      <Marquee />
      <Menu />
      <About />
      <Location />
      <Testimoni />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border/60 bg-background/70 px-5 py-3 backdrop-blur-xl">
        <a href="#" className="flex items-center gap-2 font-display font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-yellow text-primary-foreground">
            <Flame className="h-4 w-4" />
          </span>
          <span className="text-sm sm:text-base">Soto Iga Juara</span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#menu" className="hover:text-foreground transition-colors">Menu</a>
          <a href="#about" className="hover:text-foreground transition-colors">Tentang</a>
          <a href="#lokasi" className="hover:text-foreground transition-colors">Lokasi</a>
          <a href="#testimoni" className="hover:text-foreground transition-colors">Testimoni</a>
        </div>
        <a
          href={waLink("Halo, saya ingin memesan soto.")}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-2 text-xs font-semibold text-accent-foreground transition-transform hover:scale-105 sm:text-sm"
        >
          <MessageCircle className="h-4 w-4" />
          Pesan WA
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="px-4 pt-28 pb-12 sm:pt-32">
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] min-h-[88vh] flex items-end"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(20,18,12,0.25) 0%, rgba(20,18,12,0.55) 55%, rgba(20,18,12,0.92) 100%), url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* floating tags */}
        <div className="absolute top-6 left-6 sm:top-10 sm:left-10 flex items-center gap-2 rounded-full bg-background/40 px-4 py-2 text-xs backdrop-blur-md border border-white/10 animate-[float_6s_ease-in-out_infinite]">
          <span className="h-2 w-2 rounded-full bg-brand-green" />
          Buka hari ini · 10.00 – 22.00
        </div>

        <div className="absolute top-6 right-6 sm:top-10 sm:right-10 hidden sm:flex items-center gap-1 rounded-full bg-brand-yellow px-4 py-2 text-xs font-semibold text-primary-foreground">
          <Star className="h-3.5 w-3.5 fill-current" />
          4.9 / 5 dari 1.2k+ pelanggan
        </div>

        <div className="relative z-10 w-full p-6 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <p className="reveal mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
              <Leaf className="h-3.5 w-3.5 text-brand-green" />
              Resep Otentik · Sejak 2015
            </p>
            <h1 className="reveal text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] text-white">
              Soto Iga yang <span className="text-gradient-brand">benar-benar</span> juara.
            </h1>
            <p className="reveal mt-6 max-w-xl text-base sm:text-lg text-white/75">
              Kuah kaya rempah, iga sapi empuk, dan racikan turun-temurun. Disajikan hangat,
              langsung ke meja Anda — atau dipesan via WhatsApp.
            </p>
            <div className="reveal mt-8 flex flex-wrap items-center gap-3">
              <a
                href={waLink("Halo Soto Iga Juara, saya ingin memesan.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" />
                Pesan Sekarang
              </a>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10"
              >
                <Utensils className="h-4 w-4" />
                Lihat Menu
              </a>
            </div>

            <div className="reveal mt-10 flex flex-wrap gap-6 text-white/80">
              <Stat n="10rb+" label="Mangkok tersaji" />
              <Stat n="8 thn" label="Pengalaman" />
              <Stat n="4.9★" label="Rating pelanggan" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold text-white sm:text-3xl">{n}</div>
      <div className="text-xs uppercase tracking-widest text-white/60">{label}</div>
    </div>
  );
}

function Marquee() {
  const items = ["Soto Iga", "Soto Betawi", "Soto Daging", "Soto Ayam", "Kuah Rempah Asli", "Halal", "Pesan via WhatsApp"];
  return (
    <section className="overflow-hidden border-y border-border/60 bg-brand-yellow py-5">
      <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center px-8 text-primary-foreground">
            <span className="font-display text-xl font-bold sm:text-2xl">{t}</span>
            <span className="ml-8 h-2 w-2 rounded-full bg-primary-foreground" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Menu() {
  return (
    <section id="menu" className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-brand-green">— Menu Andalan</p>
            <h2 className="max-w-2xl text-4xl font-bold sm:text-6xl">
              Setiap mangkok, <span className="text-gradient-brand">cerita rasa</span> tersendiri.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Pilih varian favorit Anda. Semua disiapkan segar setiap hari dengan rempah pilihan.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {menus.map((m) => (
            <article
              key={m.name}
              className="reveal-zoom group relative overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-500 hover:-translate-y-2 hover:border-brand-yellow/50"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                {m.badge && (
                  <span className="absolute top-4 left-4 rounded-full bg-brand-green px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                    {m.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-bold">{m.name}</h3>
                  <span className="text-sm font-semibold text-brand-yellow">{m.price}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                <a
                  href={waLink(`Halo, saya ingin memesan ${m.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-brand-yellow"
                >
                  Pesan via WA <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-4 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="reveal relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
          <img
            src={aboutImg}
            alt="Suasana Resto Soto Iga Juara"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-background/80 p-5 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-yellow text-primary-foreground">
                <Flame className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">Dapur Terbuka</div>
                <div className="text-xs text-muted-foreground">Higienis & disajikan segar</div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal flex flex-col justify-center">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-brand-green">— Tentang Kami</p>
          <h2 className="text-4xl font-bold sm:text-5xl">
            Tradisi rasa yang <span className="text-gradient-brand">tak pernah berkompromi</span>.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Soto Iga Juara berawal dari resep warisan keluarga yang telah disempurnakan
            selama tiga generasi. Kami percaya, satu mangkok soto yang baik berasal
            dari rempah pilihan, daging berkualitas, dan proses memasak yang sabar.
          </p>
          <p className="mt-3 text-muted-foreground">
            Sejak 2015, kami menyajikan kehangatan rumah lewat setiap kuah yang
            mengepul di meja Anda.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Feature icon={<Leaf className="h-5 w-5" />} title="Rempah Asli" />
            <Feature icon={<Flame className="h-5 w-5" />} title="Dimasak Harian" />
            <Feature icon={<Star className="h-5 w-5" />} title="Halal & Higienis" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      <div className="mb-2 grid h-9 w-9 place-items-center rounded-full bg-brand-green/15 text-brand-green">
        {icon}
      </div>
      <div className="text-sm font-semibold">{title}</div>
    </div>
  );
}

function Location() {
  return (
    <section id="lokasi" className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-14 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-brand-green">— Lokasi & Jam Buka</p>
          <h2 className="text-4xl font-bold sm:text-5xl">Mampir ke tempat kami</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="reveal lg:col-span-2 overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Lokasi Soto Iga Juara"
              src="https://www.google.com/maps?q=Monas+Jakarta&output=embed"
              className="h-[420px] w-full grayscale-[0.3]"
              loading="lazy"
            />
          </div>
          <div className="reveal flex flex-col gap-4">
            <InfoCard icon={<MapPin className="h-5 w-5" />} title="Alamat">
              Jl. Depok Sawangan No. 17, Depok Kota 10110
            </InfoCard>
            <InfoCard icon={<Clock className="h-5 w-5" />} title="Jam Buka">
              Setiap hari · 10.00 – 22.00 WIB
            </InfoCard>
            <InfoCard icon={<Phone className="h-5 w-5" />} title="Kontak">
              +62 812-3456-7890
            </InfoCard>
            <a
              href={waLink("Halo, saya ingin memesan / reservasi.")}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-green px-6 py-4 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" />
              Pesan / Reservasi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <div className="mb-3 grid h-10 w-10 place-items-center rounded-full bg-brand-yellow/15 text-brand-yellow">
        {icon}
      </div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
      <div className="mt-1 text-sm font-medium">{children}</div>
    </div>
  );
}

function Testimoni() {
  return (
    <section id="testimoni" className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-14 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-brand-green">— Kata Mereka</p>
          <h2 className="text-4xl font-bold sm:text-5xl">
            Dipercaya oleh ribuan <span className="text-gradient-brand">pencinta soto</span>.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimoni.map((t) => (
            <figure
              key={t.name}
              className="reveal-zoom rounded-3xl border border-border bg-surface p-6 transition-all hover:border-brand-yellow/40"
            >
              <div className="mb-4 flex gap-0.5 text-brand-yellow">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-base leading-relaxed text-foreground/90">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-yellow font-bold text-primary-foreground">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-4 pb-24">
      <div className="reveal mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-brand-yellow p-10 sm:p-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="text-4xl font-bold text-primary-foreground sm:text-6xl">
              Lapar? Satu pesan WA, semangkok hangat menuju Anda.
            </h2>
            <p className="mt-4 max-w-xl text-primary-foreground/80">
              Pesan untuk dine-in, takeaway, atau delivery. Kami siapkan segera.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={waLink("Halo Soto Iga Juara, saya ingin memesan.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-4 text-sm font-semibold text-foreground transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4 text-brand-green" />
              Chat WhatsApp Sekarang
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Lihat Menu Lengkap
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2 font-display font-bold">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-yellow text-primary-foreground">
                <Flame className="h-4 w-4" />
              </span>
              Soto Iga Juara
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Resep keluarga sejak 2015. Menyajikan soto premium dengan kuah kaya rempah.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:gap-6">
            <a href="#menu" className="hover:text-foreground">Menu</a>
            <a href="#about" className="hover:text-foreground">Tentang</a>
            <a href="#lokasi" className="hover:text-foreground">Lokasi</a>
            <a href="#testimoni" className="hover:text-foreground">Testimoni</a>
          </div>

          <div className="flex gap-3">
            <a
              href={waLink("Halo!")}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface transition-colors hover:bg-brand-green hover:text-accent-foreground"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface transition-colors hover:bg-brand-yellow hover:text-primary-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Soto Iga Juara. Semua hak dilindungi.
        </div>
      </div>

      {/* Floating WA button */}
      <a
        href={waLink("Halo Soto Iga Juara!")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-3.5 text-sm font-semibold text-accent-foreground shadow-2xl shadow-brand-green/30 transition-transform hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">Pesan WA</span>
      </a>
    </footer>
  );
}
