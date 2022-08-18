import { Color, Icon, IconContainer } from './styles';

interface CircleIconProps {
  text?: string;
  children: React.ReactNode;
  color: Color;
}

export function CircleIcon({ children, text, color }: CircleIconProps) {
  return (
    <IconContainer>
      <Icon color={color}>{children}</Icon>
      {text}
    </IconContainer>
  );
}
