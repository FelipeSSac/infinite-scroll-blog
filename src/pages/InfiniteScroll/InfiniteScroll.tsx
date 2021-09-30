import { useEffect, useRef, useState } from 'react';
import { useOnScreen } from '../../helpers/hooks';

import { MainArticle } from '../../components/atom/MainArticle';
import { LoadingIcon } from '../../components/atom/LoadingIcon';

import { IArticleData } from '.';
import { api } from '../../services/api';

import { Container } from './styles';

export default function InfiniteScroll() {
  const infiniteRef = useRef(null);
  const isOnScreen = useOnScreen(infiniteRef);

  const [articlesData, setArticlesData] = useState([] as Array<IArticleData>);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);

  const ensureApiData = () => {
    setIsLoading((prevState) => !prevState);

    api.get(`/articles?_page=${currentPage}&_limit=6`)
      .then((response) => {
        setArticlesData((prevState) => ([
          ...prevState,
          ...response.data,
        ]));

        setIsLoading((prevState) => !prevState);
      });
  };

  useEffect(() => {
    setCurrentPage(currentPage + 1);

    ensureApiData();
  }, [isOnScreen]);

  return (
    <Container>
      {articlesData?.map((item, i) => {
        const index = i % 6;
        return (
          <MainArticle articleContent={item} index={index} />
        );
      })}
      {isLoading && (
        <div className="infinite-scroll__loader">
          <LoadingIcon />
        </div>
      )}
      <div ref={infiniteRef} className="infinite-scroll__pointer" />
    </Container>
  );
}
