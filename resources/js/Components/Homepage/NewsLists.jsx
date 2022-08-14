import { Link } from "@inertiajs/inertia-react";
import Swal from 'sweetalert2'

const btnDelete = (id) => {
    console.log(id)
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}

const isNews = (news, typenews) => {
    return news.map((data, i) => {
        // console.log(data)
        return (
        <div key={i} className="card w-96 bg-base-100 shadow-xl">
            {/* <figure>
                <img src="https://placeimg.com/400/255/tech/grayscale" alt="Shoes" />
            </figure> */}
            <div className="card-body">
                <h2 className="card-title">
                    {data.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{data.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-inline">{data.category}</div>
                    {typenews == 'myNews' ?
                        <>
                            <Link href="dashboard/editnews" className="badge badge-outline" method="get" data={{id:data.id}}>edit</Link>
                            <button onClick={() => btnDelete(data.id)} className="badge badge-outline">delete</button>
                        </>
                        :
                        <div className="badge badge-outline">{data.author}</div>
                    }
                </div>
            </div>
        </div>
        );
    });
};

const noNews = () => {
    return (
        <div>Saat ini berita belum tersedia</div>
    )
}

const NewsLists = ({ news, typenews }) => {
    return news.length < 1 ? noNews : isNews(news, typenews)
};

export default NewsLists;
