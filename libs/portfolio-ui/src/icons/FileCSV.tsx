import Template, { IconProps } from './Template';

export default function FileCSV({
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <Template color={color} {...props}>
      <g clipPath="url(#clip0_1937_15113)">
        <path
          d="M7.5 18.8316C7.30866 19.0392 7.07692 19.2056 6.81899 19.3206C6.56105 19.4355 6.28236 19.4966 6 19.5C4.75687 19.5 3.75 18.3244 3.75 16.875C3.75 15.4256 4.75687 14.25 6 14.25C6.28236 14.2534 6.56105 14.3145 6.81899 14.4294C7.07692 14.5444 7.30866 14.7108 7.5 14.9184"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.1156 14.3998C13.1156 14.3998 10.3565 13.6704 10.1343 15.431C9.91214 17.1916 13.7371 16.3798 13.4887 18.311C13.2571 20.1073 10.5093 19.3423 10.5093 19.3423"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 10.5V3.75C4.5 3.55109 4.57902 3.36032 4.71967 3.21967C4.86032 3.07902 5.05109 3 5.25 3H14.25L19.5 8.25V10.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.25 3V8.25H19.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.75 14.25L17.625 19.5L19.5 14.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </Template>
  );
}
