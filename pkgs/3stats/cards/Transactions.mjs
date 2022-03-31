import { React, Link } from '@libs/vendors'

const tableData = [
  {
    source: 'Bid',
    amount: 3.2,
    currency: 'BTC'
  },
  {
    source: 'Ads',
    amount: 1.2,
    currency: 'ETH'
  },
  {
    source: 'Event',
    amount: 120,
    currency: 'EUR'
  }
]

export const TransactionsCard = () => {
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Transactions</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
            <tr>
              <th className="p-2">
                <div className="font-semibold text-left">Source</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-center">Amount</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-center">Currency</div>
              </th>
            </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
            {/* Rows */}
            {tableData.map(({source, amount, currency}, index)=> (
              <tr key={index}>
                <td className="p-2">
                  <div className="flex items-center">
                    <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
                      <circle fill="#24292E" cx="18" cy="18" r="18" />
                      <path d="M18 10.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V24c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" fill="#FFF" />
                    </svg>
                    <div className="text-slate-800">{source}</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">{amount}</div>
                </td>
                <td className="p-2">
                  <div className="text-center">{currency}</div>
                </td>

              </tr>
            ))}
            </tbody>
          </table>
        </div>

      </div>

      <div className="text-right px-5 pb-4">
        <Link className="text-sm font-medium text-indigo-500 hover:text-indigo-600" to="#0">Real-Time Report -&gt;</Link>
      </div>

    </div>
  );
}

