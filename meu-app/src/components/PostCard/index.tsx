import "./styles.css";

export const PostCard = ({ title, body, id, cover }) => {
  //ou posso fazer.. const post = props.post
  // ou posso fazer com destructuring.. const {post} = props
  // ou posso fazer destructuring direto na props, assim como estou fazendo logo acima na linha 1
  // ou passar as propriedades de uma vez assim como title, body, id, cover

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
