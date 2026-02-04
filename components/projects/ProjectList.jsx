"use client";

import { useState } from "react";
import styles from "./ProjectList.module.css";
import { useProjectStore } from "../store/useProjectStore";

const ITEMS_PER_PAGE = 10;

export default function ProjectList({ projects }) {
  const search = useProjectStore((state) => state.search);
  const sortBy = useProjectStore((state) => state.sortBy);

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase()),
  );

  const [currentPage, setCurrentPage] = useState(1);

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


  return (
    <section className={styles.container}>
      {/* HEADER */}
      <header className={styles.header}>
        <h2>Mis proyectos</h2>
        <span>{filteredProjects.length} Proyectos</span>
      </header>

      {/* COLUMNAS */}
      <div className={styles.columns}>
        <span>Proyecto</span>
        <span>Plan</span>
        <span>Estado</span>
        <span>Equipo</span>
        <span>Por vencer</span>
      </div>

      {/* LISTADO */}
      {paginatedProjects.map((project) => (
        <article key={project._id} className={styles.row}>
          {/* Proyecto */}
          <div className={styles.projectInfo}>
            <strong>{project.title}</strong>
            <span>
              {new Date(project.createdAt).toLocaleDateString()} ·{" "}
              {project.lastVisit
                ? new Date(project.lastVisit).toLocaleDateString()
                : "—"}
            </span>
          </div>

          {/* Plan */}
          <span className={`${styles.badge} ${styles.plan}`}>
            {project.projectPlanData?.plan}
          </span>

          {/* Estado */}
          <span className={`${styles.badge} ${styles.status}`}>
            {project.status}
          </span>

          {/* Equipo */}
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

          {/* Ítems por vencer */}
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
      ))}

      {/* PAGINACIÓN */}
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
