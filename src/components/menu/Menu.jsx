import "./menu.scss"

export default function Menu( { menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li><a href="https://www.corebiz.ag/pt/about/">a corebiz</a></li>
                <li><a href="https://www.corebiz.ag/pt/#framework-title">serviços</a></li>
                <li><a href="https://www.corebiz.ag/pt/cases/">cases</a></li>
                <li><a href="https://www.corebiz.ag/pt/contato/">contato</a></li>
            </ul>
        </div>
    )
}
