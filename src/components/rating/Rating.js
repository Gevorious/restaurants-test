import React, {useState} from 'react'
import './Rating.css'

import { useDispatch } from 'react-redux'
import { updateVotes } from '../../redux/restaurantSlice'

const Rating = ({ dbkey }) => {
    const [voted, setVoted] = useState(false)
    const dispatch = useDispatch()

    const handleVote = (e) => {
        const vote = e.target.attributes.vote.value
        dispatch(updateVotes({vote, dbkey}))
        setVoted(true)
    }

    return   (
                 <div className="stars mt-3">
                  {voted 
                  ? <p>thank you!</p> 
                  : <>
                  <span vote={5} onClick={handleVote}/>
                   <span vote={4} onClick={handleVote}/>
                   <span vote={3} onClick={handleVote}/>
                   <span vote={2} onClick={handleVote}/>
                   <span vote={1} onClick={handleVote}/>
                   </>
                   }
                </div>
                    )
}

export default Rating
