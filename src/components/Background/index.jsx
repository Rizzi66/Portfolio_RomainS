import './index.scss'
import { useContext } from 'react';
import { BackgroundContext } from '../../utils/context'


function Background({ longueurX, longueurY_headerMax, longueurY_headerMin, longueurY_main }) {
  
  const { pathName, oldPathName } = useContext(BackgroundContext)

  const root = document.documentElement;
  root?.style.setProperty("--longueurX",longueurX+"px");

  root?.style.setProperty("--longueurY__main",longueurY_main+"px");
  const angle__main = Math.atan(longueurY_main/longueurX)*(180/Math.PI)
  root?.style.setProperty("--angle__main",angle__main+"deg");

  function changementHeader(longueurY_header) {
    root?.style.setProperty("--longueurY__header",longueurY_header+"px");
    const angle__header = Math.atan(longueurY_header/longueurX)*(180/Math.PI)
    root?.style.setProperty("--angle__header","-"+angle__header+"deg");
  }

  changementHeader(longueurY_headerMax)

  // Code pour animation du background

  // if (pathName !== oldPathName && (pathName === "/Projet8_Portfolio/" || oldPathName === "/Projet8_Portfolio/")) {
  //   if (pathName !== "/Projet8_Portfolio/") {
  //     changementHeader(longueurY_headerMin)
  //     // console.log("vers petit header")
  //   } else {
  //     changementHeader(longueurY_headerMax)
  //     //console.log("vers grand Background")
  //   }  
  // }
  
  return (
  <div className='background'>
      <div className="background__main"></div>
      <div className="background__main background__line2"></div>
      <div className="background__main background__line3"></div>
      <div className="background__gradientBottom"></div>
  </div>
  )
}

export default Background
