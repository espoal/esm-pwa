import { React, useState, useEffect } from '@libs/vendors'

import { DashboardLayout } from '@libs/layouts/dashboardLayout'

import { Tooltip, ModalAction } from '@libs/components'

import { parseResp, parseGeoResp } from './dashboard/utils.mjs'

import { Controls } from './dashboard/Controls'
import { MainCard } from './cards/MainCard'
import { LandPicker } from './cards/LandPicker'
import { GeoCard } from './cards/GeoCard'
import { TransactionsCard } from './cards/Transactions'
import { RealTimeCard } from './cards/RealTimeCard'

const initialData = [
  { time: '01/03', amount: 0 },
]
const initialGeoData = [
  { countryCode: 'DE', amount: 0 },
]

export const DashboardPage = () => {

  const [query, setQuery] = useState('')
  const [dataSet, setDataSet] = useState(initialData)
  const [geoDataSet, setGeoDataSet] = useState(initialGeoData)
  const [trackedItems, setTrackedItems] = useState(['dcl:-23,30'])




  const fetchData = async () => {

    const result = await fetch(
      `https://europe-west3-backend-339310.cloudfunctions.net/query?${query}`,
    )
    const resp = await result.text()
    const data = parseResp(resp)
    setDataSet(data)

    const geoResult = await fetch(
      `https://europe-west3-backend-339310.cloudfunctions.net/query?${query}&geo=true`,
    )
    const geoResp = await geoResult.text()
    const geoData = parseGeoResp(geoResp)
    setGeoDataSet(geoData)
  }


  useEffect(() => {fetchData()}, [query])

  return (
    <DashboardLayout>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

        {/* Page header */}
        <div className="sm:flex sm:justify-between sm:items-center mb-8">

          {/* Left: Title */}
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">[3stats] Dashboard</h1>
          </div>

          {/* Right: Actions */}
          <Controls {...{query, setQuery}}/>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-12 gap-6">

          <MainCard {...{ dataSet }}>

          </MainCard>

          <RealTimeCard />

          <GeoCard {...{ geoDataSet }}/>

          <TransactionsCard />

          <LandPicker {...{trackedItems, setTrackedItems}}/>










        </div>



      </div>
    </DashboardLayout>
  )
}

const modal = () => (<ModalAction id="newsletter-modal" modalOpen={addLandModal} setModalOpen={setAddLandModal}>
  {/* Modal header */}
  <div className="mb-2 text-center">
    {/* Icon */}
    <div className="mb-3">
      <svg className="inline-flex w-12 h-12 rounded-full shrink-0 fill-current" viewBox="0 0 48 48">
        <rect className="text-indigo-100" width="48" height="48" rx="24" />
        <path className="text-indigo-300" d="M19 16h7a8 8 0 110 16h-7V16z" />
        <path className="text-indigo-500" d="M26 24l-7-6v5h-8v2h8v5z" />
      </svg>
    </div>
    <div className="text-lg font-semibold text-slate-800">Add land to tracking!</div>
  </div>
  {/* Modal content */}
  <div className="text-center">
    <div className="text-sm mb-6">
      Insert the x and y coordinates of your DCL
    </div>
    {/* Submit form */}
    <form className="flex max-w-sm m-auto" onSubmit={modalHandler}>
      <div className="grow mr-2">
        <label htmlFor="xCoord" className="sr-only">X coordinates</label>
        <input id="xCoord" className="form-input w-full px-2 py-1" type="number" />
      </div>
      <div className="grow mr-2">
        <label htmlFor="subscribe-form" className="sr-only">Y coordinates</label>
        <input id="yCoord" className="form-input w-full px-2 py-1" type="number" />
      </div>
      <button type="submit" className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap">Add</button>
    </form>
    <div className="text-xs text-slate-500 italic mt-3">
      I respect your privacy. No spam. Unsubscribe at any time!
    </div>
  </div>
</ModalAction>)
