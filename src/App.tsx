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
import {Particle} from "./components/particle/Particle.tsx";
import {ModalContact} from "./components/modalContact/ModalContact.tsx";
import {useState} from "react";




function App() {
    const [isActiveContact, setIsActiveContact] = useState(false)
    return (
            <div>
                <Header/>
                <Main/>
                <MySkills setIsActive={setIsActiveContact}/>
                <Offer />
                <Portfolio/>
                <BrandsInfo/>
                <BlogMain/>
                <BlogPosts/>
                <Statistic/>
                <Footer setIsActive={setIsActiveContact}/>
                <Particle/>
                {setIsActiveContact && <ModalContact $setIsActive={setIsActiveContact} $isOpen={isActiveContact}/>}
            </div>
    )
}


export default App
