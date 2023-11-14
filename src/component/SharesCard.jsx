import { NavLink } from "react-router-dom"


const SharesCard = ({ ShareInfo }) => {

    console.log(ShareInfo.name)


    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={ShareInfo.image.url} alt="Sorry" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {ShareInfo.name} </h2>
                    <p>{ShareInfo.description}</p>
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline">{ShareInfo.price.formatted_with_symbol}</div>
                    </div>
                    <NavLink to={`/home/${ShareInfo.id}`} >
                        <button className="btn btn-primary">Know More</button>
                    </NavLink>
                </div>
            </div>
        </div>

    )
}

export default SharesCard