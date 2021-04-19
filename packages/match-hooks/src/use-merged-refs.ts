import * as React from "react";

export function useMergedRefs<T>(
  ...refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>
): React.RefCallback<T> {
  return React.useCallback((current) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(current);
      } else if (ref && !Object.isFrozen(ref)) {
        (ref as React.MutableRefObject<T | null>).current = current;
      }
    });
  }, refs);
}
