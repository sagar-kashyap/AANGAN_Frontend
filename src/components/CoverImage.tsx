
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef,useEffect } from "react";

export default function CoverImageComponent() {
const controls = useAnimation();
const ref = useRef(null);
const inView = useInView(ref, { once: true, margin: "-100px" });
const sectionRef = useRef<HTMLDivElement>(null);

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
       <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-white">
          {/* Simple minimal background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gray-50" />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary-50 to-transparent opacity-70" />
          </div>
          
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="relative z-10 max-w-3xl text-center px-6"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-6 leading-tight"
            >
              <span className="font-light">Nature's Elegance</span>{" "}
              <br className="hidden sm:block" />
              <span className="font-light text-black">for Your Home</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Discover our curated collection of handcrafted artisanal pieces that bring the 
              beauty of nature into your home.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
              onClick={scrollToSection}
                className="w-full sm:w-auto bg-gray-900 text-white rounded-full px-8 py-3 text-sm font-medium tracking-wide shadow-sm transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Collection
              </motion.button>
              <motion.button
                className="w-full sm:w-auto bg-transparent text-gray-700 border border-gray-300 rounded-full px-8 py-3 text-sm font-medium tracking-wide mt-3 sm:mt-0 transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                About Us
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Minimal scroll indicator */}
          {/* <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hidden md:block z-10"
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            <div className="flex flex-col items-center">
              <p className="text-gray-500 text-sm mb-2 tracking-wider font-light">Explore More</p>
              <div className="text-gray-400">
                <ArrowDown size={20} />
              </div>
            </div>
          </motion.div> */}
        </section>
    {/* <Image style={{width:'70vw',height:'90vh'}}
    loading="lazy"
    src="https://firebasestorage.googleapis.com/v0/b/aangan-427bf.firebasestorage.app/o/AANGAN-images%2Fcover-image.jpg?alt=media&token=48009cf2-b99b-4a16-8037-fb4e861797cd"
    alt="AANGAN cover image"
    className="m-1"
    /> */}
    {/* <h1 className="text-center font-regular text-3xl my-6">Our Collection</h1> */}
    <div ref={sectionRef} className="text-center mt-20 mb-6">
            <h2 className="text-4xl font-light tracking-tight text-gray-900 mb-4">
              Our Collection
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover our handpicked selection of handcrafted items that bring natural elegance to your home
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-16 h-[1px] bg-gray-200" />
            </div>
          </div>
          </main>
    </div>
    
    </div>
  );
}