import { useEffect, useState } from 'react';
import { ColorPaletteContainer, ColorItemWrapper } from './styles';
import { color } from 'src/shared/color';

interface Color {
    key: string;
    value: string;
}
export default function ColorPalette(): JSX.Element {
    const [colorList, setColorList] = useState<Color[]>([]);

    useEffect(() => {
        const colorItems = [];
        for (const [key, value] of Object.entries(color)) {
            colorItems.push({ key, value });
        }
        setColorList(colorItems);
    }, []);

    return (
        <ColorPaletteContainer>
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
}
