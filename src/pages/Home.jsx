import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import { motion } from "framer-motion";

import React from "react";

function Home() {
  return (
    <motion.div
      antimate={{ opacity: 1 }}
      initial={{ opaciaty: 0 }}
      exit={{ opacity: 0 }}
    >
      <Veggie />
      <Popular />
    </motion.div>
  );
}

export default Home;
