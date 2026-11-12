import axios from "axios"
import { useEffect, useState } from "react"


const PostProduct = async() => {
    
    const[data, setData] = useState({result})
    const response = axios.get("https://discussions-louis-bradley-blue.trycloudflare.com/api/products")
    const product = (await response).data;
    setData(product);

    return()
}

export default function Post(props){

}