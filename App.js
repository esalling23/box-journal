import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Box from './src/components/Box/Box';

import styled from 'styled-components/native'

const StyledApp = styled.View`
	background-color: yellow;
	display: flex;
	justify-content: center;
	align-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
`

export default function App() {
  return (
    <StyledApp>
      <Box />
    </StyledApp>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
