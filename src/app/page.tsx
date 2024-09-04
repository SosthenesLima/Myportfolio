import Image from "next/image";


export default function Home() {
  return (
    <main>
      <div className="head">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
        <div>
          <h1>Hi, i'm Sósthenes!</h1>
          <h2>software Engenieer</h2>
        </div>
      </div>
      <div className="experience">
        <h3>Experience</h3>
        <p>texto</p>
        <div className="experience-time">

        </div>
        <div className="infos">
          <h3>Languagens</h3>
          <div className="Languages-info">
          <span>🇺🇸 EN - Fluent </span>
          <span>🇧🇷 PT-BR - Native Speaker</span>
          </div>
          <h3>Education</h3>
          <div className="educations-info"></div>
          <span>🎓</span>
          <span></span>
        </div>
      </div>
    </main>
  )
}
