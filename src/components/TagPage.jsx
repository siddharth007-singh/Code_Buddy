import React from 'react'
import Sidbar from "./Sidebar";
import TagsCard from './tags-card';

const tagsData = [
    { name: "Java", questions: 1924330, today: 57, week: 332 },
    { name: "React", questions: 1345678, today: 42, week: 289 },
    { name: "Python", questions: 2456789, today: 65, week: 412 },
    { name: "JavaScript", questions: 3123456, today: 78, week: 521 },
    { name: "C++", questions: 987654, today: 23, week: 198 }
];

const TagPage = () => {

    return (
        <div className='grid grid-flow-col gap-10'>
            <Sidbar />

            <div className='grid grid-flow-row grid-rows-3'>
                <div>
                    <h1 className='font-extrabold text-3xl mt-4'>Tags</h1>
                    <p className='text-gray-600 text-sm mt-2'>A tag is a keyword or label that categorizes your question with other, similar questions. <br />Using the right tags makes it easier for others to find and answer your question.</p>


                    <div className='py-8'>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-l-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-amber-600"
                            placeholder="Search User..."
                        />
                        <button className="bg-amber-600 text-white px-4 py-2 rounded-r-lg hover:bg-amber-700 transition duration-300">
                            Search
                        </button>
                    </div>

                    <div className='grid grid-cols-4 gap-2 mt-5'>
                            {
                                tagsData.map((tag, i) => {
                                    return <TagsCard key={i} yash_name={tag.name} questions={tag.questions} today={tag.today} week={tag.week} />
                                })
                            }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TagPage


// <div className='flex flex-row'>
//             <Sidbar/>

//             <div className='px-10'>
//                 <h1 className='font-extrabold text-3xl mt-5'>Tags</h1>
//                 <p className='text-gray-600 text-sm mt-4'>A tag is a keyword or label that categorizes your question with other, similar questions. <br/>Using the right tags makes it easier for others to find and answer your question.</p>

//                 <div className='py-8'>
//                     <input
//                         type="text"
//                         className="border border-gray-300 rounded-l-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-amber-600"
//                         placeholder="Search User..."
//                     />
//                     <button className="bg-amber-600 text-white px-4 py-2 rounded-r-lg hover:bg-amber-700 transition duration-300">
//                         Search
//                     </button>
//                 </div>

//                 <div className='flex flex-row gap-3 mt-5'>
//                     {
//                         tagsData.map((tag, i)=>{
//                             return <TagsCard key={i} yash_name={tag.name} questions={tag.questions} today={tag.today} week={tag.week}/>
//                         })
//                     }
//                 </div>
//             </div>
//         </div>