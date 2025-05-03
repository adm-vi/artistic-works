import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Sample images (replace with your own images or URLs)
const images = [
  "https://images.unsplash.com/photo-1608501078713-8e445a709b39?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1523295335704-95d2189fccfa?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1556139943-4bdca53adf1e?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60"
];

const ImageCarousel = () => {
  return (
    <div className="w-full">
      <Carousel 
        className="w-full" 
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
              <div className="p-1 h-[300px]">
                <img
                  src={src}
                  alt={`Carousel image ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export default ImageCarousel; 