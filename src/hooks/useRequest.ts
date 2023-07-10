import { useEffect, useState } from "react";
import { request } from "@/config/axios";
import { AxiosResponse } from "axios";

export function useRequest<T>(method: string, url: string, params?: null, headers?: {}) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchCount, setFetchCount] = useState(0);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        setLoading(true);
        setError(null);
        const response: AxiosResponse<T> = await request({ method, url, params, headers });
        setData(response.data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
        setFetchCount((prev) => prev + 1);
      }
    };

    makeRequest();
  }, [method, url, params, headers]);

  return {
    data,
    loading,
    error,
    fetchCount,
  };
}
