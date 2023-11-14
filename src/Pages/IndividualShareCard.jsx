import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { commerce } from "../lib/commerce";


const IndividualShareCard = () => {

    const { uniqueId } = useParams();

    const [ single, setSingle ] = useState([]);

    const fetchSingleShareData = async () => {

        const data = await commerce.products.retrieve(`${uniqueId}`);

        return setSingle(data)

    }

    useEffect(() => {
        fetchSingleShareData()
    }, [])

    console.log(single)

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={single.image?.url} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{ single.name }</h1>
                        <p className="py-6"> { single.description } </p>
                        <p className="py-2" > { single.price?.formatted_with_symbol } </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualShareCard