let data = [
    {
        id:1,
        url:'https://lab.marsit.uz/media/shop/Branded%20Cap/kepka_mars-removebg-preview.png',
        name: 'Branded Cap',
        coin: 199,
        ostatok:1

    },
    {
        id:2,
        url:'https://lab.marsit.uz/media/shop/Branded%20Thermos/termos_mars-removebg-preview.png',
        name: 'Branded Thermos',
        coin: 349,
        ostatok:8

    },
    {
        id:3,
        url:'https://lab.marsit.uz/media/shop/Planshet%20Samsung/Shop_planshet-removebg-preview.png',
        name: 'Planshet Samsung',
        coin: 6990,
        ostatok:8

    },
    {
        id:4,
        url:'https://lab.marsit.uz/media/shop/Mars%20Backpack/backpack.png',
        name: 'Mars Backpack',
        coin: 799,
        ostatok:1

    },
      {
        id:1,
        url:'https://lab.marsit.uz/media/shop/Branded%20Cap/kepka_mars-removebg-preview.png',
        name: 'Branded Cap',
        coin: 199,
        ostatok:1

    },
    {
        id:2,
        url:'https://lab.marsit.uz/media/shop/Branded%20Thermos/termos_mars-removebg-preview.png',
        name: 'Branded Thermos',
        coin: 349,
        ostatok:8

    },
    {
        id:3,
        url:'https://lab.marsit.uz/media/shop/Planshet%20Samsung/Shop_planshet-removebg-preview.png',
        name: 'Planshet Samsung',
        coin: 6990,
        ostatok:8

    },
    {
        id:4,
        url:'https://lab.marsit.uz/media/shop/Mars%20Backpack/backpack.png',
        name: 'Mars Backpack',
        coin: 799,
        ostatok:1

    },
      {
        id:1,
        url:'https://lab.marsit.uz/media/shop/Branded%20Cap/kepka_mars-removebg-preview.png',
        name: 'Branded Cap',
        coin: 199,
        ostatok:1

    },
    {
        id:2,
        url:'https://lab.marsit.uz/media/shop/Branded%20Thermos/termos_mars-removebg-preview.png',
        name: 'Branded Thermos',
        coin: 349,
        ostatok:8

    },
    {
        id:3,
        url:'https://lab.marsit.uz/media/shop/Planshet%20Samsung/Shop_planshet-removebg-preview.png',
        name: 'Planshet Samsung',
        coin: 6990,
        ostatok:8

    },
    {
        id:4,
        url:'https://lab.marsit.uz/media/shop/Mars%20Backpack/backpack.png',
        name: 'Mars Backpack',
        coin: 799,
        ostatok:1

    },  {
        id:1,
        url:'https://lab.marsit.uz/media/shop/Branded%20Cap/kepka_mars-removebg-preview.png',
        name: 'Branded Cap',
        coin: 199,
        ostatok:1

    },
    {
        id:2,
        url:'https://lab.marsit.uz/media/shop/Branded%20Thermos/termos_mars-removebg-preview.png',
        name: 'Branded Thermos',
        coin: 349,
        ostatok:8

    },
    {
        id:3,
        url:'https://lab.marsit.uz/media/shop/Planshet%20Samsung/Shop_planshet-removebg-preview.png',
        name: 'Planshet Samsung',
        coin: 6990,
        ostatok:8

    },
    {
        id:4,
        url:'https://lab.marsit.uz/media/shop/Mars%20Backpack/backpack.png',
        name: 'Mars Backpack',
        coin: 799,
        ostatok:1

    }
    
]
let div = document.querySelector('div')


data.map((item)=>{
    div.innerHTML += `
        <div class='card'>
            <img src=${item.url} alt=''/>
            <h1>${item.name}</h1>
            <b>${item.coin} <img class='coin' src='https://space.marsit.uz/img/Coin.8a6f0644.svg' alt=''/></b><br>
            <p>${item.ostatok}</p>
        </div>
    `
})