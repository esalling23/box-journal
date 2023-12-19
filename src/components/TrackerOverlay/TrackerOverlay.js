import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components/native'
import TrackerIcon from '../TrackerIcon/TrackerIcon'

const StyledOverlay = styled.View`
	height: 100%;
	width: 100%;
	background: grey;
	display: ${({ $visible }) => $visible ? 'block' : 'none'};
	position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

const StyledIconContainer = styled.View`
	display: flex;
	flex-direction: row;
	height: 100%;
	width: 100%;
`

const TrackerOverlay = ({
	// id,
	isVisible,
	description,
	iconOptions = "",
	handleAddIcons
}) => {
	const icons = useMemo(() => 
		iconOptions
			.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/)
			.filter(i => i), [])
	const [selectedIcons, setSelectedIcons] = useState([])

	const handleAdd = useCallback(() => {
		handleAddIcons(selectedIcons)
		setSelectedIcons([])
	}, [selectedIcons])

	const handleSelect = useCallback((tIcon) => {
		console.log('icon selected', tIcon)
		console.log(selectedIcons)
		if (selectedIcons.includes(tIcon)) {
			setSelectedIcons(curr => curr.filter(icon => icon !== tIcon))
		} else {
			setSelectedIcons(curr => [...curr, tIcon])
		}
	}, [selectedIcons])

	console.log(icons)

	return (
		<StyledOverlay $visible={isVisible}>
			Tracks {description}
			<StyledIconContainer>
				{icons.map((icon, i) => 
					<TrackerIcon 
						icon={icon}
						key={i}
						isSelected={selectedIcons.includes(icon)}
						handleSelect={handleSelect}
					/>
				)}
			</StyledIconContainer>
			<button onClick={handleAdd}>Add</button>
		</StyledOverlay>
	)
}

export default TrackerOverlay