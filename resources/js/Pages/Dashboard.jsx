import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [isNotif, setIsNotif] = useState(false)

    const handleSubmit = () => {
        const data = {title, description, category}
        Inertia.post('/news', data)
        setTitle('')
        setDescription('')
        setCategory('')
        setIsNotif(true)
    }  
    // console.log(props)
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">List News</h2>}
        >
            <Head title="Dashboard" />

            <div className='py-12'>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white p-6 overflow-hidden shadow-sm sm:rounded-lg">
                        {isNotif &&
                        <div className="alert alert-info shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span>{props.flash.message}</span>
                            </div>
                        </div>
                        }
                        <input type="text" placeholder="Title" onChange={(title) => setTitle(title.target.value)} className=" m-3 input input-bordered w-full" value={title} />
                        <input type="text" placeholder="Description" onChange={(description) => setDescription(description.target.value)} className=" m-3 input input-bordered w-full" value={description}/>
                        <input type="text" placeholder="Category" onChange={(category) => setCategory(category.target.value)} className=" m-3 input input-bordered w-full" value={category}/>
                        <button className="btn btn-accent m-2" onClick={() => handleSubmit()}>Submit</button>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
