import { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import NewPost from '../../assets/images/new-post.png';
import { ReactComponent as Pen } from '../../assets/images/pen.svg';
import { ErrorModal } from '../../components/atom/ErrorModal';
import { api } from '../../services/api';

import { Container } from './styles';

interface INewPostFormData {
  title: string;
  author: string;
  authorEmail: string;
  article: string;
  imageUrl: string;
  date: string;
}

export default function NewArticle() {
  const history = useHistory();

  const [showModal, setShowModal] = useState(false);
  const [NewPostFormData, setNewPostFormData] = useState({} as INewPostFormData);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    if (name === 'article') {
      const date = `${new Date()}`;

      setNewPostFormData((prevState) => ({
        ...prevState,
        date,
      }));
    }

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
      }).catch((error) => {
        setShowModal(true);
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
              placeholder="Fill the title"
              value={NewPostFormData.title}
              onChange={handleInputChange}
              className="new-article__input"
              required
            />
          </label>
          <label className="new-article__label">
            Author
            <input
              type="text"
              name="author"
              placeholder="Fill the author name"
              value={NewPostFormData.author}
              onChange={handleInputChange}
              className="new-article__input"
              required
            />
          </label>
          <label className="new-article__label">
            Image URL
            <input
              type="text"
              name="imageUrl"
              placeholder="Fill the image URL"
              value={NewPostFormData.imageUrl}
              onChange={handleInputChange}
              className="new-article__input"
              required
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
              required
            />
          </label>
          <button className="new-article__button" type="submit">
            <Pen className="new-article__button-icon" />
            Create Post
          </button>
        </form>
        {showModal && (
          <ErrorModal toggle={setShowModal} />
        )}
      </article>
    </Container>
  );
}
