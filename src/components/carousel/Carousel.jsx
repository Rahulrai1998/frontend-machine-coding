import { useEffect, useRef, useState } from "react";
import "./styles.css";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mouseEnter, setMouseEnter] = useState(false);
  const imgBoxRef = useRef(null);

  const getSlidesInfo = () => {
    const slides = imgBoxRef.current.children;
    const slidesLen = slides.length;
    return { slides, slidesLen };
  };

  const intervalId = useRef(null);

  useEffect(() => {
    const { slides, slidesLen } = getSlidesInfo();
    slides[0].setAttribute("isActive", true);
  }, []);

  const startInterval = () => {
    const { slides, slidesLen } = getSlidesInfo();
    intervalId.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const newIndex = (prev + 1) % slidesLen;
        //ANIMATION BASED SLIDE CHANGE
        if (prev === 0) {
          slides[0].setAttribute("isActive", false);
        }
        slides[prev].classList.remove("show");
        slides[prev].classList.add("hide");
        slides[newIndex].classList.add("show");
        slides[newIndex].classList.remove("hide");

        // OPACITY BASED SLIDE CHANGE
        // [...slides].forEach((slide, index) => {
        //   slide.setAttribute("isActive", index === newIndex);
        // });
        return newIndex;
      });
    }, 4000);
  };

  useEffect(() => {
    // slides[0].setAttribute("isActive", true);
    startInterval();

    //SET ARIA-HIDDEN
    const { slides } = getSlidesInfo();

    [...slides].forEach((slide, index) => {
      index === currentIndex
        ? slide.setAttribute("aria-hidden", undefined)
        : slide.setAttribute("aria-hidden", true);
    });

    //DEBOUNCED INTERVAL
    return () => {
      clearInterval(intervalId.current);
    };
  }, [currentIndex, intervalId, mouseEnter]);

  const handlePrevious = () => {
    const { slides, slidesLen } = getSlidesInfo();
    const newIndex = currentIndex === 0 ? slidesLen - 1 : currentIndex - 1;

    if (currentIndex === 0) {
      slides[0].setAttribute("isActive", false);
    }
    slides[currentIndex].classList.remove("show");
    slides[currentIndex].classList.add("hide");
    slides[newIndex].classList.add("show");
    slides[newIndex].classList.remove("hide");
    // [...slides].forEach((slide, index) => {
    //   slide.setAttribute("isActive", index === newIndex);
    // });
    setCurrentIndex(newIndex);
  };

  const handleNext = (e) => {
    // clearInterval(intervalId.current);
    const { slides, slidesLen } = getSlidesInfo();
    const newIndex = (currentIndex + 1) % slidesLen;
    // e.target.setAttribute("aria-controls", `image-${currentIndex + 1}`);
    if (currentIndex === 0) {
      slides[0].setAttribute("isActive", false);
    }
    slides[currentIndex].classList.remove("show");
    slides[currentIndex].classList.add("hide");
    slides[newIndex].classList.add("show");
    slides[newIndex].classList.remove("hide");
    // [...slides].forEach((slide, index) => {
    //   slide.setAttribute("isActive", index === newIndex);
    // });
    setCurrentIndex(newIndex);
  };

  const handleDotClick = (index) => {
    const { slides } = getSlidesInfo() ?? {};

    if (currentIndex === 0) {
      slides[0].setAttribute("isActive", false);
    }
    slides[currentIndex].classList.remove("show");
    slides[currentIndex].classList.add("hide");
    slides[index].classList.add("show");
    slides[index].classList.remove("hide");
    // [...slides].forEach((slide, i) => {
    //   slide.setAttribute("isActive", index === i);
    // });
    setCurrentIndex(index);
  };

  return (
    <div className="carousel" role="region" aria-label="Image Carousel">
      {currentIndex}
      <span
        role="status"
        aria-live="polite"
        id={`image-${currentIndex}`}
      ></span>

      <section
        className="box"
        aria-label="Changing Images"
        ref={imgBoxRef}
        onMouseEnter={() => clearInterval(intervalId.current)}
        onMouseLeave={() => {
          const { slides, slidesLen } = getSlidesInfo();
          startInterval();
        }}
      >
        {children}
      </section>

      <section className="stepper" aria-label="Stepper">
        {Array.from(children)?.map((_, index) => (
          <div
            aria-controls={`image-${currentIndex}`}
            aria-label="dot"
            className={`stepperDot ${
              currentIndex === index ? "focusDot" : null
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </section>

      <button
        className="carousel-btn"
        id="left-btn"
        onClick={handlePrevious}
        aria-controls={`image-${currentIndex}`}
      >
        {"<"}
      </button>
      
      <button
        className="carousel-btn"
        id="right-btn"
        onClick={handleNext}
        aria-controls={`image-${currentIndex}`}
      >
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
