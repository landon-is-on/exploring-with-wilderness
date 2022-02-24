import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
  	 <div className="foot-container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="home">about us</a></li>
  	 				<li><a href="services">our services</a></li>
  	 				<li><a href="home">privacy policy</a></li>
  	 				<li><a href="home">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="home">FAQ</a></li>
  	 				<li><a href="home">Internal travel</a></li>
  	 				<li><a href="home">Careers</a></li>
  	 				<li><a href="home">Things to do</a></li>
  	 				<li><a href="sign-up">Account</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>services</h4>
  	 			<ul>
  	 				<li><a href="home">Booking</a></li>
  	 				<li><a href="home">Tour guild</a></li>
  	 				<li><a href="home">Cancellaction</a></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="home" onClick={()=> window.open("https://www.facebook.com/adventure/", "_blank")}><i class="fab fa-facebook-f"></i></a>
  	 				<a href="home" onClick={()=> window.open("https://twitter.com/hashtag/adventure", "_blank")}><i class="fab fa-twitter"></i></a>
  	 				<a href="home" onClick={()=> window.open("https://www.instagram.com/adventure/?hl=en", "_blank")}><i class="fab fa-instagram"></i></a>
  	 				<a href="home" onClick={()=> window.open("https://www.linkedin.com/in/landon-smothers-a11767202/", "_blank")}><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  );
}

export default Footer;