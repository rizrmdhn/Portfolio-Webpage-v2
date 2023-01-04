import React from "react";
import "./styles/styles.css";

export default function ExperiencePage({ lists }) {
  return (
    <div className="experience-container animate__animated animate__fadeIn">
      {lists.map((list) => {
        return (
          <div className="experience-card card mb-3" key={list.id}>
            <div className="card-header">
              <p className="year">{list.year}</p>
              <p className="month">{list.month}</p>
            </div>
            <div className="card-body">
              <h5 className="card-title">{list.title}</h5>
              <p className="card-text">{list.desc}</p>
            </div>
            <div className="card-footer">{list.place}</div>
          </div>
        );
      })}
    </div>
  );
}
