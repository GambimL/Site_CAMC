import { useState, useEffect, useRef } from 'react';
import styles from '../DropdownMenu/Menu.module.scss';

export function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const days = [{
    path: "#",
    day: "07/11"
  }, {
    day: "08/11",
    path: "#"
  }, {
    day: "09/11",
    path: "#"
  }];

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (

    <div className="relative inline-block" ref={menuRef}>
      <button onClick={() => { setOpen(!open) }} className="relative z-10 flex items-center p-5 text-gray-600 border border-transparent rounded-md focus:border-sky-700 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring dark:text-white dark:bg-slate-900 focus:outline-none" >
        <span>Programação</span>
        <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
        </svg>
      </button>

      <div className={`absolute overflow-hidden bg-white rounded-md shadow-xl dark:bg-slate-800 && ${styles.dropdownMenu} && ${open ? styles.active : styles.notActive}`} >
        {
          days.map((program) => {
            return <>
              <a href={program.path} className="block px-4 py-3 capitalize transition-colors duration-200 transform dark:text-gray-300 rounded-md  hover:text-sky-700 text-white">
                dia {program.day}
              </a>
            </>
          })
        }
      </div>
    </div>
  )
}