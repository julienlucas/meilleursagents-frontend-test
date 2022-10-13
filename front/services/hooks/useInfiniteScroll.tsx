import { useRef, useEffect, useCallback } from 'react';
import { Store } from '../../domain/entities/store.interface';
import { setPage, useStore } from '../../store';

const useInfiniteScroll = () => {
  const [,dispatch] = useStore<Store>({});
  const loadMoreRef = useRef<HTMLInputElement | null>(null);

  const handleObserver = useCallback((entries) => {
    const [target] = entries;
    if (target.isIntersecting) {
      dispatch(setPage())
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
  }, [handleObserver]);

  return { loadMoreRef };
};

export default useInfiniteScroll;