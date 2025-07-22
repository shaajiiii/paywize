export type Column = {
  id: string;
  label: string;
  align?: "left" | "right" | "center" | "inherit" | "justify";
  render?: (value: any, row: any) => React.ReactNode;
};

export type CustomTableProps = {
  columns: Column[];
  rows: any[];
  loading?: boolean;
  total?: number;
  page?: number;
  rowsPerPage?: number;
  onPageChange?: (newPage: number) => void;
  onRowsPerPageChange?: (rowsPerPage: number) => void;
  contain?: boolean;
};
