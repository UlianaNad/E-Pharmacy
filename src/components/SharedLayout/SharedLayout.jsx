import { Suspense } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
};

export default SharedLayout;
