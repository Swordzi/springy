import React from "react";
import Spin from "../Components/spin";
import '../Styles/Home.scss';

function Home() {
    return (
        <div className="Home">
            <header className="Home-header">
                <p>Lorem ipsum etc. home btw</p>
                <Spin/>
            </header>
        </div>


    );
}

export default Home;
