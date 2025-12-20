import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/Main/Main.tsx";
import {MySkills} from "./layout/sections/mySkills/MySkills.tsx";
import {Offer} from "./layout/sections/offer/Offer.tsx";
import {Portfolio} from "./layout/sections/protfolio/Portfolio.tsx";
import {BrandsInfo} from "./layout/sections/brandsInfo/BrandsInfo.tsx";
import {BlogMain} from "./layout/sections/blogMain/BlogMain.tsx";
import {BlogPosts} from "./layout/sections/blogPosts/BlogPosts.tsx";
import {Statistic} from "./layout/sections/statistic/Statistic.tsx";
import {Footer} from "./layout/footer/Footer.tsx";


function App() {
    return (
        <div >
            <Header/>
            <Main/>
            <MySkills/>
            <Offer/>
            <Portfolio/>
            <BrandsInfo/>
            <BlogMain/>
            <BlogPosts/>
            <Statistic/>
            <Footer/>
        </div>
    )
}


export default App
