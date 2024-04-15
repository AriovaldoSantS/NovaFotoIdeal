import Menu from "../components/Menu"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <>
            <Menu />
            <body>
                <div className="carrossel">
                    Imagens
                </div>

                <div className="fixos">
                    <ul className="listaFixos">
                        <li>Frete Grátis</li>
                        <li>Entrega Agil</li>
                        <li>pague com Cartão</li>
                        <li>Segurança</li>
                    </ul>
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
