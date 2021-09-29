import { IArticleData } from '../../molecule/InfiniteScrollContent';

import { ReactComponent as DbArrow } from '../../../assets/images/db-arrow.svg';
import { Container } from './styles';

interface IMainArticleProps {
  articleContent: IArticleData,
  index: number;
}

export default function MainArticle({ articleContent, index }:IMainArticleProps) {
  const summary = articleContent.article
    .replace('<p>', '')
    .split('</p>')[0]
    .split('.')
    .slice(0, 2)
    .join('.')
    .concat('.');

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
          <button type="button" className="main-article__show-button">
            <DbArrow />
          </button>
        </div>
      </div>
    </Container>
  );
}
