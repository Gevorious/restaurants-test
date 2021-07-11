import React, {useState, useEffect} from 'react'
import "./Home.css"

import APIService from '../../services/APIService'
import { Link } from 'react-router-dom'

const Home = () => {
    const [data, setData] = useState(null)

    const services = new APIService()

    useEffect(() => {
        services.getData().then(data => {
            setData(transformData(data))
        })
    }, [])

   const transformData = data => {
        const dataARR = []
        if(data) { 
            for(let key in data){
                dataARR.push({data: data[key], key })
                }
        }
      return dataARR
    }

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
                    <li className="restaurants-list-item list-group-item p-0" key={item.data.id}>
                        <Link to={{pathname: `/home:${item.data.id}`, state: item}}>
                        <div className="row mx-0 justify-content-between">
                            <div className="col-md-10">
                        <h3 className="py-1 px-3">{item.data.title}</h3>
                        <p className="ml-3 py-1 px-4">{item.data.desc}</p>
                            </div>
                            <div className="rating col-md-1">
                                <span>{getRating(item.data.votes) ? getRating(item.data.votes) : "no votes"}</span>
                            </div>
                        </div>
                        </Link>
                    </li>
                ))
            }
            </ul> 
            <div className="mt-4">
            <Link to="/admin">Add a Reastaurant</Link>
            </div>
        </div>
    )
}

export default Home
