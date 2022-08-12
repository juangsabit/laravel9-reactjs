import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import NewsLists from "@/Components/Homepage/NewsLists";
import Paginator from "@/Components/Homepage/Paginator";

export default function Homepage(props) {
    console.log("props: ", props);
    return (
        <div className="min-h-screen">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <p className="text-center mb-5">{props.description}</p>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-5">
                <NewsLists news={props.news.data} />
            </div>
            <div className="flex justify-center items-center m-5">
                <Paginator meta={props.news.meta} />
            </div>
        </div>
    );
}
