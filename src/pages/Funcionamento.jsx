import { List, X } from "@phosphor-icons/react"
import { useState } from "react"
import { Link } from 'react-router-dom'
import styles from "../components/Funcionamento.module.css"

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
            <main className={styles.pgfuncionamento}>
                <section id="Funcionamento" className={styles.module_content}>
                        <div className={styles.container}>
                            <h2>Como vai funcionar?</h2>
                            <p>O funcionamento é muito simples! Primeiramente, temos que ligá-lo. Depois de ligado, é só coloca-lo que está pronto para o uso. Quando a pessoa fechar o olho por 2 segundos, o buzzer irá apitar, fazendo com que o usuário acorde.</p>
                            <p className={styles.alinhados}>Fique com a demonstração.</p>
                            <p className={styles.alinhados}>Nossa inspiração:</p>
                            <iframe width="700" height="400" src="https://www.youtube.com/embed/k4Vk04Mcr0Q" title="How to Make Anti Sleep Glasses"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                </section>
            </main>
        </body>
    )
}

export default Header