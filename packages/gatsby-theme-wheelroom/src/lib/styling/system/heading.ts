import styled from '@emotion/styled'

import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  space,
  textAlign,
} from 'styled-system'

const Heading = styled.div(
  color,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  space,
  textAlign
)

Heading.displayName = 'Heading'

export { Heading }