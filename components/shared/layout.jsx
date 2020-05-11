/* ------------------------------------------------------ */
/*                         Import                         */
/* ------------------------------------------------------ */
/* ---------------------- internal ---------------------- */
import NavBar from '@/components/shared/nav-bar';
import Footer from '@/components/shared/footer';

/* ------------------------------------------------------ */
/*                     React Component                    */
/* ------------------------------------------------------ */
const Layout = ({ children }) => (
  <div className='ui container'>
    <NavBar />
    {children}
    <Footer />
  </div>
);

/* ------------------------------------------------------ */
/*                         Export                         */
/* ------------------------------------------------------ */
export default Layout;
