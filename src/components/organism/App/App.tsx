import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../../assets/styles/GlobalStyles';
import { Layout } from '../Layout';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout />
    </BrowserRouter>
  );
}
