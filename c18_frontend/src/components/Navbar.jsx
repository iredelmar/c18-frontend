import { Link } from 'react-router-dom'
import logoDesafio from '../assets/icons/desafio-logo.png'
import logoIncubadora from '../assets/icons/incubadora-logo.png'

export default function Navbar() {

 
    return(
        <nav className="flex justify-center rounded-t-2xl  md:justify-start md:rounded-none min-h-18 bg-[#9747FF] ">
            <Link to='/' className='py-2 md:pl-4'>
                <img src={logoIncubadora}></img>
                <img className='ms-auto' src={logoDesafio}></img>
            </Link>
        </nav>
    )
}