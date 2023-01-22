import { SVGProps } from 'react';
import { IconId } from '../../../types/enums';

interface IconProps extends SVGProps<SVGSVGElement> {
  id: keyof typeof IconId;
}

function Icon({ id, className, ...props }: IconProps) {
  return (
    <svg className={className} {...props}>
      <use href={`/images/sprite.svg#${IconId[id]}`} />
    </svg>
  );
}

export default Icon;
