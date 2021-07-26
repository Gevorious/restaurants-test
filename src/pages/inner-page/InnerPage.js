import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

import './InnerPage.css'

import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Rating from '../../components/rating/Rating';

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
                    <YMaps>
                        <Map width="100%" height="60vh"  defaultState={{ center: data.cords, zoom: 15 }}>
                        <Placemark {...placeMark} />
                        </Map>
                    </YMaps>
                    <Rating dbkey={key}/>
                </div>
                </div>
               
            </div>}
        </div>
    </div>
    )
}

export default InnerPage
