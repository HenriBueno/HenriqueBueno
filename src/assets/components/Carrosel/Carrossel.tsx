
import useEmblaCarousel from 'embla-carousel-react';
import CarrosselStyled from './CarrosselStyled';
import { useEffect} from 'react';

interface CarrosselProps {
  svgList: string[];
  scale?: string;
  slideTiming?: string
}


  const Carrossel: React.FC<CarrosselProps> = ({ svgList, scale, slideTiming}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel();

    const slideTimingValue = slideTiming ? parseInt(slideTiming, 10) : 10000;
  
    useEffect(() => {
      if (!emblaApi) return;
  
      const autoScroll = () => {
        if (!emblaApi.canScrollNext()) {
          emblaApi.scrollTo(0); 
        } else {
          emblaApi.scrollNext(); 
        }
      };
  
      const interval = setInterval(autoScroll, slideTimingValue); 
  
      return () => clearInterval(interval); 
    }, [emblaApi]);
  
    return (
      <CarrosselStyled scale={scale}>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {svgList.map((svgMarkup, index) => (
              <div
                key={index}
                className="embla__slide"
                dangerouslySetInnerHTML={{ __html: svgMarkup }}
              />
            ))}
          </div>
        </div>
      </CarrosselStyled>
    );
  };
  
  export default Carrossel;
