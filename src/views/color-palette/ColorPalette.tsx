import { useEffect, useState } from 'react';
import { color } from 'src/shared/color';
import { ColorItemWrapper } from 'src/views/color-palette/styles';
import { ColorPaletteContainer } from './styles';

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
                    <ColorItemWrapper key={item.key} style={{ backgroundColor: item.value }}>
                        <div>{item.key}</div>
                        <div>{item.value}</div>
                    </ColorItemWrapper>
                )
            })}
        </ColorPaletteContainer>
    );
}
