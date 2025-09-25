import { FaBars, FaSearch, FaTimes } from 'react-icons/fa'
import style from './style.module.css'
import { IoIosCode } from "react-icons/io";
import { useState } from 'react'
export default function Header(){
    const [menuLateral, setMenuLateral] = useState(false);
    const [pesquisar, setPesquisar] = useState(false);
    const [setLogin] = useState(false);
    return(
    <>
        <header>
            <button onClick={()=> setMenuLateral(true)} className={style.searchIcon}>
                <FaBars size={20} color='#ffffffff'/>
            </button>
            <h1 className={style.titulo}>RF <IoIosCode size={40}/></h1>
            {/* <div className={style.busca}>
                <input type="text" placeholder='Pesquisar'/>
                <FaSearch size={20} color='#e7e7e7ff'/>
            </div> */}
            <nav className={style.menu}>
                <a href="#">Home</a>
                <a href="#">Trabalhos</a>
                <a href="#">Contato</a>  
                <a href="#">GitHub</a>         
            </nav> 
            {/* <button  onClick={()=> setPesquisar(true)} className={style.searchIcon}> 
                <FaSearch size={20} color='#ffffffff'/>
            </button> */}

        </header>
        {menuLateral && (
            <div onClick={()=> setMenuLateral(false)} className={style.overlayMenuLateral}>
                <div onClick={(e)=> e.stopPropagation()} className={style.menuLateral}>
                    <div className={style.cabecalho}>
                        <h2>MENU</h2>
                        <button onClick={()=> setMenuLateral(false)}>
                            <FaTimes size={35}/>
                        </button>
                    </div>
                <div>
                        <nav className={style.navMenuLateral}>
                            <a href="">link</a>
                            <a href="">link</a>
                            <a href="">link</a>
                            <a href="">link</a>
                            <a href="">link</a>
                            <a href="">link</a>
                        </nav>
                    </div>
                </div>
            </div>
        )}
        {pesquisar &&(
            <div onClick={()=> setPesquisar(false)} className={style.overlayPesquisar}>
                <div onClick={(e)=> e.stopPropagation()} className={style.pesquisaContainer}>
                    <input 
                    type="text" 
                    className={style.pesquisaInput}
                    placeholder='Pesquisar...' />
                    <FaSearch color='#ffffffff' />
                </div>
            </div>
        )}
    </>
    )
}