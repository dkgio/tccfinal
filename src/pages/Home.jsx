import { List, X, InstagramLogo } from "@phosphor-icons/react"
import { useState } from "react"
import { Link } from 'react-router-dom'
import styles from "../components/Home.module.css"

function Header() {
    const [abrirMenu, setAbrirMenu] = useState(false)
    function handleAbrirFecharMenu() {
        if (abrirMenu === true) {
            setAbrirMenu(false)
            return
        }
        setAbrirMenu(true)
    }
    return (
        <body>
            <header className={styles.header}>
                <div className={styles.mobile}>
                    <div className={styles.menu_logo}>
                        <button className={styles.botao} onClick={handleAbrirFecharMenu}>
                            {
                                abrirMenu === true ? (
                                    <X size={32} />
                                ) : (
                                    <List size={32} />
                                )
                            }
                        </button>
                        <div>
                            <img src="../public/logo.png" alt="Logo" />
                        </div>
                    </div>
                    <div className={`${styles.options} ${abrirMenu === true && styles.open}`}>
                        <nav>
                            <Link to={"/"}>Home</Link>
                            <Link to={"/Objetivo"}>Objetivo</Link>
                            <Link to={"/Funcionamento"}>Funcionamento</Link>
                            <Link to={"/Componentes"}>Componentes</Link>
                            <Link to={"/Criadores"}>Criadores</Link>
                        </nav>
                    </div>
                </div>
                <div className={styles.desktop}>
                    <div>
                        <img src="../public/logo.png" alt="Logo" />
                    </div>
                    <div>
                        <nav className={styles.desktop_options}>
                            <Link to={"/"}>Home</Link>
                            <Link to={"/Objetivo"}>Objetivo</Link>
                            <Link to={"/Funcionamento"}>Funcionamento</Link>
                            <Link to={"/Componentes"}>Componentes</Link>
                            <Link to={"/Criadores"}>Criadores</Link>
                        </nav>
                    </div>
                </div>
            </header>
            <div className={styles.wrapper}>
                <main className={styles.pgcriadores}>
                    <section className={styles.parallax_one}>
                        <h1>ANTI SLEEP GLASSES</h1>
                        <p>Para saber mais, clique em um dos itens a cima.</p>
                        <div className={styles.oculos}>
                            <img src="../public/oculos.png" alt="anti-sleep-glasses" />
                        </div>
                    </section>
                </main>
            </div>
        </body>
    )
}

export default Header