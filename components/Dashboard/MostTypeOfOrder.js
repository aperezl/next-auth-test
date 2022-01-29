import tw from "twin.macro";
import { FaChevronDown } from 'react-icons/fa'

export default function MostTypeOfOrder() {
  return(

    <div tw="flex flex-col p-6 bg-gray-900 rounded-lg gap-y-6">
      <div tw="flex justify-between items-center">
        <h2 tw="text-xl font-semibold leading-loose text-white" >Most type of orders</h2>
        <button tw="flex gap-x-2.5 py-3 px-4 rounded-lg border border-gray-700 text-white text-sm items-center">
          <FaChevronDown />
          <span>Today</span>
        </button>
      </div>
      <hr tw="border-gray-700" />

    </div>
  )
}