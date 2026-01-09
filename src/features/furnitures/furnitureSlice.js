import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getSofas,
  getBeds,
  getChairs,
  getLamps,
} from "../../api/furnitureApi";

    // fetching api 

export const fetchFurniture = createAsyncThunk(
  "furniture/fetchFurniture",
  async () => {
    const [sofas, beds, chairs, lamps] = await Promise.all([
      getSofas(),
      getBeds(),
      getChairs(),
      getLamps(),
    ]);

    return [
      ...sofas.data.map((item) => ({ ...item, category: "sofa" })),
      ...beds.data.map((item) => ({ ...item, category: "bed" })),
      ...chairs.data.map((item) => ({ ...item, category: "chair" })),
      ...lamps.data.map((item) => ({ ...item, category: "lamp" })),
    ];
  }
);


const furnitureSlice = createSlice({
  name: "furniture",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },

  // admin api fetching

  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },

    updateProduct: (state, action) => {
      const { id, category, data } = action.payload;

      const index = state.products.findIndex(
        (item) => item.id === id && item.category === category
      );

      if (index !== -1) {
        state.products[index] = {
          ...state.products[index],
          ...data,
        };
      }
    },

    deleteProduct: (state, action) => {
      const { id, category } = action.payload;

      state.products = state.products.filter(
        (item) => !(item.id === id && item.category === category)
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchFurniture.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFurniture.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchFurniture.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  addProduct,
  updateProduct,
  deleteProduct,
} = furnitureSlice.actions;

export default furnitureSlice.reducer;
