"use client";

import { useState } from "react";
import styles from "./ProjectList.module.css";
import { useProjectStore } from "../store/useProjectStore";
import Swal from "sweetalert2";

const ITEMS_PER_PAGE = 10;

export default function ProjectList({ projects }) {
  const search = useProjectStore((state) => state.search);
  const sortBy = useProjectStore((state) => state.sortBy);
  const selectedProject = useProjectStore((state) => state.selectedProject);
  const setSelectedProject = useProjectStore(
    (state) => state.setSelectedProject,
  );

  const mapVisible = useProjectStore((state) => state.mapVisible); // 👈 mapa activo

  const [currentPage, setCurrentPage] = useState(1);

  
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase()),
  );

  
  const countByType = (incidents = [], type) =>
    incidents.filter(
      (item) => item.item.toLowerCase() === type && item.status === "active",
    ).length;

  
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case "incidents":
        return (
          countByType(b.incidents, "incidents") -
          countByType(a.incidents, "incidents")
        );
      case "rfi":
        return (
          countByType(b.incidents, "rfi") - countByType(a.incidents, "rfi")
        );
      case "tasks":
        return (
          countByType(b.incidents, "task") - countByType(a.incidents, "task")
        );
      case "alphabetical":
      default:
        return a.title.localeCompare(b.title);
    }
  });

 
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = sortedProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  
  const handleSelect = (project) => {
    
    if (!mapVisible) {
      Swal.fire({
        icon: "info",
        title: "Mapa desactivado",
        text: "Debes activar el mapa para seleccionar un proyecto",
        confirmButtonColor: "#ffb200",
      });
      return;
    }

    
    if (selectedProject && selectedProject._id === project._id) {
      setSelectedProject(null); 
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2>Mis proyectos</h2>
        <span>{filteredProjects.length} Proyectos</span>
      </header>

      
      <div className={styles.columns}>
        <span>Proyecto</span>
        <span>Plan</span>
        <span>Estado</span>
        <span>Equipo</span>
        <span>Por vencer</span>
      </div>

      
      {paginatedProjects.map((project) => {
        const isActive =
          mapVisible && selectedProject?._id === project._id; 
         

        return (
          <article
            key={project._id}
            onClick={() => handleSelect(project)}
            className={`${styles.row} ${isActive ? styles.activeRow : ""}`}
            style={{ cursor: "pointer" }}
          >
           
            <div className={styles.projectInfo}>
              <strong>{project.title}</strong>
              <span>
                {new Date(project.createdAt).toLocaleDateString()} ·{" "}
                {project.lastVisit
                  ? new Date(project.lastVisit).toLocaleDateString()
                  : "—"}
              </span>
            </div>

           
            <span className={`${styles.badge} ${styles.plan}`}>
              {project.projectPlanData?.plan}
            </span>

            
            <span className={`${styles.badge} ${styles.status}`}>
              {project.status}
            </span>

           
            <div className={styles.team}>
              {project.users?.slice(0, 3).map((user, index) => (
                <div key={index} className={styles.avatar}>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              ))}
              {project.users?.length > 3 && (
                <span className={styles.more}>+{project.users.length - 3}</span>
              )}
            </div>

          
            <div className={styles.dueItems}>
              <div className={styles.dueItem}>
                <strong>{countByType(project.incidents, "incidents")}</strong>
                <span>Incidencias</span>
              </div>

              <div className={styles.dueItem}>
                <strong>{countByType(project.incidents, "rfi")}</strong>
                <span>RFI</span>
              </div>

              <div className={styles.dueItem}>
                <strong>{countByType(project.incidents, "task")}</strong>
                <span>Tareas</span>
              </div>
            </div>
          </article>
        );
      })}

    
      <footer className={styles.pagination}>
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </button>

        <span>
          Página {currentPage} de {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </footer>
    </section>
  );
}