function Testimonial({ desc, author, location, imgSrc, imgAlt, active, reff }) {
  return (
    <div
      ref={reff}
      className={active ? "testimonial-card active" : "testimonial-card"}
    >
      <div className="testimonial-img">
        <img src={imgSrc || ""} alt={imgAlt} />
      </div>
      <div className="testimonial-text">
        <p>{desc}</p>

        <div className="testi-info">
          <h4 className=".body-small red-text">{author}</h4>
          <p className="caption">{location}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
