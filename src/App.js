import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Portfolio from "./Components/Portfolio/Portfolio";
import Stars from "./Components/Stars/Stars";
import ShopCard from "./Components/ShopCard/ShopCard";
import MessageHistory from "./Components/MessageHistory/MessageHistory";
import styles from "./App.module.css";

function App() {

  function randomInteger(min, max) {    
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  const stars = [
    {
      title: "Титаник",
      shortDiscription: " Фильм о кораблекрушении, очень трагичное кино с любовной историей.",
      fullDiscription:  `В первом и последнем плавании шикарного «Титаника» встречаются двое. 
      Пассажир нижней палубы Джек выиграл билет в карты, а богатая наследница Роза отправляется в Америку, 
      чтобы выйти замуж по расчёту. Чувства молодых людей только успевают расцвести, 
      и даже не классовые различия создадут испытания влюблённым, а айсберг, вставший на пути считавшегося 
      непотопляемым лайнера.`,
      rating: randomInteger(1, 5),
      img: "https://upload.wikimedia.org/wikipedia/ru/6/64/96Titanic.jpg"
    },
    {
      title: "Хатико",
      shortDiscription: " История, которая потрясла мир",
      fullDiscription:  `Однажды, возвращаясь с работы, профессор колледжа нашел на вокзале симпатичного щенка породы акита-ину. 
      Профессор и Хатико стали верными друзьями. Каждый день пес провожал и встречал хозяина на вокзале.`,
      rating: randomInteger(1, 5),
      img: "https://kinohod.ru/o/bd/88/bd883ab6-52c3-11e8-8d42-9f77ada897d7.jpg"
    },
    {
      title: "Законопослушный гражданин",
      shortDiscription: "Он воплощения зла, которое сдерживала любовь",
      fullDiscription:  `Добропорядочный житель Филадельфии Клайд Шелтон теряет семью в результате бандитского нападения. 
      Но когда преступники оказались в руках правосудия, выяснилось, что юридической Системе удобнее пойти на сделку с одним из 
      бандитов, чтобы дать высшую меру другому.`,
      rating: randomInteger(1, 5),
      img: "https://upload.wikimedia.org/wikipedia/ru/f/f5/LawAbidingCitizen.jpg"
    },
    {
      title: "Зелёная книга",
      shortDiscription: "Классная семейная драмма о дружбе",
      fullDiscription:  `Утонченный светский лев, богатый и талантливый музыкант нанимает в качестве водителя и телохранителя 
      человека, который менее всего подходит для этой работы. Тони «Болтун» — вышибала, не умеющий держать рот на замке 
      и пользоваться столовыми приборами, зато он хорошо работает кулаками. Это турне навсегда изменит жизнь обоих.`,
      rating: randomInteger(1, 5),
      img: "https://kinohod.ru/o/78/64/7864c22d-18c3-45b4-9d90-c3612186eae2.jpg"
    },
    {
      title: "Игра",
      shortDiscription: " Он думал, что больше никогда не сможет получать эмоции",
      fullDiscription:  `Николас Ван Ортон - само воплощение успеха. Он преуспевает, он невозмутим и спокоен, привык держать 
      любую ситуацию под контролем. На день рождения Николас получает необычный подарок - билет для участия в «Игре».
      Ему обещают, что игра вернет яркие чувства, позволит ощутить вкус и остроту жизни. Вступив в игру, 
      Николас начинает осознавать, что это игра всерьез, игра не на жизнь, а на смерть.`,
      rating: randomInteger(1, 5),
      img: "https://kinohod.ru/o/b0/90/b0905e34-5cc9-45f3-a345-912839fabff8.jpg"
    },

  ]

  const messages = [{
    id: 'chat-5-1090',
    from: { name: 'Ольга' },
    type: 'response',
    time: '10:10',
    text: 'Привет, Виктор. Как дела? Как идет работа над проектом?'
  }, {
    id: 'chat-5-1091',
    from: { name: 'Виктор' },
    type: 'message',
    time: '10:12',
    text: 'Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.'
  }, {
    id: 'chat-5-1092',
    from: { name: 'Ольга' },
    type: 'response',
    time: '10:14',
    text: 'Не уверена что сегодня получится. Не все еще в офисе. Давай уточню через час. Возникли ли какие-либо проблемы на последней стадии проекта?'
  }, {
    id: 'chat-5-1093',
    from: { name: 'Виктор' },
    type: 'message',
    time: '10:20',
    text: 'Нет, все прошло гладко. Очень хочу показать всё команде.'
  }, {
    id: 'chat-5-1094',
    from: { name: 'Ольга' },
    type: 'typing',
    time: '10:31'
  }];
  
  const portfolio = [
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
      category: "Business Cards",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
      category: "Websites",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
      category: "Business Cards",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
      category: "Websites",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
      category: "Websites",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
      category: "Flayers",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
      category: "Websites",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
      category: "Business Cards",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
      category: "Websites",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
      category: "Websites",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
      category: "Flayers",
    },
  ];

  const cardInfo = [
    {
      brand: 'Яндекс Станция Лайт',
      title: 'колонка ',
      description: 'Умная колонка Яндекс Станция Лайт, с Алисой',
      descriptionFull: `Добро пожаловать в мир умных технологий с Яндекс Лайт - вашим надежным голосовым помощником! 
      Управляйте своим домом, слушайте любимую музыку, получайте актуальные новости и многое другое — все это с помощью одной умной колонки.`,
      price: 4490,
      currency: '₽',
      img: "https://image.kazanexpress.ru/cmj9pjkvd6seuvaprjug/t_product_high.jpg"
    },
    {
      brand: 'Наматрасник непромокаемый',
      title: 'Наматрасник',
      description: 'Наматрасник непромокаемый с бортом 30 см, 140х200',
      descriptionFull: `Непромокаемый наматрасник размером 140х200, 160х200 см, бортом 30 см и мембраной не пропускающей воду. 
      Водонепроницаемый аквастоп изготовлен из трикотажного хлопкового гипоаллергенного полотна у которого мягкая махровая поверхность.`,
      price: 1034,
      currency: '₽',
      img: "https://image.kazanexpress.ru/co20qee4ij3hti2qnkjg/t_product_high.jpg"
    },
    {
      brand: 'Вакууматор 1506',
      title: 'Вакууматор',
      description: 'Вакууматор 1506 современный прибор',
      descriptionFull: `Для долгого и бережного хранения продуктов!
      Вакууматор 1506 - современный прибор, призванный увеличить сроки хранения пищевых продуктов. 
      Продукты, упакованные под вакуумом, сохраняют свежесть и не портятся существенно дольше по сравнению с обычными условиями хранения.`,
      price: 2333,
      currency: '₽',
      img: "https://image.kazanexpress.ru/c6dqq55514egpqripu90/t_product_high.jpg"
    },
    {
      brand: 'Чайник Polaris',
      title: 'Чайник',
      description: 'Чайник Polaris PWK 1772CA Бордовый',
      descriptionFull: `Корпус из высококачественной нержавеющей стали.
      Мощность 1800 Вт
      Объем 1.7 л
      Подключение через подставку`,
      price: 1425,
      currency: '₽',
      img: "https://image.kazanexpress.ru/cdl6k5b6m3u3ude89fgg/t_product_high.jpg"
    }
  ]

  return (
    <BrowserRouter>
      <header className={styles.header}>
        <Link className={styles.link} to="/">Портфолио</Link>
        <Link className={styles.link} to="/Stars">Рейт</Link>
        <Link className={styles.link} to="/ShopCard">Карточка товара</Link>
        <Link className={styles.link} to="/MessageHistory">Сообщения</Link>
      </header>
      <Routes>
        <Route path="/" element={<Portfolio  portfolio={portfolio}/>}/>
        <Route path="/Stars" element={<Stars stars={stars}/>}/>
        <Route path="/ShopCard" element={<ShopCard cardInfo={cardInfo}/>}/>
        <Route path="/MessageHistory" element={<MessageHistory data={messages}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
