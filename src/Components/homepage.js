import React from 'react';
import '../css/home.css';
import Search from './Search';
import Header from './Header';

function Home(){

    return (
        <>
        <Header />
        <section>
        <div className="bus">
        </div>
       <Search placeholder="From Location" />
       <Search placeholder="To Location" />
      </section>
      </>
    );

}
export default Home