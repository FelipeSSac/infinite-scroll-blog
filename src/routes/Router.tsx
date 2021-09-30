import { Route, Switch } from 'react-router-dom';

import { InfiniteScrollContent } from '../components/molecule/InfiniteScrollContent';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={InfiniteScrollContent} />
    </Switch>
  );
}
