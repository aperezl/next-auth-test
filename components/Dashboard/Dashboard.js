import tw from "twin.macro";
import Sidebar from './Sidebar'
import Main from './Main'
import Aside from './Aside'
export const Container = tw.div`flex w-full min-h-screen bg-gray-800`;

export const Dashboard = () => (
  <Container>
    <Sidebar />
    <Main />
    <Aside />
  </Container>
)
