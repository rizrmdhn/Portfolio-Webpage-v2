import React from "react";

export default function LoadingCard({ cards }) {
  return (
    <div className="project-conatiner loader">
      {Array(cards)
        .fill(0)
        .map((_, i) => (
          <div className="project-card card mb-3" key={i}>
            <div className="row g-0">
              <div className="card-icon-container col-md-2 skeleton skeleton-img">
              </div>
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
  );
}
