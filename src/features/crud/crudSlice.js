import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { creteUser,  deleteUser, fetchUsers, updateUser } from './crudApi';


const initialState = {
  users: [],
  isLoading: false,
  isError: "",
  error:"",
  editing:{}
};


export const fetchAsync = createAsyncThunk(
  'crud/fetchUsers',
  async () => {
    const response = await fetchUsers();
    return response;
  }
);

export const createAsync  = createAsyncThunk(
    'crud/createUser',
    async (data) => {
        const response = await creteUser(data);
        return response;
    }
)

export const updateAsync  = createAsyncThunk(
    'crud/updateUser',
    async ({id, data}) => {
        const response = await updateUser(id, data);
        return response;
    }
)

export const deleteAsync  = createAsyncThunk(
    'crud/deleteUser',
    async (id) => {
        const response = await deleteUser(id);
        return response;
    }
)







export const crudSlice = createSlice({
  name: 'crud',
  initialState,
  reducers: {
    activeUser: (state,action) => {
        state.editing = action.payload;
      },
    inactiveUser: (state) => {
        state.editing = {};
      },
  },


  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.users = action.payload;
      })
      .addCase(fetchAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.users = [];
        state.isError = true;
        state.error = action.error?.message;
      })


    

      .addCase(createAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.users.push(action.payload);
      })
      .addCase(createAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })



      .addCase(updateAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updateAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        const findIndex = state.users.findIndex((f) => 
        f.id === action.payload.id
        )
        state.users[findIndex] = action.payload;
      })
      .addCase(updateAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })



      .addCase(deleteAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.users = state.users.filter((f) => 
            f.id !== action.meta.arg
        )
      })
      .addCase(deleteAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
  },
});


export default crudSlice.reducer;
export const {activeUser, inactiveUser } = crudSlice.actions;