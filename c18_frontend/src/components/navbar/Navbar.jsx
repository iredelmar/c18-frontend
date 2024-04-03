import logoDesafio from './icons/desafio-logo.png'
import logoIncubadora from './icons/incubadora-logo.png'

export default function Navbar() {



    return(
        <nav className="flex justify-between items-center min-h-18 bg-[#9747FF]">
            <div className='pl-4 py-2'>
                <img src={logoIncubadora}></img>
                <img className='ms-auto' src={logoDesafio}></img>
            </div>
        </nav>
    )
}