import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components/native'
import { Text, Button } from 'react-native'
import IconDisplay from '../IconDisplay/IconDisplay'
import { iconStringToArray } from '../../lib/utils'

const StyledOverlay = styled.View`
	height: 100%;
	width: 100%;
	background: grey;
	display: ${({ $visible }) => $visible ? 'flex' : 'none'};
	justify-content: space-between;
	align-items: stretch;
	position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

const StyledIconContainer = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: center;
	height: auto;
`

const StyledAddButton = styled.Button`
	background-color: blue;
	color: white;
`

// Handles daily tracker icon editing
const TrackerOverlay = ({
	// id,
	isVisible,
	description = "",
	iconOptions = "",
	handleAddIcons
}) => {
	const icons = useMemo(() => iconStringToArray(iconOptions), [iconOptions])
	const [selectedIcons, setSelectedIcons] = useState([])

	const handleAdd = useCallback(() => {
		handleAddIcons(selectedIcons)
		setSelectedIcons([])
	}, [selectedIcons])

	const handleSelect = useCallback((tIcon) => {
		console.log(tIcon)
		if (selectedIcons.includes(tIcon)) {
			setSelectedIcons(curr => curr.filter(icon => icon !== tIcon))
		} else {
			setSelectedIcons(curr => [...curr, tIcon])
		}
	}, [selectedIcons])

	// console.log(icons)

	return (
		<StyledOverlay $visible={isVisible}>
			<Text css={`text-align: center; height: 20%;`}>Tracks {description}</Text>
			<IconDisplay
				css={`height: auto;`}
				isInteractive
				icons={icons}
				selectedIcons={selectedIcons}
				handleSelectIcon={handleSelect}
			/>
			<StyledAddButton css={`height: 20%`} onClick={handleAdd} title="Add" />
		</StyledOverlay>
	)
}

export default TrackerOverlay