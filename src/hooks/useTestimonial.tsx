import { useState } from "react";
import { testimonialsData } from "../constant/testimonialsData";

export const useTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return testimonialsData.length - 2;
      }
      return prevIndex - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= testimonialsData.length - 2) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const visibleTestimonials = testimonialsData.slice(
    currentIndex,
    currentIndex + 2,
  );

  return { visibleTestimonials, handlePrev, handleNext };
};
