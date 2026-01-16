#!/usr/bin/env tsx
import React from 'react';
import { render, Text, Box } from 'ink';

const App = () => {
	const [data, setData] = React.useState<string>('Loading...');
	const [error, setError] = React.useState<string | null>(null);

	React.useEffect(() => {
		fetch('http://localhost:8080/')
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.text();
			})
			.then(text => setData(text))
			.catch(err => setError(err.message));
	}, []);

	return (
		<Box flexDirection="column" padding={1}>
			<Text bold>Rates Server Client</Text>
			<Text>─────────────────────</Text>
			{error ? (
				<Text color="red">Error: {error}</Text>
			) : (
				<Text color="green">{data}</Text>
			)}
		</Box>
	);
};

render(<App />);
