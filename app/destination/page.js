"use client"
import { useEffect, useState } from "react"

function Detination() {
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
            show.name.toLowerCase().includes(filter.toLowerCase())
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
                            <div className="col-md-6 mb-4" key={e.id}>
                                <div className="card mb-4 destination-card">
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <img className="card-img" src={e.image} alt={e.name} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{e.name}</h5>
                                                <p className="card-text">{e.description}</p>
                                                <p className="card-text"><strong>Country:</strong> {e.country}</p>
                                                <p className="card-text"><strong>Continent:</strong> {e.continent}</p>
                                                <p className="card-text"><strong>Population:</strong> {e.population}</p>
                                                <p className="card-text"><strong>Currency:</strong> {e.currency}</p>
                                                <p className="card-text"><strong>Language:</strong> {e.language}</p>
                                                <p className="card-text"><strong>Best Time to Visit:</strong> {e.best_time_to_visit}</p>
                                                <p className="card-text"><strong>Top Attractions:</strong> {e.top_attractions.join(', ')}</p>
                                                <p className="card-text"><strong>Local Dishes:</strong> {e.local_dishes.join(', ')}</p>
                                                <p className="card-text"><strong>Activities:</strong> {e.activities.join(', ')}</p>
                                            </div>
                                        </div>
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

export default Detination;
