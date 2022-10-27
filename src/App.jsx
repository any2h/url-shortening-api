import { ThemeProvider } from "styled-components";
import variables from './styles/variables'
import GlobalStyles from './styles/GlobalStyles'
import Header from './components/Header'
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
    return (
        <ThemeProvider theme={variables}>
            <GlobalStyles />
            <div className="App">
                <Header />
                <Hero />
                <Features />
            </div>
        </ThemeProvider>
    )
}

export default App
