import React from 'react';
import Menu from '../../../components/Menu';

import SideBar from '../../../components/Sidebar';
import Main from '../../../components/Main';
import Header from '../../../components/Header';
import CopyToClipboard from '../../../components/CopyToClipboard';
import UserInforCard from '../../../components/UserInforCard';

import { Wrapper, Container, ContentOverlay, MobileMenuToggle } from './styles';
import { useGetMyIndicationLinkQuery } from '../../../graphql/generated/graphql';
import BalanceCards from '../../../components/BalanceCards';
import FinancialPassword from '../../../components/FinancialPassword';

interface IProps {
  children: React.ReactNode;
}

export default function AuthenticatedLayout({ children }: IProps): JSX.Element {
  const { data: link } = useGetMyIndicationLinkQuery();
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <Wrapper>
      <SideBar showMobile={mobileMenu}>
        <Menu
          callback={
            mobileMenu
              ? () => setMobileMenu(!mobileMenu)
              : () => {
                  // do nothing
                }
          }
        />
      </SideBar>
      <Container>
        {mobileMenu && (
          <ContentOverlay onClick={() => setMobileMenu(!mobileMenu)} />
        )}
        <Header>
          <div className="left">
            <MobileMenuToggle
              onClick={() => setMobileMenu(!mobileMenu)}
              size={24}
            />
            {link?.getMyIndicationLink && (
              <CopyToClipboard
                isLink
                value={link.getMyIndicationLink}
                label="My indication link"
              />
            )}
          </div>
          <UserInforCard />
        </Header>
        <Main>
          <>
            <BalanceCards />
            {children}
          </>
        </Main>
        <FinancialPassword />
      </Container>
    </Wrapper>
  );
}
