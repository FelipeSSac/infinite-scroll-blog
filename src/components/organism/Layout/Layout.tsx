import { Header } from '../../molecule/Header';
import { MainContent } from '../../atom/MainContent';
import { Router } from '../../../routes';

export default function Layout() {
  return (
    <>
      <Header />
      <MainContent>
        <Router />
      </MainContent>
    </>
  );
}
