import React, {useEffect, useState} from 'react'
import "./Home.css"

import { fetchRestaurants } from '../../redux/restaurantSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { motion, AnimateSharedLayout } from 'framer-motion'
import Accordion from '../../components/utils/Accordion'
import Pointer from '../../components/pointer/Pointer'


const Home = () => {    
    const dispatch = useDispatch()
    const restaurants = useSelector((state)=> state.restaurants)
    useEffect(() => {
        dispatch(fetchRestaurants())
    }, [dispatch])
    
    const [hovered, setHovered] = useState(null)

    const transformData = data => {
        const dataARR = []
        if(data) { 
            for(let key in data){
                dataARR.push({data: data[key], key })
            }
        }
        return dataARR
    }

     const data = transformData(restaurants)

    const getRating =(votes) => {
        const votesARR = []
        if(votes) { 
            for(let key in votes){
                votesARR.push( votes[key])
                }

           const sum = votesARR.reduce((a, b) => a + b, 0);
           const average = +sum/votesARR.length
           return average.toFixed(1)
        }
    }
    
    return (
        <div className="home container pt-5">
        <motion.h1 
        drag 
        dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
        dragElastic={.2}
        >
            Restaurants
        </motion.h1>
        <AnimateSharedLayout>
           <ul className="restaurants-list list-group pt-5">
            {
                data?.map((item, i)=>(
                    <motion.li 
                        initial={{y: `${-i*100}%`, opacity: 0}} 
                        animate={{y: 0, zIndex: Math.ceil(10/(i+1)), opacity: 1}}
                        exit={{opacity: 0, transition:{delay: i*0.2, duration: .3, ease: "easeInOut"}}}
                        transition={{delay: i*0.1, type: 'spring', stiffness: 150}} 
                        key={item.data.id} 
                        className="restaurants-list-item list-group-item p-0"
                        onMouseEnter={()=>setHovered(item.data.id)}
                    >
                        <Pointer key={item.data.id} isHovered={hovered === item.data.id}/>
                        <div className="row mx-0 justify-content-between">
                            <div className="col-md-10">
                                <Accordion title={item.data.title}>
                                    <p className="ml-3 py-1 px-4">{item.data.desc}</p>
                                    <Link className="d-inline-block pb-2" to={{pathname: `/home:${item.data.id}`, state: item}}>
                                        Visit Page
                                    </Link>
                                </Accordion>
                            </div>
                            <div className="rating col-md-1">
                            {getRating(item.data.votes) ? <span> {getRating(item.data.votes)} </span> : "no votes"}
                            </div>
                        </div>
                    </motion.li>
                ))
            }
            </ul>
            </AnimateSharedLayout> 
            <div className="mt-4 mb-5">
            <Link to="/admin">Add a Reastaurant</Link>
            </div>
        </div>
    )
}

export default Home
