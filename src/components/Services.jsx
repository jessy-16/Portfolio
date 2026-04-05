import { useState } from "react";

export default function Services() {
  const [img, setImg] = useState("");

  const skills = [
    { name: "Python", img: "https://i.pinimg.com/1200x/da/a0/e6/daa0e66d7caa8b17211e1c7ad6b36f66.jpg" },
    { name: "SQL", img: "https://i.pinimg.com/736x/ae/ef/be/aeefbe6a8d9518d08024672b7b71fc1b.jpg" },
    { name: "Javascript", img: "https://i.pinimg.com/736x/64/93/94/6493946d1cc1f574f06371bc58bf4e99.jpg" },
    { name: "HTML5/CSS3", img: "https://i.pinimg.com/736x/d9/b5/2f/d9b52fe2384347c808d33cf919876526.jpg" },
    { name: "C Language", img: "https://i.pinimg.com/736x/cd/4f/85/cd4f8570a177e290810855735312138c.jpg" },
    { name: "Power Bi", img: "https://i.pinimg.com/736x/53/08/3e/53083ea2a4a81372d0569889c21dec63.jpg" },
    { name: "FastAPI/Flask", img: "https://i.pinimg.com/1200x/da/57/de/da57de8a2b285e0cf6b969772472916f.jpg" },
    { name: "Figma", img: "https://i.pinimg.com/736x/50/d2/ab/50d2ab8d4414a3f75a3908d13a2d56a1.jpg" },
    { name: "Git", img: "https://i.pinimg.com/736x/17/29/c1/1729c12277895c7ebd6fb2521de14da1.jpg" },
    { name: "Streamlit", img: "https://i.pinimg.com/736x/36/77/71/367771b2ed819d3edc1f98844e30b82d.jpg" },
  ];

  return (
    <section className="services">
      <div className="services-content">

        <div className="services-table">
          {skills.map((service, index) => (
            <div
              key={index}
              className="service"
              onMouseEnter={() => setImg(service.img)} // ✅ FIX
            >
              <span>{service.name}</span>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
          ))}
        </div>

        <div className="services-right">
          <img src={img} alt="preview" /> {/* ✅ FIX */}
        </div>

      </div>
    </section>
  );
}