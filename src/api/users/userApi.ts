import axiosInstance from "../../config/axiosInstance";
import type { GetUsersParams } from "./usersTypes";

export const getAllUsers = async (params?: GetUsersParams): Promise<any[]> => {
  const response = await axiosInstance.get("/users", { params });
  return response.data;
};
