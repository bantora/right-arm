import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `
	#graphql

	type Todo {
		title: String
		comment: String
		completed: Boolean
	}

	type Query {
		todos: [Todo]
	}
`

const todos = [
	{
		title: "Coding",
		comment: "",
		completed: false,
	},
	{
		title: "Deploy",
		comment: "not yet",
		completed: false,
	}
];

const resolvers = {
	Query: {
		todos: () => todos,
	}
}

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { host: "0.0.0.0", port: 3000 }, 
});

console.log(`Server readt at: ${url}`);

