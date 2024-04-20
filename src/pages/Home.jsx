import Menu from "../components/Menu"
import Footer from "../components/Footer"
import caixas from "../assets/icon/caixas.png"
import caminhao from "../assets/icon/caminhao.png"
import escudo from "../assets/icon/escudo.png"
import cartao from "../assets/icon/sem-contato.png"
// import car01 from
// import car02 from
// import car03 from

export default function Home() {
    return (
        <>
            <Menu />
            <body>
                <div className="carrossel">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="..." alt="First slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="..." alt="Second slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="..." alt="Third slide" />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>


                <div className="fixos">
                    <div className="container">
                        <div className="iconContainer">
                            <div className="iconImage">
                                <img src={caminhao} alt="" />
                            </div>
                            <div className="iconText">
                                <h3>Do Oiapoque ao Chuí</h3>
                                <h4>Todo o Brasil</h4>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="iconContainer">
                            <div className="iconImage">
                                <img src={caixas} alt="" />
                            </div>
                            <div className="iconText">
                                <h3>Compre em atacado</h3>
                                <h4>Desconto acima de 10 unid</h4>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="iconContainer">
                            <div className="iconImage">
                                <img src={cartao} alt="" />
                            </div>
                            <div className="iconText">
                                <h3>Parcelamento</h3>
                                <h4>Em até 6x sem juros</h4>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="iconContainer">
                            <div className="iconImage">
                                <img src={escudo} alt="" />
                            </div>
                            <div className="iconText">
                                <h3>Segurança</h3>
                                <h4>Total Segurançana sua compra</h4>
                            </div>
                        </div>
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

                <div className="camisas">
                    <div className="exCamisas">testes</div>
                </div>
            </body>

            <Footer />

        </>
    )
}
