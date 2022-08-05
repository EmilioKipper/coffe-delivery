import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { LayoutContainer } from './DefaultLayout.styles';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}
