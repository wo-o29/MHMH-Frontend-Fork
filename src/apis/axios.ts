import axios from "axios";

export const instance = axios.create({
  baseURL: "", // 추후 Base Url 추가 예정
});
