import React from 'react';
import { Text, SectionList} from 'react-native';
import data from './data';
import styled from 'styled-components/native';
import Appointment from './components/Appointment';
import SectionTitle from './components/SectionTitle';

export default function App() {
	return (
		<Container>
			<SectionList
				sections={data}
				keyExtractor={(item, index) => index}
				renderItem={({ item }) => <Appointment {...item} />}
				renderSectionHeader={({ section: { title } }) => (
					<SectionTitle title={title} />
				)}
			/>
		</Container>
	);
}

const Container = styled.View`
  flex: 1;
  margin-top: 30px;
`;