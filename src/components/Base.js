import React,{useState}  from "react";

import { Link } from "react-router-dom";
import { motion} from "framer-motion";

const containerVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
  exit:{
    x:'-100vw',
    transition: {
      ease:'easeInOut'
    }
  }
};

const nextVariants = {
  initial: {
    opacity: 0,
    x: "100vw",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.5,
      yoyo: Infinity,
    },
  },
};

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];


  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit={"exit"}
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              whileHover={{
                scale: 1.3,
                color: "yello",
                originX: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div variants={nextVariants} className="next">
          <Link to="/toppings">
            <motion.button variants={buttonVariants} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
