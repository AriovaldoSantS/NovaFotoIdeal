import Menu from "../components/Menu"
import Footer from "../components/Footer"
import caixas from "../assets/icon/caixas.png"
import caminhao from "../assets/icon/caminhao.png"
import escudo from "../assets/icon/escudo.png"
import cartao from "../assets/icon/sem-contato.png"

export default function Home() {
    return (
        <>
            <Menu />
            <body>
                <div className="carrossel">
                    Imagens
                </div>

                <div className="fixos">
                    <div className="container">
                        <img src={caminhao} alt="" className="freteGratis" />
                        <p className="titulo">Do Oiapoque ao Chuí</p>
                        <p className="subtitulo">Entregas em Todo o Brasil</p>
                    </div>
                </div>

                <div className="produtosPrincipais">
                    <div className="produto1">
                        <button className="produto">Camisa</button>
                    </div>
                    <div className="produto2">
                        <button className="produto">Caneca</button>
                    </div>
                    <div className="produto3">
                        <button className="produto">Kit Festa</button>
                    </div>
                </div>

                <div className="camisas">
                    <div className="exCamisas">testes</div>
                </div>
            </body>

            <Footer />

        </>
    )
}
