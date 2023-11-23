import { ITEMS_PER_PAGE } from "@/constants/general.const";
import { twMerge } from "tailwind-merge";
/**
 * Renders a pagination component.
 *
 * @return {} - The JSX element representing the pagination component.
 */
export function Pagination({
  page,
  setPage,
  total = 0,
}: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  total: number;
}): JSX.Element {
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);
  return (
    <div aria-label="pagination" className="flex items-center justify-between">
      <p className="text-gray80">
        Showing {ITEMS_PER_PAGE * page - 1} to {page * ITEMS_PER_PAGE} Properties
      </p>
      <div className="flex items-center gap-[10px]">
        {Array(totalPages)
          .fill(0)
          .map((item, index) => (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              className={twMerge(
                page === index + 1
                  ? "bg-primary text-white pointer-events-none"
                  : "",
                "w-9 h-9 rounded-lg flex items-center justify-center"
              )}
            >
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  );
}
