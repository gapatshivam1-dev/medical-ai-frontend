function HealthCard({ icon, title, value, unit, status, statusClass }) {
  return (
    <div className="health-card">
      <div className="health-card-top">
        <div className="health-icon">
          {icon}
        </div>

        <span className={`status ${statusClass}`}>
          {status}
        </span>
      </div>

      <p>{title}</p>

      <div className="health-value">
        {value}
        <small>{unit}</small>
      </div>
    </div>
  );
}

export default HealthCard;