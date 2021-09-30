import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { LoadingIcon } from '../../components/atom/LoadingIcon';

import { IArticleData } from '../InfiniteScroll';
import { ensureStringDate } from '../../helpers/ensurers';
import { api } from '../../services/api';

import { Container } from './styles';

interface IParams {
  id: string;
}

export default function SingleArticle() {
  const { id } = useParams<IParams>();

  const [articleData, setArticleData] = useState({} as IArticleData);
  const [isLoading, setIsLoading] = useState(false);

  const stringDate = ensureStringDate(articleData.date);

  useEffect(() => {
    setIsLoading(true);
    api.get(`/articles/${id}`)
      .then((response) => {
        setArticleData(response.data);
      }).finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Container>
      {isLoading ? (
        <div className="single-article__loading-container">
          <LoadingIcon yellow />
        </div>
      ) : (
        <article className="single-article__article">
          <div className="single-article__header">
            <img
              src={articleData.imageUrl}
              alt={articleData.title}
              className="single-article__image"
            />
            <div className="single-article__details">
              <h3 className="single-article__date">{stringDate}</h3>
              <h2 className="single-article__author">{articleData.author}</h2>
              <h1 className="single-article__title">{articleData.title}</h1>
            </div>
          </div>
          <div
            className="single-article__body"
            dangerouslySetInnerHTML={{ __html: articleData.article }}
          />
        </article>
      )}
    </Container>
  );
}
