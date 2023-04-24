import data from "../posts.json";

export function getPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.public);
    }, Math.random() * 3000);
  });
}
