import React from 'react' 
 
const CARD_1 = () => {
return ( 

   <div class="card">
  <div class="card-image"  ></div>
  <div class="card-text">
    <span class="date">1 days ago</span>
    <h2>Post One</h2>
    <p>beautiful House on the coast that will make you feel like your in a movie. </p>
  </div>
  <div class="card-stats">
    <div class="stat">
      <div class="value">2<sup>m</sup></div>
      <div class="type">read</div>
    </div>
    <div class="stat border">
      <div class="value">512</div>
      <div class="type">views</div>
    </div>
    <div class="stat">
      <div class="value">23</div>
      <div class="type">comments</div>
    </div>
  </div>
</div>
)
}
export default CARD_1;