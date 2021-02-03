import React from 'react'
import Search from './Search'
import BusesList from './BusesList'


class RoutesList extends React.Component {

   constructor(props)
   {
       super(props)
       this.state = {
           from:'',
           to:'',
           toRoutes:[],
           fromRoutes:[],
       }
   }
   
     searchFromRoutes = (resFromRoutes) => {
         this.setState({
             fromRoutes:resFromRoutes
         })
     }


     searchToRoutes = (resToRoutes) => {
         this.setState({
             toRoutes:resToRoutes
         })
     }

        

    
   render()
   {

        const fromRoutesList = (this.state.fromRoutes) && this.state.fromRoutes.map(route => {
                return (
                <div id={`fromRoutes${route.from+route.to}`}>
                <p className="text-light">{route.from} To {route.to}</p>
                <div className="row">
                 <div className="col-12">
                 <BusesList buses={route.Buses} key={`route${route.from+route.to}`} childKey={`ul${route.from+route.to}`}/>
                 </div>
                </div>
                </div>
                )
           })


           const toRoutesList = (this.state.toRoutes) && this.state.toRoutes.map(route => {
                return (
                <div id={`toRoutes${route.from+route.to}`}>
                  <p className="text-light">{route.from} To {route.to}</p>
                <div className="row" id={`rowdiv${route.to+route.from}`}>
                 <div className="col-12">
                 <BusesList from={route.from} to={route.to}  buses={route.Buses} key={`route${route.from+route.to}`} childKey={`ul${route.from+route.to}`}/>
                 </div>
                </div>
                </div>
                )
           })


      console.log(this.state)

       return (  
             <>
              <Search placeholder="From Location" type="from" searchFromRoutes={this.searchFromRoutes}/>
              <Search placeholder="To Location" type="to"  searchToRoutes={this.searchToRoutes}/>  
             <div className="row">
                <div className="col-8 m-auto">
                {this.state.fromRoutes && fromRoutesList}
                {(!this.state.fromRoutes.length) && <div className="alert alert-danger alert-dismissible fade show m-3">
    <button type="button" className="close" data-dismiss="alert">&times;</button>
    <strong>No results found!</strong> sorry no buses are available
  </div>}
                </div>
             
             </div>
             <div className="row">
             <div className="col-8 m-auto">
             {this.state.toRoutes && toRoutesList}
             </div>
             </div>
             
              
             </>
       );
   }
}


export default RoutesList