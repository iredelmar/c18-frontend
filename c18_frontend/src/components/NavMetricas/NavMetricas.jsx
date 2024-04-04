import arrowDown from '../../assets/icons/arrow-down.svg';
import '../NavMetricas/navMetricas.css';

export default function NavMetricas() {

    return(
        <nav className="flex gap-2 justify-center items-center rounded-t-2xl  md:justify-start md:rounded-none h-14 text-[18px] bg-[#9747FF] ">
            <div className="dropdown ml-24">
                <button className='flex gap-2 pl-2'>Metricas <img src={arrowDown}/></button>
                <div className="content bg-[#9747FF] px-8 py-4 gap-y-4">
                    <a href="#" className='py-2'>Metrica 1</a>
                    <a href="#" className='py-2'>Metrica 2</a>
                    <a href="#" className='py-2'>Metrica 3</a>
                </div>
        </div>
        <div className="dropdown">
                <button className='flex gap-2 pl-2'>Metricas <img src={arrowDown}/></button>
                <div className="content bg-[#9747FF] px-8 py-4 gap-y-4">
                    <a href="#" className='py-2'>Metrica 1</a>
                    <a href="#" className='py-2'>Metrica 2</a>
                    <a href="#" className='py-2'>Metrica 3</a>
                </div>
        </div>
        <div className="dropdown">
                <button className='flex gap-2 pl-2'>Metricas <img src={arrowDown}/></button>
                <div className="content bg-[#9747FF] px-8 py-4 gap-y-4">
                    <a href="#" className='py-2'>Metrica 1</a>
                    <a href="#" className='py-2'>Metrica 2</a>
                    <a href="#" className='py-2'>Metrica 3</a>
                </div>
        </div>
        </nav>
    )
}