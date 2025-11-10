import React, { useState, useEffect } from 'react';

/** =========================================================
 * JoinJoy — Story Overview (Production Version)
 * - TopBar (logo, non-sticky)
 * - Hero
 * - WhyChoose
 * - DiscountBox
 * - StoryOverview (grid + modal)
 * - Footer (CTA to main website)
 * ========================================================= */

export default function ExprolerPreview() {

  // ✅ Step: ดักการคลิกปุ่มเพื่อยิง Pixel Purchase
  useEffect(() => {
    const onClick = (e) => {
      const el = e.target.closest(".jj-purchase");
      if (!el) return;

      const value = Number(el.dataset.value || "0");
      const currency = el.dataset.currency || "THB";
      const href = el.getAttribute("href") || el.dataset.href;

      // ยิง Event Purchase
      if (window.fbq) {
        window.fbq("track", "Purchase", { value, currency });
      }

      // หน่วงให้ Pixel ยิงเสร็จก่อน redirect
      if (href) {
        e.preventDefault();
        setTimeout(() => {
          window.location.href = href;
        }, 250);
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);


  const designBoxes = [
    { img: "https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/1.png", title: "🌊 Starting Our Journey", text: "Krabi has many types of boats — but not all match what you see online. That’s why we handpick only trusted local boats that truly look like their photos. Our first choice: the 4 Islands Trip, the must-try experience in Ao Nang." },
    { img: "https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/2.png", title: "💸 Local Price You Can Trust", text: "We’re a Krabi-based platform — so our prices are truly local. If a date is shown, it’s available. Simple, honest, and ready to book." },
    { img: "https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/3.png", title: "💬 We Listen to You", text: "We handpick our boats carefully, but your voice matters most. After each trip, you’ll get an email to rate and review — helping us make every journey even better." },
    { img: "https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/4.png", title: "🔐 Simple Login, Smarter Access", text: "We want your travel experience to be effortless — starting from the first click. That’s why JoinJoy uses Google’s secure login system, so you can sign in instantly, share your info safely, and stay connected anytime." },
    { img: "https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/5%20(1).png", title: "🚐 Your Choice, Your Way", text: "Whether you need a hotel pickup or prefer to come on your own, we’ve got you covered. Just tell us what’s best for you — we’ll take care of the rest." },
    { img: "https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/6.png", title: "🚐 Hotel Pickup, Hassle-Free", text: "Some trips include pickup right from your hotel. We confirm your location clearly and stay in touch — so everything goes smoothly from start to finish." },
    { img: "https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/7.png", title: "🍱 We Care About Your Meal", text: "Every trip comes with a buffet, but we understand not everyone eats the same. Tell us if you don’t eat pork, prefer vegetarian, or have any food concerns — we’ll take care of it." },
    { img: "https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/8.png", title: "💰 Clear Price, No Surprises", text: "We believe you should know exactly what you’re paying for. All island fees are shown upfront — and you can choose to pay them with us or at the pier. Simple, honest, and stress-free." },
    { img: "https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/9.png", title: "📝 Tell Us What You Need", text: "This page lets you add or update your preferences — like your food choices or special needs. Everything you share here helps us prepare the perfect trip for you." },
    { img: "https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/10.png", title: "💳 Safe & Easy Payments", text: "We partner with Omise, a world-class payment gateway that keeps every transaction secure. If weather conditions or unexpected issues affect your trip, you’ll receive a full refund — guaranteed." },
    { img: "https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/11.png", title: "🎁 Discounts That Keep Spreading Joy", text: "We love giving more than just great trips. When you book with us, you’ll get special discounts based on your travel period — plus a unique code to share with your friends." },
    { img: "https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/12.png", title: "🌅 Built by Locals, for Travelers", text: "JoinJoy isn’t a big company — we’re your neighbors in Krabi who love sharing our home with the world. We believe travel should bring joy, connection, and community." }
  ];

  /* ───────── Layout helpers ───────── */
  const Container = ({ children }) => (
    <div style={{ fontFamily: 'Arial, Helvetica, sans-serif', background: '#f9fafb', padding: 20, minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,.08)' }}>
        {children}
      </div>
    </div>
  );
  const Section = ({ children, style }) => (
    <div style={{ padding: '24px 16px', ...style }}>{children}</div>
  );

  /* ───────── TopBar (non-sticky) ───────── */
  const TopBar = () => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid #eee', background: '#ffffff' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <img src="https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/favicon.png" alt="JoinJoy Logo" style={{ width: 24, height: 24, borderRadius: 6 }} />
        <div style={{ fontWeight: 900, fontSize: 16 }}>JoinJoy • Krabi</div>
      </div>
      <a href="https://joinjoytravel.com/" style={{ fontWeight: 800, textDecoration: 'none', color: '#7c3aed' }}
        className="jj-purchase"
        data-value="1"
        data-currency="THB">
        Main Site ↗
      </a>
    </div>
  );

  /* ───────── Typo ───────── */
  const GradientH1 = ({ children }) => (
    <h1 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: 900, lineHeight: 1.3, margin: 0, background: 'linear-gradient(to right,#ec4899,#8b5cf6,#fb923c)', WebkitBackgroundClip: 'text', color: 'transparent', textAlign: 'center' }}>
      {children}
    </h1>
  );
  const GradientH2 = ({ children }) => (
    <h2 style={{ fontSize: 'clamp(18px,2.5vw,22px)', fontWeight: 800, margin: '0 0 12px 0', background: 'linear-gradient(to right,#8b5cf6,#fb923c)', WebkitBackgroundClip: 'text', color: 'transparent', textAlign: 'center' }}>
      {children}
    </h2>
  );

  /* ───────── Hero ───────── */
  const Hero = () => (
    <Section style={{ background: 'linear-gradient(to bottom,#fafafa,#ffffff)', textAlign: 'center', padding: '40px 20px' }}>
      <GradientH1>JoinJoy<br />The Local Team from Krabi</GradientH1>
      <p style={{ color: '#555', fontSize: 'clamp(14px,2vw,16px)', margin: '12px auto 18px', maxWidth: 560 }}>
        We make your 4-Islands trip easier, smoother, and more beautiful — powered by real local guides who truly care.
      </p>
      <a href="https://joinjoytravel.com/" style={{ display: 'inline-block', padding: '12px 22px', borderRadius: 14, color: '#fff', textDecoration: 'none', fontWeight: 800, background: 'linear-gradient(to right,#ec4899,#8b5cf6,#fb923c)', boxShadow: '0 6px 16px rgba(236,72,153,.25)' }} 
        className="jj-purchase"
        data-value="1"
        data-currency="THB">
        🌊 Go to Main Website
      </a>
    </Section>
  );

  /* ───────── WhyChoose ───────── */
  const WhyChoose = () => (
    <Section>
      <h2 style={{ background: 'linear-gradient(to right, #8b5cf6, #ec4899)', WebkitBackgroundClip: 'text', color: 'transparent', fontSize: 18, fontWeight: 700, margin: 0, marginBottom: 12, textAlign: 'left' }}>
        Why Choose JoinJoy
      </h2>
      {[
        {
          title: '🌴 Local Experts, Real Connections',
          text: 'We’re from Krabi — born local, built local. That means we handpick trusted boats, know every route by heart, and can recommend what truly fits you. You get real experiences, not tourist traps.'
        },
        {
          title: '💳 Safe, Clear & Honest',
          text: 'Your payments are handled by Omise, a world-class financial platform. You’ll always see the full price — no hidden fees, and easy refunds if weather or plans change.'
        },
        {
          title: '🎁 Designed for You',
          text: 'From food preferences to flexible pickups and shareable discount codes — everything is built around you.'
        }
      ].map((f, i) => (
        <div key={i} style={{ border: '1px solid #eee', borderRadius: 12, padding: 12, marginBottom: 10, background: '#fff' }}>
          <b>{f.title}</b>
          <p style={{ fontSize: 13, color: '#666', marginTop: 4 }}>{f.text}</p>
        </div>
      ))}
    </Section>
  );

  /* ───────── DiscountBox ───────── */
  const DiscountBox = () => (
    <Section>
      <div style={{ textAlign: 'center', border: '1px solid #eee', borderRadius: 20, background: 'linear-gradient(135deg,#fff0f7,#fff8f2,#ffffff)', padding: 20 }}>
        <div style={{ color: '#374151', fontWeight: 'bold',fontSize: 18  }}>11.11 Special Discount</div>
        <div style={{ color: '#d80808ff', fontWeight: 'bold',fontSize: 18  }}>Only Today!</div>
        <div style={{ marginTop: 6, fontSize: 30, fontWeight: 900, background: 'linear-gradient(to right,#ec4899,#8b5cf6,#fb923c)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          Get 30% Off Now!
        </div>
        <div style={{ color: '#6b7280', fontSize: 16, marginTop: 4 }}>Apply this code at checkout</div>
        <div style={{ display: 'inline-block',fontSize: 22, marginTop: 8, padding: '8px 14px', borderRadius: 14, border: '2px dashed #f9a8d4', background: '#fff', color: '#db2777', fontWeight: 900, letterSpacing: 2 }}>
          joinjoygo
        </div>
        <a href="https://joinjoytravel.com/" style={{ display: 'block', marginTop: 12, padding: '12px 16px', borderRadius: 14, color: '#fff', textDecoration: 'none', fontWeight: 800, background: 'linear-gradient(to right,#ec4899,#8b5cf6,#fb923c)' }} 
        className="jj-purchase"
        data-value="1"
        data-currency="THB">
          💙 Go to Main Website
        </a>
      </div>
    </Section>
  );

  /* ───────── StoryOverview (Grid + Modal) ───────── */
  const StoryOverview = () => {
    const [open, setOpen] = useState(false);
    const [idx, setIdx] = useState(0);
    const b = designBoxes[idx] || {};

    return (
      <Section style={{ background: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,.06)', borderRadius: 12 }}>
        <GradientH2>Our Story at a Glance</GradientH2>
        <p style={{ textAlign: 'center', color: '#6b7280', fontSize: 13, margin: '6px 0 16px' }}>
          Built by locals in Krabi — see the whole journey first, then dive deeper.
        </p>

        {/* Grid styles — Production (media queries) */}
        <style>{`
          .jj-grid {
            display: grid;
            grid-template-columns: 1fr 1fr; /* 2 cols on phones */
            gap: 10px;
          }
          @media (min-width: 520px) {
            .jj-grid { grid-template-columns: 1fr 1fr 1fr; } /* 3 cols */
          }
          @media (min-width: 900px) {
            .jj-grid { grid-template-columns: 1fr 1fr 1fr 1fr; } /* 4 cols */
          }
          @media (min-width: 1200px) {
            .jj-grid { grid-template-columns: repeat(5, 1fr); } /* 5 cols */
          }

          .jj-card2 { border:1px solid #eee; border-radius:12px; overflow:hidden; background:#fff; box-shadow:0 1px 6px rgba(0,0,0,.05); cursor:pointer; transition:transform .12s, box-shadow .12s; }
          .jj-card2:hover { transform: translateY(-1px); box-shadow:0 6px 16px rgba(0,0,0,.08); }
          .jj-thumb { width:100%; height:110px; object-fit:cover; display:block; }
          @media (min-width: 520px) { .jj-thumb { height:120px; } }
          @media (min-width: 900px) { .jj-thumb { height:140px; } }

          .jj-body2 { padding:8px 10px 10px; }
          .jj-title2 { font-weight:800; font-size:12.5px; margin:0 0 4px; color:#111827; }
          .jj-desc2 { font-size:11.5px; color:#4b5563; line-height:1.45; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }

          /* Modal */
          .jj-modal { position: fixed; inset: 0; background: rgba(0,0,0,.45); display:flex; align-items:center; justify-content:center; padding:16px; z-index: 60; }
          .jj-dialog { width: min(920px, 96vw); background:#fff; border-radius:18px; overflow:hidden; box-shadow: 0 20px 60px rgba(0,0,0,.25); }
          .jj-top { position: relative; }
          .jj-hero { width:100%; max-height:58vh; object-fit:cover; display:block; }
          .jj-close { position:absolute; top:10px; right:10px; width:38px; height:38px; border:0; border-radius:999px; background:rgba(255,255,255,.95); cursor:pointer; font-size:18px; font-weight:900; box-shadow:0 6px 14px rgba(0,0,0,.12); }
          .jj-content { padding:16px 18px 18px; }
          .jj-title3 { font-weight:900; font-size:16px; margin:0 0 8px; }
          .jj-desc3 { font-size:14px; color:#374151; line-height:1.7; }
          .jj-nav2 { display:flex; gap:8px; justify-content:space-between; margin-top:12px; }
          .jj-btn2 { flex:1; padding:12px 14px; border-radius:12px; border:1px solid #e5e7eb; background:#fff; font-weight:800; cursor:pointer; text-decoration: none; }
          .jj-btn2.primary { background: linear-gradient(to right,#ec4899,#8b5cf6,#fb923c); color:#fff; border:0; justify-content: center; text-align: center; }
        `}</style>

        {/* GRID OVERVIEW */}
        <div className="jj-grid" role="list">
          {designBoxes.map((item, i) => (
            <article
              key={i}
              className="jj-card2"
              role="listitem"
              onClick={() => { setIdx(i); setOpen(true); }}
              aria-label={`Open ${item.title}`}
            >
              <img className="jj-thumb" src={item.img} alt={item.title} loading="lazy" />
              <div className="jj-body2">
                <h3 className="jj-title2">{item.title}</h3>
                <p className="jj-desc2">{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        {/* MODAL DETAIL */}
        {open && (
          <div className="jj-modal" role="dialog" aria-modal="true" aria-label="Detail">
            <div className="jj-dialog">
              <div className="jj-top">
                <img className="jj-hero" src={b.img} alt={b.title} />
                <button className="jj-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
              </div>
              <div className="jj-content">
                <h3 className="jj-title3">{b.title}</h3>
                <p className="jj-desc3">{b.text}</p>
                <div className="jj-nav2">
                  <button className="jj-btn2" onClick={() => setIdx((idx - 1 + designBoxes.length) % designBoxes.length)}>‹ Prev</button>
                 <a className="jj-btn2 primary jj-purchase" href="https://joinjoytravel.com/" target="_blank" rel="noreferrer" data-value="1" data-currency="THB">
                  Book with JoinJoy
                </a>
                  <button className="jj-btn2" onClick={() => setIdx((idx + 1) % designBoxes.length)}>Next ›</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Section>
    );
  };

  /* ───────── Footer ───────── */
 const Footer = () => (
  <Section>
    <div style={{
      textAlign: 'center',
      fontSize: 13,
      color: '#999',
      paddingTop: 10,
      borderTop: '1px solid #eee'
    }}>
      <a
        href='https://joinjoytravel.com/'
        style={{
          display: 'inline-block',
          marginTop: 12,
          padding: '12px 22px',
          borderRadius: 14,
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 800,
          background: 'linear-gradient(to right,#ec4899,#8b5cf6,#fb923c)',
          boxShadow: '0 6px 16px rgba(236,72,153,.25)'
        }}
        className="jj-purchase"
        data-value="1"
        data-currency="THB"
      >
        🌊 Go to Main Website
      </a>
      <div style={{ marginTop: 12, color: '#999', fontSize: 13 }}>
        © {new Date().getFullYear()} JoinJoy Krabi — Built with ❤️ by locals.
      </div>
    </div>
  </Section>
);


  /* ───────── Page render ───────── */
  return (
    <Container>
      <TopBar />
      <Hero />
      <WhyChoose />
      <DiscountBox />
      <StoryOverview />
      <Footer />
    </Container>
  );
}
