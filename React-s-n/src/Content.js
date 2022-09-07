import './App.css';

// create component content
const Content = () => {
    return (
        // symantic tag section
 <section className='wrapperContent'>
    {/* main title */}
     <h1 className='text_1'>Наша первая патриотическая социальная сеть</h1>
     <div className='userProfile'>
        {/* avatar */}
        <img className='avatar' src='https://cdn.segodnya.ua/img/gallery/5066/23/547459_main.jpg' alt='avatarka'/>
       {/* info for user */}
        <ul className='userInfo'>
            {/* date */}
            <li>Дата рождения: 03.06.1990</li>
            {/* city */}
            <li>Город: Кривой Рог</li>
            {/* education */}
            <li>Образование: Криворожский технический университет</li>
            {/* instagram */}
            <li>Сайт: instagram</li>
        </ul>
     </div>
     {/* posts */}
     <div className='posts'>
     <label className='label'>Мои посты:</label><br/>
     <textarea/>
     </div>
      <ul className='posts'>
       <li><img className='avka' src='https://cdn.segodnya.ua/img/gallery/5066/23/547459_main.jpg' alt='image 1'/>Почему меня никто не любит?</li>
       <li><img className='avka' src='https://cdn.segodnya.ua/img/gallery/5066/23/547459_main.jpg' alt='image 2'/>Куда поехать этим летом??</li>
      </ul>
 </section>
    );
}


export default Content//export component content