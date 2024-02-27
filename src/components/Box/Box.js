import React, { useCallback, useMemo, useState } from 'react';
import { Text, Dimensions, View } from 'react-native'
import styled from 'styled-components/native'

import './index.module.css'
import Tracker from '../Tracker/Tracker';
import EmptyTracker from '../EmptyTracker/EmptyTracker';
import TrackerManager from '../TrackerManager/TrackerManager'
import { ADD_OPTIONS } from '../EmptyTracker/AddOptionsMenu';
import StretchContainer from '../Styled/StretchContainer';

const StyledBox = styled.View`
	flex: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	// background-color: green;
	width: 100%;
	height: 50%;
`

const StyledBoxContents = styled.View`
	width: 80%;
	height: 80%;
	// aspect-ratio: 1;
	// background-color: white;
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
	// background: red;
	border: 1px solid black;

	${({ $row }) => ($row === 2 || $row === 3) ? `
		flex: 2;
	` : 'flex: 1'}
`

const StyledBoxSidebar = styled.View`
	flex: 1;
  background-color: orange;
  display: flex;
  flex-direction: row;
	justify-content: flex-end;
	align-items: flex-start;
  padding: 10px;
	width: 100%;
	height: 25%;
`

const StyledSidebarSquare = styled.View`
	background-color: lightblue;
  border: 1px solid gray;
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`

// temp data
const mainTrackersData = [
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
		position: { row: 4, order: 2 },
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
		position: { row: 4, column: 1 },
		description: "media usage",
		iconOptions: "🕹🖥📲⌚️📸🎞⏰"
	},
]

const sidebarTrackersData = [
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
	box
}) => {
	const [trackerOption, setTrackerOption] = useState(null)
	
	const addIcons = useCallback((id, icons) => {
		console.log(id)
		const tracker = box.trackers.find(t => {
			console.log(t)
			return t.id === id
		})
		const newIcons = icons.join('')
		tracker.content += newIcons
		console.log(tracker.content)
	}, [box])

	const addTracker = useCallback((option) => {
		console.log(option)
		setTrackerOption(option)
	}, [])

	const displayRowTrackers = (rowTrackers) => {
		return rowTrackers.map(
			({ id, position, content, ...rest }) => 
				<Tracker
					key={id}
					id={id}
					column={position.column}
					row={position.row}
					size={'small'}
					addIcons={addIcons}
					{...rest}
				>{content}</Tracker>
		)
	}

	const boxRows = [1, 2, 3, 4].map(row => {
		const rowTrackers = box?.trackers
			.filter(tracker => tracker.position.row === row);
		console.log(rowTrackers)						
		return <StyledBoxRow $row={row} key={row}>
			{(rowTrackers && rowTrackers.length > 0)
				? displayRowTrackers(rowTrackers)
				: <EmptyTracker 
					key={row}
					onAddTracker={addTracker}
				/>}
		</StyledBoxRow>
	})

	const onClose = useCallback(() => {
		setTrackerOption(null)
	}, [])


	if (!box) {
		return <Text>Loading...</Text>
	}

  return (
    <StyledBox>
			<StyledBoxContents>
				{boxRows}

				<TrackerManager
					option={trackerOption}
					onClose={onClose}
				/>
			</StyledBoxContents>
			{/* <StyledBoxSidebar>
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
			</StyledBoxSidebar> */}
		</StyledBox>
  )
};

export default Box;
