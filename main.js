let baza = [
    {
      id: 1,
      title: 'Bmw M5 CS',
      hp: '635',
      razgon: '3.1',
      mator: '4.4 twin turbo',
      rasxod: '15/25',
      cost: '280.000$',
      bgimg: './img/m5.png',
      img: './img/m5cs.png'
    },
    {
      id: 2,
      title: 'Codiak',
      hp: '142',
      razgon: '7',
      mator: '2l',
      rasxod: '8/12',
      cost: '46.000$',
      bgimg: './img/cadiak.png',
      img: './img/cadiaks.png'
    },
    {
      id: 3,
      title: 'Carnival',
      hp: '272',
      razgon: '8.5',
      mator: '3.5l',
      rasxod: '11/14',
      cost: '100.000$',
      bgimg: './img/carnival.png',
      img: './img/carnivals.png'
    },
    {
      id: 4,
      title: 'BMW X7 M60i',
      hp: '535',
      razgon: '5',
      mator: '4.4l twin turbo',
      rasxod: '12/16',
      cost: '225.000$',
      bgimg: './img/x7.png',
      img: './img/x7i.png'
    },
    {
      id: 5,
      title: 'Tracker 2',
      hp: '132',
      razgon: '11',
      mator: '1.2l turbo',
      rasxod: '6.5/10',
      cost: '20.000$',
      bgimg: './img/track2.png',
      img: './img/tracker2.png'
    },
    {
      id: 6,
      title: 'Spark',
      hp: '75',
      razgon: '14',
      mator: '1l',
      rasxod: '9',
      cost: '8.000$',
      bgimg: './img/spark.png',
      img: './img/sparks.png'
    },
    {
      id: 7,
      title: 'Spark',
      hp: '75',
      razgon: '14',
      mator: '1l',
      rasxod: '9',
      cost: '8.000$',
      bgimg: './img/spark.png',
      img: './img/sparks.png'
    },
    {
      id: 8,
      title: 'Camry',
      hp: '301',
      razgon: '7',
      mator: '3.5l',
      rasxod: '8.7',
      cost: '45.000$',
      bgimg: './img/camry.png',
      img: './img/camrys.png'
    }
  ];


  const ReadCar = () => {
    let wrapper = document.querySelector('.swiper-wrapper');
    wrapper.innerHTML = ''; 

 
    baza.map((v) => {
      let div = document.createElement('div');  
      div.classList.add("swiper-slide", "flex", "bg-black", "flex-col", "relative");
      div.style.backgroundImage = `url(${v.bgimg})`;
      div.style.backgroundSize = 'cover';  
      div.style.backgroundPosition = 'center'; 
      div.style.height = '385px';        

      div.innerHTML = `
        <img class="w-[300px] absolute top-2" src="${v.img}" alt="">
        <h1 class="absolute top-[160px]">${v.title}</h1>
        <p class="absolute top-[200px]">${v.mator}</p>
        <p class="absolute top-[235px]">ЛС: ${v.hp}</p>
        <p class="absolute top-[270px]">0-100 km/h: ${v.razgon}s</p>
        <p class="absolute top-[305px]">Расход: ${v.rasxod} L/100km</p>
        <p class="absolute top-[350px]">Цена: ${v.cost}</p>
      `;

      wrapper.appendChild(div); 
    });
    
  };

  
  ReadCar();