export const config = {
  ignoreProperties: ['children'],
  propertyAliases: {
    bg: ['backgroundColor'],
    m: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
    margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
    mx: ['marginRight', 'marginLeft'],
    my: ['marginTop', 'marginBottom'],
    p: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    px: ['paddingRight', 'paddingLeft'],
    py: ['paddingTop', 'paddingBottom'],
    w: ['width'],
  },
  responsiveProperties: [
    'fontSize',
    'fontWeight',
    'lineHeight',
    'marginBottom',
    'marginLeft',
    'marginRight',
    'marginTop',
    'paddingBottom',
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'width',
  ],
  scales: {
    fontSizeScale: ['fontSize'],
    fontWeightScale: ['fontWeight'],
    lineHeightScale: ['lineHeight'],
    spaceScale: [
      'marginBottom',
      'marginLeft',
      'marginRight',
      'marginTop',
      'paddingBottom',
      'paddingLeft',
      'paddingRight',
      'paddingTop',
    ],
  },
  stringMaps: {
    colorMap: ['color', 'backgroundColor'],
    fontMap: ['fontFamily'],
  },
  units: {
    percent: ['width', 'maxWidth'],
    px: [
      'marginBottom',
      'marginLeft',
      'marginRight',
      'marginTop',
      'paddingBottom',
      'paddingLeft',
      'paddingRight',
      'paddingTop',
    ],
  },
} as any