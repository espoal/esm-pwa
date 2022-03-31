import { React } from '@libs/vendors'
// Should be 03
import { LineChart03 as LineChart } from '@libs/charts'

// Import utilities
import { tailwindConfig, hexToRGB } from '@libs/utils/Utils'
import { Tooltip } from '@libs/components/src/Tooltip.mjs'

export const MainCard = ({ dataSet, isLoading }) => {

  // console.log({ dataSet })

  const labels = []
  const data = []

  dataSet.map(({amount, time}) => {
    labels.push(time)
    data.push(amount)
  })

  // console.log({labels, data})

  const chartData = {
    labels,
    datasets: [
      // Indigo line
      {
        label: 'Current',
        data,
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20,
      }
    ],
  };

  // console.log({chartData})

  return (
    <div className="flex flex-col col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">Analytics</h2>
      </header>
      <div className="px-5 py-1">
        <div className="flex flex-wrap">
          {/* Total Transactions */}
          <div className="flex items-center py-2">
            <div className="mr-5">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-slate-800 mr-2">0 Eur</div>
                <div className="text-sm font-medium text-emerald-500">+0%</div>
                <Tooltip className="ml-2">
                  <div className="text-xs text-center whitespace-nowrap">Built with <a className="underline" href="https://www.chartjs.org/" target="_blank" rel="noreferrer">Chart.js</a></div>
                </Tooltip>
              </div>
              <div className="text-sm text-slate-500">Total Transactions</div>

            </div>
            <div className="hidden md:block w-px h-8 bg-slate-200 mr-5" aria-hidden="true"></div>
          </div>
          {/* Unique Visitors */}
          <div className="flex items-center py-2">
            <div className="mr-5">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-slate-800 mr-2">0</div>
                <div className="text-sm font-medium text-emerald-500">+0%</div>
                <Tooltip className="ml-2">
                  <div className="text-xs text-center whitespace-nowrap">Built with <a className="underline" href="https://www.chartjs.org/" target="_blank" rel="noreferrer">Chart.js</a></div>
                </Tooltip>
              </div>
              <div className="text-sm text-slate-500">Total Interactions</div>

            </div>
            <div className="hidden md:block w-px h-8 bg-slate-200 mr-5" aria-hidden="true"></div>
          </div>
          {/* Total Visits */}
          <div className="flex items-center py-2">
            <div className="mr-5">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-slate-800 mr-2">0</div>
                <div className="text-sm font-medium text-emerald-500">+0%</div>
                <Tooltip className="ml-2">
                  <div className="text-xs text-center whitespace-nowrap">Built with <a className="underline" href="https://www.chartjs.org/" target="_blank" rel="noreferrer">Chart.js</a></div>
                </Tooltip>
              </div>
              <div className="text-sm text-slate-500">Total Visits</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-slate-200 mr-5" aria-hidden="true"></div>
          </div>
          {/* Visit Duration*/}
          <div className="flex items-center">
            <div>
              <div className="flex items-center">
                <div className="text-3xl font-bold text-slate-800 mr-2">2m 56s</div>
                <div className="text-sm font-medium text-amber-500">+0%</div>
                <Tooltip className="ml-2">
                  <div className="text-xs text-center whitespace-nowrap">Built with <a className="underline" href="https://www.chartjs.org/" target="_blank" rel="noreferrer">Chart.js</a></div>
                </Tooltip>
              </div>
              <div className="text-sm text-slate-500">Visit Duration</div>
            </div>
          </div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        {isLoading ? (
          <div>Loading ...</div>
        ) : ( <LineChart data={chartData} width={800} height={300} /> )}
      </div>
    </div>
  );
}

