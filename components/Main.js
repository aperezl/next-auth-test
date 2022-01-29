import StatsCard from './StatsCard'
import OrderReport from './OrderReport'

export default function Main() {

  return (
    <main tw="flex flex-col flex-1 gap-6 p-4">
      <header>
        <h1 tw="text-3xl font-semibold leading-loose text-white">Dashboard</h1>
        <div tw="text-gray-200">Martes, 2 Feb 2021</div>
      </header>
      <hr tw="border-gray-700" />
      <StatsCard />
      <OrderReport />
    </main>
  )
}