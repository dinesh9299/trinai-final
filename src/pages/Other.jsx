import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import carousel1 from "../images/triani-image-1.jpg";
import carousel2 from "../images/new-2-01.jpg";

const images = [
  { src: carousel1, alt: "Slide 1", text: "Welcome to Our Security Solutions" },
  { src: carousel2, alt: "Slide 2", text: "Advanced Surveillance Systems" },
];

const itemTemplate = (item) => (
  <div
    className="w-full h-[300px] md:h-[500px] lg:h-[700px] flex justify-center items-center relative bg-cover bg-center"
    style={{ backgroundImage: `url(${item.src})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <h2 className="text-white text-3xl md:text-5xl font-bold text-center">
        {item.text}
      </h2>
    </div>
  </div>
);

const MyCarousel = () => {
  return (
    <div className="relative">
      <Carousel
        value={images}
        itemTemplate={itemTemplate}
        numVisible={1}
        numScroll={1}
        circular
        autoplayInterval={3000}
        showIndicators
        showNavigators
      />
    </div>
  );
};

export default MyCarousel;
