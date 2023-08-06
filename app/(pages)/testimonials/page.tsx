"use client";
import { fadeIn } from "@/app/lib/variants";
import TestimonialSlider from "@/components/TestimonialSlider";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className="h-full w-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
