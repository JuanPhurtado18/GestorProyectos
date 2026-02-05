import ProjectList from "../../components/projects/ProjectList";
import data from "../../mock_data.json";
import SearchBar from "../../components/projects/SearchBar";
import SortSelect from "../../components/projects/ProjectFilters";
import ProjectMap from "../../components/projects/ProjectMap";

export default function Home() {
  const projects = data.projects ?? data;

  return (
    <main className="dashboard">
      <h1 className="title">Mis proyectos</h1>

      <div className="topbar">
        <SortSelect />
        <SearchBar />
      </div>

      <ProjectMap projects={projects} />
      <ProjectList projects={projects} />
    </main>
  );
}
