
import useEmblaCarousel from 'embla-carousel-react';
import CarrosselStyled from './CarrosselStyled'; // Importando o estilo
import { useEffect } from 'react';

interface CarrosselProps {
  svgList: string[];
}


  const Carrossel: React.FC<CarrosselProps> = ({ svgList}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel();
  
    useEffect(() => {
      if (!emblaApi) return;
  
      const autoScroll = () => {
        if (!emblaApi.canScrollNext()) {
          emblaApi.scrollTo(0); 
        } else {
          emblaApi.scrollNext(); 
        }
      };
  
      const interval = setInterval(autoScroll, 10000); 
  
      return () => clearInterval(interval); 
    }, [emblaApi]);
  
    return (
      <CarrosselStyled >
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
