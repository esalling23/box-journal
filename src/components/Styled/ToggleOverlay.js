import styled from 'styled-components/native'

export default styled.View`
	position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
	display: ${({ $isVisible }) => $isVisible ? 'flex' : 'none'};
`