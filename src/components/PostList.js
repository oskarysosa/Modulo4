import Posts from "./Posts";
import imagenes from "../assets/img/Imagenes";

//date, likes, autor, title, img, comments
const post = [
  {
    autor: "Okisita",
    date: "12 hours ago",
    likes: 50,
    img: imagenes.p2,
    comments: "14 comments",
    description: "Monterrey. Ya quiero volver",
  },
  {
    autor: "Pamelita",
    date: "1 hour ago",
    likes: 25,
    img: imagenes.p1,
    comments: "5 comments",
    description: "Un amanecer en el llano",
  },
  {
    autor: "Nico",
    date: "1 day ago",
    likes: 30,
    img: imagenes.p3,
    comments: "8 comments",
    description: "Este es mi lugar favorito",
  },
  {
    autor: "Sofi",
    date: "1 day ago",
    likes: 85,
    img: imagenes.p4,
    comments: "10 comments",
    description: "Jardin Botánico",
  },
  {
    autor: "Okisita",
    date: "3 day ago",
    likes: 85,
    img: imagenes.p5,
    comments: "7 comments",
    description: "Lago de Tota",
  },
];

function PostsList() {
  return (
    <div className="flex-columns">
      {post.map((posts, i) => (
        <Posts
          key={i}
          img={posts.img}
          description={posts.description}
          comments={posts.comments}
          likes={posts.likes}
          autor={posts.autor}
          date={posts.date}
        />
      ))}
    </div>
  );
}

export default PostsList;
