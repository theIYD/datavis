import {
  ColumnDef,
  Row,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useMemo, useRef } from "react";
import { JobData as data } from "../../mock";
import { Data } from "../../types";
import { useColumns } from "../../hooks";

export default function Jobs() {
  const tableContainerRef = useRef(null);
  const defaultColumns = useColumns();

  const columns = useMemo<ColumnDef<Data>[]>(
    () => defaultColumns,
    [defaultColumns]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  const { rows } = table.getRowModel();
  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    estimateSize: () => 33, //estimate row height for scrollbar dragging
    getScrollElement: () => tableContainerRef.current,
    measureElement: (element) => element?.getBoundingClientRect().height,
    overscan: 5,
  });

  const virtualItems = rowVirtualizer.getVirtualItems();
  const totalSize = rowVirtualizer.getTotalSize();

  return (
    <div
      className="border border-solid border-gray-200 rounded-lg my-4 overflow-auto relative max-h-[600px]"
      ref={tableContainerRef}
    >
      <table className="grid border-collapse border-spacing-0 table-fixed">
        <thead className="grid sticky top-0 z-10 bg-white">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="flex border-b border-solid">
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    style={{
                      width: header.getSize(),
                    }}
                    className="flex px-2 py-2 text-left"
                  >
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: " ⬆️",
                        desc: " ⬇️",
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody
          style={{
            height: `${totalSize}px`,
          }}
          className="grid relative"
        >
          {virtualItems.map((virtualRow) => {
            const row = rows[virtualRow.index] as Row<unknown>;
            return (
              <tr
                data-index={virtualRow.index}
                ref={(node) => rowVirtualizer.measureElement(node)}
                key={row.id}
                style={{
                  transform: `translateY(${virtualRow.start}px)`,
                }}
                className="flex absolute w-full border-b border-solid border-b-gray-500"
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      style={{
                        width: cell.column.getSize(),
                      }}
                      className="p-2 flex"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
