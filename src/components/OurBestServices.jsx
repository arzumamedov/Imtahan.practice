import React, { useEffect, useState } from 'react'
import './OurBestServices.scss'
import { Link } from 'react-router-dom'
function OurBestServices() {

    const [data, setData] = useState([])


    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        fetch("http://localhost:7000/")
            .then((res) => res.json())
            .then((api) => setData(api))
    }

    function Delete(id) {
        fetch("http://localhost:7000/" + id, { method: "Delete" })
            .then((res) => res.json())
            .then((api) => {
                getAll()
            })
    }


    return (
        <>
            <div className='services'>
                <div className='servicesTop'>
                    <div className='lineText'>
                        <div className='line'></div>
                        <p>OUR TOP SERVICES</p>
                    </div>
                    <h2>Our Best Services</h2>
                </div>
                <div className='servicesBottom'>

                    {data.map((x) => (
                        <Link to={`/${x._id}`}>
                            <div className='cards'>
                                <i className={x.icon}></i>
                                <div className='name'>{x.name}</div>
                                <div className='description'>{x.description}</div>
                                <button onClick={() => Delete(x._id)}>Delete</button>
                            </div>

                        </Link>
                    ))}




                </div>
            </div>
        </>
    )
}

export default OurBestServices