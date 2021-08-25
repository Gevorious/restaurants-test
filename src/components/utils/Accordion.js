import React, {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import "./Accordion.css"

const Accordion = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const descVariants={
        init: {height: 0, opacity: 0,},
        open: {height: "auto", opacity: 1, transition:{height:{type: "spring", stiffness: 120}, opacity:{duration: .3, delay: .2}}},
        exit: {height: 0, opacity: 0, transition: {height:{ease: "easeIn", duration: .4, delay: .3},  opacity:{duration: .3, delay: 0}}}
}

    return (
        <div className="accordion-item"  onClick={()=>setIsOpen(prevState => !prevState)}>
             <h3 className="py-1 px-3" >{title}</h3>
             <AnimatePresence exitBeforeEnter>
                {isOpen && <motion.div 
                    variants={descVariants}
                    initial="init"
                    animate="open"
                    exit="exit"
                    transition={{duration: .3}}
                    >
                    {children}
                </motion.div>}
            </AnimatePresence>
        </div>
    )
}

export default Accordion
