import './App.css';

// create component header
const Header = () => {
    return (
        // symantic tag header
 <header className='wrapperHeader'>
    {/* logo for site */}
    <img className='logo' src='https://klike.net/uploads/posts/2020-09/1599834395_28.jpg' alt="logo"/>
    {/* list for menu */}
    <ul className='list'>
        {/* about */}
        <li><a href='/'>О нас</a></li>
        {/* our works */}
        <li><a href='/'>Наша деятельность</a></li>
        {/* support */}
        <li><a href='/'>Служба поддержки</a></li>
    </ul>
 </header>
    );
}


export default Header//export component header


