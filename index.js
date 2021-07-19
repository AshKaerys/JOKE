fetch("https://api.blablagues.net/?rub=blagues")
    .then((res)=> res.json())
    .then((data) => console.log(data.data.content.text_head));