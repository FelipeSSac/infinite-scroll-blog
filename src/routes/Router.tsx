import { Route, Switch } from 'react-router-dom';

import { InfiniteScroll } from '../pages/InfiniteScroll';
import { SingleArticle } from '../pages/SingleArticle';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={InfiniteScroll} />
      <Route path="/article/:id" component={SingleArticle} />
    </Switch>
  );
}
