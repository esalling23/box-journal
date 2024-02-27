import React from 'react'
import { View, Text } from 'react-native'
import { FAB } from 'react-native-paper'
import styled from 'styled-components/native'
import ToggleOverlay from '../Styled/ToggleOverlay'

export const ADD_OPTIONS = {
	SELECT: 'SELECT',
	CREATE: 'CREATE'
}

const OPTION_ICON_MAP = {
	[ADD_OPTIONS.SELECT]: 'view-list',
	[ADD_OPTIONS.CREATE]: 'plus',
}

const StyledMenu = styled(ToggleOverlay)`
	background-color: transparent;
	bottom: 100%;
	top: auto;
	flex-direction: row;
`

const StyledMenuOption = styled(FAB)`
	border: 1px solid black;
`

const AddOptionsMenu = ({
	onAddTracker,
	isVisible
}) => {
	return (
		<StyledMenu $isVisible={isVisible}>
			{Object.values(ADD_OPTIONS).map(opt => {
				const handleClick = () => onAddTracker(opt)
				return (
					<StyledMenuOption
						key={opt}
						icon={OPTION_ICON_MAP[opt]}
						label={opt.toLowerCase()}
						onPress={handleClick}
						onTouchStart={handleClick}
					><Text>{opt}</Text></StyledMenuOption>
				)
			})}
		</StyledMenu>
	)
}

export default AddOptionsMenu