import React from 'react';

function Food({name, picture}){
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id : 1,
    name: 'Tteokbokki',
    image: 'http://blogfiles.naver.net/data20/2006/8/21/296/2723_1-withy76.gif',
    rating : 5,
  },
  {
    id : 2,
    name: 'Chicken',
    image: 'http://imgnews.naver.net/image/016/2017/03/02/20170302000582_0_20170302112306658.jpg',
    rating : 4.9,
  },
  {
    id: 3,
    name: 'Kimchibokkeumbap',
    image: 'http://blogfiles.naver.net/20160320_16/redzacal_1458464095457BuyXQ_JPEG/%B1%E8%C4%A1%BA%BA%C0%BD%B9%E4%2C%B0%D4%BB%EC%BD%BA%C7%C1_010.jpg',
    rating : 4.5,
  }
];

function App() {
  return (
  <div>
    {foodILike.map(dish => (<Food key ={dish.id} name={dish.name} picture={dish.image}/>))}
    
  </div>
  );
}

export default App;
