"use client"
import { useEffect, useState } from "react"

function Data() {
    const [text, setText] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const url = await fetch("https://freetestapi.com/api/v1/destinations")
            const urldata = await url.json()
            console.log(urldata)
            setText(urldata)
        }
        fetchData();
    }, [])
    return (
        <div className="container">
            <div className="row">
                {
                    text.map((e) => (
                        <div className="col-md-3" key={e.id}>
                            <div className="card mb-4">
                                <img className="card-img-top" src={e.image} alt={e.name} />
                                <div className="card-body text-center">
                                </div>
                            </div>
                            <h5 className="textcolor">{e.name}</h5>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Data;



