import tw, { styled, css } from "twin.macro";
import { FaBeer, FaAccessibleIcon, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { useState } from 'react'

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

export const Button = styled.button(({ isActive }) => [
  tw`p-4 my-4 mr-4 ml-3 rounded-xl text-2xl text-primary`,
  isActive && tw`text-white shadow-primary bg-primary`
])

export const Sidebar = () => {
  const [active, setActive] = useState('Dashboard')

  const x = (e) => {
    console.log(e)
  }
  return (
    <>
      <div tw="flex flex-col gap-y-4 items-center py-8 w-24 bg-gray-900">
        <LogoButton>
          <FaBeer />
        </LogoButton>
          <div tw="flex flex-col gap-y-4 items-end self-end">
          {menu.map(item => (
            <div key={item.name} css={ active === item.name ? tw`
              bg-gray-800 rounded-l-xl relative
              before:bg-gray-900 before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top
              after:bg-gray-900 after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom
              ` : '' }>
              <Button onClick={() => setActive(item.name)} isActive={ active === item.name }>
                <item.icon />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export const StatsCard = () => {
  const stats = [
    {
      title: 'Total Revenue',
      percentage: '+32.40%',
      value: '$10,243.00',
      status: 'up',
      icon: FaBeer
    },
    {
      title: 'Total Dish Order',
      percentage: '-12.40%',
      value: '23,456',
      status: 'down',
      icon: FaBeer
    },
    {
      title: 'Total Customers',
      percentage: '+2.40%',
      value: '1,234',
      status: 'up',
      icon: FaBeer
    },

  ]
  return (
    <div tw="flex gap-6">
      {stats.map(stat => (
        <div tw="flex flex-col p-4 w-1/3 bg-gray-900 rounded-xl gap-y-3">
          <div tw="flex items-center gap-x-3">
            <div tw="p-2 bg-gray-800 rounded-lg text-xl">
              <stat.icon />
            </div>
            <span tw="text-xs font-medium" css={stat.status === 'up' ? tw`text-accent-green` : tw`text-accent-red`}>{stat.percentage}</span>
            <div>
              {stat.status === 'up' && <FaArrowUp tw="text-accent-green p-0.5 rounded-full bg-accent-green/20" />}
              {stat.status === 'down' && <FaArrowDown tw=" text-accent-red p-0.5 rounded-full bg-accent-red/20" />}

            </div>
          </div>
          <div tw="text-3xl font-semibold text-white">{stat.value}</div>
          <div tw="text-sm tracking-wide text-gray-500">{stat.title}</div>
        </div>
      ))}
      
    </div>
  )
}

export const Main = () => {

  return (
    <main tw="flex flex-col flex-1 gap-6 p-4">
      <header>
        <h1 tw="text-3xl font-semibold leading-loose text-white">Dashboard</h1>
        <div tw="text-gray-200">Martes, 2 Feb 2021</div>
      </header>
      <hr tw="border-gray-700" />
      <StatsCard />
    </main>
  )
}

export const Dashboard = () => (
  <Container>
    <Sidebar />
    <Main />
  </Container>
)
