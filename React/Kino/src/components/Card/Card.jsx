import styles from './Card.module.css'

function Card() {

  const filmList = [
    { number: '324', img: './public/poster/blackwidow.png', title: 'Black Widow' },
    { number: '124', img: './public/poster/shangchi.png', title: 'Shang Chi' },
    { number: '235', img: './public/poster/loki.png', title: 'Loki' },
    { number: '123', img: './public/poster/how.png', title: 'How I Met Your Mother' },
    { number: '8125', img: './public/poster/money.png', title: 'Money Heist' },
    { number: '123', img: './public/poster/friends.png', title: 'Friends' },
    { number: '12', img: './public/poster/big.png', title: 'The Big Bang Theory' },
    { number: '456', img: './public/poster/two.png', title: 'Two And a Half Men' },
  ];

  return (
    <div className={styles['card-list']}>
      {filmList.map((film, index) => (
        <div key={index} className={styles['card-body']}>
          <div className={styles['rating']}>
            <img src="../public/rating.svg" alt="Рейтинг" />
            <p className={styles['rating-number']}>{film.number}</p>
          </div>
          <img src={film.img} alt="Постер" className={styles['poster-img']} />
          <h3>{film.title}</h3>
          <div className={styles['like']}>
            <img src="./public/like.svg" alt="Избранное" />
            <p className={styles['like-p']}>В избранное</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
