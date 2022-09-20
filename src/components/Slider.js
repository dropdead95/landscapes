import React from "react";
import "./Slider.css";
import { useInView } from "react-intersection-observer";

const Slider = ({ imageSrc, title, flipped, subtitle }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc} alt="travel" className="slider__image" />;
          <div className="slider__content">
            <h1 className="slider__title">{title}</h1>
            <p className="slider__title">{subtitle}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider__content">
            <h1 className="slider__title">{title}</h1>
            <p className="slider__title">{subtitle}</p>
          </div>
          <img src={imageSrc} alt="travel" className="slider__image" />;
        </>
      );
    }
  };
  return (
    <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
      {renderContent()}
    </div>
  );
};

export default Slider;
