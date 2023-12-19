import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components/native'

import './index.css'
import Tracker from '../Tracker/Tracker';

const StyledBox = styled.View`
	display: flex;
	flex-direction: row;
  align-items: center;
	height: 100%;
	width: 100%;
	max-width: min-content;
	max-height: min-content;
`

const boxSize = 'calc(80vmin * 5 / 6)';
const StyledBoxContents = styled.View`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	flex: 5;
	width: ${boxSize}; 
	height: ${boxSize};
	gap: 10px;
	background-color: lightgray;
`

const sidebarWidth = 'calc(80vmin / 6)'
const StyledBoxSidebar = styled.View`
	width: ${sidebarWidth};
	height: ${boxSize};
	background-color: lightgrey;
	flex: 1;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;
  padding: 10px;
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
		position: { row: 1, column: 1 },
		description: "moods",
		iconOptions: "🥰😉☺️"
	},
	{ 
		id: "activity",
		content: "🥳😎", 
		position: { row: 3, column: 1 },
		description: "activities",
		iconOptions: "🥳😎"
	},
	{ 
		id: "food",
		content: "🥭🍅🍒", 
		position: { row: 1, column: 3 },
		description: "food",
		iconOptions: "🥭🍅🥬🌽🧅🥯🥞🧀🍗🍔🥪🌯🫕" // Todo- support either list of icons or a named group
	},
	{ 
		id: "media",
		content: "🕹🖥📲", 
		position: { row: 3, column: 3 },
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
				{mainTrackers.map(
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
