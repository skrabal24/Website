import './StatCard.css'

export default function StatCard({ icon: Icon, value, label }) {
  return (
    <div className="stat-card">
      {Icon && <Icon size={20} className="stat-card__icon" />}
      <span className="stat-card__value">{value}</span>
      <span className="stat-card__label">{label}</span>
    </div>
  )
}
