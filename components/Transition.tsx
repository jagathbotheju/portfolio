"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

const transVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transition = ({ children }: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  console.log(pathName);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div className="h-full" key={pathName}>
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
          variants={transVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeInOut",
          }}
        ></motion.div>

        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]"
          variants={transVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            delay: 0.4,
            duration: 0.6,
            ease: "easeInOut",
          }}
        ></motion.div>

        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4b3792]"
          variants={transVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            delay: 0.6,
            duration: 0.6,
            ease: "easeInOut",
          }}
        ></motion.div>
      </motion.div>
      {children}
    </AnimatePresence>
  );
};

export default Transition;
