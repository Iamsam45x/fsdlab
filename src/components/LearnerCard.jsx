function LearnerCard(props) {
  return (
    <div className="card learner-card h-100">
      <div className="card-body">
        <h3 className="card-title h5">{props.name}</h3>
        <p className="card-text mt-3">
          <strong>Role:</strong> {props.role}
        </p>
        <p className="card-text">
          <strong>Skill:</strong> {props.skill}
        </p>
        <p className="card-text">
          <strong>Status:</strong>{" "}
          {props.active ? (
            <>
              <span className="badge bg-success">Active</span>
              <span className="ms-2">Learning React</span>
            </>
          ) : (
            <>
              <span className="badge bg-secondary">Inactive</span>
              <span className="ms-2">Taking a break</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default LearnerCard;
