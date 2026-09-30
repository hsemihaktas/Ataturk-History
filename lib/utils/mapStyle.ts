import baseStyle from '../data/mapStyle.json';

export function getLocalizedMapStyle(language: 'tr' | 'en') {
    // Turkish vs English name resolution with graceful fallback to Latin, native name, and empty string
    const textField = language === 'tr'
        ? ['coalesce', ['get', 'name:tr'], ['get', 'name_tr'], ['get', 'name:latin'], ['get', 'name'], '']
        : ['coalesce', ['get', 'name:en'], ['get', 'name_en'], ['get', 'name:latin'], ['get', 'name'], ''];

    const style = JSON.parse(JSON.stringify(baseStyle));

    // Ensure source and font endpoints are absolute HTTPS
    if (style.glyphs && !style.glyphs.startsWith('http')) {
        style.glyphs = 'https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf';
    }

    style.layers.forEach((layer: any) => {
        // Apply language ONLY to place/geographical text label layers (not shields or numbers)
        if (layer.layout && layer.layout['text-field'] && !layer.id.includes('shield')) {
            layer.layout['text-field'] = textField;
        }

        // Simplify map: remove road clutter, minor paths, airport icons, and highway shields
        // to maintain a clean, elegant, historical archive aesthetic
        if (
            layer.id.includes('shield') ||
            layer.id === 'highway-name-path' ||
            layer.id === 'highway-name-minor' ||
            layer.id === 'waterway_line_label' ||
            layer.id === 'airport'
        ) {
            layer.layout = layer.layout || {};
            layer.layout.visibility = 'none';
        }
    });

    return style;
}
