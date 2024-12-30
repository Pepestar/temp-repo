import { PostCard } from "../PostCard";
import "./styles.css";

type Post = {
  id: number;
  title: string;
  body: string;
  cover: string;
};

type PostsProps = {
  posts: Post[];
};

export const Posts: React.FC<PostsProps> = ({ posts }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard
        key={post.id}
        title={post.title}
        body={post.body}
        id={post.id}
        cover={post.cover}
      />
    ))}
  </div>
);
