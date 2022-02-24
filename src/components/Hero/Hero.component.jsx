import '../Hero/Hero.styles.css';
const Hero = () => {
return ( 
    <div className="hero-container">
        <div  className="hero-card"> 
            <h1  className="hero-p">Find amazing things to do.<br/>Anytime, anywhere</h1>
            <button className="hero-button" onClick={()=> window.open("https://www.viator.com/?eap=adirnxenXX-subbrand-72464&aid=vba72464en", "_blank")}>explore</button>
        </div>
    </div>
    )
}
export default Hero;

