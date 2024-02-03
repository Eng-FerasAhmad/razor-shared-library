import { color } from 'src/shared/color';

export default function ColorPalette(): JSX.Element {
    return (
        <div style={{ margin: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: 150, height: 50, backgroundColor: color.primary }}>{color.primary}</div>
                <div style={{ width: 150, height: 50, backgroundColor: color.primaryDarker }}>{color.primaryDarker}</div>
            </div>
        
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: 150, height: 50, backgroundColor: color.success }}>{color.success}</div>
                <div style={{ width: 150, height: 50, backgroundColor: color.successDarker }}>{color.successDarker}</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: 150, height: 50, backgroundColor: color.error }} >{color.error}</div>
                <div style={{ width: 150, height: 50, backgroundColor: color.errorDarker }}>{color.errorDarker}</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: 150, height: 50, backgroundColor: color.warning }} >{color.warning}</div>
                <div style={{ width: 150, height: 50, backgroundColor: color.warningDarker }} >{color.warningDarker}</div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: 150, height: 50, backgroundColor: color.info }} >{color.info}</div>
                <div style={{ width: 150, height: 50, backgroundColor: color.infoDarker }} >{color.infoDarker}</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: 150, height: 50, backgroundColor: color.gray }} >{color.gray}</div>
                <div style={{ width: 150, height: 50, backgroundColor: color.grayDarker }} >{color.grayDarker}</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: 150, height: 50, backgroundColor: color.border }} >{color.border}</div>
                <div style={{ width: 150, height: 50, backgroundColor: color.borderLight }} >{color.borderLight}</div>
            </div>
        
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: 150, height: 50, backgroundColor: color.disabled }} >{color.disabled}</div>
                <div style={{ width: 150, height: 50, backgroundColor: color.fontDark }} >{color.fontDark}</div>
            </div>
        </div>
    );
}
