import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components/native'
import { Text, Button } from 'react-native'
import TrackerIcon from '../TrackerIcon/TrackerIcon'

const StyledList = styled.View`
	height: 100%;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	overflow: hidden;
	flex-direction: ${({ $direction = 'row' }) => $direction};
	justify-content: center;
	align-items: center;
	align-content: center;
`

const IconDisplay = ({
	// id,
	icons,
	handleSelectIcon,
	selectedIcons = [],
	isInteractive = false,
	...rest
}) => {
	console.log(icons)

	return (
		<StyledList {...rest}>
			{icons.map((icon, i) => 
				<TrackerIcon 
					icon={icon}
					key={i}
					isInteractive={isInteractive}
					isSelected={selectedIcons.includes(icon)}
					handleSelect={handleSelectIcon}
				/>
			)}
		</StyledList>
	)
}

export default IconDisplay