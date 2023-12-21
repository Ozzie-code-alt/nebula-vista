import { motion, AnimatePresence, animate } from "framer-motion";
import React from "react";
import { useRouter } from "next/router";
import "../app/globals.css";
const AppWrapper = ({ Component, pageProps }: any) => {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{ duration: 0.75 }}
        variants={{
          initialState: { opacity: 0,
          clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)" },
          animateState: { opacity: 1,
          clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
         },
          exitState: {clipPath:"polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"},
        }}
        className="base-page-size"
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
};

export default AppWrapper;
