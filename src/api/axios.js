import axios from "axios";

const instance = axios.create({
  baseURL: "https://695e39a42556fd22f677c61b.mockapi.io/api/fur",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
