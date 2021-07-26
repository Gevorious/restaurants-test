import React, {useState, useRef} from 'react'
import './AddRestaurant.css'

import { addRestaurant } from '../../actions/dataManagementActions'
import { connect } from 'react-redux'

import { YMaps, Map, Placemark } from 'react-yandex-maps';
import uuid from 'react-uuid';

const AddRestaurant = (props) => {

   

    const ymap = useRef(null)

    const [cords, setCords] = useState([40.17761177565706, 44.51255285696921])
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

   const placeMark = {
        // The geometry description.
        geometry: {
            type: "Point",
            coordinates: [...cords]
         },
        options: {
            draggable: true,
            pane: "places",
            openBalloonOnClick: true,
            openEmptyBalloon: true,
        },
        properties: {
            iconCaption: "loading...",
        },
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            cords,
            title,
            desc,
            id: uuid(),
           votes: {}
        }
        props.addRestaurant(data)
    }

    const handleDrag = (e) => {
       const cords = [...e.get('target').geometry.getCoordinates()]
       console.log(ymap.current.ymaps)
       setCords(cords)
    }

    const inputActions = {
        title: setTitle,
        desc: setDesc
    }

    const handleInputChange = (e) => {
        inputActions[e.target.name](e.target.value)
    }

    return (
        <div className="AddRestaurant">
            <p className="pl-5 my-5">Add A Restaurant</p>
            <div className="pl-5 my-5 form-wrapper">   
                <form onSubmit={handleSubmit}>
                    <div className="row mx-0">

                    <div className="pl-5 my-5 col-md-4 form-inputs">   
                        <label htmlFor="title" className="">Title</label>
                        <input id='title' name="title" type="text"  onChange={handleInputChange}/>
                        <label htmlFor="desc" className="">Description</label>
                        <textarea id='desc' name="desc" onChange={handleInputChange}/>
                    </div>
                    <div className="pl-5 my-5 col-md-6">
                    <label className="map-label">Mark your restaurant on map</label>
                    <YMaps ref={ymap}>
                        <Map width="100%" height="60vh"  defaultState={{ center: cords, zoom: 15 }}>
                        <Placemark {...placeMark} onDragEnd={handleDrag}/>
                      
                        </Map>
                     </YMaps>
                    </div>
                    </div>
                    <button className="ml-5 btn btn-primary submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default connect(null, {addRestaurant})(AddRestaurant)
