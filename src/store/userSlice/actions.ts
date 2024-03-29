import { userService } from "@/services/UserService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "fetch/users",
  async (query: Record<string, string>, thunkAPI) => {
    try {
      const response = await userService.getMany(query);
      return response;
    } catch (error: any) {
      const errorMessage = error.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const updateUser = createAsyncThunk(
  "update/user",
  async (
    data: { updatedFields: Record<string, any>; userId: string },
    thunkAPI
  ) => {
    try {
      const { updatedFields, userId } = data;
      const response = await userService.updateOne(updatedFields, userId);
      return response;
    } catch (error: any) {
      const errorMessage = error.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
export const createUser = createAsyncThunk(
  "create/user",
  async (body: Record<string, string>, thunkAPI) => {
    try {
      const response = await userService.createOne(body);
      return response;
    } catch (error: any) {
      const errorMessage = error.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
export const getSingleUser = createAsyncThunk(
  "getSingle/user",
  async (id: string, thunkAPI) => {
    try {
      const response = await userService.getOne({ id });
      return response;
    } catch (error: any) {
      const errorMessage = error.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
export const deleteUser = createAsyncThunk(
  "delete/user",
  async (id: string, thunkAPI) => {
    try {
      const response = await userService.deleteOne(id);
      return response;
    } catch (error: any) {
      const errorMessage = error.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
