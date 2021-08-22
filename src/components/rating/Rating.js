import React, {useState} from 'react'
import './Rating.css'
import {motion} from 'framer-motion'

import { useDispatch } from 'react-redux'
import { updateVotes } from '../../redux/restaurantSlice'

const starVariants = {
    hover: {
        scale: [1, 1.5, 1.1, 1.4, 1.2, 1.3],
        transition:{ duration: .7}
    }
}

const Rating = ({ dbkey }) => {
    const [voted, setVoted] = useState(false)
    const dispatch = useDispatch()

    const handleVote = (vote) => {
        dispatch(updateVotes({vote, dbkey}))
        setVoted(true)
    }

    return   (
                 <div className="stars mt-3">
                  {voted 
                  ? <p>thank you!</p> 
                  : <>
                    <motion.span variants={starVariants} whileHover="hover" onClick={()=>handleVote(5)}/>
                    <motion.span variants={starVariants} whileHover="hover" onClick={()=>handleVote(4)}/>
                    <motion.span variants={starVariants} whileHover="hover" onClick={()=>handleVote(3)}/>
                    <motion.span variants={starVariants} whileHover="hover" onClick={()=>handleVote(2)}/>
                    <motion.span variants={starVariants} whileHover="hover" onClick={()=>handleVote(1)}/>
                   </>
                   }
                </div>
                    )
}

export default Rating
