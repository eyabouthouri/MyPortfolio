import './Atmosphere.css';

const Atmosphere = () => {
  return (
    <div className="atmosphere" aria-hidden="true">
      <div className="atmosphere-fog atmosphere-fog-a" />
      <div className="atmosphere-fog atmosphere-fog-b" />
      <div className="atmosphere-fog atmosphere-fog-c" />
      <div className="atmosphere-dust">
        {Array.from({ length: 18 }, (_, index) => (
          <span key={index} style={{ '--i': index }} />
        ))}
      </div>
      <div className="atmosphere-vignette" />
      <div className="atmosphere-grain" />
    </div>
  );
};

export default Atmosphere;
