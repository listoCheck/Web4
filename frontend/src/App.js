import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Body } from './components/Body';
import { Reg } from './components/Reg';
import './css/page.css';
import './css/reg.css';


function App() {
    const [showReg, setShowReg] = useState(false);

    const handleRegisterClick = () => {
        setShowReg(true);
    };

    return (
        <div className="App">
            <Header />
            {showReg ? <div><Body/></div> :
                <div className="registration-container">
                    <Reg/>
                    <button type="submit" className="submit">Зарегистрироваться</button>
                    <button onClick={handleRegisterClick} className="submit">Войти</button>
                </div>
            }
            <Footer/>
        </div>
    );
}

export default App;
