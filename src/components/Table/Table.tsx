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
  Stack,
  Avatar,
  Typography,
} from "@mui/material";
import type { CustomTableProps } from "./types";
import { ThreeDotMenu } from "../Common/Dropdown";

export const CustomTable: React.FC<CustomTableProps> = ({
  columns,
  rows,
  loading = false,
  total = 0,
  page = 1,
  rowsPerPage = 5,
  onPageChange,
  onRowsPerPageChange,
  contain,
  showActions,
  hidePagination,
}) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ borderTop: "none", boxShadow: "none" }}
    >
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col.id} align={col.align || "left"}>
                {col.label}
              </TableCell>
            ))}
            {showActions && <TableCell align={"right"}>Actions</TableCell>}
          </TableRow>
        </TableHead>

        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell
                colSpan={columns.length + (showActions ? 1 : 0)}
                align="center"
              >
                <Box>
                  <Box
                    height={58.3 * rowsPerPage}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <CircularProgress />
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ) : rows.length > 0 ? (
            rows.map((row, i) => (
              <TableRow key={row.id ?? i}>
                {columns.map((col) => (
                  <TableCell key={col.id} align={col.align || "left"}>
                    {col.id === "name" ? (
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Avatar
                          alt={row.name}
                          src={row.avatar || undefined} // assumes avatar URL is in row.avatarUrl
                          sx={{ width: 32, height: 32 }}
                        />
                        <Typography variant="body2">{row.name}</Typography>
                      </Stack>
                    ) : col.id === "is_active" ? (
                      <Chip
                        label={row[col.id] ? "Active" : "Inactive"}
                        color={row[col.id] ? "success" : "default"}
                        size="small"
                        sx={
                          row[col.id]
                            ? {
                                backgroundColor: "#e0f2ff", // light blue background
                                color: "#0288d1", // blue text
                                fontWeight: 500,
                              }
                            : {}
                        }
                      />
                    ) : col.render ? (
                      col.render(row[col.id], row)
                    ) : (
                      row[col.id]
                    )}
                  </TableCell>
                ))}
                {showActions && (
                  <TableCell align={"right"}>
                    <ThreeDotMenu />
                  </TableCell>
                )}
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

        {!hidePagination && (
          <TableFooter>
            <TableRow>
              <TablePagination
                sx={{
                  borderBottom: "none", // override bottom border
                }}
                count={total}
                page={page - 1}
                onPageChange={(_, newPage) => onPageChange?.(newPage + 1)}
                rowsPerPage={rowsPerPage}
                // onPageChange={(_, newPage) => onPageChange?.(newPage)}
                onRowsPerPageChange={(e) =>
                  onRowsPerPageChange?.(parseInt(e.target.value, 10))
                }
                // rowsPerPageOptions={[5, 10, 25, 50]}
                rowsPerPageOptions={contain ? [] : [5, 10]}
                labelRowsPerPage={contain ? "" : undefined}
                //   showFirstButton
                //   showLastButton
              />
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </TableContainer>
  );
};
