import { Helmet } from "react-helmet"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"


const Layout = ({ children, title }) => {
  return (
    <div>

        <header>
            <Helmet>
                <title> {title} </title>
            </Helmet>
        </header>

        <section>
            <Navbar />
        </section> 
        <main >
            {children}
        </main>
        <section className='mt-[610px]' >
            <h1> <Footer/> </h1>
        </section>

    </div>
  )
}

export default Layout