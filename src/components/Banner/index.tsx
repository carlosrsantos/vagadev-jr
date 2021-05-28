import { useEffect } from "react";

import { Header } from "../Header";
import { Wrapper } from "./styles";

import banner01 from '../../assets/img/principal_banner_desktop.jpg';
import banner02 from '../../assets/img/principal_banner_desktop_02.jpg';


export function Banner(){

  var imageCount = 0;
  var currentImage = 0;
  var images = [banner01, banner02];
  var preLoadImages = [];
  for (var i = 0; i < images.length; i++)
  {
    // eslint-disable-next-line eqeqeq
    if (images[i] == null)
        break;
  
    preLoadImages[i] = new Image();
    preLoadImages[i].src = images[i];
    imageCount++;
  }
 
function startSlideShow()
{ 
   var wrapper = document.getElementsByTagName('div');

   if (wrapper && imageCount > 0)
   {
     wrapper[1].style.backgroundImage = `url(${images[currentImage]})`;
     //wrapper.setAttribute('style' , `background-image: url(${images[currentImage]}`);
      //document.body.style.backgroundImage = "url("+images[currentImage]+")";    
      //document.body.style.backgroundRepeat = "no-repeat";
      //document.body.style.backgroundSize = "cover";
      
 
      currentImage = currentImage + 1;
      if (currentImage > (imageCount-1))
      { 
         currentImage = 0;
      }
      setTimeout(startSlideShow, 10000);
   }
}
useEffect(startSlideShow,[])

  return(
    <>
    <Wrapper>
      
      <Header />  
      
    </Wrapper>
    </>
  )
}