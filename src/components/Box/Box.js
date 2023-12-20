import React, { useCallback, useMemo } from 'react';
import { Text, Dimensions } from 'react-native'
import styled from 'styled-components/native'

import './index.module.css'
import Tracker from '../Tracker/Tracker';

const StyledBox = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: green;
	width: 100%;
`

const StyledBoxContents = styled.View`
	width: 80%;
	aspect-ratio: 1;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: stretch;
	background-color: purple;
`

const StyledBoxRow = styled.View`
	display: flex;
  flex-direction: row;
  justify-content: stretch;
  flex: 1;
	background: red;
`

const StyledBoxSidebar = styled.View`
	flex: 1;
  background-color: orange;
  display: flex;
  flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;
  padding: 10px;
	width: 25%;
  aspect-ratio: 1;
`

const StyledSidebarSquare = styled.View`
	background-color: lightblue;
  border: 1px solid gray;
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`

// temp data
const mainTrackers = [
	{ 
		id: "mood",
		content: "🥰😉☺️", 
		position: { row: 1, order: 1 },
		description: "moods",
		iconOptions: "🥰😉☺️"
	},
	{ 
		id: "activity",
		content: "🥳😎", 
		position: { row: 3, order: 2 },
		description: "activities",
		iconOptions: "🥳😎"
	},
	{ 
		id: "food",
		content: "🥭🍅🍒", 
		position: { row: 1, order: 2 },
		description: "food",
		iconOptions: "🥭🍅🥬🌽🧅🥯🥞🧀🍗🍔🥪🌯🫕" // Todo- support either list of icons or a named group
	},
	{ 
		id: "media",
		content: "🕹🖥📲", 
		position: { row: 3, column: 1 },
		description: "media usage",
		iconOptions: "🕹🖥📲⌚️📸🎞⏰"
	},
]

const sidebarTrackers = [
	{ 
		id: "kisses",
		content: "💕💕💕💕💕",
		description: "kisses",
		iconOptions: "💕"
	},
	{ 
		id: "steps",
		content: "🚶",
		description: "steps",
		iconOptions: "🚶"
	},
	{ 
		id: "home",
		content: "🇦🇩🇦🇩🇦🇩",
		description: "thoughts of home",
		iconOptions: "🇦🇩"
	},
];

// spots available for trackers (not sidebar)
const anchors = {
	TOP_LEFT: 'TOP_LEFT',
	TOP_RIGHT: 'TOP_RIGHT',
	BOTTOM_LEFT: 'BOTTOM_LEFT',
	BOTTOM_RIGHT: 'BOTTOM_RIGHT',
	ABOVE: 'ABOVE',
	BELOW: 'BELOW',
}

const Box = ({
	// mainTrackers,
	// sidebarTrackers,

}) => {

	// do this server-side?
	// const anchorTrackers = useMemo(() => {
	// 	anchors.map(a => {
	// 		return mainTrackers.find(t => t.isActive && t.position === a)
	// 	})
	// }, [mainTrackers])
	
	const addIcons = useCallback((id, icons) => {
		console.log(id)
		const tracker = mainTrackers.find(t => {
			console.log(t)
			return t.id === id
		})
		const newIcons = icons.join('')
		tracker.content += newIcons
		console.log(tracker.content)
	}, [])

  return (
    <StyledBox>
			<StyledBoxContents>
				{/* {anchors.map(a => {
					if (mainTracker exists at a) {
						return <Tracker />
					}
					return <AddOnSpot />
				}) */}
				{([1, 2, 3, 4].map(row => {
					const rowTrackers = mainTrackers
						.filter(tracker => tracker.position.row === row);						
					return <StyledBoxRow>
						{rowTrackers.map(
							({ id, position, content, ...rest }) => 
								<Tracker 
									key={id}
									id={id}
									column={position.column}
									row={position.row}
									addIcons={addIcons}
									{...rest}
								>{content}</Tracker>
						)}
					</StyledBoxRow>
				}))}
				
			</StyledBoxContents>
			<StyledBoxSidebar>
				{sidebarTrackers.map(({ id, content, ...rest }) => 
					<Tracker 
						key={id}
						id={id}
						as={StyledSidebarSquare}
						addIcons={addIcons}
						{...rest}
					>
						{content}
					</Tracker>
				)}
			</StyledBoxSidebar>
		</StyledBox>
  )
};

export default Box;
