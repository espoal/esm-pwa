import { React, Link, useState } from '@libs/vendors'

// Import utilities
import { Tooltip, ModalAction } from '@libs/components'


export const LandPicker = ({trackedItems, setTrackedItemsm, setAddLandModal}) => {

  // console.log({trackedItems})


  const deleteItem = (deletedItem) => {
    const newArray = trackedItems.filter(item => (item !== deletedItem))
    setTrackedItems(newArray)
  }



  return (
    <div className="flex flex-col col-span-full xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">Land Selector</h2>
        <Tooltip className="ml-2">
          <div className="text-xs text-center whitespace-nowrap">Built with <a className="underline" href="https://www.chartjs.org/" target="_blank" rel="noreferrer">Chart.js</a></div>
        </Tooltip>
      </header>
      {/* Card content */}
      <div className="flex flex-col h-full">




        {/* Table */}
        <div className="grow px-5 pt-3 pb-1">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              {/* Table header */}
              <thead className="text-xs uppercase text-slate-400">
                <tr>
                  <th className="py-2">
                    <div className="font-semibold text-left">Active land</div>
                  </th>
                  <th className="py-2">
                    <div className="font-semibold text-right">Delete</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm divide-y divide-slate-100">
                {/* Row */}
                {trackedItems.map((item) => (
                  <tr key={item}>
                    <td className="py-2">
                      <div className="text-left">{item}</div>
                    </td>
                    <td className="py-2 text-right">
                      <button className="btn border-slate-200 hover:border-slate-300 text-rose-500" onClick={e => deleteItem(item)}>
                        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                          <path d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z" />
                        </svg>
                      </button>
                    </td>
                  </tr>

                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Card footer */}
        <div className="text-right px-5 pb-4">
          <Link className="text-sm font-medium text-indigo-500 hover:text-indigo-600" to="" onClick={(e) => { e.stopPropagation(); setAddLandModal(true); }}>Add Land</Link>


        </div>
      </div>
    </div>
  );
}

