import { useEffect, useState } from "react"
import "./Interests.scss"


import football from "../../assets/img/football.jpg"
import tennis from "../../assets/img/tabletennis.jpg"


type Interest = {
  id: number
  title: string
  year: string
  kind: "photo" | "video"   
  proofLabel: string        
  image: string             
  videoUrl: string          
  statLabel: string
  statValue: string
  text: string
  learned: string
}

const interests: Interest[] = [
  {
    id: 1,
    title: "Football",
    year: "2025",
    kind: "photo",
    proofLabel: "Photo",
    image: football,              
    videoUrl: "",
    statLabel: "Result",
    statValue: "1st place",
    text: "I won a football tournament at [company name].",
    learned: "Taught me the power of seamless teamwork, strategic coordination, and staying resilient under pressure to achieve a common goal.",
  },
  // {
  //   id: 2,
  //   title: "Dota 2",
  //   year: "[Year]",
  //   kind: "photo",
  //   proofLabel: "Screenshot",
  //   image: "",              // dota
  //   videoUrl: "",
  //   statLabel: "Rating",
  //   statValue: "Ancient",
  //   text: "I play Dota 2 and can show my rating.",
  //   learned: "[One sentence, for example about quick decisions.]",
  // },
  // {
  //   id: 3,
  //   title: "Guitar",
  //   year: "",
  //   kind: "video",
  //   proofLabel: "Video",
  //   image: "",              // guitar (muqova, ixtiyoriy)
  //   videoUrl: "",           // YouTube havolasi, masalan "https://youtu.be/XXXX"
  //   statLabel: "Playing since",
  //   statValue: "2021",
  //   text: "",
  //   learned: "[One sentence, for example about practice and patience.]",
  // },
  {
    id: 2,
    title: "Table tennis",
    year: "[Year]",
    kind: "photo",
    proofLabel: "Photo",
    image: tennis,              
    videoUrl: "",
    statLabel: "Result",
    statValue: "won 3 out of 4 games",
    text: "I played in a table tennis tournament among IT Park residents in Uzbekistan.",
    learned: "Taught me the importance of split-second decision-making, sharp focus, and maintaining mental agility during fast-paced challenges.",
  },
]

const Interests = () => {
  const [openImage, setOpenImage] = useState<string | null>(null)

  useEffect(() => {
    if (!openImage) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenImage(null)
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [openImage])

  return (
    <section className={"interests"} id="interests">
      <h2 className={"interests-title"}>Interests</h2>
      <p className={"interests-text"}>
        What I do outside of code: games, sports and music, each with a photo, video or result to back it up.
      </p>

      <div className={"interests-list"}>
        {interests.map((item) => (
          <article key={item.id} className={"interests-card"}>
            {item.kind === "video" ? (
              <a
                className={"interests-media"}
                href={item.videoUrl || undefined}
                target="_blank"
                rel="noreferrer"
                aria-label={`Watch ${item.title} video`}
              >
                {item.image && <img src={item.image} alt="" loading="lazy" />}
                <span className={"interests-pill"}>{item.proofLabel}</span>
                <svg className={"interests-play"} viewBox="0 0 64 64" aria-hidden="true">
                  <circle cx="32" cy="32" r="31" fill="#070707" fillOpacity="0.75" stroke="#62ba1b" strokeWidth="2" />
                  <path d="M26 20 46 32 26 44Z" fill="#fff" />
                </svg>
              </a>
            ) : (
              <button
                type="button"
                className={"interests-media"}
                onClick={() => {
                  if (item.image) setOpenImage(item.image)
                }}
                aria-label={`Enlarge ${item.title} ${item.proofLabel.toLowerCase()}`}
              >
                {item.image ? (
                  <img src={item.image} alt={`${item.title}: ${item.proofLabel}`} loading="lazy" />
                ) : (
                  <span className={"interests-empty"}>[Add your {item.proofLabel.toLowerCase()}]</span>
                )}
                <span className={"interests-pill"}>{item.proofLabel}</span>
              </button>
            )}

            <div className={"interests-body"}>
              <div className={"interests-top"}>
                <h3>{item.title}</h3>
                {item.year && <span>{item.year}</span>}
              </div>

              <div className={"interests-stat"}>
                <span>{item.statLabel}</span>
                <strong>{item.statValue}</strong>
              </div>

              <p>{item.text}</p>

              <div className={"interests-learn"}>
                <span>What it taught me</span>
                <span>{item.learned}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {openImage && (
        <div
          className={"interests-lightbox"}
          onClick={() => setOpenImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo"
        >
          <button
            type="button"
            className={"interests-close"}
            onClick={() => setOpenImage(null)}
            aria-label="Close"
          >
            ×
          </button>
          <img src={openImage} alt="" />
        </div>
      )}
    </section>
  )
}

export default Interests