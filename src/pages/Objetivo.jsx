import { List, X } from "@phosphor-icons/react"
import { useState } from "react"
import { Link } from 'react-router-dom'
import styles from "../components/Objetivo.module.css"

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
            <main className={styles.pgobjetivos}>
                <section id="Objetivo" className={styles.module_content}>
                        <div className={styles.container}>
                            <h2>Qual o objetivo e o público alvo do nosso projeto?</h2>
                            <p>
                                Nós vimos que nos últimos anos ocorreram muitos acidentes de trânsito, então decidimos criar o "Anti Sleep Glasses",
                                que traduzindo, fica "Óculos Anti sono". O intuito do nosso projeto é fazer com que o motorista não durma. Outra situação
                                muito comum e que nosso óculos pode ser muito funcional é quando uma pessoa está com sono e quer continuar estudando.
                            </p>
                        </div>
                        <div className={styles.imagens}>
                            <div className={styles.motorista}>
                                <img src="../public/motorista.jpg" alt="motorista" />
                            </div>
                            <div className={styles.estudante}>
                                <img src="../public/estudante2.png" alt="estudante" />
                            </div>
                        </div>
                </section>
            </main>
        </body>
    )
}

export default Header