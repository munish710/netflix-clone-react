import axios from "axios"

//set up the base url for all our requests.
const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3"
})

export default instance