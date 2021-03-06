import { useState } from 'react'
import LogoButton from './LogoButton'
import { FaBeer, FaAccessibleIcon } from 'react-icons/fa';
import tw, { styled } from "twin.macro";

const menu = [
  { name: 'Dashboard', icon: FaAccessibleIcon },
  { name: 'Discounts', icon: FaBeer },
  { name: 'Graph', icon: FaBeer },
  { name: 'Messages', icon: FaBeer },
  { name: 'Notifications', icon: FaBeer },
  { name: 'Settings', icon: FaBeer },
  { name: 'Logout', icon: FaBeer }
]

export const Button = styled.button(({ isActive }) => [
  tw`p-4 my-4 mr-4 ml-3 rounded-xl text-2xl text-primary`,
  isActive && tw`text-white shadow-primary bg-primary`
])

export default function Sidebar() {
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