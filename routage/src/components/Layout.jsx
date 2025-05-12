import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <>
      <Header />
      <main className="py-4">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
