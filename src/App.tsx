/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import {
  Coffee,
  MapPin,
  X,
  Wallet,
  TrendingUp,
  HeartHandshake,
  CheckCircle2,
  Sprout,
  Store,
  Globe,
  Users,
  Flame,
  ChevronRight,
  ChevronLeft,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  Menu
} from 'lucide-react';
import React, { useState, useEffect } from 'react';

const faqs = [
  {
    question: 'Where do you source your coffee beans?',
    answer: 'We partner directly with small-scale farmers globally to ensure fair compensation, sustainable practices, and the highest quality beans for all our franchised branches.'
  },
  {
    question: 'What is included in the franchise package?',
    answer: 'Our ₱25,988 franchise package is all-inclusive! It contains the use of our brand name, complete coffee-making equipment, initial inventory, extensive crew training, marketing materials, and full opening assistance.'
  },
  {
    question: 'Do I need prior experience to start a Your Coffee franchise?',
    answer: 'Not at all! We provide comprehensive training and an operations manual to guide you. Our strong brand support ensures you have everything needed to run a successful coffee shop.'
  },
  {
    question: 'What are the space requirements for a franchise?',
    answer: 'Your Coffee franchises are highly adaptable. You can start with a compact kiosk setup of just 4-6 square meters, or a larger in-line store depending on your chosen location and budget.'
  }
];

const menuData: Record<'drinks' | 'meals', Record<string, { name: string; price: string; desc: string; image?: string }[]>> = {
  drinks: {
    "Hot Coffee": [
      { name: "Espresso", price: "$3.50", desc: "Double shot of Your Coffee", image: "Images/Espresso.jpg" },
      { name: "Americano", price: "$4.00", desc: "Espresso over hot water", image: "Images/Amerikano.jpg" },
      { name: "Cappuccino", price: "$4.50", desc: "Equal parts espresso, steamed milk, foam", image: "Images/cappuccino.jpg" },
      { name: "Latte", price: "$5.00", desc: "Espresso with steamed milk and a light layer of foam", image: "Images/Latte.jpg" },
      { name: "Flat White", price: "$4.50", desc: "Espresso with microfoam", image: "Images/FlatWhite.jpg" },
    ],
    "Iced Coffee": [
      { name: "Iced Caramel Latte", price: "$5.50", desc: "Espresso, cold milk, over ice", image: "Images/IcedCaramelLatte.jpg" },
      { name: "Iced Americano", price: "$4.50", desc: "Espresso, cold water, over ice", image: "Images/IcedAmerikano.jpg" },
      { name: "Cold Brew", price: "$5.00", desc: "Slow-steeped for 18 hours", image: "Images/ColdBrew.jpg" },
      { name: "Your Signature", price: "$6.00", desc: "Cold brew with sweet vanilla cream", image: "Images/YourSignature.jpg" },
    ],
    "Frappe": [
      { name: "Caramel Frappe", price: "$6.00", desc: "Blended espresso, caramel, milk, whipped cream", image: "Images/CaramelFrappe.jpg" },
      { name: "Mocha Frappe", price: "$6.00", desc: "Blended espresso, dark chocolate, milk", image: "Images/MochaFrappe.jpg" },
      { name: "Matcha Frappe", price: "$6.50", desc: "Premium grade matcha, blended", image: "Images/MatchaFrappe.jpg" },
      { name: "Vanilla Bean", price: "$5.50", desc: "Caffeine-free vanilla blend", image: "Images/VanillaBean.jpg" },
    ],
    "Non Coffee": [
      { name: "Hot Chocolate", price: "$4.50", desc: "Rich dark chocolate with steamed milk", image: "Images/HotChocolate.jpg" },
      { name: "Chai Tea Latte", price: "$5.00", desc: "Spiced black tea blended with steamed milk", image: "Images/ChaiTeaLatte.jpg" },
      { name: "Matcha Latte", price: "$5.50", desc: "Pure matcha, lightly sweetened", image: "Images/MatchaLatte.jpg" },
      { name: "Earl Grey", price: "$4.00", desc: "Loose leaf black tea with bergamot", image: "Images/EarlGrey.jpg" },
    ]
  },
  meals: {
    "Meals": [
      { name: "Butter Croissant", price: "$4.00", desc: "Flaky, buttery, baked fresh daily", image: "Images/ButterCroissant.jpg" },
      { name: "Pain au Chocolat", price: "$4.50", desc: "Croissant dough wrapped around dark chocolate", image: "Images/PainAuhocolat.jpg" },
      { name: "Almond Croissant", price: "$5.00", desc: "Twice-baked with almond frangipane", image: "Images/AlmondCroissant.jpg" },
      { name: "Blueberry Muffin", price: "$4.00", desc: "Loaded with wild blueberries", image: "Images/BlueBerryMuffin.jpg" },
    ]
  }
};

