import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

import './InnerPage.css'

import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Rating from '../../components/rating/Rating';
import {motion} from 'framer-motion'

const mapVariants = {
    init: {
        y: `-100vh`,
        opacity: 0
    },
    end: {
        y: 0,
        opacity: 1,
        transition: {type: 'spring', stiffness: 80}
    }
}

const ratingVariants = {
    init: {
        x: `100vh`,
        opacity: 0
    },
    end: {
        x: 0,
        opacity: 1,
        transition: {type: 'spring', delay: .7,  stiffness: 80}
    }
}

const InnerPage = (props) => {
    const {state} = useLocation();
    const [data, setData] = useState()
    const [key, setKey] = useState()

    useEffect(() => {
        setData(state.data)
        setKey(state.key)
    }, [state.data, state.key])

   const placeMark = {
    // The geometry description.
    geometry: {
        type: "Point",
        coordinates: data?.cords
     },
    options: {
        draggable: false,
    }
}

    return  (
        <div className="inner-page">
        <div className="pl-5 my-5 form-wrapper">   
           {(data && key) && <div>
                <div className="row mx-0">

                <div className="pl-5 my-5 col-md-4 form-inputs">   
                   
                    <h2>{data.title}</h2>
                   
                    <p>{data.desc}</p>
                </div>
                <div className="pl-5 my-5 col-md-6">
                    <motion.div 
                        variants={mapVariants}
                        initial="init"
                        animate = "end"
                    >
                        <YMaps>
                            <Map width="100%" height="60vh"  defaultState={{ center: data.cords, zoom: 15 }}>
                            <Placemark {...placeMark} />
                            </Map>
                        </YMaps>
                    </motion.div>
                    <motion.div   
                        variants={ratingVariants}
                        initial="init"
                        animate = "end">
                        <Rating dbkey={key}/>
                    </motion.div>
                </div>
                </div>
               
            </div>}
        </div>
    </div>
    )
}

export default InnerPage
