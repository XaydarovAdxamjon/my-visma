"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from "/public/navbar_icon.png";
import Image from "next/image";
import './navbar.css'
import { useRouter } from "next/navigation";

export default function Nav() {
  const router=useRouter();


  return (
    <div className="container">
      <div className="navbar">
        <Image onClick={()=> router.push('./')} className="image" src={logo} />
        <ul>
          <li onClick={()=> router.push('./info')}  >О компании</li>
          <li onClick={()=> router.push('./info')}>Новости</li>
          <li onClick={()=> router.push('./info')}>Новости</li>
          <li onClick={()=> router.push('./info')}>Новости</li>
          <li onClick={()=> router.push('./info')}>Новости</li>
          <li onClick={()=> router.push('./info')}>Новости</li>
          <li onClick={()=> router.push('./info')}>Новости</li>
        </ul>
        <div className="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input style={{ border: "none", borderBottom: "1px solid black",marginLeft:'10px' }} type="text" />
        </div>
        <div className="language">
           <p>RU</p>
          <select name="tanlov" id="tanlov">
            <option value="tanlov1">UZ</option>
            <option value="tanlov2">RU</option>
          </select>
        </div>
           

      </div>

    </div>
  );
}

