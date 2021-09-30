import { useHistory } from 'react-router-dom';
import { IArticleData } from '../../../pages/InfiniteScroll';

import { ReactComponent as DbArrow } from '../../../assets/images/db-arrow.svg';
import { Container } from './styles';
import { ensureSummary } from '../../../helpers/ensurers';

interface IMainArticleProps {
  articleContent: IArticleData,
  index: number;
}

export default function MainArticle({
  articleContent,
  index,
}:IMainArticleProps) {
  const history = useHistory();

  const summary = ensureSummary(articleContent.article);

  const handleShowArticle = (id: string) => {
    history.push(`/article/${id}`);
  };

  return (
    <Container className={`main-article--${index}`}>
      <div className="main-article-container">
        <img
          src={articleContent.imageUrl}
          alt={articleContent.title}
          className="main-article__image"
        />
        <div className="main-article__content">
          <h2 className="main-article__author">
            {articleContent.author}
          </h2>
          <h1 className="main-article__title">
            {articleContent.title}
          </h1>
          <dd
            className="main-article__summary"
          >
            {summary}
          </dd>
          <button
            type="button"
            className="main-article__show-button"
            onClick={() => handleShowArticle(articleContent.id)}
          >
            <DbArrow className="main-article__arrow-icon" />
          </button>
        </div>
      </div>
    </Container>
  );
}
