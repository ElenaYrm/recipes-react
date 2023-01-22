import { NavLink } from 'react-router-dom';
import { INavItem } from '../Nav';

interface NavItemProps extends INavItem {
  className: string;
  activeClass: string;
}

function NavItem({ src, title, className, activeClass }: NavItemProps) {
  return (
    <li className={className}>
      <NavLink to={src} className={({ isActive }) => (isActive ? activeClass : '')}>
        {title}
      </NavLink>
    </li>
  );
}

export default NavItem;
