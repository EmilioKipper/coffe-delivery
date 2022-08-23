import { Route, Routes, Navigate } from 'react-router-dom';
import { DefaultLayout } from '../layouts/Default';
import { Checkout } from '../pages/Checkout';
import { Home } from '../pages/Home';
import { Success } from '../pages/Success';
import { AccessRoute } from './AccessRoute';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route element={<AccessRoute accessFrom="/" />}>
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route element={<AccessRoute accessFrom="/checkout" />}>
          <Route path="success" element={<Success />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
