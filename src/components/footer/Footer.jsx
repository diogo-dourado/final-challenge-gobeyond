import React from 'react'
import "./footer.scss"

export default function Footer() {
    return (
        <div className="footer">
            <div className="left">
                <div className="footer-links">
                    <div className="social-links">
                        <img className="logo" src="assets/logo-corebiz-global.svg" alt="" />
                        <p>direitos reservados, corebiz 2021</p>
                        <div className="links">
                            <a href="https://pt-br.facebook.com/corebiz.ag/"><img className="socials" src="assets/Icon-facebook.svg" alt="" /></a>
                            <a href="https://www.instagram.com/corebizag/"><img className="socials" src="assets/Icon-instagram.svg" alt="" /></a>
                            <a href="https://www.linkedin.com/company/corebiz-brasil"><img className="socials" src="assets/Icon-linkedin.svg" alt="" /></a>
                        </div>
                    </div>
                    <div className="corebiz-links">
                        <ul>
                            <li><a href="https://www.corebiz.ag/pt/about/">a corebiz</a></li>
                            <li><a href="https://www.corebiz.ag/pt/#framework-title">serviços</a></li>
                            <li><a href="https://www.corebiz.ag/pt/cases/">cases</a></li>
                            <li><a href="https://www.corebiz.ag/pt/contato/">contato</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="adresses">
                    <div className="brasil">
                        <h3>.Brasil</h3>
                        <p>Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP</p>
                        <p>R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP</p>
                    </div>
                    <div className="argentina">
                        <h3>.Argentina</h3>
                        <p>Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA</p>
                    </div>
                    <div className="mexico">
                        <h3>.México</h3>
                        <p>Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX</p>
                    </div>
                    <div className="chile">
                        <h3>.Chile</h3>
                        <p>Roberto del Río 1137, Providencia.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
