import React from 'react';
import styled from 'styled-components'

import './index.css'
import { css } from 'styled-components';

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

const StyledCorner = styled.div`
	// height: 100px;
	// width: 100px;
	border: 2px solid black;
`

const sidebarWidth = 'calc(80vmin / 6)'
const StyledBoxSidebar = styled.div`
	width: ${sidebarWidth};
	background-color: lightgrey;
	flex: 1; /* Allow the sidebar to take up available space */
  background-color: lightgray;
  display: flex;
  flex-direction: column;
	justify-content: flex-end;
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


const Box = () => {
	const topLeftTracker = "🥰😉☺️"
	const bottomLeftTracker = "🥳😎"
	const topRightTracker = "🥭🍅🍒"
	const bottomRightTracker = "🕹🖥📲"

	const extraTrackers = ["💕💕💕💕💕", "✝️", "🇦🇩🇦🇩🇦🇩"]

  return (
    <StyledBox>
			<StyledBoxContents className="container">
				<StyledCorner className="top-left">{topLeftTracker}</StyledCorner>
				<StyledCorner className="bottom-left">{bottomLeftTracker}</StyledCorner>
				<StyledCorner className="top-right">{topRightTracker}</StyledCorner>
				<StyledCorner className="bottom-right">{bottomRightTracker}</StyledCorner>
			</StyledBoxContents>
			<StyledBoxSidebar className="sidebar">
				{extraTrackers.map(tracker => 
					<StyledSidebarSquare className="sidebar-square">
						{tracker}
					</StyledSidebarSquare>
				)}
			</StyledBoxSidebar>
		</StyledBox>
  )
};

export default Box;
