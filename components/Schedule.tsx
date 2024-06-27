import React from 'react'


type Schedule = {
    id: number;
    start_date: string
    end_date?: string
    event_name: string
    description: string
    start_time?: string
    end_time?: string
    
}
const schedule: Schedule[] = [
    {
        id: 1,
        start_date: '2024-06-27',
        event_name: 'Work',
        description: "Time Given For A Salary.",
        start_time: '09H00',
        end_time: '17H00'
    },
    {
        id: 2,
        start_date:'2024-06-27',
        event_name: 'Coding',
        description: "Fixing Marley&Me AI Scheduler",
        start_time: '20H00',
        end_time: '00H00'
    },
    {
        id: 3,
        start_date:'2024-06-28',
        event_name: 'Work',
        description: "Hit The Grind, Atleast Its Friday",
        start_time: '09H00',
        end_time: '17H00'
    },
]
const Schedule = ({ start_date, end_date }: { start_date: string, end_date?: Date}) => {

    const scheduleResults = schedule.filter(i => i.start_date === start_date)
  return (
<div className="px-2 mx-auto border border-none max-w-3xl">
<div className="flex flex-col">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="shadow-sm overflow-hidden ">
        <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center">
          <div>
            <h2 className="text-xl font-semibold text-davys_gray">
              Schedule
            </h2>
            <p className="text-sm text-davys_gray ">
              View Schedule
            </p>
          </div>
        </div>
{
 scheduleResults.length > 0 ? (
        <table className="min-w-full ">
          <thead className="bg-blue-500">
            <tr>
              <th scope="col" className="pe-6 py-3 ">
                <div className="flex items-center gap-x-2">
                  <span className="text-xs font-semibold uppercase pl-3 tracking-wide text-davys_gray-900">
                    Date
                  </span>

                </div>
              </th>

              <th scope="col" className="px-6 py-3 text-start">
                <div className="flex items-center gap-x-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-davys_gray-900">
                    Event
                  </span>
                </div>
              </th>


              <th scope="col" className="px-6 py-3 text-start">
                <div className="flex items-center gap-x-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-davys_gray-900 ">
                    Description
                  </span>
                </div>
              </th>

            </tr>
          </thead>

          <tbody className="divide-y divide-davys_gray-700 ">
              {
                  scheduleResults.map(i => (

            <tr key={i.id}>
              <td className="h-px w-72 whitespace-nowrap">
                <div className="px-6 py-3">
                  <span className="block text-sm font-semibold text-black-100">{i.start_date}</span>
                  <span className="block text-sm text-davys_gray-700">{i.start_time} - {i.end_time}</span>

                </div>
              </td>
              <td className="h-px w-72 whitespace-nowrap">
                <div className="px-6 py-3">
                  <span className="block text-sm font-semibold text-black-100">{i.event_name}</span>
                </div>
              </td>
              <td className="h-px w-72 whitespace-nowrap">
                <div className="px-6 py-3">
                  <span className="block text-sm font-semibold text-davys_gray-600">{i.description}</span>
                </div>
              </td>
            </tr>
                  ))
              }


          </tbody>
        </table>
 ) : (
    <div className='mx-auto w-full'>
<h1 className='text-davys_gray-600 text-xl text-center'>Nothing Scheduled For Today...</h1>
    </div>
)
}
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Schedule