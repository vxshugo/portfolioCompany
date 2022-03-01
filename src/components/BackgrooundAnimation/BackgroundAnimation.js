import React, {useEffect, useRef} from 'react';
import lottie from 'lottie-web'

const BackgroundAnimation = () => {


  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./card.json')
    })
  })

  return (
      <div className="container" ref={container}>
      </div>
  );
};

export default BackgroundAnimation;