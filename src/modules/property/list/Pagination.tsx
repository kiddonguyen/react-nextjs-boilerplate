/**
 * Renders a pagination component.
 *
 * @return {} - The JSX element representing the pagination component.
 */
export function Pagination(): JSX.Element {
  return (
    <div aria-label="pagination" className="flex items-center justify-between">
      <p className="text-gray80">Showing 1 to 10 Properties</p>
      <div className="flex items-center gap-[10px]">
        <button className="w-9 h-9 rounded-lg flex items-center justify-center bg-primary text-white">
          1
        </button>
        <button className="w-9 h-9 rounded-lg flex items-center justify-center text-gray80">
          2
        </button>
      </div>
    </div>
  );
}
