import Template, { IconProps } from './Template';

export default function FileCSV({
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <Template color={color} {...props}>
      <rect
        y="0.351562"
        width={props.width || '24'}
        height={props.height || '24'}
        rx={((props.width as number) || 24) / 2}
        fill="currentColor"
      />
      <path
        d="M12 22.3516C17.5228 22.3516 22 17.8744 22 12.3516C22 6.82871 17.5228 2.35156 12 2.35156C6.47715 2.35156 2 6.82871 2 12.3516C2 17.8744 6.47715 22.3516 12 22.3516Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 12.3516L11 14.3516L15 10.3516"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Template>
  );
}
