import { FaCog } from 'react-icons/fa'
import tw from 'twin.macro'

export default function OrderReport() {
  const Tr = tw`p-4 border-b border-gray-700`
  const Td = tw`p-4`
  return (
    <div tw="p-6 bg-gray-900 rounded-lg">
      <div tw="flex justify-between items-center pb-4">
        <h2 tw="text-xl text-left font-semibold leading-loose text-white">Order Report</h2>
        <button tw="text-white text-sm items-center flex py-3 px-4 rounded-lg border border-gray-700 gap-x-2.5">
          <FaCog />
          <span>Filter order</span>
        </button>
      </div>

      <table tw="w-full">
        <thead>
          <tr tw="text-sm font-semibold text-white">
            <td css={Tr}>Customer</td>
            <td css={Tr}>Menu</td>
            <td css={Tr} tw="text-right">Total Payment</td>
            <td css={Tr} tw="text-center">Status</td>
          </tr>
        </thead>
        <tbody>
          <tr tw="text-sm text-gray-500">
            <td css={Td}>
              <div tw="flex gap-4 items-center">
                <img width="32" height="32" src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png" />
                <span>Antonio Perez</span>
              </div>
            </td>
            <td css={Td}>asfdasdfa</td>
            <td css={Td} tw="tabular-nums text-right">15.43 €</td>
            <td css={Td} tw="flex justify-center">
              <span
                tw="flex justify-center py-1 w-24 font-medium capitalize rounded-full bg-accent-green/20 text-accent-green"
              >Completed</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}