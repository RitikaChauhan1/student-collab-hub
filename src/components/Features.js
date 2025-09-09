import React from "react";
import "./Features.css";

function Features() {
  return (
    <section id="features" className="features">
      <h2>Our Features</h2>
      <div className="feature-list">
        <div className="feature-card">💬 Group Discussions</div>
        <div className="feature-card">📚 Resource Sharing</div>
        <div className="feature-card">🤝 Team Projects</div>
        <div className="feature-card">📅 Event Planning</div>
      </div>
    </section>
  );
}

export default Features;
