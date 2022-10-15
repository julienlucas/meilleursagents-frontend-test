import { useRef, useEffect, useCallback } from 'react';
import { useTypedSelector, useAppDispatch } from '../../store/store';
import { setPage } from '../../store/reducers';

const useInfiniteScroll = () => {
  const dispatch = useAppDispatch();
  const loadMoreRef = useRef<HTMLInputElement | null>(null);

  const handleObserver = useCallback((entries) => {
    const [target] = entries;
    if (target.isIntersecting) {
      dispatch(setPage());
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
