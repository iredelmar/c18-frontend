import logoDesafio from '../assets/icons/desafio-logo.png'
import logoIncubadora from '../assets/icons/incubadora-logo.png'
import {Link} from 'react-router-dom'

export default function Navbar() {



    return(
        <nav className="flex justify-between items-center min-h-18 bg-[#9747FF]">
            <Link to='/' className='pl-4 py-2'>
                <img src={logoIncubadora}></img>
                <img className='ms-auto' src={logoDesafio}></img>
            </Link>
        </nav>
    )
}