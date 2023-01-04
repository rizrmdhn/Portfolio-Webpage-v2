import React from "react";
import Accordion from "./Accordion/Accordion";
import ProjectCard from "./ProjectCard";

export default function ProjectContainer({ lists, onSearch, onSearchType }) {
  const onSearchProject = (event) => {
    onSearch(event.target.value);
  };
  return (
    <div className="project-container animate__animated animate__fadeIn">
      <div className="project-menu">
        <div className="form-floating mb-3">
          <input
            onChange={onSearchProject}
            type="search"
            className="form-control"
            id="search"
            placeholder="Search"
          />
          <label htmlFor="search">Search</label>
        </div>
        <Accordion onSearchType={onSearchType} />
      </div>
      <ProjectCard lists={lists} />
    </div>
  );
}
