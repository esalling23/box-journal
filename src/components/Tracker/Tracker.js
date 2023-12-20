import React, { useCallback, useState } from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'

import TrackerOverlay from '../TrackerOverlay/TrackerOverlay'

const StyledCorner = styled.View`
	border: 2px solid grey;
	background-color: lightblue;
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
	column, 
	row,
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
			<StyledCorner 
				// $col={column}
				// $row={row}
			>
				<Text>{children}</Text>
				
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
			</StyledCorner>
		</>
	)
}

export default Tracker