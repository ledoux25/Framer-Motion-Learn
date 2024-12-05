import React,{useEffect, useState}  from "react";
import { motion } from "framer-motion";


const containerVariants = {
  initial:{
    y: 100,
        opacity: 0,
  },
  animate:{
    y: 0,
    opacity: 1,
    transition : {
      type: "spring",
      mass:0.4,
      damping:8,
      when:"beforeChildren",
      staggerChildren: 0.4
    }
  },
  exit:{
    x:'-100vw',
    transition: {
      ease:'easeInOut'
    }
  }
}

const childVariants = {
  initial:{
        opacity: 0,
  },
  animate:{
    opacity: 1,
  }
}

const Order = ({ pizza , setShowModal}) => {

  useEffect(()=>{
    setTimeout(()=>{
      setShowModal(true)
    },5000)
  },[])

  return (
    <motion.div 
    variants={containerVariants}

    animate="animate"
    exit={"exit"}
    initial="initial"
    className="container order">
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div
        variants={childVariants}
        
      >
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}

      </motion.div>
    </motion.div>
  )
}

export default Order;