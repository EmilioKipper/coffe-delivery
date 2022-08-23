import { Outlet, useLocation, Navigate } from 'react-router-dom';

interface AccessRouteProps {
  accessFrom: string;
}

interface StateProps {
  from: string;
}

export function AccessRoute({ accessFrom = '' }: AccessRouteProps) {
  const { state } = useLocation();
  const { from } = (state as StateProps) || {};

  return accessFrom === from ? (
    <Outlet />
  ) : (
    <Navigate to={from ?? '/'} replace />
  );
}
