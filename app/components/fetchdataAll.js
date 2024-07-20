"use client"
import { useEffect, useState } from "react"

function Fetchdata() {
    const [deta, setDeta] = useState([])
    const [filter, setFilter] = useState('')
    const [display, setDisplay] = useState([])
    const [notFound, setNotFound] = useState(false) 

    useEffect(() => {
        const fetchData = async () => {
            const url = await fetch("https://freetestapi.com/api/v1/destinations")
            const urldata = await url.json()
            console.log(urldata)
            setDeta(urldata)
            setDisplay(urldata)
        }
        fetchData();
    }, [])

    const handlechnage = (e) => {
        setFilter(e.target.value)
    }

    const Search = () => {
        const filterdata = deta.filter(show =>
            show.country.toLowerCase().includes(filter.toLowerCase())
        )
        setDisplay(filterdata)
        setFilter('') 
        setNotFound(filterdata.length === 0) 
    }

    return (
        <>
            <div className="search-container">
                <input className="input" type="text" placeholder="Enter a country" value={filter} onChange={handlechnage} />
                <button className="btn bg-primary text-white" onClick={Search}>Search</button>
            </div>
            {notFound ? (
                <div className="container not-found-container">
                    <h2 className="text-center not-found-message">Country Not Found</h2>
                </div>
            ) : (
                <div className="container">
                    <div className="row">
                        {display.map((e) => (
                            <div className="col-md-3" key={e.id}>
                                <div className="card mb-4">
                                    <img className="card-img-top" src={e.image} alt={e.name} />
                                    <div className="card-body text-center">
                                        <h5 className="textcolor">{e.name}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Fetchdata;

