import React from "react";

export default function LoadingCard({ cards }) {
  return (
    <div className="project-container loader animate__animated animate__fadeIn">
      <div className="project-menu">
        <div className="form-floating mb-3">
          <input
            className="form-control skeleton skeleton-text__body"
            readOnly
          />
        </div>
        <div className="accordion accordion-flush">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed skeleton skeleton-text__body"
                type="button"
              ></button>
            </h2>
          </div>
        </div>
      </div>
      <div className="project-card-container">
        {Array(cards)
          .fill(0)
          .map((_, i) => (
            <div className="project-card card mb-3" key={i}>
              <div className="row g-0">
                <div className="card-icon-container col-md-2 skeleton skeleton-img"></div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="project-name card-title skeleton skeleton-text"></h5>
                    <div className="description-container skeleton skeleton-text__body"></div>
                    <div className="link-container skeleton skeleton-text"></div>
                    <p className="project-last-updated card-text skeleton skeleton-text">
                      <small className="text-muted"></small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
