import logo from '../assets/icon/400ppi/Ativo 1.png'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <>
            <div className="pix">PAGANDO COM PIX VOCÊ GANHA 5% OFF</div>
            <div className="menu">
                <img src={logo} alt="" className="logoImg" />
                <h1>L.U.A Ateliê</h1>
                <div className="linkBase">
                    <Link className='link' to='/atendimento'>Atendimento</Link>
                    <Link className='link' to='/rastrear'>Rastrear Produto</Link>
                    <Link className='link' to='/conta'>Minha Conta</Link>
                    <Link className='link' to='/carrinho'>Cart</Link>
                </div>

            </div >


            <div className="pages">
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/categoria'>Categoria</Link>
                <Link className='link' to='/promocao'>Promoção</Link>
                <Link className='link' to='/fale'>Fale Conosco</Link>
            </div>
        </>
    )
}

export default Menu
