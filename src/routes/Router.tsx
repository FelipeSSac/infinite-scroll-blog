import { Route, Switch } from 'react-router-dom';

import { InfiniteScroll } from '../pages/InfiniteScroll';
import { NewArticle } from '../pages/NewArticle';
import { SingleArticle } from '../pages/SingleArticle';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={InfiniteScroll} />
      <Route exact path="/article/add" component={NewArticle} />
      <Route exact path="/article/:id" component={SingleArticle} />
    </Switch>
  );
}
