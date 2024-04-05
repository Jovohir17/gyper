import React, {Component} from 'react';
import Header from "./Components/Pages/Header";
import Section from "./Components/Pages/Section";
import Footer from "./Components/Pages/Footer";
import "./sass/main.scss"

class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <Section/>
                <Footer/>
            </>
        );
    }
}

export default App;