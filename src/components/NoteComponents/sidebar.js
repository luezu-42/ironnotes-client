//Bibliotecas
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

//Componentes
import SearchPopUp from './PageEvents/SearchPopUp';

//CSS em componentes
import {
  Nav,
  SearchBar,
  ListItems,
  PullNavMobile,
  Logo,
  ListNavTitle,
  NavOptions,
  Options,
  NavRight,
  IconRight,
  IconListArrow,
} from "./NoteStyles/nav.style";

//Imagens
import logo from "./images/LogoLight.svg";
import Dark from "./images/nights_stay-black-18dp.svg";
import Logout from "./images/logout.svg";
import Settings from "./images/settings-black-18dp.svg";
import About from "./images/icons8-about.svg";
import Arrow from "./images/keyboard_arrow_right-white-18dp.svg";
import Sun from "./images/wb_sunny-black-18dp.svg";

function Navbar(props) {

  //State para guardar todos os resultados para montar a lista na barra de navegação
  const [list, setList] = useState([
    {
      _id: "",
      title: "",
      tag: [""],
    },
  ]);

  //useEffect para buscar dados na API
  //useEffect(() => {
  //  async function Text() {
  //    try {
  //      const response = await axios.get("http://localhost:2000/api");
  //      setList([...response.data]);
  //    } catch (err) {
  //      console.error(err);
  //    }
  //  }
  //  Text();
  //}, []);

//--------------------------------------------------------------------//

  //State para controlar barra lateral do modo mobile
  const [nav, setNav] = useState({
    active: "-100%",
  });

  //Função para esconder ou puxar a barra de navegação
  function Pull() {
    if (nav.active === "-100%") {
      setNav({ active: "0%" });
    } else {
      setNav({ active: "-100%" });
    }
    document.getElementById("Pull").style.right = nav.active;
  }

  //------------------------------------------------------------------//

  //Retirando das props o State de themas
  const theme = props.themes.theme[0];
  const setTheme = props.themes.theme[1];

  //Fazendo a troca de Tema para dark ou light
  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  //---------------------------------------------------------------------//

  
  const OpenSearch = () => {
    document.getElementById("PopUpUnicValue").style.display = "block";
  }



  return (
    <>
      <SearchPopUp />
      <NavRight>
        <IconRight
          onClick={themeToggle}
          src={theme === "light" ? Dark : Sun}
        ></IconRight>
        <IconRight src={About}></IconRight>
        <IconRight src={Settings}></IconRight>
        <IconRight src={Logout}></IconRight>
      </NavRight>
      <PullNavMobile onClick={Pull}>Menu</PullNavMobile>
      <Nav id="Pull">
        <Logo src={logo} alt="logo"></Logo>
        <SearchBar placeholder="Search for a title here" value="" onClick={OpenSearch} ></SearchBar>
        <strong
          style={{ marginTop: "15px", marginBottom: "10px", fontSize: "20px" }}
        >
          Notes
        </strong>
        <ListItems>
          {//list.map((list, i) => {
           // return (
           //   <Link to={`/page/${list._id}`} style={{ textDecoration: "none" }}>
           //     <ListNavTitle key="i">
           //       <IconListArrow src={Arrow}></IconListArrow> {list.title}
           //     </ListNavTitle>
           //   </Link>
           // );
           // })
            }
        </ListItems>
        <NavOptions>
          <Options>+ Add a new note</Options>
        </NavOptions>
      </Nav>
    </>
  );
}

export default Navbar;