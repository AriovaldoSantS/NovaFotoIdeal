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
                    <div className="container">
                        <img src="" alt="" className="freteGratis" />
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