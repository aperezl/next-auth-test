import tw from "twin.macro";
import { FaChevronDown } from 'react-icons/fa'

const mostOrdered = [
  {
    name: 'asdkfalskdf a dsf asdf asdfjlsakdf',
    image: 'https://images.unsplash.com/photo-1643381437268-537f8d018c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    count: 200
  },
  {
    name: 'asdkfalsk afd sadfasdva dfsadfasd fadfasdfsa dfa asdfa adsfa sdf fasdfasdf a adfdfjlsakdf',
    image: 'https://images.unsplash.com/photo-1613732444530-37bd753db893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    count: 120
  },
  {
    name: 'asdkfalskdf acv asjlsakdf',
    image: 'https://images.unsplash.com/photo-1643404209006-fd2b0fcbe4df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    count: 80
  }
]

export default function MostOrdered() {
  return (
    <div tw="flex flex-col p-6 bg-gray-900 rounded-lg gap-y-4">
      <div tw="flex justify-between items-center">
        <h2 tw="text-xl font-semibold leading-loose text-white">Most Ordered</h2>
        <button tw="flex items-center gap-x-2.5 py-3 px-4 rounded-lg border border-gray-700 text-sm text-white">
          <FaChevronDown />
          <span>Today</span>
        </button>
      </div>
      <hr tw="border-gray-700" />
      <div tw="flex flex-col gap-y-4">
        {mostOrdered.map(order =>(
          <div key={order.name} tw="flex gap-x-4 items-center">
            <img tw="w-14 h-14" src={order.image} />
            <div tw="flex flex-col gap-y-0.5">
              <div tw="text-sm font-medium text-white">{order.name}</div>
              <div tw="text-xs text-gray-500">{order.count} dished orders</div>
            </div>
          </div>
        ))}
      </div>
      <button tw="py-3.5 rounded-lg w-full border text-primary border-primary text-sm font-semibold">
        View All
      </button>
    </div>
  )
}