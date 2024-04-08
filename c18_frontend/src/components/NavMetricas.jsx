import Dropdown from './dropdown/Dropdown';

export default function NavMetricas() {

    const data = {
        first: {
            option: {
                title:'Opcion 1',
                sub1:'sub 1',
                sub2:'sub 2',
                sub3:'sub 3'

            }
        },
        second:{
            option:{
                title:'Opcion 2',
                sub1:'sub 1',
                sub2:'sub 2',
                sub3:'sub 3'
            }
        },
        third:{
            option:{
                title:'Opcion 3',
                sub1:'sub 1',
                sub2:'sub 2',
                sub3:'sub 3'
            }
        }

    }

    return(
        <nav className=" rounded-t-2xl justify-center md:justify-start md:rounded-none h-[52px] text-[18px] bg-[#9747FF] ">
            <section className='flex h-full items-center pl-28 gap-4'>
                <Dropdown data={data.first.option}/>
                <Dropdown data={data.second.option}/>
                <Dropdown data={data.third.option}/>
            </section>
        </nav>
    )
}