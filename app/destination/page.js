"use client";
import { useEffect, useState } from "react";
import './destination.css';
import Footer from "../footer/footer";
function Destination() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('');
    const [goingDate, setGoingDate] = useState('');
    const [comingDate, setComingDate] = useState('');
    const [display, setDisplay] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://freetestapi.com/api/v1/destinations");
                const urldata = await response.json();
                setData(urldata);
            } catch (error) {
                console.error("Error fetching data:", error);
                setNotFound(true);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        setFilter(e.target.value);
    };

    const handleGoingDateChange = (e) => {
        setGoingDate(e.target.value);
    };

    const handleComingDateChange = (e) => {
        setComingDate(e.target.value);
    };

    const search = () => {
        const filterData = data.filter(show =>
            show.country.toLowerCase().includes(filter.toLowerCase()) ||
            (show.state && show.state.toLowerCase().includes(filter.toLowerCase()))
        );
        setDisplay(filterData);
        setNotFound(filterData.length === 0);

        setFilter('');
        setGoingDate('');
        setComingDate('');
    };

    const isSearchButtonDisabled = !filter;

    return (
        <>
            <div className="search-container">
                <input
                    className="input"
                    type="text"
                    placeholder="Enter a country or state"
                    value={filter}
                    onChange={handleChange}
                />
                <input
                    className="input"
                    type="date"
                    value={goingDate}
                    onChange={handleGoingDateChange}
                    placeholder="Going Date"
                />
                <input
                    className="input"
                    type="date"
                    value={comingDate}
                    onChange={handleComingDateChange}
                    placeholder="Coming Date"
                />
                <button
                    className="btn bg-primary text-white"
                    onClick={search}
                    disabled={isSearchButtonDisabled}
                >
                    Search
                </button>
            </div>
            {loading ? (
                <div className="loading-container">
                    <div className="spinner"></div>
                </div>
            ) : notFound ? (
                <div className="not-found-container">
                    <h2 className="not-found-message">Country or State Not Found</h2>
                </div>
            ) : (
                <div className="container">
                    {display.length > 0 ? (
                        <div className="row">
                            {display.map((e) => (
                                <div className="col-md-6 mb-4" key={e.id}>
                                    <div className="card destination-card">
                                        <img className="card-img-top square-img" src={e.image} alt={e.name} />
                                        <div className="card-body">
                                            <h5 className="card-title">{e.name}</h5>
                                            <p className="card-text">{e.description}</p>
                                            <p className="card-text"><strong>Country:</strong> {e.country}</p>
                                            {e.state && <p className="card-text"><strong>State:</strong> {e.state}</p>}
                                            <p className="card-text"><strong>Language:</strong> {e.language}</p>
                                            <p className="card-text"><strong>Best Time to Visit:</strong> {e.best_time_to_visit}</p>
                                            <p className="card-text"><strong>Top Attractions:</strong> {e.top_attractions.join(', ')}</p>
                                            <p className="card-text"><strong>Local Dishes:</strong> {e.local_dishes.join(', ')}</p>
                                            <p className="card-text"><strong>Activities:</strong> {e.activities.join(', ')}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <h2 className="text-center">Please enter a country or state name to search for destinations.</h2>
                    )}
                </div>
                

            )}
            <div>
                <Footer/>
            </div>
        </>
    );
}

export default Destination;
