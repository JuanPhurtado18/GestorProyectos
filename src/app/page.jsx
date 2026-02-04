import ProjectList from "../../components/projects/ProjectList";
import data from "../../mock_data.json";
import SearchBar from "../../components/projects/SearchBar";
import SortSelect from "../../components/projects/ProjectFilters";

export default function Home() {
  const projects = data.projects ?? data;

  return (
    <main>
      <h1>Listado de Proyectos</h1>
      <SortSelect/>
      <SearchBar />
      <ProjectList projects={projects} />
    </main>
  );
}
