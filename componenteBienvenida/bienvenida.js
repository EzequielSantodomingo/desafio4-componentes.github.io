function getWeb() {
  return fetch(
    "https://cdn.contentful.com/spaces/s8m98t3h4njq/environments/master/entries?access_token=S4KoDm5oeOz2TEKOr7SGideP_uT2I7F0Y5nPWWn2TKU&&content_type=web"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const fieldscollections = data.items.map((item) => {
        return {
          title: item.fields.titulo,
          description: item.fields.descripcion,
          image: data.includes.Asset[1].fields.file.url,
        };
      });

      return fieldscollections;
    });
}

function componenteBienvenida(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
    <section class="home__seccion-uno">
     
    <h1 class="home__tittle">
        <span>Hola,</span><br />
        bienvenido a mi sitio
      </h1>

      <div class="home__nave">
        <img class="nave" src="./imagenes/astronave.png" alt="nave-espacial" />
      
    </section>`;
  el.appendChild(componentEl);
}
