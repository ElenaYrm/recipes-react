import { NavLink } from 'react-router-dom';
import { INavItem } from '../Nav';

interface NavItemProps extends INavItem {
  className: string;
  activeClass: string;
  onClick?: () => void;
}

function NavItem({ src, title, className, activeClass, onClick }: NavItemProps) {
  return (
    <li className={className} onClick={onClick}>
      <NavLink to={src} className={({ isActive }) => (isActive ? activeClass : '')}>
        {title}
      </NavLink>
    </li>
  );
}

export default NavItem;
