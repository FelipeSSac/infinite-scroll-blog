import { Route, Switch } from 'react-router-dom';

import { InfiniteScroll } from '../pages/InfiniteScroll';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={InfiniteScroll} />
    </Switch>
  );
}
