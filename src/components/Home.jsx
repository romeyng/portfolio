import React from 'react';
import banner from '../images/banner.jpg'
const Home = (props) => {
    return ( 
        <>
               <section class="section">
            <div className="container">
  <h1 class="title">Magical!</h1>
  <h2 class="subtitle">
        Using the magic of code!
  </h2>


            </div>
</section>
        <section class="section">
  <div class="container">
  
  <img src={banner} alt="Cards"/>

  </div>
</section>
<section class="section">
            <div className="container">
  <h1 class="title">Magical!</h1>
  <h2 class="subtitle">
        Using the magic of code!
  </h2>


            </div>
</section>
 
        </>

    );
}
 
export default Home;