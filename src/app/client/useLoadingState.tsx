"use client";

import { useState, useEffect } from "react";

const useLoadingState = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return { loading };
};

export default useLoadingState;
