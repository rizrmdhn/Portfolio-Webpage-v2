import React from "react";
import LoadingCard from "./Loading/LoadingCard";
import ProjectContainer from "./Main/ProjectContainer";
import "./Main/styles/styles.css";

export default function LoadProjectItem({
  lists,
  cards,
  onSearch,
  onSearchType,
  isLoading,
}) {
  return (
    <>
      {isLoading === true ? (
        <LoadingCard cards={cards} />
      ) : (
        <ProjectContainer lists={lists} onSearch={onSearch} onSearchType={onSearchType} />
      )}
    </>
  );
}
