import Slider from 'react-slick';

import {Wrapper} from './styles';

import banner01 from '../../assets/img/principal_banner_desktop.jpg';
import banner02 from '../../assets/img/principal_banner_desktop_02.jpg';


export function Carousel() {
  /* const settings = {
      dots: false,
      autoplay: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 2,
      initialSlide: 2
  } */

  const renderSlides = () =>
    [banner01,banner02].map( img => (
      <div className='items'>
        <div className="item" 
           >
          <img src={img} alt="Banner" />
          </div>
      </div>
    ));

  return(
    <Wrapper>
      <Slider
        dots={true}
        slidesToShow={2}
        slidesToScroll={2}
        autoplay={true}
        autoplaySpeed={3000} 
      > 
        {/* {renderSlides()}       */}
      </Slider>
    </Wrapper>
  );
  

}
