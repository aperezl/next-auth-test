import useSWR from "swr";

export default function Test({ getUser }) {
  return (
    <>
      <h1>Test</h1>
      {getUser && (
        <>
          <p>{getUser.id}abc</p>
          <p>{getUser.name}</p>
          <p>{getUser.email}</p>
        </>
      )}
    </>
  );
}
