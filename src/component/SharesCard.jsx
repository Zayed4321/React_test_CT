

const SharesCard = ( { ShareInfo } ) => {

    console.log(ShareInfo.name)


    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{ ShareInfo.name }</h2>
                    <p> { ShareInfo.description } </p>
                    <p> { ShareInfo.price.formatted_with_symbol } </p>
                </div>
                <figure><img src={ShareInfo.image.url} alt="Shoes" /></figure>
            </div>
        </div>
    )
}

export default SharesCard