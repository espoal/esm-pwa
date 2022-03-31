import { React, useState, useEffect } from '@libs/vendors'

import {
  Datepicker,
} from '@libs/components'

import { Tooltip, ModalAction } from '@libs/components'

const daysInSeconds = 60*60*24


import { ItemFilter } from './ItemFilter'

import { epochSeconds } from './utils.mjs'

export const Controls = ({query, setQuery, trackedItems, setTrackedItems}) => {

  const [dateRange, setDateRange] = useState([epochSeconds()- 14*daysInSeconds,epochSeconds()])
  // const [eventType, setEventType] = useState('landInteraction')
  const [addLandModal, setAddLandModal] = useState(false)



  const updateQuery = () => {
    const itemId = trackedItems[0]
    const newQuery = new URLSearchParams({
      itemId,
      eventType: 'landInteraction',
      startDate: dateRange[0],
      endDate: dateRange[1]
    })
    setQuery(newQuery)
  }

  const modalHandler = (e) => {
    e.preventDefault()
    const xCoord = e.target[0].value
    const yCoord = e.target[1].value
    console.log({xCoord})
    setTrackedItems([...trackedItems, `dcl:${xCoord},${yCoord}`])
    setAddLandModal(false)
  }


  useEffect(updateQuery, [trackedItems, dateRange])

  return (
    <>
      <ModalAction id="newsletter-modal" modalOpen={addLandModal} setModalOpen={setAddLandModal}>
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
      </ModalAction>
      <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">



        {/* Start */}
          <button className="btn bg-white border-slate-200 hover:border-slate-300"
          onClick={(e)=> {e.stopPropagation(); setAddLandModal(true)}}
          >
            <svg className="w-4 h-4 fill-current text-slate-500 shrink-0" viewBox="0 0 16 16">
              <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
            </svg>
          </button>
          {/* End */}


        <ItemFilter align="right" {...{trackedItems, setTrackedItems, setAddLandModal}}/>

        {/* Datepicker built with flatpickr */}
        <Datepicker align="right" {...{dateRange, setDateRange}} />

      </div>


    </>

  )
}

