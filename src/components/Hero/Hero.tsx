import "./Hero.scss"
import photo from "../../assets/img/me.jpg"
import arrow from "../../assets/svg/Arrow.svg"
import Brands from "../Brands"


const Hero = () => {
  return (
    <div className={"hero"}>
<div className={"hero-main"}>
<div className={"hero-content"}>
  <h1 className={"hero-title"}>Kayumov Mirislom</h1>
  <p className={"hero-text"}>Here you can know everything about me. For instance: certificates, achievements, and activities. I would love for you to know everything about me.</p>
  <a href="#" className={"hero-btn"}>Get to Know
    <img src={arrow} alt="" />
  </a>
</div>
<div className={"hero-photo"}>
  <img className={"hero-photo-img"} src={photo} alt="My portret" />
</div>
</div>
<Brands/>
    </div>
  )
}

export default Hero
