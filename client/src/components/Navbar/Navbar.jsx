import React, { useState, useContext } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Flags from "../Flags/Flags";
import AddCard from "../AddCard/AddCard";
import { DataContext } from "../../context/DataContext";
import { MenuOpen, Close } from "@mui/icons-material";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import SearchPlaceholder from "../SearchPlaceloder/SearchPlaceholder";

const Navbar = () => {
  const [languade, setLanguade] = useState("english");
  const [openCard, setOpenCard] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [burger, setBurger] = useState(false);
  const dataCard = useContext(DataContext);

  const changeLanguade = (e) => {
    let usedLan = e.target.value;
    setLanguade(usedLan);
  };

  const generateImage = (country) => {
    switch (country) {
      case "english":
        return (
          <img
            className={styles.languadeIcon}
            src="/img/e.png"
            alt="naguadeImg"
          />
        );
      case "germany":
        return (
          <img
            className={styles.languadeIcon}
            src="/img/d.png"
            alt="naguadeImg"
          />
        );
      default:
        return (
          <img
            className={styles.languadeIcon}
            src="/img/e.png"
            alt="naguadeImg"
          />
        );
    }
  };

  return (
    <div className={styles.navMenu}>
      <div className={styles.navWrapper}>
        <div className={styles.navLeft}>
          <div className={styles.navItem}>
            <div className={styles.navSelectContainer}>
              <Flags country={languade} />
              <select
                onChange={(e) => {
                  changeLanguade(e);
                }}
                className={styles.selectWrapper}
                name="languade"
                id="lan"
              >
                <option value="english">English</option>
                <option value="germany">Germany</option>
              </select>
            </div>
            <div className={styles.navSelectContainer}>
              <select className={styles.selectWrapper} name="languade" id="lan">
                <option value="english">USD</option>
                <option value="polish">Euro</option>
              </select>
            </div>
          </div>
          <div className={styles.navItem}>
            <Link className={styles.navLink} to="/products?campaign=men">
              Men
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link className={styles.navLink} to="/products?campaign=women">
              Women
            </Link>
          </div>
          <div className={styles.navItem}>
            <a className={styles.navLink} href="#category_items">
              Children
            </a>
          </div>
        </div>

        <Link to="/" className={styles.navCenter}>
          <span className={styles.logo}>BALANDOSTORE</span>
        </Link>
        <div className={styles.navRight}>
          <div className={styles.navItem}>
            <Link className={styles.navLink} to="/">
              Homepage
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link className={styles.navLink} to="/">
              About
            </Link>
          </div>
          <div className={styles.navItem}>
            <a className={styles.navLink} href="#contact_section">
              Contact
            </a>
          </div>
          <div className={styles.navItem}>
            <Link className={styles.navLink} to="/products">
              Stores
            </Link>
          </div>
          <div className={styles.navIconsContainer}>
            {openSearch ? <SearchPlaceholder /> : null}
            <SearchIcon onClick={() => setOpenSearch(!openSearch)} />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div
              className={styles.shopingCarticon}
              onClick={() => setOpenCard(!openCard)}
            >
              <ShoppingCartOutlinedIcon />
              <span>{dataCard.subtotal.count}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={styles.burger}>
          {burger ? (
            <Close
              className={styles.burgerMenuIcon}
              onClick={() => setBurger(!burger)}
            />
          ) : (
            <div className={styles.mobileNavBarWrapper}>
              <MenuOpen
                className={styles.burgerMenuIcon}
                onClick={() => setBurger(!burger)}
              />
              <div
                className={styles.shopingCarticon}
                onClick={() => setOpenCard(!openCard)}
              >
                <ShoppingCartOutlinedIcon />
                <span>{dataCard.subtotal.count}</span>
              </div>
            </div>
          )}
        </div>
        {burger ? <MobileNavbar /> : null}
      </div>
      {openCard ? <AddCard className={styles.addCard} /> : null}
    </div>
  );
};

export default Navbar;
