import { PropsWithChildren } from 'react';
import { CardProps } from './types';

export const Card = ({
    children,
}: PropsWithChildren<CardProps>): JSX.Element => {
    return (
            <div data-testid="card" style={{backgroundColor: 'red', width: 100, height: 100, borderRadius: 5}} >
                {children}
            </div>
    );
}
