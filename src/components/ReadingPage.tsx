import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import type { Writing } from './LandingPage';

export function ReadingPage({ writing }: { writing?: Writing }) {
  if (!writing) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5] dark:bg-[#111111] text-[#2B2B2B] dark:text-[#EAEAEA]">
            <p>Essay not found.</p>
            <a href="/" className="ml-4 underline">Back to Home</a>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#111111] text-[#2B2B2B] dark:text-[#EAEAEA] transition-colors duration-500" style={{ fontFamily: 'EB Garamond, serif' }}>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:py-8 transition-colors duration-300">
        <a
          href="/"
          className="text-sm md:text-base hover:opacity-70 transition-opacity inline-flex items-center gap-2 bg-[#FAF8F5]/80 dark:bg-[#111111]/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-[#2B2B2B]/5 dark:border-[#EAEAEA]/5"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Collection
        </a>
      </nav>

      {/* Hero Image / Cover */}
      <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-[#2B2B2B]">
            <img 
            src={writing.imageUrl} 
            alt={writing.title}
            className="w-full h-full object-cover opacity-60"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/20 to-transparent dark:from-[#111111] dark:via-[#111111]/20"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 pb-12 flex flex-col items-center justify-end text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase opacity-60 mb-4 block">
                {writing.category}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight max-w-4xl mx-auto drop-shadow-sm">
                {writing.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-2xl mx-auto px-6 pb-24 md:pb-32 -mt-8 relative z-20">
        
        {/* Content with Drop Cap */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="prose-custom text-lg md:text-xl leading-relaxed space-y-8"
        >
          {writing.content.split('\n\n').map((paragraph, index) => {
            if (index === 0 && writing.category !== 'Poetry') {
              const firstLetter = paragraph.charAt(0);
              const restOfParagraph = paragraph.slice(1);
              
              return (
                <p key={index} className="text-[#2B2B2B]/90 dark:text-[#EAEAEA]/90">
                  <span className="float-left text-7xl md:text-8xl font-medium leading-[0.8] pr-3 pt-2 mr-2 font-serif">
                    {firstLetter}
                  </span>
                  {restOfParagraph}
                </p>
              );
            }
            
            return (
              <p key={index} className="text-[#2B2B2B]/80 dark:text-[#EAEAEA]/80 indent-8 md:indent-12">
                {paragraph}
              </p>
            );
          })}
        </motion.div>

        {/* Divider */}
        <div className="my-16 flex justify-center opacity-30">
            <div className="w-2 h-2 rounded-full bg-[#2B2B2B] dark:bg-[#EAEAEA] mx-2"></div>
            <div className="w-2 h-2 rounded-full bg-[#2B2B2B] dark:bg-[#EAEAEA] mx-2"></div>
            <div className="w-2 h-2 rounded-full bg-[#2B2B2B] dark:bg-[#EAEAEA] mx-2"></div>
        </div>

        {/* Back to Home Link at Bottom */}
        <div className="text-center">
          <a
            href="/"
            className="text-lg hover:text-[#2B2B2B]/60 dark:hover:text-[#EAEAEA]/60 transition-colors inline-flex items-center gap-2 italic font-serif"
          >
            Return to the Library
          </a>
        </div>
      </article>
    </div>
  );
}
