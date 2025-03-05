import { FC } from "react";

interface PaginationProps {
  limit: number;
  offset: number;
  setOffset: (newOffset: number) => void;
  totalFilteredItems: number;
}

const Pagination: FC<PaginationProps> = ({ limit, offset, setOffset, totalFilteredItems }) => {
  const totalPages = Math.ceil(totalFilteredItems / limit);
  const currentPage = Math.floor(offset / limit) + 1;

  return (
    <div className="flex justify-between space-x-2 m-6 mb-6 items-center">
      <button 
        className="border px-4 py-2 rounded disabled:opacity-0 bg-amber-200" 
        onClick={() => setOffset(offset - limit)} 
        disabled={offset === 0}
      >
        Prev
      </button>

      <span className="font-bold">
        Page {currentPage} of {totalPages}
      </span>

      <button 
        className="border px-4 py-2 rounded disabled:opacity-50 bg-amber-200" 
        onClick={() => setOffset(offset + limit)} 
        disabled={offset + limit >= totalFilteredItems}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
