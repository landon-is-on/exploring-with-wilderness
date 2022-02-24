import React from 'react';
import'./pages-css/about.css';
const About = () => {
  return (
   <div> 
	<title>About Us Section</title>
<body>
	<div className="section">
		<div className="container">
			<div className="content-section">
				<div className="title">
					<h1>About Us</h1>
				</div>
				<div className="content">
					<h3>From humble beginnings to being your favorite travel booker. </h3>
					<p>Our founder Landon Smothers started in a small town booking local neighbors. to tap into his full potential at the age of 25. With one goal in mind, he set out to make a great website where any customer of any race or ethnicity can come and make their dreams come true.</p>			
				</div>
				<div className="social">
					<a href="https://www.facebook.com/adventure/"><i class="fab fa-facebook-f"></i></a>
					<a href="https://twitter.com/hashtag/adventure"><i class="fab fa-twitter"></i></a>
					<a href="https://www.instagram.com/adventure/?hl=en"><i class="fab fa-instagram"></i></a>
				</div>
			</div>
		</div>
	</div>
</body>   
   </div>
  );
};

export default About;