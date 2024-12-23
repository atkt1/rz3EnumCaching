// src/lib/hooks/useDashboardInit.ts
import { useEffect, useState } from 'react';
import { useEnums } from './useEnums';

export function useDashboardInit() {
  const [isInitialized, setIsInitialized] = useState(false);
  const enums = useEnums();

  useEffect(() => {
    if (enums) {
      setIsInitialized(true);
    }
  }, [enums]);

  return {
    isInitialized,
    isLoading: !isInitialized
  };
}
