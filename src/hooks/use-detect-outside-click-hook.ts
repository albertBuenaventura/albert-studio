import { DependencyList, MutableRefObject, useEffect } from "react";

export interface UseDetectOutsideClickHookArgs {
  containerRef?: MutableRefObject<HTMLElement | HTMLDivElement | null>;
  onDetect?: () => void;
}

export function useDetectOutsideClick(
  { containerRef, onDetect }: UseDetectOutsideClickHookArgs,
  deps: DependencyList
) {
  useEffect(() => {
    if (!containerRef?.current) return;

    const handleClickOutside = (e: Event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        onDetect?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef, ...deps]);
}
