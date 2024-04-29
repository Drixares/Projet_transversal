async function fetchData() {

  try {
    
    const response = await fetch('/data/game')
    const data = await response.json()

    // console.log(data);

  } catch (error) {
    alert(error.message)
  }
}


(async() => {
  await fetchData()
})()

