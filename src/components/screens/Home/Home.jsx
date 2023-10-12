import Header from "@/components/screens/Home/Header/Header";
import Intro from "@/components/screens/Home/Intro/Intro";
import UseCases from "@/components/screens/Home/UseCases/UseCases";
import Features from "@/components/screens/Home/Features/Features";
import Instruction from "@/components/screens/Home/Instruction/Instruction";
import Api from "@/components/screens/Home/Api/Api";
import Community from "@/components/screens/Home/Community/Community";
import Footer from "@/components/screens/Home/Footer/Footer";

const Home = () => {
    return (
        <>
            <Header/>
            <main>
                <Intro/>
                <UseCases/>
                <Features/>
                <Instruction/>
                <Api/>
                <Community/>
            </main>
            <Footer/>
        </>
    );
};

export default Home;