const cardsList = document.querySelector('.lastGamesBox__lastGamesContainer__list');


async function fetchData() {

  try {
    
    const stats = await fetch('/data/game')
    const statsData = await stats.json()

    const players = await fetch('/data/users/')
    const playersData = await players.json()

    return { statsData, playersData }

  } catch (error) {
    alert(error.message)
  }
  
}

function createLastGamesCards(users) {

  for (const user of users) {
    const card = document.createElement('div');
    card.classList.add('lastGamesBox__lastGamesContainer__list__element')
    const name = document.createElement('div')
    name.classList.add('lastGamesBox__lastGamesContainer__list__element__name')
    name.innerText = user.name
    const fin = document.createElement('div')
    fin.classList.add('lastGamesBox__lastGamesContainer__list__element__fin')
    fin.innerText = `Fin : ${user.fin}`

    card.append(name, fin)
    cardsList.append(card)
  }
}

function getStatsBars(stats) {
  const bar1 = document.querySelector('.bar-fin1')
  const bar2 = document.querySelector('.bar-fin2')

  bar1.style.setProperty('--height', `${stats.fin1 / (stats.fin1 + stats.fin2) * 250}px`)
  bar2.style.setProperty('--height', `${stats.fin2 / (stats.fin1 + stats.fin2) * 250}px`)
 
  bar1.innerHTML = `${(stats.fin1 / (stats.fin1 + stats.fin2) * 100).toFixed(1)}%`
  bar2.innerHTML = `${(stats.fin2 / (stats.fin1 + stats.fin2) * 100).toFixed(1)}%`

}


(async() => {
  const { statsData, playersData } = await fetchData();
  createLastGamesCards(playersData)
  getStatsBars(statsData)
  
})()

