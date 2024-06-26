import Template, { IconProps } from './Template';

export function Trophy({ variant = 'line', ...props }: IconProps) {
  return (
    <Template {...props}>
      {variant === 'line' && (
        <path
          d="M13 16.938V19H18V21H6V19H11V16.938C9.0667 16.6942 7.28882 15.7533 6 14.2917C4.71119 12.8302 4.00003 10.9486 4 9V3H20V9C20 10.9486 19.2888 12.8302 18 14.2917C16.7112 15.7533 14.9333 16.6942 13 16.938ZM6 5V9C6 10.5913 6.63214 12.1174 7.75736 13.2426C8.88258 14.3679 10.4087 15 12 15C13.5913 15 15.1174 14.3679 16.2426 13.2426C17.3679 12.1174 18 10.5913 18 9V5H6ZM1 5H3V9H1V5ZM21 5H23V9H21V5Z"
          fill="currentColor"
        />
      )}

      {variant === 'solid' && (
        <path
          d="M13 16.938V19H18V21H6V19H11V16.938C9.0667 16.6942 7.28882 15.7533 6 14.2917C4.71119 12.8302 4.00003 10.9486 4 9V3H20V9C20 10.9486 19.2888 12.8302 18 14.2917C16.7112 15.7533 14.9333 16.6942 13 16.938ZM1 5H3V9H1V5ZM21 5H23V9H21V5Z"
          fill="currentColor"
        />
      )}
    </Template>
  );
}

export default Trophy;
