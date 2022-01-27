import Login from "../components/login";
import Test from "../components/test";
import { request } from "graphql-request";
import { Wrapper, Column, Component } from "../components/Button";
import useSWR from "swr";


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
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZmMGUwODc2ZGRjMjllZTIxYjcwMiIsIm5hbWUiOiJBbnRvbmlvIE1hbnVlbCBQw6lyZXogTMOzcGV6IiwiZW1haWwiOiJhcGVyZXpsQGdtYWlsLmNvbSIsImVtYWlsVmVyaWZpZWQiOm51bGwsImltYWdlIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzE3NTgzNDk_dj00IiwiaWF0IjoxNjQzMTQxMTA1fQ.QF-yGOMiYyigRrlacH8cuPs8UDhq99BGDhjxpcJhJoI";
export default function Home(props) {
  const { data, error } = useSWR([GETUSER, { token }], {
    fallbackData: props,
  });

  return (
    <div>
      <Wrapper>xxx</Wrapper>
      <Column>xxxx</Column>
      <Component>..dd</Component>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Login />
      <Test getUser={props.getUser} />
    </div>
  );
}


export async function getStaticProps() {
  try {
    const data = await request(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql`,
      GETUSER,
      {
        token,
      }
    );
    return {
      props: data,
      revalidate: 1,
    };
  } catch (e) {
    console.log({ e });
    return {
      props: {},
    };
  }
}

// export async function getStaticPaths() {
//   return { fallback: false };
// }