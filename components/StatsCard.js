import { FaBeer, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import tw from "twin.macro";

export default function StatsCard() {
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
        <div key={stat.title} tw="flex flex-col p-4 w-1/3 bg-gray-900 rounded-xl gap-y-3">
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