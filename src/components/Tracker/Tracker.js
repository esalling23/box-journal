import React, { useCallback, useState } from 'react'
import styled from 'styled-components/native'
import TrackerOverlay from '../TrackerOverlay/TrackerOverlay'

const StyledCorner = styled.View`
	border: 2px solid grey;
	background-color: lightblue;

	position: relative;

	grid-column: ${({ $col }) => $col};
  grid-row: ${({ $row }) => $row};
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
				$col={column}
				$row={row}
			>
				{children}
				
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
				>{isOverlayVisible ? 'x' : 'o'}</StyledOverlayToggle>
			</StyledCorner>
		</>
	)
}

export default Tracker