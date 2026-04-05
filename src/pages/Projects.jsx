import { useState, useEffect } from "react";
import "../styles/projects.css";
import projects from "../Data/Projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [hoverImage, setHoverImage] = useState(null);
  const [hoverTitle, setHoverTitle] = useState("");

  useEffect(() => {
    const moveHover = (e) => {
      const img = document.querySelector(".services-preview img");
      const title = document.querySelector(".services-preview .hover-title");
      if (img) {
        img.style.left = e.clientX + "px";
        img.style.top = e.clientY + "px";
        img.style.opacity = 1;
        img.style.transform = "translate(-50%, -50%) scale(1)";
      }
      if (title) {
        title.style.left = e.clientX + 20 + "px";
        title.style.top = e.clientY + 20 + "px";
        title.style.opacity = 1;
      }
    };

    window.addEventListener("mousemove", moveHover);
    return () => window.removeEventListener("mousemove", moveHover);
  }, []);

  return (
    <>
      {/* TITRE */}
      <div className="section-title">
        <span className="line"></span>
        <h2>All Projects</h2>
      </div>

      {/* IMAGE QUI SUIT LA SOURIS + TITRE */}
      <div className="services-preview">
        {hoverImage && <img src={hoverImage} alt="preview" />}
        {hoverTitle && <span className="hover-title">{hoverTitle}</span>}
      </div>

      {/* GRID DES PROJETS */}
      <section className="projects-page">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card-wrapper"
              onMouseEnter={() => {
                setHoverImage(project.image);
                setHoverTitle(project.title);
              }}
              onMouseLeave={() => {
                setHoverImage(null);
                setHoverTitle("");
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}