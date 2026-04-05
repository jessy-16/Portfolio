export default function VideoBanner() {
  return (
    <section className="video-banner">
      <video autoPlay muted loop className="banner-video">
        <source src="/videos/videoframe_1.mp4" type="video/mp4" />
      </video>

      <div className="banner-text">
        <h2>Transforming Data into Insight</h2>
        <p>
          Explore my projects and discover the power of AI and Data Science.
        </p>
      </div>
    </section>
  );
}