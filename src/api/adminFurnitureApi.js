import axios from "./axios";

/* =====================================
   CATEGORY → ENDPOINT MAPPER
===================================== */
const getEndpoint = (category) => {
  if (category === "sofa") return "/sofa";
  if (category === "bed") return "/bed";
  throw new Error("Invalid category");
};

/* =====================================
   GET – fetch all admin furniture
===================================== */
export const getAdminFurniture = async () => {
  const [sofaRes, bedRes] = await Promise.all([
    axios.get("/sofa"),
    axios.get("/bed"),
  ]);

  return [
    ...sofaRes.data.map((item) => ({ ...item, category: "sofa" })),
    ...bedRes.data.map((item) => ({ ...item, category: "bed" })),
  ];
};

/* =====================================
   POST – add new furniture
===================================== */
export const addAdminFurniture = (category, data) => {
  return axios.post(getEndpoint(category), data);
};

/* =====================================
   PUT – update furniture
===================================== */
export const updateAdminFurniture = (category, id, data) => {
  return axios.put(`${getEndpoint(category)}/${id}`, data);
};

/* =====================================
   DELETE – remove furniture
===================================== */
export const deleteAdminFurniture = (category, id) => {
  return axios.delete(`${getEndpoint(category)}/${id}`);
};