const storiesList = [
  {
    year: '2020',
    title: 'The first seed is planted',
    desc: 'It all started in a tiny rented kitchen with a secondhand espresso machine and a dream. Our founder brewed cup after cup for friends and neighbors, gathering feedback, perfecting recipes, and falling deeper in love with the craft.',
    icon: Sprout,
    theme: 'light'
  },
  {
    year: '2021',
    title: 'We open our doors',
    desc: 'After months of planning and late-night tastings, we opened our first café on a quiet corner of the city. The line on opening day wrapped around the block — a moment none of us will ever forget.',
    icon: Store,
    theme: 'light'
  },
  {
    year: '2022',
    title: 'Sourcing with purpose',
    desc: 'We traveled to farms in Ethiopia, Colombia, and Indonesia to source our beans directly. Building honest relationships with growers became the backbone of everything we do.',
    icon: Globe,
    theme: 'light'
  },
  {
    year: '2023',
    title: 'Growing the family',
    desc: 'Demand grew faster than our single café could keep up with. We welcomed a second location across town and doubled our team. New baristas, new regulars, new rituals.',
    icon: Users,
    theme: 'light'
  },
  {
    year: '2024',
    title: 'Our roastery is born',
    desc: 'We launched our in-house roastery — the step we\'d dreamed of since day one. Now we roast every batch just days before it reaches your cup for a freshness you can\'t get from a warehouse shelf.',
    icon: Flame,
    theme: 'light'
  },
  {
    year: 'Today',
    title: 'Still brewing',
    desc: "With three locations, a roastery, and a community we're deeply proud of, we're just getting started. Creating spaces where good coffee and good people can find each other.",
    icon: Coffee,
    theme: 'light'
  }
];

