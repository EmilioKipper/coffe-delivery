import { Link as BaseLink, LinkProps, useLocation } from 'react-router-dom';

export function Link({ state, ...props }: LinkProps) {
  const { pathname } = useLocation();

  return (
    <BaseLink
      {...props}
      state={{
        ...state,
        from: pathname,
      }}
    />
  );
}
