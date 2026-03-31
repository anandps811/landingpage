import eyeIcon from './assets/icon/eye.svg'
import shieldIcon from './assets/icon/shield.svg'
import flameIcon from './assets/icon/brain.svg'
import heartIcon from './assets/icon/heart.svg'
import refreshIcon from './assets/icon/refresh.svg'
import sparklesIcon from './assets/icon/spark.svg'
import calendarIcon from './assets/icon/date.svg'
import timeIcon from './assets/icon/time.svg'
import zoomIcon from './assets/icon/display.svg'
import globeIcon from './assets/icon/globe.svg'
import headphonesIcon from './assets/icon/headphone.svg'
import overlayImg from './assets/Overlay.png'
import DotIcon from './assets/icon/dot.svg'

const Hero = () => {
    const points = [
        "You give everything in a relationship and still feel alone, unseen, or like you're too much.",
        "You know he's not right for you. And yet you stay.",
        "You've read the books, done the journaling, listened to the podcasts. You're still here.",
        "Deep down, you're not afraid of being alone. You're afraid of being this close to love and still missing it."
      ];
      const stats = [
        { value: "30,000+", label: "Women Transformed" },
        { value: "5", label: "Countries Reached" },
        { value: "1", label: "TEDx Talk" },
        { value: "500+", label: "5-Star Reviews" },
      ];
      const items = [
        {
          icon: eyeIcon,
          title: "The exact reason you keep attracting emotionally unavailable men",
          desc: "It's not your type, it's your blueprint",
        },
        {
          icon: shieldIcon,
          title: "A proven 4-step process to rewrite your relationship with love",
          desc: "From the inside out",
        },
        {
          icon: flameIcon,
          title: "How to become a natural magnet for the right kind of love",
          desc: "Without chasing or performing",
        },
        {
          icon: heartIcon,
          title: "How to identify red flags early",
          desc: "And leave with confidence, not confusion",
        },
        {
          icon: refreshIcon,
          title: "The one internal shift that makes dating feel less exhausting",
          desc: "And more natural",
        },
        {
          icon: sparklesIcon,
          title: "Communication techniques that build real intimacy",
          desc: "Not just surface-level connection",
        },
      ];
      const bonuses = [
        {
      icon: headphonesIcon,
      title: "Ultimate Companion Template",
      desc: "Get radical clarity on the partner and relationship you actually want, not the version you've been settling for. No more confusion. No more compromise on what matters.",
      price: "₹2,500",
    },
    {
      icon: headphonesIcon,
      title: "Love Unlocked (PDF Book)",
      desc: "Identify and dismantle the invisible walls that have been quietly keeping love out. Discover what's been blocking you and how to clear it.",
      price: "₹1,500",
    },
    {
      icon: headphonesIcon,
      title: "3 Magical Scripts to Build Deeper Connection",
      desc: "Say the right things at the right moment. Build trust, express your emotions, and deepen your connection without overthinking every word.",
      price: "₹2,500",
    },
  ];
  const faqs = [
    "Is this only for single women?",
    "I've had multiple failed relationships. Will this still help?",
    "What if I've already tried therapy, books, podcasts?",
    "Is this live or recorded?",
    "Is there a replay?",
    "Why only Rs. 99?"
  ];
  return (
    <>
    {/* HERO SECTION */}
   <section className="bg-[#f6f2ef] px-6 py-12 md:px-16 md:py-24 overflow-hidden">
      <div className="mx-auto grid max-w-[1100px] items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        
        {/* Left Content Column */}
        <div className="flex flex-col text-center md:text-left items-center md:items-start">
          <p className="mb-6 text-[10px] md:text-[11px]  font-bold uppercase tracking-[0.3em] text-[#e1524b]">
            School of Love — Live Workshop
          </p>

          <h1 className="font-serif font-semibold text-[28px] leading-[1.2] tracking-tight text-[#2d252a] md:text-[45px] md:leading-[1.1] max-w-[500px] md:max-w-[400px]">
            You Don’t Have Bad Luck in Love.{" "}
            <span className="italic text-[#e95445] font-bold block md:inline">
              You Have an Unlearned Pattern.
            </span>
          </h1>

          <p className="mt-6 max-w-[480px] text-[15px] md:text-[16px] leading-[1.6] text-[#605752] font-sans">
            Join India’s most trusted love coach for a live, transformative
            3-hour workshop and finally understand why love keeps slipping away,
            and exactly what to do about it.
          </p>

          {/* Info Box */}
          <div className="mt-8 w-full max-w-[480px] rounded-[14px] bg-[#F9ECEB] px-6 py-6 md:px-8 border border-[#E7E0DA]">
            <div className="grid grid-cols-2 gap-y-4 md:flex md:flex-wrap md:gap-x-8">
              <span className="flex items-center gap-2 font-sans font-semibold text-[10px] md:text-[11px] text-[#605752]">
                <img src={calendarIcon} alt="" className="w-3.5 h-3.5 opacity-80" />
                Sunday, MM DD
              </span>
              <span className="flex items-center gap-2 font-sans font-semibold text-[10px] md:text-[11px] text-[#605752]">
                <img src={timeIcon} alt="" className="w-3.5 h-3.5 opacity-80" />
                11:00 AM IST
              </span>
              <span className="flex items-center gap-2 font-sans font-semibold text-[10px] md:text-[11px] text-[#605752]">
                <img src={zoomIcon} alt="" className="w-3.5 h-3.5 opacity-80" />
                Live on Zoom
              </span>
              <span className="flex items-center gap-2 font-sans font-semibold text-[10px] md:text-[11px] text-[#605752]">
                <img src={globeIcon} alt="" className="w-3.5 h-3.5 opacity-80" />
                English
              </span>
            </div>
          </div>

          <button className="mt-8 w-full md:w-fit rounded-xl bg-[#e95445] px-10 py-4 text-[15px]  font-semibold text-white shadow-[0_5px_25px_rgba(233,84,69,0.3)] transition hover:bg-[#de4d41] active:scale-[0.98]">
            Yes, I Want to Break My Pattern — Register @ ₹99
          </button>

          <p className="mt-4 text-[11px]  font-semibold text-[#e1524b]">
            ⚡ Filling up fast — reserve your spot before it closes.
          </p>

          {/* As Seen On */}
          <div className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-3 text-[9px] md:text-[10.5px] font-bold uppercase tracking-widest text-[#b2acb6]">
            <span className="text-[#605752] opacity-60 w-full md:w-auto text-center md:text-left mb-1 md:mb-0">AS SEEN ON</span>
            <span className="text-[#605752]">TEDx</span>
            <span className="text-[#605752]">Mahaa News</span>
            <span className="text-[#605752]">Ten News</span>
            <span className="text-[#605752]">Fever 104 FM</span>
          </div>
        </div>

        {/* Right Image Column with Overlay */}
        <div className="relative flex justify-center md:justify-end mt-12 md:mt-0 hidden lg:block">
          <img 
            src={overlayImg} 
            alt="" 
            className="absolute top-[-5%] left-[-10%] md:top-[-10px] md:left-[0px] h-[108%] w-[90%] max-w-none opacity-50 md:opacity-100" 
          />

          <div className="relative z-10 rounded-[24px]  p-[8px] md:p-[10px] ">
            <div className="h-[280px] w-[220px] overflow-hidden rounded-[18px] md:h-[380px] md:w-[350px]">
              <img
                src="/src/assets/landing.png"
                alt="Couple Silhouette"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* PAIN POINTS SECTION */}
    <section className="bg-[#f7f4f2] py-16 md:py-20 px-6 font-sans">
     <div className="max-w-2xl mx-auto text-center">
       <h2 className="text-2xl md:text-4xl font-serif font-semibold text-gray-800">
         Does this sound like you?
       </h2>
       <p className="text-[#605752] mt-4 text-sm md:text-[13.5px] leading-relaxed font-normal">
         You meet someone and it starts beautifully. Then slowly, quietly, it falls apart.
         And somehow you're left wondering what you did wrong. Again.
       </p>

       <div className="mt-10 space-y-4">
         {points.map((point, index) => (
           <div
             key={index}
             className="bg-[#FFFFFF] font-normal rounded-lg px-7 py-8 flex items-start gap-4 text-left border border-[#E7E0DA] "
           >
             <img src={DotIcon} alt="sparkles" className="w-3 h-3 mt-1 shrink-0" />
             <p className="text-gray-600 text-[15px] md:text-sm leading-relaxed font-sans">
               {point}
             </p>
           </div>
         ))}
       </div>

       <p className="text-gray-400 text-[15px] md:text-sm mt-10 leading-relaxed font-normal">
         This isn’t about your personality, your looks, or your relationship history.  
         It’s about an invisible pattern — one you didn’t choose,
         one you were never taught to see — that has been quietly running your love life from behind the scenes.
       </p>

       <p className="text-[#E74D3C] font-serif font-semibold mt-4 text-[18px] md:text-[22px]">
         This workshop is about finally seeing it. And dismantling it.
       </p>
     </div>
   </section>

   {/* STATS SECTION */}
   <section className="w-full font-sans">
      <div className="relative h-[300px] md:h-[800px] w-full overflow-hidden">
        <img
          src="/src/assets/image.png"
          alt="Couple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="bg-[#F9ECEB] py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-[#E74D3C] text-xl md:text-3xl font-serif font-semibold">
                {stat.value}
              </h3>
              <p className="text-[#2A2522] text-[13px] md:text-sm mt-1 font-sans">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* QUESTIONS SECTION */}
    <section className="bg-[#f6f2ef] px-6 py-12">
      <div className="mx-auto max-w-[900px] text-center">
        <h2 className="font-serif text-[32px] font-semibold leading-tight text-[#31292e] md:text-[40px]">
          Do you find yourself asking...
        </h2>

        <p className="mt-3 text-[13px] md:text-[14px] text-[#7d7580] font-sans">
          If even one of these sounds familiar, this workshop was made for you.
        </p>

        <div className="mx-auto mt-8 grid max-w-[760px] gap-3 md:grid-cols-2">
            {[
                "Why do I keep falling for men who can’t commit?",
                "Why do I always end up giving more than I receive?",
                "Why do my relationships start so well and end in the same quiet pain?",
                "Why do I attract emotionally unavailable people, even when I’m trying not to?"
            ].map((q, i) => (
                <div key={i} className="rounded-lg border border-[#E7E0DA] bg-[#FAF8F5] px-5 py-4 md:py-5 text-left text-[13px] md:text-[14px] italic leading-[1.5] text-[#605752] font-sans">
                    <span className="mr-2 text-[25px] text-[#eb5b4a]">"</span>{q}
                </div>
            ))}
        </div>

        <div className="mx-auto mt-3 max-w-full md:max-w-[360px] rounded-lg border border-[#E7E0DA] bg-[#FAF8F5] px-5 py-4 md:py-5 text-left text-[13px] md:text-[14px] italic leading-[1.5] text-[#605752] font-sans">
          <span className="mr-2 text-[25px] text-[#eb5b4a]">"</span>
          Why can I see the red flags and still not walk away?
        </div>

        <p className="mx-auto mt-8 max-w-[590px] text-[13px] md:text-[14px] leading-[1.5] text-[#7d7580] font-sans">
          These aren’t signs that you’re broken. They are symptoms of a pattern
          that has a name, a root, and a solution.
        </p>

        <button className="mt-8 w-full md:w-auto inline-flex items-center justify-center rounded-md bg-[#e95445] px-7 py-4 text-[14px] font-sans font-semibold text-white shadow-[0_10px_18px_rgba(225,82,75,0.22)] transition hover:bg-[#de4d41]">
          Yes, I’m Ready to Find Answers — Register @ ₹99
        </button>
      </div>
    </section>

    {/* LOGOS SECTION */}
    <section className="bg-[#efe3e0] px-6 py-8 md:py-6">
      <div className="mx-auto flex max-w-[940px] flex-col items-center justify-between gap-6 md:flex-row md:gap-15">
        <h3 className="whitespace-nowrap font-serif text-[24px] font-semibold italic leading-none text-[#e75142] md:text-[34px]">
          Featured In
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-9 w-full h-full md:h-[110px]">
            <img
              src="/src/assets/logos.png"
              alt="logos"
              className="md:h-full w-auto md:w-full object-contain"
            />
        </div>
      </div>
    </section>

    {/* BENEFITS SECTION */}
    <section className="bg-[#f7f4f2] py-16 md:py-20 px-6 font-sans">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-serif font-semibold text-gray-800">
          What You’ll Walk Away With
        </h2>
        <p className="text-gray-500 mt-3 text-[13px] md:text-base font-sans">
          In 3 hours, you'll walk away with clarity most women spend years searching for.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAECEB] rounded-xl py-10 px-6 text-left hover:shadow-md transition border border-[#E7E0DA]"
            >
              <img
                src={item.icon}
                alt="icon"
                className="w-5 h-5 mb-4 object-contain"
              />
              <h3 className="text-[#332C28] font-serif font-bold text-[13px] max-w-[230px] md:text-sm leading-[21px]">
                {item.title}
              </h3>
              <p className="text-[#605752] text-[11px] md:text-xs mt-2 font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="w-full h-[300px] md:h-[800px] bg-[#f6f2ef]">
        <img src="/src/assets/banner2.png" alt="banner2" className="w-full h-full object-cover" />
    </div>

    {/* MENTOR SECTION */}
    <section className="bg-[#f6f2ef] px-6 py-16 md:py-20 font-sans">
      <div className="mx-auto max-w-[900px]">
        <div className="grid gap-x-12 gap-y-12 md:grid-cols-[320px_1fr] items-center md:items-start text-center md:text-left">
          <div className='md:hidden'>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#e1524b]">
              YOUR MENTOR
            </span>
            <h2 className="mt-2 font-serif text-[32px] md:text-[42px] font-semibold leading-tight text-[#2d252a]">
              Madhu Lakhlan
            </h2>
            </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="rounded-[20px] shadow-lg w-[240px] h-[300px] md:w-[240px] md:h-[255px] overflow-hidden">
              <img
                src="/src/assets/MadhuLakhlan.png" 
                alt="Madhu Lakhlan"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 text-[9px] md:text-[10px] font-sans font-semibold uppercase tracking-wider text-[#E74D3C] w-full max-w-[240px]">
              <span className="bg-[#FAECEB] rounded-[18px] px-3 py-2 flex items-center justify-center">TEDx Speaker</span>
              <span className="bg-[#FAECEB] rounded-[18px] px-3 py-2 flex items-center justify-center">Author</span>
              <span className="bg-[#FAECEB] rounded-[18px] px-3 py-2 flex items-center justify-center col-span-2">30K+ Women Coached</span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#e1524b] hidden md:inline-block ">
              YOUR MENTOR
            </span>
            <h2 className="mt-2 font-serif text-[32px] md:text-[42px] font-semibold leading-tight text-[#2d252a] hidden md:inline-block">
              Madhu Lakhlan
            </h2>

            <div className="mt-6 text-[14px] leading-[1.6] text-[#5a545c] max-w-full md:max-w-[400px]">
              <p className="text-[#605752] pb-2">
                <strong className="font-bold text-[#605752]">I was once the woman sitting in this workshop.</strong>
                <br />
Before I became the coach, I was the student.
Heartaches I couldn't explain. Relationships that started with so much hope and ended in a silence I didn't understand. Sleepless nights wondering what was wrong with me - why love, something so natural for everyone around me, felt impossibly out of reach.
I didn't need more advice. I needed someone to show me what I couldn't see from the inside.
Through deep inner work - understanding my own patterns, healing what I didn't know was wounded - everything shifted. I didn't just find love. I became ready for it.              </p>
              
              <p className="font-bold italic text-[#605752]">
                "I stopped chasing love. And that's when it found me."
              </p>

              <p>
               Today, I've guided 30,000+ people across 5 countries through this exact transformation. I've spoken at TEDx. I've been featured on Mahaa News, Fever 104 FM, and Ten News across India. [Certifications to be added here]
            <br />
             But what I'm most proud of is far simpler than all of that.
I have the love I once thought wasn't possible for someone like me.
And I built this workshop because you deserve the same thing.
              </p>
            </div>

            <div className="mt-10">
              <button className="w-full md:w-fit rounded-[9px] bg-[#E74D3C] px-8 py-4 text-[15px] font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]">
                Learn from Madhu — Register @ ₹99
              </button>
            </div>
          </div>
        </div>

        {/* Video Placeholder */}
        <div className="mt-16 md:mt-20 flex justify-center">
          <div className="group relative flex aspect-video w-full max-w-[600px] cursor-pointer items-center justify-center overflow-hidden rounded-[16px] md:rounded-[24px] bg-[#141414] shadow-2xl">
            <div className="flex h-[45px] w-[70px] md:h-[55px] md:w-[85px] items-center justify-center rounded-[12px] md:rounded-[15px] bg-[#ff0000] transition-transform group-hover:scale-110">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="md:w-[32px] md:h-[32px]">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* TESTIMONIALS SECTION */}
    <section className="bg-[#FFFFFF] px-6 py-16 font-sans">
        <div className="max-w-[820px] mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-serif font-semibold text-gray-800">
                Real Women. Real Breakthroughs.
            </h2>
            <p className="text-gray-500 mt-4 text-[13px] md:text-base font-sans">
                Here's what past attendees shared — in their own words.
            </p>
            <div className="mt-10">
                <img src="/src/assets/chat.png" alt="chat" className="w-full h-auto object-contain" />
            </div>
        </div>
    </section>

    {/* BONUSES SECTION */}
    <section className="bg-[#f7f4f2] py-16 md:py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-red-400 text-[10px] tracking-widest uppercase mb-3">But Wait — There’s More</p>
        <h2 className="text-2xl md:text-4xl font-serif font-semibold text-gray-800">
          ₹6,500+ in Bonuses — Yours Free
        </h2>
        <p className="text-gray-500 mt-3 text-[13px] md:text-base">Register today and get these exclusive resources at no extra cost.</p>

        <div className="mt-12 flex flex-col md:grid md:grid-cols-3 gap-6 items-center">
          {bonuses.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAF8F5] w-full max-w-[320px] md:max-w-[275px] rounded-xl p-6 text-left shadow-sm hover:shadow-md transition border border-[#E7E0DA]"
            >
              <div className="flex items-center justify-center mb-4">
                <img src={item.icon} alt="icon" className="w-10 h-10" />
              </div>
              <h3 className="text-gray-800 font-serif font-semibold text-[14px] leading-snug">{item.title}</h3>
              <p className="text-gray-500 text-[11px] mt-3 leading-relaxed">{item.desc}</p>
              <p className="text-red-500 font-bold mt-5 text-sm">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* IMAGINE SECTION */}
    <section 
      className="relative min-h-[500px] md:min-h-150 w-full bg-cover bg-center bg-no-repeat py-20 px-6 flex items-center justify-center"
      style={{ backgroundImage: "url('/src/assets/imagin.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/85 md:bg-black/80"></div>

      <div className="relative z-10 max-w-3xl w-full text-center text-white">
        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] opacity-80">CLOSE YOUR EYES FOR A MOMENT</span>
        <h2 className="mt-3 font-serif text-[36px] md:text-[54px] font-light italic">
          Imagine <span className="italic font-normal">this</span>
        </h2>

        <div className="mt-10 space-y-6 text-left mx-auto max-w-xl">
          {[
            "You wake up on a Sunday morning and you're not scrolling through old messages wondering where it went wrong.",
            "You're not second-guessing whether you're too much or not enough. You're not waiting for someone to finally choose you.",
            "You are in a relationship that feels easy. Safe. Real. You're with someone who shows up consistently because he genuinely wants to. You're not performing. You're just home."
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="mt-1 text-[#e95445] shrink-0">✦</span>
              <p className="text-[14px] md:text-[16px] leading-relaxed opacity-90">{text}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-[14px] md:text-[16px] font-medium">
          That version of you isn't far away. <span className="text-[#ff4d3d]">She just needs a map.</span>
        </p>

        <div className="mt-8">
          <button className="w-full md:w-auto rounded-xl bg-[#e95445] px-10 py-4 text-[16px] font-bold text-white shadow-xl transition-all hover:scale-105">
            Give Me the Map — Register @ ₹99
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mx-auto max-w-md border-t border-white/10 pt-8 text-left">
          <div className="flex items-center gap-3"><img src={calendarIcon} alt="" className="w-4 h-4 opacity-70" /><span className="text-[11px] uppercase tracking-wider">Sunday, MM DD</span></div>
          <div className="flex items-center gap-3"><img src={timeIcon} alt="" className="w-4 h-4 opacity-70" /><span className="text-[11px] uppercase tracking-wider">11:00 AM IST</span></div>
          <div className="flex items-center gap-3"><img src={zoomIcon} alt="" className="w-4 h-4 opacity-70" /><span className="text-[11px] uppercase tracking-wider">Live on Zoom</span></div>
          <div className="flex items-center gap-3"><img src={globeIcon} alt="" className="w-4 h-4 opacity-70" /><span className="text-[11px] uppercase tracking-wider">English</span></div>
        </div>
      </div>
    </section>

    {/* FAQ SECTION */}
    <section className="bg-white px-6 py-20 font-sans">
      <div className="mx-auto max-w-[720px]">
        <h2 className="mb-10 text-center font-serif text-[28px] md:text-[42px] font-semibold text-[#2d252a]">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-3">
          {faqs.map((question, index) => (
            <div key={index} className="flex items-center justify-between rounded-[14px] bg-[#faf7f5] px-6 py-6 md:px-8 md:py-7 cursor-pointer hover:bg-[#f5f0ed] transition">
              <span className="text-[14px] md:text-[15px] font-medium text-[#2d252a] pr-4">{question}</span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="shrink-0 opacity-60"><path d="M1 1.5L6 6.5L11 1.5" stroke="#2d252a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PRICING SECTION */}
    <section className="bg-[#F4F1EB] px-6 py-20 font-sans text-center">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-serif text-[22px] md:text-[40 px] font-semibold text-[#2d252a]">
          Your Love Story Deserves a <span className="italic font-medium text-[#ff4d3d]">New Chapter</span>
        </h2>
        <p className="mt-6 text-[14px] md:text-[15px] leading-relaxed text-[#7a727f]">
          Rs. 99 is not the price of a workshop. <br />
          <span className="font-medium text-[#ff4d3d]">It's the price of a turning point.</span>
        </p>

        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-[460px] rounded-[24px] bg-[#faf7f5] px-8 py-10 md:px-10 md:py-12 shadow-sm border border-white">
            <p className="text-[11px] font-medium uppercase tracking-wider text-[#a49ca6] line-through">Total Value: ₹8,500+</p>
            <p className="mt-2 font-serif text-[32px] md:text-[40px] font-semibold text-[#E74D3C]">₹99</p>
            <p className="mt-3 text-[11px] text-[#7a727f]">One-time • No hidden fees • Full access</p>
          </div>
        </div>

        <button className="mt-10 w-full md:w-auto rounded-xl bg-[#e95445] px-10 py-5 text-[12px] md:text-[15px] font-bold text-white shadow-xl">
          Yes, I Want to Break My Pattern — Register @ ₹99
        </button>

        <div className="mt-6 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.08em] text-[#a49ca6]">
          <svg width="10" height="12" viewBox="0 0 12 14" fill="none" className="opacity-70"><path d="M10.5 5H9V3.5C9 1.57 7.43 0 5.5 0C3.57 0 2 1.57 2 3.5V5H1.5C0.67 5 0 5.67 0 6.5V12.5C0 13.33 0.67 14 1.5 14H10.5C11.33 14 12 13.33 12 12.5V6.5C12 5.67 11.33 5 10.5 5ZM3.5 3.5C3.5 2.4 4.4 1.5 5.5 1.5C6.6 1.5 7.5 2.4 7.5 3.5V5H3.5V3.5ZM6.75 10.27C6.75 10.27 6.75 10.27 6.75 10.27ZM6.75 10.27C6.75 10.27 6.75 10.27 6.75 10.27Z" fill="currentColor"/></svg>
          Secure payment • 100% money-back guarantee
        </div>
      </div>
    </section>
    
    {/* FOOTER */}
    <footer className="w-full bg-[#e95445] px-6 py-10 md:py-6 font-sans text-white">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-[10px] text-center md:text-left uppercase tracking-[0.12em] opacity-80">
          © MADHU LAKHLAN & COMPANY. ALL RIGHTS RESERVED.
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-[0.12em]">
          <a href="#" className="hover:underline">REFUND POLICY</a>
          <a href="#" className="hover:underline">PRIVACY POLICY</a>
          <a href="#" className="hover:underline">TERMS & CONDITIONS</a>
        </div>
      </div>
    </footer>
   </>
  )
}

export default Hero