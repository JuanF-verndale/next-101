import { useState } from "react";

export const useIncrement = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const increment = async (number: number): Promise<number | void> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/increment/${number}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error incrementing number");
      }

      return data.result;
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { increment, loading, error };
};
