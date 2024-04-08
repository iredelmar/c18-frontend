import './Dropdown.css'
import arrowDown from '../../assets/icons/arrow-down.svg';

export default function Dropdown(props){



    return(
        <div className="dropdown">
            <button className='flex'>{props.data.title} <img src={arrowDown}/></button>
            <div className="flex content bg-[#9747FF] py-4 px-6 gap-y-4">
                <a href="#" className='pt-2'>{props.data.sub1}</a>
                <a href="#" className='pt-2'>{props.data.sub2}</a>
                <a href="#" className='pt-2'>{props.data.sub3}</a>
            </div>
        </div>
    )
} 




