import isPropValid from '@emotion/is-prop-valid';

const exchangeToRem = (pixel: number, base = 16): string =>
    `${pixel / base}rem`;

export const pixelToRem = (...pixel: Array<number>): string =>
    pixel.map((px: number) => exchangeToRem(px)).join(' ');

export const getPastedValue = (event: ClipboardEvent): string | undefined => {
    // eslint-disable-next-line
    const clipboardData = event.clipboardData || (window as any).clipboardData;
    const pastedValue = clipboardData.getData('Text');

    return pastedValue || undefined;
};

export const shouldForwardProp = (
    propName: string,
    target: unknown
): boolean => {
    // function needed for styled component to forward props to custom wrappers
    if (typeof target === 'string') {
        // For HTML elements, forward the prop if it is a valid HTML attribute
        return isPropValid(propName);
    }
    // For other elements, forward all props
    return true;
};
