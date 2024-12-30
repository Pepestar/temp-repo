interface Post {
  id: number;
  title: string;
  body: string;
  cover: string; // A propriedade 'cover' será adicionada ao post
}

interface Photo {
  url: string;
}

export const loadPosts = async (): Promise<Post[]> => {
  const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
  const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos");

  // Aguarda a resposta de ambos os fetches
  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
  
  // Converte as respostas em JSON
  const postsJson: { id: number; title: string; body: string }[] = await posts.json();
  const photosJson: Photo[] = await photos.json();

  // Mapeia os posts e adiciona a propriedade 'cover'
  const postsAndPhotos = postsJson.map((post, index) => {
    return { ...post, cover: photosJson[index].url };
  });

  return postsAndPhotos;
};
