import { React, Link } from '@libs/vendors'

export const GeoCard = ({ geoDataSet }) => {

  const otherCount = geoDataSet.splice(7).reduce((sum, { count = 0 }) => sum+count, 0)
  // console.log({ geoDataSet })
  geoDataSet.push({count: otherCount, countryCode: 'Other'})
  const total = geoDataSet.reduce((sum, {count = 0}) => sum+count, 0)
  geoDataSet = geoDataSet.map(el => ({countryShare: Math.round(el.count*100/total), ...el}))

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Top Countries</h2>
      </header>
      <div className="grow p-3">
        <div className="flex flex-col h-full">
          {/* Card content */}
          <div className="grow">
            <ul className="flex justify-between text-xs uppercase text-slate-400 font-semibold px-2 space-x-2">
              <li>Source</li>
              <li>Sessions</li>
            </ul>

            <ul className="space-y-1 text-sm text-slate-800 mt-3 mb-4">

              {geoDataSet.map(({ count, countryCode, countryShare }, index) => (
                <li className="relative px-2 py-1" key={index}>
                  <div className="absolute inset-0 bg-sky-100" aria-hidden="true" style={{width: `${countryShare || 0}%`}}></div>
                  <div className="relative flex justify-between space-x-2">
                    <div>{countryCode}</div>
                    <div className="font-medium">{count}</div>
                  </div>
                </li>
              ))}

            </ul>
          </div>
          {/* Card footer */}
          <div className="text-center pt-4 pb-1 border-t border-slate-100">
            <Link className="text-sm font-medium text-indigo-500 hover:text-indigo-600" to="#0">Countries Report -&gt;</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

