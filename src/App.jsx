import { ThemeProvider } from "styled-components";
import variables from './styles/variables'
import GlobalStyles from './styles/GlobalStyles'
import Header from './components/Header'
import Hero from './components/Hero';
import Features from './components/Features';
import Boost from "./components/Boost";

function App() {
    return (
        <ThemeProvider theme={variables}>
            <GlobalStyles />
            <div className="App">
                <Header />
                <Hero />
                <Features />
                <Boost />
            </div>
        </ThemeProvider>
    )
}

export default App
