import React, { useCallback, useState } from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import AddOptionsMenu from './AddOptionsMenu'

const StyledTracker = styled.View`
	border: 2px solid grey;
	background-color: lightblue;
	flex: 1;
	position: relative;
`

const EmptyTracker = ({ 
	id,
	onAddTracker,
}) => {
	const [isOptionsVisible, setIsOptionsVisible] = useState(false);

	const handleSelect = useCallback(() => {
		setIsOptionsVisible(curr => !curr)
	}, [])

	return (
		<>
			<StyledTracker>
				<Text
					onClick={handleSelect}
					onTouchStart={handleSelect}
				>{isOptionsVisible ? 'cancel' : '+'}</Text>
				<AddOptionsMenu 
					isVisible={isOptionsVisible}
					onAddTracker={onAddTracker}
				/>
			</StyledTracker>
		</>
	)
}

export default EmptyTracker