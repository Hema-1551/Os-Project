
import { db } from '../firebase/fire'
import { useState } from 'react'

const Search = (props) => {

    const [from, setFrom] = useState("");
    const [To, setTo] = useState("");

    const { type } = props
    
    const onChangeHandler = event => {
      const { name, value } = event.currentTarget;
      if (name === "from") {
        setFrom(value);
      } else if (name === "to") {
        setTo(value);
      }
    };

  const handleSearch = () => {
    //TODO: search from places if type is from 
    // to places
    if(type === "from")
    {
      const res= []
      var ref = db.ref("Routes");
        ref.on('value', routes => {
     routes.forEach(route => {
          if(route.val()[type] === from)
          {
            console.log(route.val())
            res.push(route.val())
          }        
     })
   })
      console.log("search from places")
       props.searchFromRoutes(res)
    }
    else
    {
        const res= []
      var ref = db.ref("Routes");
        ref.on('value', routes => {
     routes.forEach(route => {
          if(route.val()[type] === To)
          {
            console.log(route.val())
            res.push(route.val())
          }
                
     })
   })
        console.log("search to places") 
        props.searchToRoutes(res)
    }
   }  
    return (
        <div className="p-1 bg-light rounded rounded-pill shadow-sm input-control">
            <div className="input-group">
              <input name={type} type="search" placeholder={props.placeholder} aria-describedby="button-addon1" onChange={(event)=>{onChangeHandler(event)}} className="form-control border-0 bg-light"></input>
              <div className="input-group-append">
                <button onClick={handleSearch} id="button-addon1" type="submit" className="btn btn-link text-primary"><i className="fa fa-search"></i></button>
              </div>
            </div>
          </div>
    );
 

}

export default Search