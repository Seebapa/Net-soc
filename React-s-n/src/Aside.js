import './App.css';

// create aside component
const Aside = () => {
    return (
        // symantic tag aside
 <aside className='wrapperAside'>
    {/* lists with links */}
    <ul className='listAside'>
        {/* link for profile */}
        <li><a href='/'>Профиль</a></li>
        {/* link for messages */}
        <li><a href='/'>Сообщения</a></li>
        {/* link for news */}
        <li><a href='/'>Новости</a></li>
        {/* link for music */}
        <li><a href='/'>Музыка</a></li>
    </ul>
    {/* settings */}
    <h4 className='settings'>Настройки</h4>
    {/* friends side */}
   <div className='friends'>
    <h4 className='frien'>Друзья:</h4>
    {/* friends list */}
   <ul className='friendsList'>
    <li><img className='avka' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfGNmIIGeybpjJVZcph0DKclBtQd4duKfZ2g&usqp=CAU'/>Бандера</li>
    <li><img className='avka' src='https://fakty.com.ua/wp-content/uploads/2016/08/14/1471213949_20140327124105n.jpg'/>Катя</li>
    <li><img className='avka' src='https://cdn.segodnya.ua/img/gallery/5066/23/547458_main.jpg'/>Матвей</li>
    <li><img className='avka' src='https://ireland.apollo.olxcdn.com/v1/files/wx5edq4ebl493-UA/image;s=897x1000'/>Девочка</li>
   </ul>
   </div>
   {/* cloe aside */}
 </aside>
    );
}


export default Aside