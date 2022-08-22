import { Route, Routes, Navigate } from 'react-router-dom';
import { DefaultLayout } from '../layouts/Default';
import { Checkout } from '../pages/Checkout';
import { Home } from '../pages/Home';
import { Success } from '../pages/Success';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="success" element={<Success />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
