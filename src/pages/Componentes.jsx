import { List, X } from "@phosphor-icons/react"
import { useState } from "react"
import { Link } from 'react-router-dom'
import styles from "../components/Componentes.module.css"

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
        <>
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
            <main className={styles.pgcomponentes}>
                <section id="Componentes" className={styles.parallax_two}>
                    <h1>Componentes usados no projeto</h1>
                    <div className={styles.imagenscomponentes}>
                        <div className={styles.oculosprotecao}>
                            <img src="../public/oculosprotecao.jpg" alt="oculos de proteção" />
                            <p>Óculos de proteção</p>
                            <div className={styles.conteudocompotente}>
                                <p>Serve unicamente para proteger os olhos dos trabalhadores contra diversos tipos de risco.</p>
                            </div>
                        </div>
                        <div className={styles.arduino}>
                            <img src="../public/arduinopromini.jpg" alt="arduino pro mini" />
                            <p>Arduino pro mini</p>
                            <div className={styles.conteudocompotente}>
                                <p>É projetado para ser uma placa de microcontrolador pequena e versátil.</p>
                            </div>
                        </div>
                        <div className={styles.sensor}>
                            <img src="../public/sensor.jpeg" alt="sensor infravermelho" />
                            <p>Sensor infravermelho</p>
                            <div className={styles.conteudocompotente}>
                                <p>É utilizado para detecção de intrusão através da verificação da variação de temperatura do ambiente.</p>
                            </div>
                        </div>
                        <div className={styles.botao}>
                            <img src="../public/botao.jpeg" alt="botão liga desliga" />
                            <p>Botão</p>
                            <div className={styles.conteudocompotente}>
                                <p>Ao ser pressionado, ativa a opção ou executa o comando a que está associado.</p>
                            </div>
                        </div>
                        <div className={styles.buzzer}>
                            <img src="../public/buzzer.jpeg" alt="buzzer" />
                            <p>Buzzer</p>
                            <div className={styles.conteudocompotente}>
                                <p>É um dispositivo para geração de sinais sonoros (beeps).</p>
                            </div>
                        </div>
                        <div className={styles.bateria}>
                            <img src="../public/bateria37.jpeg" alt="bateria 3.7v" />
                            <p>Bateria</p>
                            <div className={styles.conteudocompotente}>
                                <p>Produzir e armazenar uma certa quantidade de energia por meio dos processos de oxidação e redução.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Header