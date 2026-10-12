import { useEffect, useRef, useState } from "react"
import "./Navbar.scss"
import linkedin from "../../assets/svg/LinkedIn.svg"
import twitter from "../../assets/svg/Twitter.svg"
import telegram from "../../assets/svg/Telegram.svg"
import instagram from "../../assets/svg/Instagram.svg"
import github from "../../assets/svg/GitHub.svg"

const links = [
  { label: "Home", href: "#home" },
  { label: "Achievements", href: "#achievements" },
  { label: "Interests", href: "#" },
  { label: "Get In Touch", href: "#" },
]

const socials = [
  { name: "LinkedIn", icon: linkedin, href: "https://kun.uz" },
  { name: "Twitter", icon: twitter, href: "#" },
  { name: "Telegram", icon: telegram, href: "https://t.me/kmvm007" },
  { name: "Instagram", icon: instagram, href: "https://instagram.com/kayumovv.m" },
  { name: "GitHub", icon: github, href: "https://github.com/kayumov-dev" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)   
  const ref = useRef<HTMLElement>(null)     
  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    const onOutside = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }

    document.addEventListener("keydown", onKey)
    document.addEventListener("pointerdown", onOutside)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("pointerdown", onOutside)
    }
  }, [open])

  return (
    <header className={"navbar"} ref={ref}>
      <button
        type="button"
        className={`navbar-burger ${open ? "navbar-burger-open" : ""}`}
        aria-label="Menu"
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        id="nav-links"
        className={`navbar-links ${open ? "navbar-links-open" : ""}`}
        aria-label="Main"
      >
        {links.map((l) => (
          <a key={l.label} className={"navbar-link"} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
      </nav>

      <div className={"navbar-menu"}>
        {socials.map((s) => {
          const external = s.href.startsWith("http")
          return (
            <a
              key={s.name}
              className={"navbar-menu-link"}
              href={s.href}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <img src={s.icon} alt={s.name} />
            </a>
          )
        })}
      </div>
    </header>
  )
}

export default Navbar