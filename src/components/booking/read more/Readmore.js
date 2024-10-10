import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Readmore() {
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const apiUrl = "http://localhost:3000/customer/" + id;
        fetch(apiUrl, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, [id]);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Customer Details</h2>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>Customer ID</th>
                        <td>{data.cusid}</td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>{data.customername}</td>
                    </tr>
                    <tr>
                        <th>Age</th>
                        <td>{data.age}</td>
                    </tr>
                    <tr>
                        <th>Check-In Date</th>
                        <td>{data.checkindate}</td>
                    </tr>
                    <tr>
                        <th>Check-Out Date</th>
                        <td>{data.checkoutdate}</td>
                    </tr>
                    <tr>
                        <th>Room Type</th>
                        <td>{data.roomtype}</td>
                    </tr>
                </tbody>
            </table>
            <div className="d-flex justify-content-center mt-4">
                <Link className="btn btn-secondary mr-3" to="/booking/totalbooking">
                    Back
                </Link>
                <button
                    onClick={() => {
                        const apiUrl = "http://localhost:3000/customer/" + id;
                        fetch(apiUrl, { method: "DELETE" })
                            .then(res => res.json())
                            .then(() => {
                                navigate('/totalbooking');
                            });
                    }}
                    className="btn btn-danger"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Readmore