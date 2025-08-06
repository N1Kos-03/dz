import './Card.css'


function Card() {

const filmList = [
    {
        number:'324',
        img: './public/poster/blackwidow.png',
        title: 'Black Widow',
    },
    {
        number:'124',
        img: './public/poster/shangchi.png',
        title: 'Shang Chi',
    },
    {
        number:'235',
        img: './public/poster/loki.png',
        title: 'Loki',
    },
    {
        number:'123',
        img: './public/poster/how.png',
        title: 'How I Met Your Mother',
    },
    {
        number:'8125',
        img: './public/poster/money.png',
        title: 'Money Heist',
    },
    {
        number:'123',
        img: './public/poster/friends.png',
        title: 'Friends',
    },
    {
        number:'12',
        img: './public/poster/big.png',
        title: 'The Big Bang Theory',
    },
    {
        number:'456',
        img: './public/poster/two.png',
        title: 'Two And a Half Men',
    }

]

  return (
    <div className='card-list'>
        <div className='card-body'>
            <div className='rating'>
            <img src="../public/rating.svg" alt="Рейтинг"/>
            <p className='rating-number'>{filmList[0].number}</p>
            </div>
            {<img src={filmList[0].img} alt="Постер" className='poster-img'/>}
            <h3>{filmList[0].title}</h3>
            <div className='like'>
                <img src="./public/like.svg" alt="Избранное"/>
                <p className='like-p'>В избранное</p>
            </div>
        </div>
         <div className='card-body'>
            <div className='rating'>
            <img src="../public/rating.svg" alt="Рейтинг"/>
            <p className='rating-number'>{filmList[1].number}</p>
            </div>
            {<img src={filmList[1].img} alt="Постер" className='poster-img'/>}
            <h3>{filmList[1].title}</h3>
            <div className='like'>
                <img src="./public/like.svg" alt="Избранное"/>
                <p className='like-p'>В избранное</p>
            </div>
        </div>
        <div className='card-body'>
            <div className='rating'>
            <img src="../public/rating.svg" alt="Рейтинг"/>
            <p className='rating-number'>{filmList[2].number}</p>
            </div>
            {<img src={filmList[2].img} alt="Постер" className='poster-img'/>}
            <h3>{filmList[2].title}</h3>
            <div className='like'>
                <img src="./public/like.svg" alt="Избранное"/>
                <p className='like-p'>В избранное</p>
            </div>
        </div>
        <div className='card-body'>
            <div className='rating'>
            <img src="../public/rating.svg" alt="Рейтинг"/>
            <p className='rating-number'>{filmList[3].number}</p>
            </div>
            {<img src={filmList[3].img} alt="Постер" className='poster-img'/>}
            <h3>{filmList[3].title}</h3>
            <div className='like'>
                <img src="./public/like.svg" alt="Избранное"/>
                <p className='like-p'>В избранное</p>
            </div>
        </div>
            <div className='card-body'>
            <div className='rating'>
            <img src="../public/rating.svg" alt="Рейтинг"/>
            <p className='rating-number'>{filmList[4].number}</p>
            </div>
            {<img src={filmList[4].img} alt="Постер" className='poster-img'/>}
            <h3>{filmList[4].title}</h3>
            <div className='like'>
                <img src="./public/like.svg" alt="Избранное"/>
                <p className='like-p'>В избранное</p>
            </div>
        </div>
            <div className='card-body'>
            <div className='rating'>
            <img src="../public/rating.svg" alt="Рейтинг"/>
            <p className='rating-number'>{filmList[5].number}</p>
            </div>
            {<img src={filmList[5].img} alt="Постер" className='poster-img'/>}
            <h3>{filmList[5].title}</h3>
            <div className='like'>
                <img src="./public/like.svg" alt="Избранное"/>
                <p className='like-p'>В избранное</p>
            </div>
        </div>
            <div className='card-body'>
            <div className='rating'>
            <img src="../public/rating.svg" alt="Рейтинг"/>
            <p className='rating-number'>{filmList[6].number}</p>
            </div>
            {<img src={filmList[6].img} alt="Постер" className='poster-img'/>}
            <h3>{filmList[6].title}</h3>
            <div className='like'>
                <img src="./public/like.svg" alt="Избранное"/>
                <p className='like-p'>В избранное</p>
            </div>
        </div>
            <div className='card-body'>
            <div className='rating'>
            <img src="../public/rating.svg" alt="Рейтинг"/>
            <p className='rating-number'>{filmList[7].number}</p>
            </div>
            {<img src={filmList[7].img} alt="Постер" className='poster-img'/>}
            <h3>{filmList[7].title}</h3>
            <div className='like'>
                <img src="./public/like.svg" alt="Избранное"/>
                <p className='like-p'>В избранное</p>
            </div>
        </div>
    </div>
  )
}

export default Card