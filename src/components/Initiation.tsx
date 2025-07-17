import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Initiation() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 1600); // Duração total da animação
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showOverlay && (
        <div
          className="fixed inset-0 z-50"
          style={{ perspective: 1000, backgroundColor: "transparent" }}
        >
          {/* Quadrado 1 - metade esquerda da tela */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-[#00AF69] z-50"
            initial={{ x: 0, y: 0 }}
            animate={{ x: "-100%", y: "-100%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.6, ease: "easeInOut" }}
            style={{ transformOrigin: "left center" }}
          />

          {/* Quadrado 2 - metade superior direita */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#2D4A4C] z-50"
            initial={{ x: 0, y: 0 }}
            animate={{ x: "100%", y: "0" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.6, ease: "easeInOut" }}
            style={{ transformOrigin: "top right" }}
          />

          {/* Quadrado 3 - metade inferior direita */}
          <motion.div
            className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#25A37E] z-50"
            initial={{ rotateX: 0 }}
            animate={{ rotateX: -90 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.6, ease: "easeInOut" }}
            style={{ transformOrigin: "bottom right" }}
          />
        </div>
      )}
    </AnimatePresence>
  );
}

