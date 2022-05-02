import logo from '../static/svg/logo.svg';
import logoInverted from '../static/svg/logoInverted.svg';

interface Props {
  variant?: 'normal' | 'inverted';
  width?: string;
  className?: string;
}

const Logo = ({ variant = 'normal', width = '6.25rem', className }: Props) => (
  <img
    className={className}
    style={{ width }}
    src={variant === 'normal' ? logo : logoInverted}
    alt="logo"
  />
);

export default Logo;
