import React, { useState, useEffect } from 'react'

import logo from './logo.svg'

import './App.css'

const App = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => setCount(count + 1), 1000)
        return () => clearTimeout(timer)
    }, [count, setCount])

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Welcome to Snowpack!
                </p>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Page has been open for <code>{count}</code> seconds.
                </p>
            </header>
        </div>
    )
}

export default App