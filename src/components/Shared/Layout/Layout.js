import React from 'react'
import styled from 'styled-components/native'
import StretchContainer from '../../Styled/StretchContainer'

const StyledLayout = styled(StretchContainer)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	align-items: center;
`

const Layout = ({ children }) => (
	<StyledLayout>{children}</StyledLayout>
)

export default Layout