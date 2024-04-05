import { useState } from 'react';
import { Links } from '../assets/icons/icons';
import userPhoto from '../assets/icons/userPhoto.svg';
import dLatamIcon from '../assets/icons/dLatamIcon.svg';
import incubadoraIcon from '../assets/icons/incubadoraIcon.svg';
import { Link } from 'react-router-dom';
import '../components/Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`relative p-0 m-0 bg-violet-900 text-white h-screen border-r-2 border-purple-800 ${
        isOpen ? 'w-50' : 'w-12'
      } flex flex-col justify-center`}
      onClick={toggleSidebar}
    >
      {/* Logo*/}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          {isOpen ? (
            <img src={incubadoraIcon} alt="Incubadora" />
          ) : (
            <img
              src={dLatamIcon}
              alt="Icono de Desafío Latam"
              className="p-0 m-0"
            />
          )}
        </div>
      </div>

      {/* Nav Links */}
      <nav className={isOpen ? ' ml-4  ' : 'm-0'}>
        {Links.map(({ name, icon }, LinkIndex) => (
          <Link
            href={`/${name === 'Dashboard' ? '' : `/${name}`}`}
            key={LinkIndex}
            className={`flex items-center my-6 cursor-pointer hover:bg-violet-700 rounded-md ${
              isOpen ? 'justify-start' : 'justify-center'
            }`}
          >
            <span className="text-xs">{icon}</span>
            {isOpen && <span className="ml-2">{name}</span>}
          </Link>
        ))}
      </nav>

      {/* Profile */}
      <div className="mt-auto p-4">
        <div className="flex items-center justify-center">
          <img src={userPhoto} alt="Foto de usuario" className="p-0 m-0" />

          {isOpen && (
            <div className="ml-2">
              <p>Nombre Apellido</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

//  Otra opcion Para desplegar el sidebar al posar el mouse encima

{
  /* <div
        className={`bg-purple-800 text-white h-screen border-r-2 border-purple-800 ${
          isOpen ? 'w-64' : 'w-16'
        } flex flex-col justify-center`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        style={{ margin: '0', padding: '0', display: 'flex', flexDirection: 'column'  }}
         */
}
