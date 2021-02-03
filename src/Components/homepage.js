import React from 'react';
import '../css/home.css';
import Header from './Header';
import RoutesList from './RoutesList';

function Home(){
    
    return (
        <>
        <Header home="active"/>
        <section>
        <div className="bus" />
       <RoutesList />
      </section>
      </>
    );

}
export default Home