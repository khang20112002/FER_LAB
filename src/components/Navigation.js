import React from "react";
import { Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import { NavItem } from "react-bootstrap";
import ReactSwitch from "react-switch";
import { motion } from "framer-motion";

export default function () {
  return (
    <div className="container">
      <Navbar fluid={true} rounded={true}>

        <Navbar.Brand href="">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Movies
          </span>
        </Navbar.Brand>

        <Navbar.Toggle  />
        <Navbar.Collapse>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact">Contact</NavLink>
          </NavItem>
          <NavItem>
          <NavLink to="/News">News</NavLink>
          </NavItem>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
