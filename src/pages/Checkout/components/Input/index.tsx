import { InputBase } from './styles';

type Props = React.ComponentPropsWithoutRef<'input'> & {
  ref?: React.ForwardedRef<HTMLInputElement>;
};

export function Input(props: Props) {
  return <InputBase {...props} />;
}
