import React from 'react';
import Header from "./components/header";
import Footer from "./components/footer"
import HomeScreen from "./screens/HomeScreen"

function App() {
    return (
        <>
            <Header/>
                <main className='py-3'>
                    <HomeScreen/>
                </main>
            <Footer/>
        </>
    );
}

export default App;
