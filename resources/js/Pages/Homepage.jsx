import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import NewsLists from "@/Components/Homepage/NewsLists";
import Paginator from "@/Components/Homepage/Paginator";
import Footer from "@/Components/Homepage/Footer";

export default function Homepage(props) {
    // console.log("props: ", props);
    return (
        <div className="min-h-screen">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <p className="text-center m-5">{props.description}</p>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-5">
                <NewsLists news={props.news.data} typenews="allNews"/>
            </div>
            <div className="flex justify-center items-center m-5">
                <Paginator meta={props.news.meta} />
            </div>
            <Footer />
        </div>
    );
}
