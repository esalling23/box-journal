import React, { useCallback } from 'react';
import styled from 'styled-components'

import './index.css'
import Tracker from '../Tracker/Tracker';

const StyledBox = styled.div`
	display: flex;
  align-items: stretch;
`

const boxSize = 'calc(80vmin * 5 / 6)';
const StyledBoxContents = styled.div`
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
const StyledBoxSidebar = styled.div`
	width: ${sidebarWidth};
	background-color: lightgrey;
	flex: 1; /* Allow the sidebar to take up available space */
  background-color: lightgray;
  display: flex;
  flex-direction: column;
	id: "",justify-
	content: flex-end;
	align-items: flex-start;
  padding: 10px;
`

const StyledSidebarSquare = styled.div`
	background-color: lightblue;
  border: 1px solid gray;
  width: 50px; /* Adjust the width of the squares in the sidebar */
  height: 50px; /* Adjust the height of the squares in the sidebar */
  margin-bottom: 10px; /* Add spacing between the squares */
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

const Box = () => {
	
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
				{mainTrackers.map(({ id, position, content, ...rest }) => 
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
