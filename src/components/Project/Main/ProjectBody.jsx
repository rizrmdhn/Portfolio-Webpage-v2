import React from "react";

export default function ProjectBody({
  name,
  html_url,
  description,
  updated_at,
}) {
  return (
    <>
      <h5 className="project-name card-title">{name}</h5>
      <div className="description-container">
        {description !== null && description !== "" ? (
          <p className="card-text">{description}</p>
        ) : (
          <p className="card-text">Tidak ada deskripsi</p>
        )}
      </div>
      <div className="link-container">
        <a className="project-link card-text" href={html_url} target="_blank">
          {html_url}
        </a>
      </div>
      <p className="project-last-updated card-text">
        <small className="text-muted">Last Update: {updated_at}</small>
      </p>
    </>
  );
}
