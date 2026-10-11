import "./Navbar.scss"
import linkedin from "../../assets/svg/LinkedIn.svg"
import twitter from "../../assets/svg/Twitter.svg"
import telegram from "../../assets/svg/Telegram.svg"
import instagram from "../../assets/svg/Instagram.svg"
import github from "../../assets/svg/GitHub.svg"

const Navbar = () => {
  return (
    <>
    <header className={"navbar"}>
      <div className={"navbar-links"}>
        <a className={"navbar-link"} href="#home">Home</a>
        <a className={"navbar-link"} href="#achievements">Achievements</a>
        <a className={"navbar-link"} href="#">Testimonials</a>
        <a className={"navbar-link"} href="#">Recent work</a>
        <a className={"navbar-link"} href="#">Get In Touch</a>
      </div>
      <div className={"navbar-menu"}>
<a className={"navbar-menu-link"} href="https://kun.uz" target="_blank" rel="noreferrer">
  <img src={linkedin} alt="LinkedIn" />
</a>
<a className={"navbar-menu-link"} href="#">
  <img src={twitter} alt="Twitter" />
</a>
<a className={"navbar-menu-link"} href="https://t.me/kmvm007" target="_blank" rel="noreferrer">
  <img src={telegram} alt="Telegram" />
</a>
<a className={"navbar-menu-link"} href="https://instagram.com/kayumovv.m" target="_blank" rel="noreferrer">
  <img src={instagram} alt="Instagram" />
</a>
<a className={"navbar-menu-link"} href="https://github.com/kayumov-dev" target="_blank" rel="noreferrer">
  <img src={github} alt="GitHub" />
</a>
      </div>
    </header>

    
    </>
    
    
  )
}

export default Navbar
