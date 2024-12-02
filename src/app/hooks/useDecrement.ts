import { useState } from "react";

export const useDecrement = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const decrement = async (number: number): Promise<number | void> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/decrement/${number}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error decrementing number");
      }

      return data.result;
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { decrement, loading, error };
};
