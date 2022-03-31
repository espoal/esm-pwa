import { React, Link } from '@libs/vendors'
// Should be 04
import { LineChart01 as LineChart } from '@libs/charts'

// Import utilities
import { tailwindConfig, hexToRGB } from '@libs/utils/Utils'


export const RealTimeCard = ({trackedItems}) => {

  const chartData = {
    labels: [
      '03-01-2023',
    ],
    datasets: [
      // Indigo line
      {
        data: [
          0
        ],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Real Time Data</h2>
      </header>
      {/* Card content */}
      <div className="flex flex-col h-full">
        {/* Live visitors number */}
        <div className="px-5 py-3">
          <div className="flex items-center">
            {/* Red dot */}
            <div className="relative flex items-center justify-center w-4 h-4 rounded-full bg-rose-100 mr-3" aria-hidden="true">
              <div className="absolute w-1.5 h-1.5 rounded-full bg-rose-500"></div>
            </div>
            {/* Vistors number */}
            <div>
              <div className="text-3xl font-bold text-slate-800 mr-2">Upgrade to pro</div>
              <div className="text-sm text-slate-500">Live visitors</div>
            </div>
          </div>
        </div>

        {/* Chart built with Chart.js 3 */}
        <div >
          {/* Change the height attribute to adjust the chart height */}
          <LineChart data={chartData} width={389} height={70} />
        </div>

        {/* Table */}
        <div className="grow px-5 pt-3 pb-1">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              {/* Table header */}
              <thead className="text-xs uppercase text-slate-400">
                <tr>
                  <th className="py-2">
                    <div className="font-semibold text-left">Tracked Items</div>
                  </th>
                  <th className="py-2">
                    <div className="font-semibold text-right">Active users</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm divide-y divide-slate-100">
                {/* Row */}
                {trackedItems.map(item => (
                  <tr key={item}>
                    <td className="py-2">
                      <div className="text-left">{item}</div>
                    </td>
                    <td className="py-2">
                      <div className="font-medium text-right text-slate-800">0</div>
                    </td>
                  </tr>
                  ))}



              </tbody>
            </table>
          </div>
        </div>

        {/* Card footer */}
        <div className="text-right px-5 pb-4">
          <Link className="text-sm font-medium text-indigo-500 hover:text-indigo-600" to="#0">Real-Time Report -&gt;</Link>
        </div>
      </div>
    </div>
  );
}

