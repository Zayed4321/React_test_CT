import { useState } from "react";
import { commerce } from "../lib/commerce";
import { useEffect } from "react";
import SharesCard from "../component/SharesCard";
import Layout from "../Layout/Layout";


const Home = () => {

    const [products, setProducts] = useState([]);

    const fetchShareData = async () => {

        const { data } = await commerce.products.list();

        return setProducts(data)

    }

    useEffect(() => {
        fetchShareData()
    }, [])

    console.log(products)

    return (
        <Layout title={"Home"} >

            <div className="container mx-auto" >

                <div className="flex flex-wrap mt-5 gap-4 justify-center" >
                    {
                        products.map(prd => <SharesCard key={prd.id} ShareInfo={prd} />)
                    }
                </div>

            </div>

        </Layout>
    )
}

export default Home