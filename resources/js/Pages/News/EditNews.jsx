import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function EditNews(props) {
    const [title, setTitle] = useState(props.newsById.title)
    const [description, setDescription] = useState(props.newsById.description)
    const [category, setCategory] = useState(props.newsById.category)
    const [isNotif, setIsNotif] = useState(false)

    const handleSubmit = () => {
        const data = {id: props.newsById.id, title, description, category}
        // console.log(data)
        Inertia.post('/news/update', data)
        setIsNotif(true)
    }  
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit News</h2>}
        >
            <Head title="Dashboard" />

            <div className='py-6'>
                <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
                    <Link href="/dashboard" className="btn gap-2">
                    <span>&#8592;</span>Back
                    </Link>
                </div>
            </div>

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
                    <input type="text" placeholder="Title" onChange={(title) => setTitle(title.target.value)} className=" m-3 input input-bordered w-full" defaultValue={props.newsById.title} />
                    <input type="text" placeholder="Description" onChange={(description) => setDescription(description.target.value)} className=" m-3 input input-bordered w-full" defaultValue={props.newsById.description}/>
                    <input type="text" placeholder="Category" onChange={(category) => setCategory(category.target.value)} className=" m-3 input input-bordered w-full" defaultValue={props.newsById.category}/>
                    <button className="btn btn-accent m-2" onClick={() => handleSubmit()}>Update</button>
                </div>
            </div>
        </Authenticated>
    );
}
