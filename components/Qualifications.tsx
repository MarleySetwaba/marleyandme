import React from 'react'


const worked = [
  {
    title: 'Department of Home Affairs - Digitization Project',
    role: 'Technical Support',
    years: ' 2024 - Current',
    desc: "Contributed to the digitization process of converting over 350 million civic paper records into electronic format for improved service delivery. "

  },
  {
    title: 'Nelotec Pty Ltd.',
    role: 'Software Developer',
    years: '2023 - 2024',
    desc: 'Contributed towards designing and building fully functional software applications.'

  },
  {
    title: 'TNG Solutions.',
    role: 'Front End Developer & Business Analyst',
    years: '2022 - 2023',
    desc: 'Contributed towards building visually appealing front end applications and conducting business analysis for software products.'

  },
]
const Qualifications = () => {
  return (

    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

      <div className="grid md:grid-cols-2 gap-12">
        <div className="lg:w-3/4">
          <h2 className="text-3xl text-eerie_black font-bold lg:text-4xl text-center">
            Places I've Worked.
          </h2>
          <p className="mt-3 text-davys_gray-300 text-lg text-center">
            I've had the priviledge to work with some great companies and institutions so far. 
          </p>
          <p className="mt-5">
 
          </p>
        </div>
    
    
        <div className="space-y-6 lg:space-y-10">
          {
            worked.map(i => (

          <div className="flex">
            <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto ">
            <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
              <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
            </span>
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold text-davys_gray-300 ">
                {i.title}
              </h3>
              <div className="text-sm text-davys_gray-300 ">{i.role} | {i.years}</div>

              <p className="mt-1 text-davys_gray-300 ">
{i.desc}              </p>
            </div>
          </div>
            ))
          }
    

        </div>
      </div>
    </div>
      )
}

export default Qualifications