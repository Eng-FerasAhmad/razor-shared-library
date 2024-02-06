import { useCallback, useEffect, useState } from 'react';
import { ColorPaletteContainer, ColorItemWrapper } from './styles';
import { color } from 'src/shared/color';

interface Color {
    key: string;
    value: string;
}
export const ColorPalette = (): JSX.Element => {
    const [colorList, setColorList] = useState<Color[]>([]);

    const generateColors = useCallback(() => {
        const colorItems: Color[] = [];

        Object.entries(color).forEach((item) => {
            colorItems.push({ key: item[0], value: item[1] });
        });
        setColorList(colorItems);
    }, []);

    useEffect(() => {
        generateColors();
    }, [generateColors]);

    return (
        <ColorPaletteContainer data-testid="color-palette">
            {colorList.map((item) => {
                return (
                    <ColorItemWrapper
                        key={item.key}
                        style={{ backgroundColor: item.value }}
                    >
                        <div>{item.key}</div>
                        <div>{item.value}</div>
                    </ColorItemWrapper>
                );
            })}
        </ColorPaletteContainer>
    );
};
