import {Link, Redirect } from '@reach/router'
import React , { useContext, useState } from 'react';
import { UserContext } from '../providers/UserProvider'
import '../css/booking.css'
import {db,auth} from '../firebase/fire'

 const Booking = (props) => {
        const [address, setAddress] = useState("");
        const [phone, setPhone] = useState("");
        const [numberOfSeats, setNumberOfSeats] = useState(1);
        const [checkIn, setCheckIn] = useState('');
        const [checkOut, setCheckOut] = useState('');
        const busData = props.location.state.busData;
        console.log(busData);
        const user = useContext(UserContext);

 
     const   handleChange = (event) => {
            const {name , value } = event.currentTarget;
             if(name === "address")
                setAddress(value)
            else if(name === "phone")
               setPhone(value)
            else if(name === "numberOfSeats")
               setNumberOfSeats(value)
            else if(name === "checkIn") 
               setCheckIn(value)
            else if(name === "checkOut")
               setCheckOut(value)
        }

        const    handleSubmit = (e) => {
            e.preventDefault()
              const  bookObject = {}

              let data ={
                  name:busData.busName,
                  ticket_price:busData.busPrice,
                  available_seats:busData.availableSeats,
                  seats_you_booked:numberOfSeats,
                  checkIn:checkIn,
                  checkOut:checkOut,
                  phone:phone
              }

              bookObject[busData.busId] = data;
              console.log(bookObject)

                 auth.onAuthStateChanged((usr)=>{
                     if(usr)
                     {
                        db.ref('Customers').child(usr.uid).child('My_Bookings').
                         update(bookObject).then(()=>{
                            window.location.href="https://flutter-firebase-learnin-f2cae.web.app/"
                         })
                     }
                 })
            }

        

        console.log(user)
        return(



            (user && busData) ? (<>
             <div id="booking" className="section">
            <div className="section-center">
                <div className="container">
                    <div className="row">
                        <div className="booking-form">
                            <div className="form-header">
                                <h1>Make your reservation</h1>
                            </div>
                            <form>
                                <div className="form-group"> <input value={address} name="address" className="form-control" type="text" placeholder="Country, ZIP, city..." onChange={(event)=>{handleChange(event)}} /> <span className="form-label">Destination</span> </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group"> <input name="checkIn" value={checkIn} className="form-control" type="date" required onChange={(event)=>{handleChange(event)}}/> <span className="form-label">Check In</span> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group"> <input name="checkOut" value={checkOut} className="form-control" type="date" required onChange={(event)=>{handleChange(event)}} /> <span className="form-label">Check out</span> </div>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-md-12">
        <div className="form-group"> <input name="email" className="form-control" readOnly type="email" placeholder="Enter your Email" value={(user.data) ? user.data.email : "Loading email.."} /> <span className="form-label">Email</span> </div>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-md-6">
                                        <div className="form-group"> <select name="numberOfSeats" className="form-control" required onChange={(event)=>{handleChange(event)}} >
                                                <option value={numberOfSeats}  hidden>no of seats</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                            </select> <span className="select-arrow"></span> <span className="form-label">Rooms</span> </div>
                                    </div>
                                    
                                    <div className="col-md-6">
                                        <div className="form-group"> <input name="phone" value={phone} className="form-control" type="tel" placeholder="Enter your Phone Number" onChange={(event)=>{handleChange(event)}} /> <span className="form-label">Phone</span> </div>
                                    </div>
                                </div>
                                <div className="form-btn"> <button className="submit-btn" onClick={handleSubmit}>Book Now</button> </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </>):(<div><h4>Loading....</h4></div>)
        );
   
}

export default Booking