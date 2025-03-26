import React from 'react'

const TagsCard = ({yash_name, questions, today, week}) => {
  return (
    //Designing single tag card
    <div className='w-70 h-25 border border-gray-300 px-3 py-2'>
        {/*TagsCard header*/}
        <span className='bg-gray-300 px-2 text-sm font-semibold rounded-full'>
            {yash_name}
        </span>

        {/*TagsCard content*/}
        <div className='flex flex-row mt-3 text-gray-600'>
            <div className='text-sm'>{questions} questions</div>
            <div className='text-sm'>{today} asked today, 332 this {week}</div>
        </div>
    </div>
  )
}

export default TagsCard