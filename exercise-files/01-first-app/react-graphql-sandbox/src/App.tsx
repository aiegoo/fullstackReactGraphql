import { gql, useQuery } from '@apollo/client';

const HELLO_QUERY = gql`
  query {
    hello
  }
`;

function App() {
  const { data, loading, error } = useQuery(HELLO_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <h1>{data.hello}</h1>;
}

export default App;
