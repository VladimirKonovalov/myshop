import React from 'react';
import Header from "./components/header";
import Footer from "./components/footer"
import HomeScreen from "./screens/HomeScreen"
import Container from "react-bootstrap/Container";

function App() {
    return (
        <>
            <Header/>
                <main className='py-3'>
                    <Container>
                        <HomeScreen/>
                    </Container>
                </main>
            <Footer/>
        </>
    );
}

export default App;
