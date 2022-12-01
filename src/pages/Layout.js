import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <nav  style= {{ align: 'center'}}>
        <ul>
          
            <Link to="/"><button className="button"> 首頁</button></Link>
          
            <Link to="/About"><button className="button">關於我</button></Link>
         
            <Link to="/Flashcard"><button className="button">英文單字卡</button></Link>
         
            <Link to="/Translate"><button className="button">翻譯</button></Link>
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;