const getThemeStyles = (theme: string) => {
  // All themes now use the unified "2021" / light design as requested
  return {
    bg: 'bg-card',
    text: 'text-foreground',
    badge: 'text-accent',
    icon: 'text-accent',
    title: 'text-accent',
    desc: 'text-muted',
    border: 'border border-border',
    shadow: 'shadow-[0_8px_30px_rgb(0,0,0,0.04)]', // Soft, smooth shadow
    yearBadge: 'bg-background'
  };
};

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuMainType, setMenuMainType] = useState<'drinks' | 'meals'>('drinks');
  const [menuSubType, setMenuSubType] = useState<string>('Hot Coffee');
  const [selectedMenuItem, setSelectedMenuItem] = useState<{ name: string; price: string; desc: string; image?: string } | null>(null);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [storyIndex, setStoryIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [maxIndex, setMaxIndex] = useState(storiesList.length - 1);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return saved === 'dark' || (!saved && prefersDark);
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    if (storyIndex > maxIndex) {
      setStoryIndex(maxIndex);
    }
  }, [maxIndex, storyIndex]);

  useEffect(() => {
    const updateMaxIndex = () => {
      if (window.innerWidth >= 1024) {
        setMaxIndex(Math.max(0, storiesList.length - 3));
      } else if (window.innerWidth >= 640) {
        setMaxIndex(Math.max(0, storiesList.length - 2));
      } else {
        setMaxIndex(storiesList.length - 1);
      }
    };
    updateMaxIndex();
    window.addEventListener('resize', updateMaxIndex);
    return () => window.removeEventListener('resize', updateMaxIndex);
  }, []);

  const nextStory = () => {
    if (storyIndex < maxIndex) {
      setStoryIndex((prev) => prev + 1);
    }
  };

  const prevStory = () => {
    if (storyIndex > 0) {
      setStoryIndex((prev) => prev - 1);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Standard story list without duplication
  const renderStories = storiesList;

  const handleMenuMainChange = (type: 'drinks' | 'meals') => {
    setMenuMainType(type);
    setMenuSubType(Object.keys(menuData[type])[0]);
  };

  return (
    <div className="min-h-screen w-full relative text-foreground font-sans p-4 md:p-6 flex flex-col overflow-x-hidden transition-colors duration-300">
      {/* Amber Glow Background - Adjusted for dark mode */}
      <div
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500"
        style={{
          backgroundImage: isDark
            ? `radial-gradient(125% 125% at 50% 10%, #000000 40%, #2b0707 100%)`
            : `radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #f59e0b 100%)`,
          backgroundSize: "100% 100%",
          opacity: 1
        }}
      />
      <motion.div
        className="max-w-[1200px] mx-auto w-full flex-1 flex flex-col relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Navigation */}
        <motion.nav
          variants={itemVariants}
          className="flex justify-between items-center bg-nav border border-border rounded-2xl px-4 md:px-6 py-4 shadow-sm mb-6 relative transition-colors duration-300"
        >
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src="Images/favIcon.jpg"
              alt="Your Coffee Logo"
              width="40"
              height="40"
              className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-xl shadow-sm border border-border group-hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <div className="font-display font-bold text-xl md:text-2xl tracking-tight text-foreground group-hover:text-accent transition-colors">Your Coffee</div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70">
            <button onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-accent transition-colors cursor-pointer">Story</button>
            <button onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-accent transition-colors cursor-pointer">Menu</button>
            <button onClick={() => document.getElementById('franchise')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-accent transition-colors cursor-pointer">Franchise</button>
            <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-accent transition-colors cursor-pointer">FAQ</button>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="theme-toggle"
              aria-label="Toggle dark mode"
              onClick={() => setIsDark(!isDark)}
              className="p-2 flex items-center justify-center cursor-pointer text-[20px] transition-transform hover:scale-110"
            >
              <span id="theme-icon">{isDark ? '☀️' : '🌙'}</span>
            </button>
            <button className="hidden sm:block bg-accent text-white px-5 py-2 rounded-full text-xs md:text-sm font-semibold hover:opacity-90 transition-all cursor-pointer" onClick={() => document.getElementById('franchise')?.scrollIntoView({ behavior: 'smooth' })}>
              Franchise
            </button>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 text-foreground cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full left-0 right-0 mt-2 bg-nav border border-border rounded-2xl p-4 shadow-xl z-50 md:hidden"
            >
              <div className="flex flex-col gap-4">
                <button onClick={() => { setIsMobileMenuOpen(false); document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left px-4 py-2 hover:bg-muted/10 rounded-lg font-medium cursor-pointer">Story</button>
                <button onClick={() => { setIsMobileMenuOpen(false); document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left px-4 py-2 hover:bg-muted/10 rounded-lg font-medium cursor-pointer">Menu</button>
                <button onClick={() => { setIsMobileMenuOpen(false); document.getElementById('franchise')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left px-4 py-2 hover:bg-muted/10 rounded-lg font-medium cursor-pointer">Franchise</button>
                <button onClick={() => { setIsMobileMenuOpen(false); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left px-4 py-2 hover:bg-muted/10 rounded-lg font-medium cursor-pointer">FAQ</button>
                <button
                  onClick={() => { setIsMobileMenuOpen(false); document.getElementById('franchise')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="bg-accent text-white py-3 rounded-xl font-bold mt-2 cursor-pointer"
                >
                  Start Franchise
                </button>
              </div>
            </motion.div>
          )}
        </motion.nav>

        {/* Main Grid */}
        <main className="grid grid-cols-1 md:grid-cols-12 gap-4 flex-1">
          {/* Hero Section */}
          <motion.section
            id="hero"
            variants={itemVariants}
            className="col-span-1 md:col-span-8 bg-[#1A1613] border border-border rounded-3xl p-6 md:p-8 relative overflow-hidden group shadow-sm flex flex-col justify-center min-h-[350px] md:min-h-[400px]"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop"
                alt="Barista pouring latte art"
                width="1200"
                height="800"
                className="w-full h-full object-cover grayscale brightness-[0.3] contrast-[1.1]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center text-center h-full justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <span className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-accent mb-2">Artisan Roastery</span>
                <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-white">
                  The Art of <br className="hidden md:block" />
                  Extraction.
                </h1>
                <p className="max-w-md mx-auto text-xs md:text-sm text-white/80 leading-relaxed mb-8">
                  Elevating the daily ritual. We meticulously source and roast the world's most
                  exceptional coffees for those who demand perfection in every cup.
                </p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-center gap-3 sm:gap-4 w-full sm:w-auto"
                >
                  <button onClick={() => document.getElementById('franchise')?.scrollIntoView({ behavior: 'smooth' })} className="bg-accent text-white px-6 py-3.5 rounded-xl font-bold sm:min-w-[170px] hover:opacity-90 transition-all duration-300 shadow-lg shadow-black/20 cursor-pointer">
                    Join Franchise
                  </button>
                  <button onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })} className="text-white px-6 py-3.5 rounded-xl font-bold sm:min-w-[170px] border border-white/30 hover:bg-white/10 transition-colors duration-300 bg-transparent backdrop-blur-sm cursor-pointer">
                    Our Story
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Photo Showcase Box (next to hero) */}
          <motion.div
            variants={itemVariants}
            className="hidden md:flex md:col-span-4 bg-card border border-border rounded-3xl p-3 flex-col gap-3 shadow-sm md:h-auto"
          >
            {/* Landscape Photo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="h-[120px] w-full rounded-2xl overflow-hidden relative group shrink-0"
            >
              <img
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop"
                alt="Coffee Beans"
                width="400"
                height="300"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="flex gap-3 flex-1 min-h-0">
              {/* Portrait Photo */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-1/2 rounded-2xl overflow-hidden relative group"
              >
                <img
                  src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1471&auto=format&fit=crop"
                  alt="Latte in cafe"
                  width="300"
                  height="450"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <div className="w-1/2 flex flex-col gap-3">
                {/* 1x1 Photo */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full aspect-square rounded-2xl overflow-hidden relative group shrink-0"
                >
                  <img
                    src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1587&auto=format&fit=crop"
                    alt="Espresso shot"
                    width="300"
                    height="300"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                {/* Secondary Portrait Photo */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full flex-1 rounded-2xl overflow-hidden relative group min-h-0"
                >
                  <img
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1447&auto=format&fit=crop"
                    alt="Barista working"
                    width="300"
                    height="450"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Interstitial Story Title */}
          <motion.div
            className="col-span-1 md:col-span-12 mt-4 flex flex-col md:flex-row justify-between md:items-end gap-6 px-2"
            id="story"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-accent font-bold mb-1">Our Story</p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">The Journey.</h2>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              <p className="text-xs md:text-sm text-muted md:max-w-sm leading-relaxed">
                From a tiny kitchen to a growing family. Every step has been rooted in our love for the craft and our community.
              </p>
              <div className="flex gap-2 shrink-0 self-end sm:self-auto">
                <button
                  onClick={prevStory}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted/10 transition-colors shadow-sm cursor-pointer"
                  aria-label="Previous story"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextStory}
                  className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center hover:opacity-90 transition-colors shadow-sm cursor-pointer"
                  aria-label="Next story"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Story Carousel */}
          <motion.div
            className="col-span-1 md:col-span-12 overflow-hidden py-4 -mx-2 px-2"
            style={{ containerType: 'inline-size' } as React.CSSProperties}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <style>{`
              .story-track {
                /* Mobile: 1 card visible. Stride is container width + gap */
                --slide-stride: calc(100cqw + 1rem);
              }
              @media (min-width: 640px) {
                /* Tablet: 2 cards visible. Stride is (container width + gap) / 2 */
                .story-track {
                  --slide-stride: calc((100cqw + 1rem) / 2);
                }
              }
              @media (min-width: 1024px) {
                /* Desktop: 3 cards visible. Stride is (container width + gap) / 3. gap is 1.5rem (6) */
                .story-track {
                  --slide-stride: calc((100cqw + 1.5rem) / 3);
                }
              }
              .story-item {
                width: 100%;
                flex-shrink: 0;
              }
              @media (min-width: 640px) {
                .story-item {
                  width: calc(50% - 0.5rem);
                }
              }
              @media (min-width: 1024px) {
                .story-item {
                  width: calc(33.333333% - 1rem);
                }
              }
            `}</style>
            <motion.div
              className="flex gap-4 lg:gap-6 story-track cursor-grab active:cursor-grabbing"
              animate={{ transform: `translateX(calc(-${storyIndex} * var(--slide-stride)))` }}
              transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x;
                if (swipe < -50 || velocity.x < -500) {
                  nextStory();
                } else if (swipe > 50 || velocity.x > 500) {
                  prevStory();
                }
              }}
            >
              {renderStories.map((story, idx) => {
                const style = getThemeStyles(story.theme);
                const Icon = story.icon;

                return (
                  <div
                    key={`${story.year}-${idx}`}
                    className={`story-item rounded-3xl p-8 flex flex-col justify-between relative group min-h-[300px] transition-shadow duration-300 ${style.bg} ${style.border} ${style.shadow}`}
                  >
                    <div className="flex justify-between items-start mb-12">
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${style.yearBadge} ${style.badge}`}>{story.year}</span>
                      <Icon className={`w-6 h-6 transition-transform group-hover:scale-110 duration-300 ${style.icon}`} />
                    </div>
                    <div>
                      <h3 className={`font-display text-2xl font-semibold mb-2 ${style.title}`}>{story.title}</h3>
                      <p className={`text-sm leading-relaxed ${style.desc}`}>
                        {story.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Menu Title */}
          <motion.div
            className="col-span-1 md:col-span-12 mt-8 md:mt-4 flex flex-col md:flex-row justify-between md:items-end gap-2 px-2"
            id="menu"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-accent font-bold mb-1">In-Store</p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Cafe Menu.</h2>
            </div>
            <p className="text-xs md:text-sm text-muted md:max-w-sm leading-relaxed">
              Freshly prepared daily. Join us in-store to experience our full selection of crafted beverages and artisanal meals.
            </p>
          </motion.div>

          {/* Menu Bento Box */}
          <motion.div
            className="col-span-1 md:col-span-12 bg-card border border-border rounded-3xl p-5 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 shadow-sm"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Sidebar Controls */}
            <div className="w-full md:w-1/3 flex flex-col gap-6 md:sticky md:top-8 self-start">
              {/* Main Category Toggle */}
              <div className="flex bg-background p-1 rounded-xl border border-border">
                <button
                  onClick={() => handleMenuMainChange('drinks')}
                  className={`flex-1 py-2.5 md:py-2 text-xs md:text-sm font-bold rounded-lg transition-colors cursor-pointer ${menuMainType === 'drinks' ? 'bg-card shadow-sm text-foreground' : 'text-muted hover:text-foreground'}`}
                >
                  Drinks
                </button>
                <button
                  onClick={() => handleMenuMainChange('meals')}
                  className={`flex-1 py-2.5 md:py-2 text-xs md:text-sm font-bold rounded-lg transition-colors cursor-pointer ${menuMainType === 'meals' ? 'bg-card shadow-sm text-foreground' : 'text-muted hover:text-foreground'}`}
                >
                  Meals
                </button>
              </div>

              {/* Sub Categories */}
              <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 hide-scrollbar scroll-smooth">
                {Object.keys(menuData[menuMainType]).map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setMenuSubType(sub)}
                    className={`whitespace-nowrap md:whitespace-normal text-left px-4 py-3 rounded-xl text-xs md:text-sm font-medium transition-all flex-shrink-0 md:flex-shrink cursor-pointer ${menuSubType === sub ? 'bg-accent text-white shadow-md' : 'bg-background text-muted hover:bg-muted/10 border border-border'}`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items List */}
            <div className={`w-full md:w-2/3 flex flex-col gap-4 overflow-y-auto max-h-[500px] md:max-h-[600px] custom-scrollbar pr-2`}>
              {menuMainType === 'drinks' ? (
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">{menuSubType}</h3>
              ) : (
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">Meals</h3>
              )}
              <div key={menuMainType + menuSubType} className="grid gap-4">
                {menuData[menuMainType][menuSubType]?.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setSelectedMenuItem(item)}
                    className="flex justify-between items-start border-b border-border last:border-0 pb-4 last:pb-0 cursor-pointer group px-2 py-2 hover:bg-muted/10 rounded-xl transition-colors -mx-2"
                  >
                    <div className="pr-4">
                      <h4 className="font-display font-bold text-foreground text-lg group-hover:text-accent transition-colors">{item.name}</h4>
                      <p className="text-muted text-sm mt-1">{item.desc}</p>
                    </div>
                    <span className="font-bold text-accent whitespace-nowrap">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Franchise Section */}
          <motion.div
            className="col-span-1 md:col-span-12 mt-8 md:mt-4 bg-muted/10 rounded-3xl p-6 lg:p-10 shadow-sm transition-colors duration-300"
            id="franchise"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-accent mb-1 block">FRANCHISE</span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">Be Your Own Boss</h2>
            <p className="text-muted text-xs md:text-sm md:max-w-xl leading-relaxed mb-8">
              Start your own Coffee franchise and join our growing family. Low investment, high returns, and full support every step of the way.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
              {/* Left Card */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-3xl p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden border border-border shadow-sm"
              >
                <div>
                  <span className="inline-block bg-accent text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6 relative z-10 shadow-sm">Limited Time Offer</span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2 z-10 relative">Franchise Package</h3>
                  <div className="flex items-baseline gap-1 mb-2 z-10 relative">
                    <span className="text-4xl md:text-5xl font-bold text-accent tracking-tight">₱25,988</span>
                  </div>
                  <p className="text-muted text-xs md:text-sm font-medium mb-6 z-10 relative">One-time investment. Limited slots available.</p>
                  <p className="text-foreground text-xs md:text-sm font-bold tracking-wide z-10 relative">Low investment · High returns · Full support</p>
                </div>
                <button className="w-full bg-accent hover:opacity-90 text-white py-4 rounded-xl text-base md:text-lg font-bold transition-colors z-10 mt-8 cursor-pointer">
                  Inquire Now
                </button>
              </motion.div>

              {/* Right Card */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-3xl p-6 lg:p-8 flex flex-col border border-border shadow-sm"
              >
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6">Package inclusions</h3>
                <ul className="space-y-4 flex-1">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium text-xs md:text-sm lg:text-base">Use of Brand &amp; Business Name</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium text-xs md:text-sm lg:text-base">Complete Equipment &amp; Tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium text-xs md:text-sm lg:text-base">Initial Inventory</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium text-xs md:text-sm lg:text-base">Crew Training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium text-xs md:text-sm lg:text-base">Operations Manual</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium text-xs md:text-sm lg:text-base">Marketing Materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium text-xs md:text-sm lg:text-base">Opening Assistance</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Why Choose Us Subsection */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted mb-2 block">WHY CHOOSE US</span>
              <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6">Why Start a Your Coffee Franchise?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-card p-6 rounded-2xl relative overflow-hidden flex flex-col h-full group border border-border shadow-sm">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background flex items-center justify-center text-accent mb-4 z-10 transition-transform group-hover:scale-110">
                    <Wallet className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h4 className="font-display font-bold text-accent text-base md:text-lg mb-2 z-10">Affordable Investment</h4>
                  <p className="text-muted text-xs md:text-sm leading-relaxed z-10">Start for only ₱25,988 with low risk and high returns.</p>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-background opacity-50 z-0"></div>
                </div>

                <div className="bg-card p-6 rounded-2xl relative overflow-hidden flex flex-col h-full group border border-border shadow-sm">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background flex items-center justify-center text-accent mb-4 z-10 transition-transform group-hover:scale-110">
                    <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h4 className="font-display font-bold text-accent text-base md:text-lg mb-2 z-10">High Profit Potential</h4>
                  <p className="text-muted text-xs md:text-sm leading-relaxed z-10">Tap into the fast-growing coffee market with proven margins.</p>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-background opacity-50 z-0"></div>
                </div>

                <div className="bg-card p-6 rounded-2xl relative overflow-hidden flex flex-col h-full group border border-border shadow-sm">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background flex items-center justify-center text-accent mb-4 z-10 transition-transform group-hover:scale-110">
                    <HeartHandshake className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h4 className="font-display font-bold text-accent text-base md:text-lg mb-2 z-10">Strong Brand Support</h4>
                  <p className="text-muted text-xs md:text-sm leading-relaxed z-10">Training, marketing materials, and opening assistance included.</p>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-background opacity-50 z-0"></div>
                </div>

                <div className="bg-card p-6 rounded-2xl relative overflow-hidden flex flex-col h-full group border border-border shadow-sm">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background flex items-center justify-center text-accent mb-4 z-10 transition-transform group-hover:scale-110">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h4 className="font-display font-bold text-accent text-base md:text-lg mb-2 z-10">Proven Business Model</h4>
                  <p className="text-muted text-xs md:text-sm leading-relaxed z-10">One of the fastest-growing coffee franchise brands.</p>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-background opacity-50 z-0"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            id="faq"
            className="col-span-1 md:col-span-10 md:col-start-2 bg-card border border-border rounded-3xl p-5 md:p-6 shadow-sm flex flex-col md:flex-row gap-6 mt-4"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="w-full md:w-1/3 pt-1">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">Support</h4>
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">Quick FAQ</h2>
              <p className="text-[11px] md:text-xs text-muted leading-relaxed">
                Need more help? Our support team is here to assist you with any questions.
              </p>
            </div>
            <div className="w-full md:w-2/3 space-y-1">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="group border-b border-border last:border-0 pb-1 pt-1"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between py-2 text-left focus:outline-none cursor-pointer"
                  >
                    <span className="font-semibold text-foreground group-hover:text-accent transition-colors text-sm md:text-base">{faq.question}</span>
                    <span className={`text-accent font-bold text-lg transition-transform ${openFaq === index ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? 'auto' : 0,
                      opacity: openFaq === index ? 1 : 0
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted text-xs md:text-sm leading-relaxed pb-3 pt-1">
                      {faq.answer}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </main>

        {/* Footer */}
        <motion.footer
          className="mt-12 md:mt-24 pt-12 md:pt-16 pb-12 relative z-10 border-t border-border"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
            {/* Brand Section */}
            <div className="flex flex-col gap-6">
              <div
                className="cursor-pointer group self-start"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <img
                  src="Images/favIcon.jpg"
                  alt="Your Coffee Logo"
                  width="80"
                  height="80"
                  className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-2xl shadow-sm border border-border group-hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-muted text-xs md:text-sm leading-relaxed max-w-xs">
                Crafting artisanal moments, one cup at a time. From local roots to global flavors, we bring the best coffee experience to your neighborhood.
              </p>
            </div>

            {/* Quick Links */}
            <div className="hidden sm:block">
              <h4 className="font-display text-[10px] md:text-sm font-bold text-accent uppercase tracking-widest mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted text-xs md:text-sm hover:text-accent transition-colors cursor-pointer">Home</button></li>
                <li><button onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted text-xs md:text-sm hover:text-accent transition-colors cursor-pointer">Our Story</button></li>
                <li><button onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted text-xs md:text-sm hover:text-accent transition-colors cursor-pointer">Menu</button></li>
                <li><button onClick={() => document.getElementById('franchise')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted text-xs md:text-sm hover:text-accent transition-colors cursor-pointer">Franchise</button></li>
                <li><button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted text-xs md:text-sm hover:text-accent transition-colors cursor-pointer">FAQ</button></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="font-display text-[10px] md:text-sm font-bold text-accent uppercase tracking-widest mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:hello@yourcoffee.co"
                    className="flex items-center gap-3 text-muted text-xs md:text-sm group cursor-pointer hover:text-accent transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>hello@yourcoffee.co</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+639123456789"
                    className="flex items-center gap-3 text-muted text-xs md:text-sm group cursor-pointer hover:text-accent transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+63 912 345 6789</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-muted text-xs md:text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Manila, Philippines</span>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="font-display text-[10px] md:text-sm font-bold text-accent uppercase tracking-widest mb-6">Follow Us</h4>
              <p className="text-muted text-xs md:text-sm mb-6">Stay updated with our latest brews and branch openings.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-accent hover:text-white hover:border-transparent transition-all cursor-pointer">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-accent hover:text-white hover:border-transparent transition-all cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-accent hover:text-white hover:border-transparent transition-all cursor-pointer">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-[10px] md:text-xs text-muted font-medium text-center md:text-left">
              &copy; {new Date().getFullYear()} Your Coffee Philippines. All rights reserved.
            </span>
            <div className="flex gap-4 md:gap-8">
              <a href="#" className="text-[10px] md:text-xs text-muted font-medium hover:text-accent transition-colors cursor-pointer">Privacy</a>
              <a href="#" className="text-[10px] md:text-xs text-muted font-medium hover:text-accent transition-colors cursor-pointer">Terms</a>
              <a href="#" className="text-[10px] md:text-xs text-muted font-medium hover:text-accent transition-colors cursor-pointer">Cookies</a>
            </div>
          </div>
        </motion.footer>
      </motion.div>

      {/* Modal for Menu Item Details */}
      {selectedMenuItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={() => {
            setSelectedMenuItem(null);
            setIsImageZoomed(false);
          }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card rounded-[32px] overflow-hidden shadow-2xl max-w-xl md:max-w-3xl w-full relative mx-4 border border-border flex flex-col md:flex-row h-auto max-h-[90vh]"
          >
            <div
              className={`w-full md:w-1/2 ${selectedMenuItem.image ? 'h-64 md:h-auto' : 'h-48 bg-accent'} relative overflow-hidden group cursor-zoom-in`}
              onClick={() => setIsImageZoomed(true)}
            >
              {selectedMenuItem.image ? (
                <>
                  <img
                    src={selectedMenuItem.image}
                    alt={selectedMenuItem.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="bg-black/50 text-white text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-sm">Click to view full image</span>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center opacity-20">
                  <Coffee className="w-16 h-16 text-white" />
                </div>
              )}
            </div>
            <div className="p-8 md:p-12 w-full md:w-1/2 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-4 gap-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2 block">Menu Item</span>
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">{selectedMenuItem.name}</h3>
                </div>
                <span className="text-xl md:text-2xl font-bold text-accent shrink-0 mt-6">{selectedMenuItem.price}</span>
              </div>
              <div className="w-12 h-1 bg-accent/20 rounded-full mb-6"></div>
              <p className="text-muted text-sm md:text-base leading-relaxed mb-10">{selectedMenuItem.desc}</p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    setSelectedMenuItem(null);
                    setIsImageZoomed(false);
                  }}
                  className="w-full bg-accent text-white hover:opacity-90 py-4 rounded-2xl text-base font-bold transition-all hover:scale-[1.02] active:scale-100 shadow-lg shadow-accent/20 cursor-pointer"
                >
                  Close Product
                </button>
              </div>
            </div>

            {/* Mobile Close Button */}
            <button
              onClick={() => setSelectedMenuItem(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white md:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      )}

      {/* Full Screen Image Zoom Overlay */}
      {isImageZoomed && selectedMenuItem?.image && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-xl cursor-zoom-out"
          onClick={() => setIsImageZoomed(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-5xl w-full h-full flex items-center justify-center"
          >
            <img
              src={selectedMenuItem.image}
              alt={selectedMenuItem.name}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <button
              className="absolute top-0 right-0 md:-top-12 md:-right-12 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-colors"
              onClick={() => setIsImageZoomed(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-[10px] uppercase tracking-[0.2em] font-medium hidden md:block">
              Click anywhere to minimize
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

