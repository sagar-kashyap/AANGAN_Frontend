
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setNavbar } from "../features/variableSlice";

export default function CoverImageComponent() {
const controls = useAnimation();
const ref = useRef(null);
const inView = useInView(ref, { once: true, margin: "-100px" });
const sectionRef = useRef<HTMLDivElement>(null);
const navigate=(useNavigate())
const dispatch = useDispatch()

const scrollToSection = () => {
  sectionRef.current?.scrollIntoView({ behavior: "smooth" });
};
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  }
};

  return (
    <div>
       <div className="min-h-screen flex flex-col">
       <main className="flex-grow">
       <div className="min-h-screen">
      <main className="flex-grow">
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Enhanced aesthetic background with gradient overlay */}
          <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gray-20" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary-50 to-transparent opacity-70" />
          </div>
          
          {/* Decorative element */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute top-[15%] right-[10%] text-[#9a8c78]"
          >
            {/* <Leaf size={120} strokeWidth={0.5} /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-leaf-icon lucide-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
          </motion.div>
          
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="relative z-10 max-w-4xl text-center px-6"
          >
            <motion.div 
              variants={itemVariants}
              className="flex justify-center mb-8 opacity-80"
            >
              <div className="w-14 h-[1px] bg-[#9a8c78] mt-3.5 mr-3" />
              <span className="text-[#9a8c78] tracking-widest text-lg uppercase font-medium">Welcome to AANGAN</span>
              <div className="w-14 h-[1px] bg-[#9a8c78] mt-3.5 ml-3" />
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#3c3a36] mb-6 leading-tight"
            >
              <span className="font-light">Nature's Elegance</span>{" "}
              <br className="hidden sm:block" />
              <span className="font-medium text-[#2b2923]">for Your Home</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-[#18181b] max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Discover our curated collection of handcrafted artisanal pieces that bring the 
              beauty of nature into your living space.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                onClick={scrollToSection}
                className="w-full sm:w-auto bg-default-900 text-white rounded-full px-10 py-4 text-sm font-medium tracking-wide shadow-sm transition-all duration-200 flex items-center justify-center group"
                whileHover={{ scale: 1.02, backgroundColor: "#27272a" }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Collection
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="ml-2 group-hover:translate-y-1 transition-transform lucide lucide-arrow-down-icon lucide-arrow-down"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
                {/* <ArrowDown size={16} className="ml-2 group-hover:translate-y-1 transition-transform" /> */}
              </motion.button>
              
              <motion.button
                onClick={() => {navigate("/about");
                    dispatch(setNavbar({title:"About us", href:"/about"}))
                  }}
                className="w-full sm:w-auto bg-transparent text-[#27272a] border border-[#27272a] rounded-full px-10 py-4 text-sm font-medium tracking-wide mt-3 sm:mt-0 transition-all duration-200 hover:border-[#27272a]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                About Us
              </motion.button>
            </motion.div>
          </motion.div>
          </section>
          </main>
          </div>
          <div ref={sectionRef} className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block mb-3"
              >
                <div className="h-[1px] w-10 bg-[#9a8c78] mx-auto mb-8" />
                <span className="text-[#9a8c78] tracking-widest text-lg uppercase font-medium">Handcrafted & Unique</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-5xl font-semibold tracking-tight text-[#18181b] mb-6"
              >
                Our Collection
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg text-[#18181b] max-w-2xl mx-auto mb-10 leading-relaxed"
              >
                Discover our handpicked selection of handcrafted items that bring natural elegance to your home, 
                each piece telling a unique story of craftsmanship and nature-inspired design.
              </motion.p>
              
              <div className="w-16 h-[1px] bg-[#c9c3b8] mx-auto" />
            </div>
            </div>
            </div>
          </main>
    </div>
    
    </div>
  );
}