import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "5b5846ad635090b78d986a3fc3130621",
    language: "ko-KR",
  },
});

export default instance;
