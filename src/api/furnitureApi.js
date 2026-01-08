import api from "./axios";

// ✅ WORKING APIs
export const getSofas = () => api.get("/sofa");
export const getBeds = () => api.get("/bed");

// 🚧 NOT AVAILABLE YET (commented safely)
export const getChairs = () => Promise.resolve({ data: [] });
export const getLamps = () => Promise.resolve({ data: [] });

// Admin POST (MockAPI supports POST)
export const addFurnitureApi = (data) =>
  api.post(`/${data.category}`, data);
