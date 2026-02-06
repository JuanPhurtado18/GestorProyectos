"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { useProjectStore } from "../store/useProjectStore";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function ProjectMap({ projects }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const selectedProject = useProjectStore((state) => state.selectedProject);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: [-99.13, 19.43],
      zoom: 2,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    // marcadores
    projects.forEach((project) => {
      const lat = project.position?.lat;
      const lng = project.position?.lng;
      if (!lat || !lng) return;

      new mapboxgl.Marker({ color: "#FFD23F" })
        .setLngLat([lng, lat])
        .setPopup(
          new mapboxgl.Popup().setHTML(`<strong>${project.title}</strong>`),
        )
        .addTo(map.current);
    });
  }, [projects]);

  useEffect(() => {
    if (!map.current) return;
    if (!selectedProject) {
      map.current.flyTo({
        style: "mapbox://styles/mapbox/satellite-streets-v12",
        center: [-99.13, 19.43],
        zoom: 2,
      });
      return;
    }

    const lat = selectedProject.position?.lat;
    const lng = selectedProject.position?.lng;
    if (!lat || !lng) return;

    map.current.flyTo({
      center: [lng, lat],
      zoom: 14,
      speed: 1.2,
    });
  }, [selectedProject]);

  return <div ref={mapContainer} className="mapContainer" />;
}
