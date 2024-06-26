import Template, { IconProps } from './Template';

export default function FacebookIcon({ color = '#000', ...props }: IconProps) {
  return (
    <Template {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C18.6274 0 24 5.37259 24 12C24 18.6274 18.6274 24 12 24C5.37259 24 0 18.6274 0 12C0 5.37259 5.37259 0 12 0Z"
        fill="url(#paint0_linear_1347_8215)"
      />
      <path
        d="M13.5584 23.8965V14.6296H16.1706L16.5168 11.3681H13.5584L13.5628 9.73556C13.5628 8.88489 13.6436 8.4293 14.8653 8.4293H16.4985V5.16724H13.8858C10.7474 5.16724 9.6429 6.74934 9.6429 9.41033V11.3683H7.68652V14.6302H9.6429V23.7651C10.4051 23.917 11.193 23.9972 11.9998 23.9972C12.5209 23.9972 13.0416 23.9636 13.5584 23.8965Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1347_8215"
          x1="12"
          y1="-0.218652"
          x2="12"
          y2="25.0234"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00B2FF" />
          <stop offset="1" stopColor="#006AFF" />
        </linearGradient>
      </defs>
    </Template>
  );
}
