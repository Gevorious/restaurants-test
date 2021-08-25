import React from 'react'
import { motion } from 'framer-motion'
import './Pointer.css'

const Pointer = ({isHovered}) => {
    return (
        <div className="pointer">
            {isHovered && <motion.span layoutId="pointer" transition={{type: "spring"}}/>}
        </div>
    )
}

export default Pointer
