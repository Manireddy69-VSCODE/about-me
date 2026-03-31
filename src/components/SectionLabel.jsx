export default function SectionLabel({ number, label }) {
  return (
    <div className="section-label reveal">
      <span>{number}</span> {label}
    </div>
  )
}
