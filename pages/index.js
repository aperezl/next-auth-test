import Login from "../components/login";
import Test from "../components/test";
import { request } from "graphql-request";

const GETUSER = `
query GetUser($token: String!) {
  getUser(token: $token) {
    id
    email
    name
    created
  }
}
`;

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZmMGUwODc2ZGRjMjllZTIxYjcwMiIsIm5hbWUiOiJBbnRvbmlvIE1hbnVlbCBQw6lyZXogTMOzcGV6IiwiZW1haWwiOiJhcGVyZXpsQGdtYWlsLmNvbSIsImVtYWlsVmVyaWZpZWQiOm51bGwsImltYWdlIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzE3NTgzNDk_dj00IiwiaWF0IjoxNjQzMTE4NzY2fQ.3GThD0x2NpHIXufJuiPFrCelOgBAM2mVWPWtLDXbBF4";

export default function Home({ fallback, getUser }) {

  console.log({ fallback });;
  return (
      <div>
        <Login />
        <Test getUser={getUser}/>
      </div>
  );
}

export async function getServerSideProps(context) {
  const data = await request(`${process.env.VERCEL_URL}/api/graphql`, GETUSER, {
    token,
  });
  console.log({ data: data });
  return {
    props: {
      fallback: {
        '/api/graphql': {
          getUser: { id: 1 }
        }
      },
      getUser: data.getUser
    },
  };
}
