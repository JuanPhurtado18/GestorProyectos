import FilterDropdown from "../../components/projects/FilterDropdown";
import SearchBar from "../../components/projects/SearchBar";
import ProjectList from "../../components/projects/ProjectList";
import ProjectMap from "../../components/projects/ProjectMap";
import data from "../../mock_data.json";

export default function Home() {
  const projects = data.projects ?? data;

  return (
    <div className="dashboard">
      <h1 className="title">Mis proyectos</h1>
      <div className="topbar">
        <div className="topbarRight">
          <FilterDropdown />
          <SearchBar />
        </div>
      </div>
      <ProjectMap projects={projects} />
      <ProjectList projects={projects} />
    </div>
  );
}
