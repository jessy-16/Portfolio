export default function About() {
  return (
    <>
      <div className="section-title">
        <span className="line"></span>
        <h2>About me</h2>
      </div>

      <section className="about-me" id="about">
        <div className="about-me-container">
          <div className="about-me-image">
            <img src="/images/photo_rouge.jpeg" alt="me" />
          </div>

          <div className="about-me-text">
            <h1>Jessyca Kioubia</h1>
            <p>
              I design experiences at the intersection of data and creativity.

As a first-year Bachelor’s student in Data & Artificial Intelligence at HETIC, I build projects where analysis, machine learning, and design interact seamlessly. My approach is grounded in a balance between scientific rigor and artistic sensibility.

Alongside my studies, I am also a producer. Music deeply influences the way I think and create, bringing rhythm, intuition, and a unique identity to each of my projects.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}