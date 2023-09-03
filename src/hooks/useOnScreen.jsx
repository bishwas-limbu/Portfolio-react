import { useEffect, useState } from "react";

export const useOnScreen = (ref) => {
  //console.log('on',ref);
  const [isOnScreen, setIsOnScreen] = useState(false);

  const observer = new IntersectionObserver((([entry]) => {
     //console.log(entry);
    setIsOnScreen(entry.isIntersecting)
  }), {
    threshold: 0.4,
  });

  useEffect(() => {
    observer.observe(ref.current);

    return () => observer.disconnect()
  },[])
  
  return isOnScreen;
}