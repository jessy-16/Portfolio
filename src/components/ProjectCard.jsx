export default function ProjectCard({ project }) {
  const openProject = () => {
    window.open(project.link, "_blank");
  };

  return (
    <div className="project-card" onClick={openProject}>
      <img src={project.image} alt={project.title} />
      <div className="project-title">{project.title}</div>
    </div>
  );
}