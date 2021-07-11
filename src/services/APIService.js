import axios from 'axios'

export default class APIService  {

    _APIUrlBase = 'https://restaurants-guide-fa4bd-default-rtdb.europe-west1.firebasedatabase.app/'

    async getData () { 
        const res = await axios.get(`${this._APIUrlBase}.json`)
        .catch(error => {
                console.log(error)
        })    
          
        return res.data            
        }
               

    async sendData (data) {  
         await axios.post(`${this._APIUrlBase}.json`, data)
        .catch(error => {
            console.log(error)
            })
    }

    async updateData (data, key) {  
        await axios.post(`${this._APIUrlBase}${key}/votes/.json`, data)
       .catch(error => {
           console.log(error)
           })
   }
}


