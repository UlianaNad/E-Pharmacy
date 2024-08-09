import { Suspense } from 'react'
import Header from './Header/Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { Container } from './SharedLayout.styled'

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Suspense>
        <Outlet/>
      </Suspense>
      <Footer />

    </Container>
  )
}

export default SharedLayout