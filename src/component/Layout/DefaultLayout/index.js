import Header from '../Components/Header';
import SideBar from '../Components/SideBar';

function DefaultLayout({ children }) {
  console.log(children);
  return (
    <div>
      <Header />
      <div className="container">
        <SideBar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
