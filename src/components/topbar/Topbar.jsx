import React from 'react'
import "./topbar.scss"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <h1>corebiz<span>.</span></h1>
                </div>
                <div className="right">
                    <ul>
                        <li><a href="https://www.corebiz.ag/pt/about/">a corebiz</a></li>
                        <li><a href="https://www.corebiz.ag/pt/#framework-title">serviços</a></li>
                        <li><a href="https://www.corebiz.ag/pt/cases/">cases</a></li>
                        <li><a href="https://www.corebiz.ag/pt/contato/">contato</a></li>
                    </ul>
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
