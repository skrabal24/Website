import './SectionBadge.css'

export default function SectionBadge({ icon: Icon, text }) {
  return (
    <div className="section-badge">
      {Icon && <Icon size={14} />}
      <span>{text}</span>
    </div>
  )
}
