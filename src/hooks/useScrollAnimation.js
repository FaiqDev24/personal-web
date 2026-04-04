import { useEffect, useRef } from 'react';

/**
 * Custom hook that uses IntersectionObserver to add the
 * 'visible' class to elements with .fade-in/.fade-in-left/.fade-in-right classes
 * when they scroll into view.
 */
export function useScrollAnimation() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Observes multiple children inside a container ref and adds 'visible'
 * to each child with a .fade-in* class when the container enters view.
 */
export function useScrollAnimationGroup() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = container.querySelectorAll(
      '.fade-in, .fade-in-left, .fade-in-right'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}
