import "./Brands.scss"
import clickup from "../../assets/svg/clickup.svg"
import satashkent from "../../assets/svg/satashkent.svg"
// import satashkent from "../../assets/svg/"

const brands = [
    // {name: "Nits", logo: ""},
    {name: "SaTashkent", logo: satashkent},
    {name: "ClickUp", logo: clickup},
]


const Brands = () => {
  return (
    <div className={"brands"}>
      <p className={"brands-title"}>Worked and studies</p>
      <div className={"brands-list"}>
{brands.map((b) =>(
    <div key={b.name} className={"brands-item"}>
<img src={b.logo} alt={b.name} />
    </div>
))}
      </div>
    </div>
  )
}

export default Brands
