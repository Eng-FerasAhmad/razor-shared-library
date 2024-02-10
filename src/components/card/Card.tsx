import { PropsWithChildren } from 'react';
import { CardProps } from './types';

export function Card({ children }: PropsWithChildren<CardProps>): JSX.Element {
    return <div data-testid="card">{children}</div>;
}
