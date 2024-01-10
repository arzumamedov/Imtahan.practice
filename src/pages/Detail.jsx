import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
    let { id } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:7000/' + id)
            .then((res) => res.json())
            .then((api) => {
                setProduct(api)
            })

    }, [id])

    return (
        <div>
            <h1>SALAMD</h1>
            {product.description}
        </div>
    )
}

export default Detail