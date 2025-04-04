import { motion } from 'framer-motion'
import React from 'react'

const Button = ({ label, className }) => {
  return (
    <motion.button 
      className={`${className} px-4 py-2`}
      whileTap={{ scale: 0.95 }} 
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }}
    >
      {label}
    </motion.button>
  )
}

export default Button