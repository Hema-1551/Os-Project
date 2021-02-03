import React from 'react'
import { Link } from '@reach/router'
class BusesList extends React.Component {

     constructor(props){
         super(props)
         this.state = {
             buses : this.props.buses,
             from : this.props.from,
             to: this.props.to,
         }
     }

     render (){
              console.log(this.props.buses,"from busesList");
              console.log(this.props.to,this.props.from,'from rebeca')
             const busesArray = [];
              (this.props.buses) && Object.keys(this.state.buses).forEach(key=>{
                           busesArray.push(this.props.buses[key])
              })
              console.log(busesArray)
                  const busesList = busesArray && busesArray.map(bus=>{
                    return (
                        <li key={bus.id} className="list-group-item ">
                          <div className="card">
                             <div className="card-body">
                                   <h4 className="card-title text-success">{bus.busName}</h4>
                                   <p className="card-text">Available Seats: {bus.available_seats}</p>
                                   <p className="card-text">ticket price: Rs.{bus.ticket_price}</p>
                                   <Link to="/booking" state={{busData:{busId:bus.id,busPrice:bus.ticket_price,busName:bus.busName,availableSeats:bus.available_seats,from:this.state.from,to:this.state.to}}} className="card-link text-warning">reserve now</Link>
                                   </div>
                            </div>
                        </li>
                        );
                  })

        return (

            <ul className="list-group" key={this.props.childKey}>
                {this.state.buses && busesList }
            </ul>
        );
     }
     
}
export default BusesList