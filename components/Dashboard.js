import tw, { styled } from "twin.macro";
import { FaBeer, FaAccessibleIcon } from 'react-icons/fa';

export const Container = tw.div`flex w-full min-h-screen bg-gray-800`;

const menu = [
  { name: 'Dashboard', icon: FaAccessibleIcon },
  { name: 'Discounts', icon: FaBeer },
  { name: 'Graph', icon: FaBeer },
  { name: 'Messages', icon: FaBeer },
  { name: 'Notifications', icon: FaBeer },
  { name: 'Settings', icon: FaBeer },
  { name: 'Logout', icon: FaBeer }
]


export const LogoButton = ({children}) => (
  <button tw="text-primary text-5xl p-2 bg-opacity-20 rounded-xl bg-primary">
    {children}
  </button>
)

export const Button = ({children}) => (
  <button tw="">
    {children}
  </button>
)


export const Sidebar = () => (
  <>
    <div tw="flex flex-col gap-y-4 items-center py-8 w-24 bg-gray-900">
      <LogoButton>
        <FaBeer />
      </LogoButton>
        <div tw="flex flex-col gap-y-4">
        {menu.map(item => (
          <div key={item.name} tw="p-4 my-4 mr-4 ml-3 rounded-xl text-2xl text-primary">
            <Button tw="">
              <item.icon />
            </Button>
          </div>
        ))}
      </div>
    </div>
  </>
)

export const Dashboard = () => (
  <Container>
    <Sidebar />
  </Container>
)
