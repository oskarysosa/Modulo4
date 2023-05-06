//import data from "../posts.json";
import axios from "axios";
import { token, url } from "./UserServices";

export function GetPosts() {
  return axios.get(url + "/act1/src", {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  });
}
export function PostLike(id) {
  return axios.post(
    url + "/posts/" + id + "/like",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    }
  );
}
