import { useState, useEffect, RefObject } from 'react';

export default function useOnScreen<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
) {
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const element = ref?.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOnScreen(entry.isIntersecting);
      }, { rootMargin: '0px' },
    );

    if (element) {
      observer.observe(element);

      return () => observer.unobserve(element);
    }

    return () => null;
  }, []);

  return isOnScreen;
}
