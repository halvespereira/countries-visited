import Footer from "../footer/Footer";
import Header from "../header/Header";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import "./Main.css";

type Props = {
  children: any;
};

function Layout({ children }: Props) {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <div className="__Layout">
        <Header />
        <div className="__Main">{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Layout;
