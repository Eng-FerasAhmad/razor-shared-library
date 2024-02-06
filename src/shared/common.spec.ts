import { pixelToRem, shouldForwardProp } from './common';

describe('common Utils', () => {
    test('pixelToRem', () => {
        expect(pixelToRem(10)).toBe('0.625rem');
        expect(pixelToRem(10, 10)).toBe('0.625rem 0.625rem');
        expect(pixelToRem(10, 10, 10)).toBe('0.625rem 0.625rem 0.625rem');
        expect(pixelToRem(10, 10, 10, 10)).toBe(
            '0.625rem 0.625rem 0.625rem 0.625rem'
        );
    });

    test('shouldForwardProp', () => {
        expect(shouldForwardProp('color', '')).toBe(true);
    });
});
