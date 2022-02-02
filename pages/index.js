import Login from "components/login";
import Test from "components/test";
import { request } from "graphql-request";
import useSWR from "swr";


const GETUSER = `
query GetUser {
  getUser {
    id
    email
    name
    created
  }
}
`;

export default function Home(props) {
  const { data, error } = useSWR([GETUSER], {
    fallbackData: props,
  });

  return (
    <div>
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
      GETUSER
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