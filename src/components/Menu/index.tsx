import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { FcHome, FcLineChart, FcViewDetails } from 'react-icons/fc';
import { FiLogOut } from 'react-icons/fi';

import {
  FaHandHoldingUsd,
  // FaNetworkWired
} from 'react-icons/fa';

import { AiOutlineBank } from 'react-icons/ai';

import { MdLinearScale } from 'react-icons/md';
import Logo from '../Logo';

import { Container, NavHeader, Nav, Wrap, ListaNav, NavItem } from './styles';
import { useAuth } from '../../hooks/Auth';
import Placeholder from './Placeholder';

interface IProps {
  callback: () => void;
}

export default function Menu({ callback }: IProps): JSX.Element {
  const { setToken } = useAuth();
  const [loading, setLoading] = useState(true);
  const [subMenuActive, setSubMenu] = useState('');

  useEffect(() => {
    setInterval(() => {
      if (loading) {
        setLoading(false);
      }
    }, 500);
  }, [loading, setLoading]);

  function handlerOnClick(submenu: string) {
    if (subMenuActive === submenu) {
      setSubMenu('');
      return;
    }
    setSubMenu(submenu);
  }

  return (
    <>
      {!loading ? (
        <Container className="drop">
          <NavHeader>
            <Logo />
          </NavHeader>
          <Nav>
            <Wrap>
              <ListaNav>
                <NavItem>
                  <NavLink
                    activeClassName="current"
                    to="/dashboard"
                    onClick={() => {
                      callback();
                      handlerOnClick('');
                    }}
                  >
                    <FcHome size={24} />
                    Dashboard
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    activeClassName="current"
                    to="/unilevel"
                    onClick={() => {
                      callback();
                      handlerOnClick('');
                    }}
                  >
                    <MdLinearScale size={24} />
                    Clients
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    activeClassName="current"
                    to="/deposits"
                    onClick={() => {
                      callback();
                      handlerOnClick('');
                    }}
                  >
                    <AiOutlineBank size={24} />
                    Bank Deposits
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    activeClassName="current"
                    to="/withdrawal"
                    onClick={() => {
                      callback();
                      handlerOnClick('');
                    }}
                  >
                    <FaHandHoldingUsd size={24} />
                    Withdrawals
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    activeClassName="current"
                    to="/statment"
                    onClick={() => {
                      callback();
                      handlerOnClick('');
                    }}
                  >
                    <FcViewDetails size={24} />
                    Statement
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    activeClassName="current"
                    to="/gains"
                    onClick={() => {
                      callback();
                      handlerOnClick('');
                    }}
                  >
                    <FcLineChart size={24} />
                    My Gains
                  </NavLink>
                </NavItem>

                <NavItem style={{ marginTop: '2.4rem' }}>
                  <button
                    type="button"
                    onClick={() => {
                      setToken(null);
                    }}
                  >
                    <FiLogOut size={24} />
                    Logout
                  </button>
                </NavItem>
              </ListaNav>
            </Wrap>
          </Nav>
        </Container>
      ) : (
        <Placeholder numberRows={7} />
      )}
    </>
  );
}
