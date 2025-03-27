import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const images = [
  "/uploads/d5f04c7b-3b87-477d-a0c7-bf23e45950a3.png",
  "/uploads/28217641-f87f-4234-b3d0-aa522b1e87af.png",
  "/uploads/0c33057c-5e48-439e-b78b-f490aefbb4ef.png",
  "/uploads/9e278e7f-cdeb-4b36-8dc4-c44dcbc81302.png",
  "/uploads/ca87947b-f206-44d5-81e5-1b447b9b3d97.png",
  "/uploads/036e1116-495f-4a4a-9d4b-5792cf3ab603.png",
];

const ProfileCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80">
      <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-background shadow-xl">
        <img
          src={images[currentIndex]}
          alt="Vikas Vishwakarma"
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      </div>
      
      {/* Navigation buttons */}
      <Button 
        onClick={goToPrevious}
        size="icon"
        variant="ghost"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm p-1 rounded-full text-primary hover:bg-background/90 transition-colors z-10"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      
      <Button 
        onClick={goToNext}
        size="icon"
        variant="ghost"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-background/80 backdrop-blur-sm p-1 rounded-full text-primary hover:bg-background/90 transition-colors z-10"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
      
      {/* Indicator dots */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? "bg-primary w-4" 
                : "bg-primary/40 hover:bg-primary/60"
            }`}
            aria-label={`View profile image ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 rounded-full shadow-[0_0_30px_10px_rgba(var(--primary-rgb),0.1)] -z-10"></div>
    </div>
  );
};

export default ProfileCarousel;
