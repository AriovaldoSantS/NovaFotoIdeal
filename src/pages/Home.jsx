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
                </div>

                <div className="fixos">
                    <div className="container">
                        <img src={caminhao} alt="" className="imgProdutos" />
                        <p className="titulo">Do Oiapoque ao Chuí</p>
                        <p className="subTitulo">Entregas em Todo o Brasil</p>
                    </div>

                    <div className="container">
                        <img src={cartao} alt="" className="imgProdutos" />
                        <p className="titulo">Parcelamento</p>
                        <p className="subTitulo">Compras com até 6x sem juros</p>
                    </div>

                    <div className="container">
                        <img src={caixas} alt="" className="imgProdutos" />
                        <p className="titulo">Compre no Atacado</p>
                        <p className="subTitulo">Em até 6x sem juros</p>
                    </div>

                    <div className="container">
                        <img src={escudo} alt="" className="imgProdutos" />
                        <p className="titulo">Segurança</p>
                        <p className="subTitulo">Loja com SSL de proteção</p>
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
