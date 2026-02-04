import ProjectList from "../../components/projects/ProjectList";
import data from "../../mock_data.json";

export default function Home() {
  const projects = data.projects ?? data;

  return (
    <main>
      <h1>Listado de Proyectos</h1>
      <ProjectList projects={projects} />
    </main>
  );
}
