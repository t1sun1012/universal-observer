import { motion } from 'motion/react';
import { ArrowRight, Moon, Sun, Feather, ScrollText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useEffect, useState } from 'react';

export interface Writing {
  id: string;
  title: string;
  category: 'Poetry' | 'Essay' | 'Fiction';
  snippet: string;
  content: string;
  imageUrl: string;
  readingTime?: string;
  quote?: string;
}

// Hero Background Component with Starry Night
function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
       {/* Van Gogh's Starry Night Background */}
       <div className="absolute inset-0 z-0">
         <img 
           src="https://images.unsplash.com/photo-1682944596871-892f20a98275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFycnklMjBuaWdodCUyMHZhbiUyMGdvZ2glMjBhcnR8ZW58MXx8fHwxNzcyMzI4MjM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
           alt="Starry Night by Van Gogh"
           className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-indigo-950/30 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#cd5858]/10 to-[#F9F5EB] dark:to-[#0f172a]"></div>
       </div>
       
       {/* Noise Texture */}
       <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" 
         style={{ 
           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` 
         }}
       />
    </div>
  );
}

// Separate components for each category style

function EssayCard({ writing }: { writing: Writing }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="col-span-12 md:col-span-6 lg:col-span-4 group relative overflow-hidden min-h-[480px]"
    >
      <a href={`/read/${writing.id}`} className="block h-full w-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={writing.imageUrl} 
            alt={writing.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-neutral-900/60 group-hover:bg-neutral-900/50 transition-colors duration-500" />
          {/* Grain Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-4 p-8 h-full text-neutral-100">
          <div className="flex justify-between items-start mb-4">
            <Feather className="w-5 h-5 opacity-70" />
            <span className="text-xs uppercase tracking-widest opacity-70 font-sans">{writing.readingTime}</span>
          </div>
          
          <h3 className="text-2xl font-serif font-medium leading-tight mb-2 group-hover:underline decoration-1 underline-offset-4">
            {writing.title}
          </h3>
          
          <p className="text-sm font-serif leading-relaxed text-justify opacity-80 line-clamp-4">
            {writing.snippet}
          </p>

          <div className="mt-auto pt-6 flex items-center text-xs uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
            <span>Read Essay</span>
            <ArrowRight className="w-3 h-3 ml-2" />
          </div>
        </div>
      </a>
    </motion.div>
  );
}

function FictionCard({ writing }: { writing: Writing }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="col-span-12 group relative overflow-hidden aspect-[16/9] md:aspect-[21/9]"
    >
      <a href={`/read/${writing.id}`} className="block h-full w-full">
        {/* Background Image with Grain */}
        <div className="absolute inset-0 z-0">
          <img 
            src={writing.imageUrl} 
            alt={writing.title}
            className="w-full h-full object-cover contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-neutral-900/40 mix-blend-multiply"></div>
          {/* Grain Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 text-neutral-100">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4 opacity-70">
              <span className="text-xs uppercase tracking-[0.2em]">Modern Fiction</span>
              <span className="w-1 h-1 bg-current rounded-full"></span>
              <span className="text-xs uppercase tracking-[0.2em]">{writing.readingTime}</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 font-serif">
              {writing.title}
            </h3>

            {writing.quote && (
              <blockquote className="border-l-2 border-white/30 pl-6 my-6 italic text-lg md:text-xl font-light opacity-90 max-w-2xl">
                "{writing.quote}"
              </blockquote>
            )}

            {!writing.quote && (
              <p className="text-lg opacity-80 max-w-xl line-clamp-2 mb-6 font-serif">
                {writing.snippet}
              </p>
            )}

            <div className="inline-flex items-center text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
              Enter Story <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

function PoetryCard({ writing }: { writing: Writing }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="col-span-12 md:col-span-6 group relative overflow-hidden min-h-[400px] border-t border-b border-neutral-200 dark:border-neutral-800"
    >
      <a href={`/read/${writing.id}`} className="block w-full h-full flex flex-col items-center justify-center py-16 px-8 text-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={writing.imageUrl} 
            alt={writing.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-neutral-900/60 group-hover:bg-neutral-900/50 transition-colors duration-500" />
          {/* Grain Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}></div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-neutral-100">
          <ScrollText className="w-6 h-6 mb-6 opacity-70" />
          
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-70 mb-4 font-sans">{writing.readingTime}</span>
          
          <h3 className="text-3xl md:text-4xl font-serif italic mb-6 group-hover:opacity-80 transition-opacity">
            {writing.title}
          </h3>
          
          <p className="text-sm font-serif leading-loose opacity-80 max-w-xs mx-auto whitespace-pre-line group-hover:opacity-100 transition-opacity">
            {writing.snippet}
          </p>

          <div className="mt-8 opacity-50">
            •
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export function LandingPage({ writings }: { writings: Writing[] }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const essays = writings.filter(w => w.category === 'Essay');
  const fiction = writings.filter(w => w.category === 'Fiction');
  const poetry = writings.filter(w => w.category === 'Poetry');

  return (
    <div className="min-h-screen bg-[#F9F5EB] dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 transition-colors duration-500 font-serif selection:bg-amber-200 selection:text-amber-950 dark:selection:bg-indigo-900 dark:selection:text-indigo-100">
      
      {/* Navigation / Header */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center text-white pointer-events-none mix-blend-difference">
        <div className="text-xl tracking-widest uppercase font-bold pointer-events-auto text-[#cd5858]">
          The Universal Observer
        </div>
        
        <div className="flex items-center gap-8 pointer-events-auto">
          <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase">
            <a href="#essays" className="hover:opacity-70 transition-opacity">Essays</a>
            <a href="#fiction" className="hover:opacity-70 transition-opacity">Fiction</a>
            <a href="#poetry" className="hover:opacity-70 transition-opacity">Poetry</a>
          </div>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 overflow-hidden text-white">
        <HeroBackground />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-10 max-w-4xl text-center drop-shadow-md"
        >
          <span className="block text-sm md:text-base tracking-[0.3em] uppercase mb-6 opacity-80 font-sans">Est. 2023</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter mb-8 leading-[0.9]">
            The Universal<br/>Observer
          </h1>
          <p className="max-w-2xl mx-auto leading-relaxed opacity-90 font-light italic text-[#000000] dark:text-white text-[32px]">"To pay attention, this is my boundless work."</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce drop-shadow-md"
        >
          <ArrowRight className="rotate-90 w-6 h-6 opacity-70" />
        </motion.div>
      </section>

      {/* Main Content Area - 12 Column Grid */}
      <main className="relative max-w-[1400px] mx-auto px-6 pb-32">
        {/* Background Texture */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-multiply select-none overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1553627558-d738c10f89da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwb2xkJTIwYm9vayUyMGZsaXBwaW5nJTIwcGFnZXMlMjBhbnRpcXVlJTIwdmludGFnZXxlbnwxfHx8fDE3NzIzMjg5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Antique book with flipped pages" 
            className="w-full h-full object-cover grayscale sepia-[.2]"
          />
        </div>

        <div className="relative z-10 space-y-32">
        
        {/* Category 1: Philosophical Essays */}
        <section id="essays" className="scroll-mt-32">
          <div className="flex items-end justify-between mb-12 border-b border-neutral-200 dark:border-neutral-800 pb-4">
            <div>
              <span className="text-xs font-sans tracking-[0.2em] uppercase opacity-50 block mb-2">Category 01</span>
              <h2 className="text-3xl md:text-4xl font-medium">Philosophical Essays</h2>
            </div>
            <p className="hidden md:block max-w-md text-sm opacity-60 text-right font-serif italic">
              "Discovering meaning through literature."
            </p>
          </div>
          
          <div className="grid grid-cols-12 gap-6 md:gap-12">
            {essays.map(writing => (
              <EssayCard key={writing.id} writing={writing} />
            ))}
          </div>
        </section>

        {/* Category 2: Modern Fiction */}
        <section id="fiction" className="scroll-mt-32">
          <div className="flex items-end justify-between mb-12 border-b border-neutral-200 dark:border-neutral-800 pb-4">
            <div>
              <span className="text-xs font-sans tracking-[0.2em] uppercase opacity-50 block mb-2">Category 02</span>
              <h2 className="text-3xl md:text-4xl font-medium">Modern Fiction</h2>
            </div>
            <p className="hidden md:block max-w-md text-sm opacity-60 text-right font-serif italic">
              "Cinematic, moody, and serendipitous."
            </p>
          </div>

          <div className="grid grid-cols-12 gap-8 md:gap-12 space-y-12">
            {fiction.map(writing => (
              <FictionCard key={writing.id} writing={writing} />
            ))}
          </div>
        </section>

        {/* Category 3: Poetry & Shorts */}
        <section id="poetry" className="scroll-mt-32">
          <div className="flex items-end justify-between mb-12 border-b border-neutral-200 dark:border-neutral-800 pb-4">
            <div>
              <span className="text-xs font-sans tracking-[0.2em] uppercase opacity-50 block mb-2">Category 03</span>
              <h2 className="text-3xl md:text-4xl font-medium">Poetry & Shorts</h2>
            </div>
            <p className="hidden md:block max-w-md text-sm opacity-60 text-right font-serif italic">
              "Minimalist reflections."
            </p>
          </div>

          <div className="grid grid-cols-12 gap-0 border-l border-r border-neutral-200 dark:border-neutral-800">
            {poetry.map(writing => (
              <PoetryCard key={writing.id} writing={writing} />
            ))}
          </div>
        </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1C1917] text-[#FAF8F5] py-24 px-6 text-center transition-colors duration-500">
        <h2 className="text-3xl font-medium mb-8 italic">The Universal Observer</h2>
        <p className="text-xs opacity-30 tracking-widest font-sans">© 2023 All Rights Reserved.</p>
      </footer>
    </div>
  );
}
