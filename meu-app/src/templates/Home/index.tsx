import { Component } from "react";
import "./styles.css";
import { loadPosts } from "../../utils.ts/load-posts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

// Define o tipo Post corretamente, incluindo a propriedade 'cover'
interface Post {
  id: number;
  title: string;
  body: string;
  cover: string; // A propriedade 'cover' foi corrigida
}

interface HomeState {
  posts: Post[];
  allPosts: Post[];
  page: number;
  postPerPage: number;
  searchValue: string;
}

export class Home extends Component<object, HomeState> {
  state: HomeState = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 5,
    searchValue: "",
  };

  async componentDidMount(): Promise<void> {
    await this.loadPosts();
  }

  loadPosts = async (): Promise<void> => {
    const { page, postPerPage } = this.state;
    const postsAndPhotos = await loadPosts(); // Espera-se um array de Post
    this.setState({
      posts: postsAndPhotos.slice(page, postPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = (): void => {
    const { page, postPerPage, allPosts, posts } = this.state;
    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);
    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, page, postPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postPerPage >= allPosts.length;

    const filteredPosts = searchValue
      ? allPosts.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

    return (
      <section className="container">
        <div className="search-container">
          {!!searchValue && (
            <>
              <h1>Search value: {searchValue}</h1>
            </>
          )}
          <TextInput
            searchValue={searchValue}
            handleChange={this.handleChange}
          />
        </div>
        <br /> <br />
        {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
        {filteredPosts.length === 0 && <h1>Não existem posts</h1>}
        <div className="button-container">
          {!searchValue && (
            <Button
              text="Load more posts"
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}

export default Home;
