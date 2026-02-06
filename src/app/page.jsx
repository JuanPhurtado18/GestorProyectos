"use client";

import FilterDropdown from "../../components/projects/FilterDropdown";
import SearchBar from "../../components/projects/SearchBar";
import ProjectList from "../../components/projects/ProjectList";
import ProjectMap from "../../components/projects/ProjectMap";
import data from "../../mock_data.json";
import { useProjectStore } from "../../components/store/useProjectStore";
import ViewButtons from "../../components/projects/ViewButtons";

export default function Home() {
  const projects = data.projects ?? data;
  const mapVisible = useProjectStore((s) => s.mapVisible);

  return (
    <div className="dashboard">
      <div className="topbar">
        <div className="topbarRight">
          <FilterDropdown />
          <ViewButtons />
          <SearchBar />
        </div>
      </div>
      {mapVisible && <ProjectMap projects={projects} />}

      <ProjectList projects={projects} />
    </div>
  );
}
