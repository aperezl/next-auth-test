import tw, { styled } from "twin.macro";

const Container = styled.div(({ hasBg }) => [
  tw`flex w-full`, // Add base styles first
  hasBg && tw`bg-black`, // Then add conditional styles
]);

export const Wrapper = tw.section`flex w-full`;
export const Column = tw.div`w-1/2`;

export const Component = ({ hasBg }) => (
  <Container {...{ hasBg }}>
    <Column>dda</Column>
    <Column>fasdfsa</Column>
  </Container>
);
