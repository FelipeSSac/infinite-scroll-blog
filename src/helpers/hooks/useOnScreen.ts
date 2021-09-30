import { useState, useEffect, RefObject } from 'react';

export default function useOnScreen<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
) {
  const [isOnScreen, setIsOnScreen] = useState(0);

  useEffect(() => {
    const element = ref?.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsOnScreen((prevState) => prevState + 1);
        }
      }, {
        root: null,
        rootMargin: '100px',
        threshold: 1.0,
      },
    );

    if (element) {
      observer.observe(element);

      return () => observer.unobserve(element);
    }

    return () => null;
  }, []);

  return isOnScreen;
}
