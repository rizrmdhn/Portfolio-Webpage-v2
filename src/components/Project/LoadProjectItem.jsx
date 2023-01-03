import React from "react";
import LoadingCard from "./Loading/LoadingCard";
import ProjectCard from "./Main/ProjectCard";
import "./Main/styles/styles.css";

export default function LoadProjectItem({ lists, cards, isLoading }) {
  return (
    <>
      {isLoading === true ? (
        <LoadingCard cards={cards} />
      ) : (
        <ProjectCard lists={lists} />
      )}
    </>
  );
}
