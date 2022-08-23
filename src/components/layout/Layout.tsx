import Footer from "../footer/Footer";
import Header from "../header/Header";

type Props = {
  children: any;
};

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
