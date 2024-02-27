import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import styled from 'styled-components/native'
import { NativeRouter, Route, Routes } from 'react-router-native'

import './index.css'
import Box from './src/components/Box/Box';
import TodayScreen from './src/screens/TodayScreen';
import Layout from './src/components/Shared/Layout/Layout';

const StyledApp = styled.SafeAreaView`
	background-color: yellow;
	display: flex;
	flex: 1;
	justify-content: center;
	align-content: center;
	align-items: center;
	height: 100%;
`

export default function App() {
	// to do - user ownership & authentication

	// Get today's box
	const getToday = () => {

	}

	// Get history of boxes
	const getHistory = () => {

	}

	const theme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			// primary: 'tomato',
			// secondary: 'yellow',
		},
	};

  return (
    <PaperProvider theme={theme}>
			<StyledApp>
				<NativeRouter>
					<Layout>
						<Routes>
							<Route path="/" Component={TodayScreen} />
							{/* <Route path="/history" Component={HistoryScreen} /> */}
						</Routes>
					</Layout>
				</NativeRouter>
			</StyledApp>
		</PaperProvider>
  );
}
