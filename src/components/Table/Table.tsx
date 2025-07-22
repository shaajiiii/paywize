import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  TableFooter,
  TablePagination,
  Box,
  Chip,
} from "@mui/material";
import type { CustomTableProps } from "./types";


export const CustomTable: React.FC<CustomTableProps> = ({
  columns,
  rows,
  loading = false,
  total = 0,
  page = 0,
  rowsPerPage = 10,
  onPageChange,
  onRowsPerPageChange,
  contain,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col.id} align={col.align || "left"}>
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={columns.length} align="center">
                <Box py={4}>
                  <CircularProgress />
                </Box>
              </TableCell>
            </TableRow>
          ) : rows.length > 0 ? (
            rows.map((row, i) => (
              <TableRow key={row.id ?? i}>
                {columns.map((col) => (
                  <TableCell key={col.id} align={col.align || "left"}>
                    {col.id === "is_active" ? (
                      <Chip
                        label={row[col.id] ? "Active" : "Inactive"}
                        color={row[col.id] ? "success" : "default"}
                        size="small"
                        // variant="outlined"
                      />
                    ) : col.render ? (
                      col.render(row[col.id], row)
                    ) : (
                      row[col.id]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} align="center">
                No data found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              count={total}
              page={page}
              rowsPerPage={rowsPerPage}
              onPageChange={(_, newPage) => onPageChange?.(newPage)}
              onRowsPerPageChange={(e) =>
                onRowsPerPageChange?.(parseInt(e.target.value, 10))
              }
              // rowsPerPageOptions={[5, 10, 25, 50]}
              rowsPerPageOptions={contain ? [] : [5, 10, 25, 50]}
              labelRowsPerPage={contain ? "" : undefined}
              //   showFirstButton
              //   showLastButton
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
