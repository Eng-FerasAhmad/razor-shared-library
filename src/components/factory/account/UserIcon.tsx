import { ReactElement } from 'react';

interface SignUpIconProps {
    size?: number;
}

export default function UserIcon({ size = 24 }: SignUpIconProps): ReactElement {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18 18C22.1421 18 25.5 14.6421 25.5 10.5C25.5 6.35786 22.1421 3 18 3C13.8579 3 10.5 6.35786 10.5 10.5C10.5 14.6421 13.8579 18 18 18Z"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                opacity="0.8"
                d="M30.885 33C30.885 27.195 25.11 22.5 18 22.5C10.89 22.5 5.11499 27.195 5.11499 33"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
