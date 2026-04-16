import './BackgroundScene.css'

export default function BackgroundScene() {
  return (
    <div className="bg-scene" aria-hidden="true">
      <div className="bg-orb bg-orb--cyan"></div>
      <div className="bg-orb bg-orb--magenta"></div>
      <div className="bg-orb bg-orb--green"></div>
      <div className="bg-scanline-bar"></div>
    </div>
  )
}
