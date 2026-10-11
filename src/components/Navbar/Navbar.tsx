import "./Navbar.scss"
import linkedin from "../../assets/svg/LinkedIn.svg"
import behance from "../../assets/svg/Behance.svg"
import twitter from "../../assets/svg/Twitter.svg"
// import photo from "../../assets/img/myportret.jpg"

const Navbar = () => {
  return (
    <>
    <div className={"navbar"}>
      <div className={"navbar-links"}>
        <a className={"navbar-link"} href="#">Home</a>
        <a className={"navbar-link"} href="#">Case Studies</a>
        <a className={"navbar-link"} href="#">Testimonials</a>
        <a className={"navbar-link"} href="#">Recent work</a>
        <a className={"navbar-link"} href="#">Get In Touch</a>
      </div>
      <div className={"navbar-menu"}>
<a className={"navbar-menu-link"} href="https://kun.uz" target="_blank" rel="noreferrer">
  <img src={linkedin} alt="LinkedIn" />
</a>
<a className={"navbar-menu-link"} href="#">
  <img src={behance} alt="Behance" />
</a>
<a className={"navbar-menu-link"} href="#">
  <img src={twitter} alt="Twitter" />
</a>
      </div>
    </div>

    
    </>
    
    
  )
}

export default Navbar
