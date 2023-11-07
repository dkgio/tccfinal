import { List, X, InstagramLogo} from "@phosphor-icons/react"
import { useState } from "react"
import { Link } from 'react-router-dom'
import styles from "../components/Criadores.module.css"

function Header() {
    const [abrirMenu, setAbrirMenu] = useState(false)
    function handleAbrirFecharMenu() {
        if (abrirMenu === true) {
            setAbrirMenu(false)
            return
        }

        setAbrirMenu(true)
    }

    return(
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
            <main className={styles.pgcriadores}>
            <section id="Criadores" className={styles.parallax_three}>
                        <h1>Criadores do projeto</h1>
                        <div className={styles.imagenscriadores}>
                            <div className={styles.giovanna}>
                                <img src="../giovanna.jpg" alt="foto da giovanna" />
                                <div className={styles.arroz}>
                                    <a href="https://www.instagram.com/gioo.pereira_/"rel="noopener" >
                                    <InstagramLogo size={32} color="#ffffffff" />
                                    </a>
                                    <p>Giovanna</p>
                                </div>
                            </div>
                            <div className={styles.pablo}>
                                <img src="../pablo2.jpeg" alt="foto da pablo" />
                                    <div className={styles.arroz}>
                                        <a href="https://www.instagram.com/chaves_014/"rel="noopener" >
                                        <InstagramLogo size={32} color=" #ffffffff" />
                                        </a>
                                        <p>Pablo</p>
                                    </div>
                                </div>
                            <div className={styles.paulo}>
                                <img src="../paulo.jpg" alt="foto da paulo" />
                                <div className={styles.arroz}>
                                    <a href="https://www.instagram.com/paulo_zyt/"rel="noopener" >
                                    <InstagramLogo size={32} color=" #ffffffff" />
                                    </a>
                                    <p>Paulo</p>
                                </div>
                            </div>
                        </div>
                    </section>
            </main>
        </body>
    )
}

export default Header