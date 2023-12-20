import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

import './index.css'
import Box from './src/components/Box/Box';

const StyledApp = styled.SafeAreaView`
	background-color: yellow;
	display: flex;
	flex: 1;
	justify-content: center;
	align-content: center;
	align-items: center;
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
