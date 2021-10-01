import { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import NewPost from '../../assets/images/new-post.png';
import { ReactComponent as Pen } from '../../assets/images/pen.svg';
import { api } from '../../services/api';

import { Container } from './styles';

interface INewPostFormData {
  title: string;
  author: string;
  authorEmail: string;
  article: string;
  imageUrl: string;
}

export default function NewArticle() {
  const history = useHistory();

  const [NewPostFormData, setNewPostFormData] = useState({} as INewPostFormData);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setNewPostFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormNewArticleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    api.post('/articles', NewPostFormData)
      .then((response) => {
        const { id } = response.data;

        history.push(`/article/${id}`);
      });
  };

  return (
    <Container>
      <article className="new-article__article">
        <form
          onSubmit={handleFormNewArticleSubmit}
          className="new-article__form"
        >
          <img
            src={NewPost}
            alt="New post"
            className="new-article__image"
          />
          <h1 className="new-article__title">New Post</h1>
          <label className="new-article__label">
            Title
            <input
              type="text"
              name="title"
              value={NewPostFormData.title}
              onChange={handleInputChange}
              className="new-article__input"
            />
          </label>
          <label className="new-article__label">
            Author
            <input
              type="text"
              name="author"
              value={NewPostFormData.author}
              onChange={handleInputChange}
              className="new-article__input"
            />
          </label>
          <label className="new-article__label">
            Image URL
            <input
              type="text"
              name="imageUrl"
              value={NewPostFormData.imageUrl}
              onChange={handleInputChange}
              className="new-article__input"
            />
          </label>
          <label className="new-article__label">
            Post
            <textarea
              placeholder="Post..."
              name="article"
              value={NewPostFormData.article}
              onChange={handleInputChange}
              className="new-article__textarea"
            />
          </label>
          <button className="new-article__button" type="submit">
            <Pen className="new-article__button-icon" />
            Create Post
          </button>
        </form>
      </article>
    </Container>
  );
}
