import React, { useCallback, useState } from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import { TouchableRipple } from 'react-native-paper'

import TrackerOverlay from '../TrackerOverlay/TrackerOverlay'
import IconDisplay from '../IconDisplay/IconDisplay'
import { iconStringToArray } from '../../lib/utils'

const StyledTracker = styled(TouchableRipple)`
	border: 2px solid grey;
	// background-color: lightblue;
	flex: 1;
	position: relative;
`

const toggleSize = 30;
const StyledOverlayToggle = styled.View`
	position: absolute;
	top: -${toggleSize / 2}px;
	left: -${toggleSize / 2}px;
	z-index: 1;
	height: ${toggleSize}px;
	width: ${toggleSize}px;
	border-radius: ${toggleSize / 2}px;
	background: black;
	color: white;
	border: 1px solid white;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Tracker = ({ 
	children, 
	id,
	addIcons,
	// column, 
	// row,
	description,
	iconOptions = ""
}) => {
	const [isOverlayVisible, setIsOverlayVisible] = useState(false);

	const handleSelect = useCallback(() => {
		setIsOverlayVisible(curr => !curr)
	}, [])

	// console.log(children)

	const handleAddIcons = useCallback((icons) => {
		setIsOverlayVisible(false)
		addIcons(id, icons)
	}, [])

	return (
		<>
			<StyledTracker
				rippleColor="rgba(0, 0, 0, .32)"
				onPress={handleSelect}
				onTouchStart={handleSelect}
			>
				<IconDisplay 
					icons={iconStringToArray(children)}
				/>
				
				<TrackerOverlay 
					isVisible={isOverlayVisible}
					description={description}
					iconOptions={iconOptions}
					handleAddIcons={handleAddIcons}
					// id={id}
				/>
				<StyledOverlayToggle 
					onClick={handleSelect}
					onTouchStart={handleSelect}
				><Text>{isOverlayVisible ? 'x' : 'o'}</Text></StyledOverlayToggle>
			</StyledTracker>
		</>
	)
}

export default Tracker