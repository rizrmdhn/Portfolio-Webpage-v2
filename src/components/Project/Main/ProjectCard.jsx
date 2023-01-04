import React from "react";
import { showFormattedDate } from "../../../utils";
import ProjectBody from "./ProjectBody";

export default function ProjectCard({ lists }) {
  return (
    <div className="project-card-container">
      {lists.map((list) => {
        return (
          <div className="project-card card mb-3" key={list.id}>
            <div className="row g-0">
              <div className="card-icon-container col-md-2">
                {list.homepage !== "" && list.homepage !== null ? (
                  <a
                    className="project-icon bi bi-globe"
                    href={list.homepage}
                    target="_blank"
                  ></a>
                ) : (
                  <i className="project-icon bi bi-folder"></i>
                )}
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <ProjectBody
                    name={list.name}
                    html_url={list.html_url}
                    description={list.description}
                    updated_at={showFormattedDate(list.updated_at)}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
