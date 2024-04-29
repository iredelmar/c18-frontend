import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Links } from '../assets/icons/icons';
import userPhoto from '../assets/icons/userPhoto.svg';
import dLatamIcon from '../assets/icons/dLatamIcon.svg';
import incubadoraIcon from '../assets/icons/incubadoraIcon.svg';
import '../components/Sidebar.css';

const Sidebar = ({ setActiveRoute }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`relative p-0 m-0 bg-violet-900 text-white h-screen border-r-2 border-purple-800 ${
        isOpen ? 'w-50' : 'w-9'
      } flex flex-col justify-center`}
      onClick={toggleSidebar}
    >
      {/* Logo*/}
      <div className="flex items-center justify-between pl-2 pt-2">
        <div className="flex items-center">
          {isOpen ? (
            <img src={incubadoraIcon} alt="Incubadora" />
          ) : (
            <div className="w-5 p-0 m-0">
              {' '}
              <img
                src={dLatamIcon}
                alt="Icono de Desafío Latam"
                className="p-0 m-0 w-full"
              />
            </div>
          )}
        </div>
      </div>

      {/* Nav Links */}
      <nav className={isOpen ? ' ml-6 ' : 'm-0'}>
        {Links.map(({ name, icon, route }, LinkIndex) => (
          <Link
            to={route}
            key={LinkIndex}
            onClick={() => setActiveRoute(route)}
            className={`flex items-center my-4 cursor-pointer hover:bg-violet-700 rounded-md ${
              isOpen ? 'justify-start' : 'justify-center'
            }`}
          >
            <span className="text-xs">{icon}</span>
            {isOpen && <span className="text-xs ml-2">{name}</span>}
          </Link>
        ))}
      </nav>

      {/* Profile */}
      <div className="mt-auto pb-14 ">
        <div className="flex items-center justify-center">
          <div className="w-6 p-0 m-0">
            <img
              src={userPhoto}
              alt="Foto de usuario"
              className="p-0 m-0 w-full"
            />
          </div>
          {isOpen && (
            <div className="ml-2 text-xs">
              <p>Nombre Apellido</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
