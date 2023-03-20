import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
    const [apiResponse, setApiResponse] = useState("");

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:9000/testAPI");
            const res = await response.text();
            setApiResponse(res);
		
        }
        fetchData();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={reactLogo} alt="logo" className="App-logo" />
            </header>

            <p>{apiResponse}</p>
            <p>running</p>
        </div>
    );
}

export default App;
