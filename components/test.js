import useSWR from "swr";

export default function Test({ getUser }) {
  const GETUSER = `
    query GetUser($token: String!) {
      getUser(token: $token) {
        id
        email
        name
        created
      }
    }`;

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZmMGUwODc2ZGRjMjllZTIxYjcwMiIsIm5hbWUiOiJBbnRvbmlvIE1hbnVlbCBQw6lyZXogTMOzcGV6IiwiZW1haWwiOiJhcGVyZXpsQGdtYWlsLmNvbSIsImVtYWlsVmVyaWZpZWQiOm51bGwsImltYWdlIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzE3NTgzNDk_dj00IiwiaWF0IjoxNjQzMTE4NzY2fQ.3GThD0x2NpHIXufJuiPFrCelOgBAM2mVWPWtLDXbBF4";

  const { data, error } = useSWR([GETUSER, { token }], {
    fallbackData: { getUser },
  });
  console.log({ data, error });
  return (
    <>
      <h1>Test</h1>
      {data && data.getUser && (
        <>
          <p>{data.getUser.id}abc</p>
          <p>{data.getUser.name}</p>
          <p>{data.getUser.email}</p>
        </>
      )}
    </>
  );
}
