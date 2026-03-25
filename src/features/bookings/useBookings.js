import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { useEffect } from "react";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  // Filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // Sort
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // Pagination
  const parsedPage = Number(searchParams.get("page"));
  const page = Number.isFinite(parsedPage) && parsedPage > 0 ? parsedPage : 1;

  // Query
  const {
    isLoading,
    data: { data: bookings, count } = { data: [], count: 0 },
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  // Calculate pageCount after getting count
  const safeCount = count ?? 0;
  const pageCount = Math.max(1, Math.ceil(safeCount / PAGE_SIZE));

  // Keep URL page in valid range after filtering or deletion.
  useEffect(() => {
    if (page > pageCount) {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.set("page", "1");
      setSearchParams(nextParams, { replace: true });
    }
  }, [page, pageCount, searchParams, setSearchParams]);

  // Pre-fetching
  useEffect(() => {
    if (page < pageCount)
      queryClient.prefetchQuery({
        queryKey: ["bookings", filter, sortBy, page + 1],
        queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
      });

    if (page > 1)
      queryClient.prefetchQuery({
        queryKey: ["bookings", filter, sortBy, page - 1],
        queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
      });
  }, [queryClient, filter, sortBy, page, pageCount]);

  return { isLoading, error, bookings, count: safeCount };
}
