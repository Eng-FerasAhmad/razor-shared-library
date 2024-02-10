import { useCallback, useEffect, useState } from 'react';
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
            // colorItems.push({ key: item[0], value: item[1].toString });
        });
        setColorList(colorItems);
    }, []);

    useEffect(() => {
        generateColors();
    }, [generateColors]);

    return (
        <div data-testid="color-palette">
            {colorList.map((item) => {
                return (
                    <div key={item.key} style={{ backgroundColor: item.value }}>
                        <div>{item.key}</div>
                        <div>{item.value}</div>
                    </div>
                );
            })}
        </div>
    );
};
