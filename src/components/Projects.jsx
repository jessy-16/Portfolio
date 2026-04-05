import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const projects = gsap.utils.toArray(".project");

    projects.forEach((project) => {
      gsap.to(project, {
        scrollTrigger: {
          trigger: project,
          start: "top 60%",
          end: "top 40%",
          scrub: 2
        },
        scale: 1.3,
        opacity: 1
      });
    });

    const container = document.querySelector(".projects-container");

    gsap.to(container, {
      y: () => -(container.scrollHeight - window.innerHeight),
      ease: "none",
      scrollTrigger: {
        trigger: ".projects-wrapper",
        start: "top top",
        end: () => "+=" + container.scrollHeight,
        scrub: true
      }
    });

  }, []);

  return (
    <>
      <div className="section-title">
        <span className="line"></span>
        <h2>My projects</h2>
      </div>

      <div className="projects-wrapper">
        <section className="projects">
          <div className="projects-container">

            <div className="project">
              <img src="/images/img_12.jpg" />
              <div className="project-title">Helios AI</div>
            </div>

            <div className="project">
              <img src="/images/img_9.jpg" />
              <div className="project-title">JessWave</div>
            </div>

            <div className="project">
              <img src="/images/img_11.jpg" />
              <div className="project-title">CVision</div>
            </div>

            <div className="project">
              <img src="/images/img_7.jpg" />
              <div className="project-title">JessHosting</div>
            </div>

            <div className="project">
              <img src="/images/img_8.jpg" />
              <div className="project-title">The Game of Life</div>
            </div>

            <div className="project">
              <img src="/images/img_10.jpg" />
              <div className="project-title">Supplier Insights</div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}