import { useState } from "react";
import { commerce } from "../lib/commerce";
import { useEffect } from "react";
import SharesCard from "../component/SharesCard";


const Home = () => {

    const [ products, setProducts ] = useState([]);

    const fetchShareData = async () => {

        const { data } = await commerce.products.list();

        return setProducts(data)

    }

    useEffect( () => {
        fetchShareData()
    }, [] )

    console.log(products)

  return (
    <div>
        
        {
            products.map( prd => <SharesCard key={prd.id} ShareInfo={ prd } /> )
        }

    </div>
  )
}

export default Home