import { Badge as ChakraBadge, BadgeProps } from '@chakra-ui/react';
interface Props
  extends Pick<BadgeProps, 'colorScheme' | 'children' | 'bg' | 'color'> {}

const Badge = ({ colorScheme = 'blackAlpha', children, ...rest }: Props) => (
  <ChakraBadge {...rest} variant={'solid'} colorScheme={colorScheme}>
    {children}
  </ChakraBadge>
);

export default Badge;
