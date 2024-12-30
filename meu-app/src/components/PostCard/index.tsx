import "./styles.css";

type PostCardProps = {
  title: string;
  body: string;
  id: number;
  cover: string;
};

export const PostCard: React.FC<PostCardProps> = ({ title, body, cover }) => {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
};
