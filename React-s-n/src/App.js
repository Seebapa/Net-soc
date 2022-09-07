import './App.css';
// import header
import Header from "./Header"
// import aside
import Aside from "./Aside"
// import content
import Content from './Content';

function App() {
  return (
    // wrapper div
   <div className='wrapper'>
    {/* header component */}
    <Header/>
    {/* aside cimponent */}
    <Aside/>
    {/* content component */}
    <Content/>
    {/* closed wrapper div */}
   </div>
  );
}

export default App;
