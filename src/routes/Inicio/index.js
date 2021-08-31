
import React from 'react';

import './index.css';

function Inicio()
{
    var menuon = false;

    const abrirMenu = () => {
        var menu = document.getElementById("menu");
        if(menu)
        {
            if(!menuon)
            {
                menu.classList.add("show");
                document.getElementById("choice_menu").classList.add("choice_active");
            }
            else
            {
                menu.classList.remove("show"); 
                document.getElementById("choice_menu").classList.remove("choice_active");
            }
            menuon = !menuon;
        }
    }
    
    const blurInput = () => {
        var input = document.getElementById("searchinp");
        if(input)
        {
            input.classList.remove("searchactive");
        }
    }
    
    const focusInput = () => {
        var input = document.getElementById("searchinp");
        if(input)
        {
            input.classList.add("searchactive");
        }
    }
    return (
        <div>
            <div className="contenido">
                <div class="chats">
                    <div className="userchoices">
                        <div className="flexx">
                            <div className="user_icon">
                            </div>
                        </div>
                        <div className="flexx">
                            <div className="choices">
                                <div className="user_choice">
                                    <span>
                                        <svg viewBox="0 0 24 24" width="24" height="24"><path d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"></path></svg>
                                    </span>
                                </div>
                                <div className="user_choice">
                                    <span>
                                        <svg viewBox="0 0 24 24" width="24" height="24" class=""><path d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg>
                                    </span>
                                </div>
                                <div className="user_choice" id="choice_menu">
                                    <span onClick={() => { abrirMenu() }}>
                                        <svg viewBox="0 0 24 24" width="24" height="24" class=""><path d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                                    </span>
                                    <div className="configmenu" id="menu">
                                        <div className="configmenu_choice">
                                            <span>Nuevo grupo</span>
                                        </div>
                                        <div className="configmenu_choice">
                                            <span>Crear una sala</span>
                                        </div>
                                        <div className="configmenu_choice">
                                            <span>Perfil</span>
                                        </div>
                                        <div className="configmenu_choice">
                                            <span>Archivados</span>
                                        </div>
                                        <div className="configmenu_choice">
                                            <span>Destacados</span>
                                        </div>
                                        <div className="configmenu_choice">
                                            <span>Configuracion</span>
                                        </div>
                                        <div className="configmenu_choice">
                                            <span>Cerrar sesion</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="searchconv" id="searchinp">
                        <div className="searchconv_input">
                            <div className="searchconv_icon"><svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path></svg></div><div className="searchconv_elinput"><input type="text" placeholder="Busca un chat o inicia uno nuevo" onBlur={() => { blurInput() }} onFocus={() => { focusInput() }}/></div><div style={{padding:'0px 10px'}}>i</div>
                        </div>
                    </div>
                    <div className="resent_chats">

                    </div>
                </div>
                <div class="chat_conver">

                </div>
            </div>
        </div>
    );
}

export default Inicio;