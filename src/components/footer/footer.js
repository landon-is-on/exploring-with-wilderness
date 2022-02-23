import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Internal travel</a></li>
  	 				<li><a href="#">Careers</a></li>
  	 				<li><a href="#">Things to do</a></li>
  	 				<li><a href="#">Account</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>services</h4>
  	 			<ul>
  	 				<li><a href="#">Booking</a></li>
  	 				<li><a href="#">Tour guild</a></li>
  	 				<li><a href="#">Cancellaction</a></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a onClick={()=> window.open("https://www.facebook.com/adventure/", "_blank")}><i class="fab fa-facebook-f"></i></a>
  	 				<a onClick={()=> window.open("https://twitter.com/hashtag/adventure", "_blank")}><i class="fab fa-twitter"></i></a>
  	 				<a onClick={()=> window.open("https://www.instagram.com/adventure/?hl=en", "_blank")}><i class="fab fa-instagram"></i></a>
  	 				<a onClick={()=> window.open("https://www.linkedin.com/in/landon-smothers-a11767202/", "_blank")}><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  );
}

export default Footer;