import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Jion from "./components/Jion/Jion";
import Plans from "./components/Plans/Plans";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
    return (
        <div className="App">
            <Hero />
            <Programs />
            <Reasons />
            <Plans />
            <Testimonials />
            <Jion />
            <Footer />
        </div>
    );
}

export default App;
