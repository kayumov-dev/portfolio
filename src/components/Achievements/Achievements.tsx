import { useState } from "react"
import "./Achievements.scss"


const filters = [
  {label: "All", value: "All"},
  {label: "Awards", value: "Award"},
  {label: "Tests", value: "Test"},
  {label: "Certificates", value: "Certificate"},
  {label: "Activities", value: "Activity"}
]

const achievements = [
  {id: 1, type: "Award", year: "[Year]", title: "[Olympiad or competition]", text: "[Result]", image: "", link: "#", linkText: "View certificate" },
  {id: 2, type: "Test", year: "[Year]", title: "[SAT or IELTS result]", text: "[Score and date.]", image: "", link: "#", linkText: "View score report" },
  {id: 3, type: "Certificate", year: "[Year]", title: "[Course name]", text: "[What you learned.]", image: "", link: "#", linkText: "View certificate" },
  {id: 4, type: "Activity", year: "[Year]", title: "[Club or volunteering]", text: "[Your role.]", image: "", link: "#", linkText: "Read more" },
]

const Achievements = () => {
const [active, setActive] = useState("All")

const shown = active === "All" ? achievements : achievements.filter((a) => a.type === active)

  return (
    <section className={"achievements"} id="achievements">
      <div className={"achievements-content"}>
<h1 className={"achievements-title"}>Achievements</h1>
<p className={"achievements-text"}>Awards, test scores, certificates and activities, added as they happen.</p>
<div className={"achievements-filters"}>
{filters.map ((f) => (
  <button
  key={f.value}
  type="button"
  className={`achievements-filter ${active === f.value ? "achievements-filter-active" : ""}`}
  aria-pressed={active === f.value}
  onClick={() => setActive(f.value)}
  >
  {f.label}
  </button>
))}
</div>
      </div>
      <div className={"achievements-list"}>
{shown.map((a) => (
  <div className={"achievements-card"}>
<div className={"achievements-shot"}>
{a.image && <img src={a.image} alt={a.title} />}
<span className={"achievements-tag"}>{a.type}</span>
</div>
<div className={"achievements-body"}>
<p className={"achievements-year"}>{a.year}</p>
<h3>{a.title}</h3>
<p>{a.text}</p>
<a className={"achievements-more"} href={a.link}>
  {a.linkText}
</a>
</div>
  </div>
))}

<div className={"achievements-next"}>
Your next achievement goes here.
</div>
      </div>
    </section>
  )
}

export default Achievements
