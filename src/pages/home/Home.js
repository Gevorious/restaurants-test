import React, {useEffect} from 'react'
import "./Home.css"

import { fetchRestaurants } from '../../redux/restaurantSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {    
    const dispatch = useDispatch()
    const restaurants = useSelector((state)=> state.restaurants)
    useEffect(() => {
        dispatch(fetchRestaurants())
    }, [dispatch])
    
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
        <h1>Restaurants</h1>
           <ul className="restaurants-list list-group pt-5">
            {
                data?.map((item)=>(
                    <li  key={item.data.id} className="restaurants-list-item list-group-item p-0">
                        <Link to={{pathname: `/home:${item.data.id}`, state: item}}>
                        <div className="row mx-0 justify-content-between">
                            <div className="col-md-10">
                        <h3 className="py-1 px-3">{item.data.title}</h3>
                        <p className="ml-3 py-1 px-4">{item.data.desc}</p>
                            </div>
                            <div className="rating col-md-1">
                            {getRating(item.data.votes) ? <span> {getRating(item.data.votes)} </span> : "no votes"}
                            </div>
                        </div>
                        </Link>
                    </li>
                ))
            }
            </ul> 
            <div className="mt-4 mb-5">
            <Link to="/admin">Add a Reastaurant</Link>
            </div>
        </div>
    )
}

export default Home
