import React from 'react'


function Navigation() {
  return (
    <>
        <ul>
            <li
              onClick={(e)=> {e.preventDefault();
              window.location.replace('#Home')}}>Home
            </li>
            <li onClick={(e)=> {e.preventDefault();
              window.location.replace('#About')}}>About</li>
            <li onClick={(e) => {
               e.preventDefault();
               window.location.replace("/#Projects")}}>Projects</li>
            <li onClick={(e)=> {e.preventDefault();
              window.location.replace('#Contact')}}>Contact</li>
        </ul>
    </>
  )
}

export default Navigation