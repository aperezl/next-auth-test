import MostOrdered from './MostOrdered'
import MostTypeOfOrder from './MostTypeOfOrder'

export default function Aside() {
  return (
    <aside tw="flex flex-col gap-y-6 pt-6 pr-6 w-96">
      <MostOrdered />
      <MostTypeOfOrder />
    </aside>
  )
}