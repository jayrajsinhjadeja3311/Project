import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";

function Totalbooking() {
    const [data, setData] = useState([])
    // const { id } = useParams();
    // const navigate = useNavigate();
    useEffect(() => {
        const apiUrl = 'http://localhost:3000/customer';
        fetch(apiUrl).then(res => res.json()).then(res => setData(res));
    }, []);
    const foramtedFaculties = data.map((cus) => {
        return (<tr>
            <td>{cus.cusid}</td>
            <td>{cus.customername}</td>
            <td>{cus.age}</td>
            <td>{cus.checkindate}</td>
            <td>{cus.checkoutdate}</td>
            <td>{cus.roomtype}</td>
            <td><Link className="btn btn-info" to={"/booking/" + cus.cusid}>Read More</Link></td>
            <td><Link className="btn btn-warning" to={"/booking/edit/" + cus.cusid}>Edit</Link></td>
        </tr>
        );
    });
    return (
        <>
            <table className="table">
                <th>Customer id</th>
                <th>Customer Name</th>
                <th>Age</th>
                <th>Check in date</th>
                <th>Check out date</th>
                <th>Room type</th>
                {foramtedFaculties}
                <Link to="/newbooking" className="btn btn-primary">Add customer</Link>
            </table>
        </>
    )
}

export default Totalbooking