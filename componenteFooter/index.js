function componenteFooter(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `<section class="home__seccion-footer">
  <div class="home__footer-logo">
   <a href="./index.html"> <img src="./imagenes/logo.png" alt="mi logo" /></a>
  </div>
  <div class="home__contact">
  <a href="./index.html">   
  <div class="home">
     <img src="./imagenes/home1.png" alt="home" />
      <label class="home__text-home" for="">Home</label>
    </div>
    </a>
    <a href="./servicios.html"> 
    <div class="servicios">
      <img src="./imagenes/contacto.png" alt="servicios" />
      <label class="home__text-serv" for="">Servicios</label>
    </div>
    </a>
    <a href="./contacto.html"> 
    <div class="contacto">
      <img src="./imagenes/telefono.png" alt="" />
      <label class="home__text-contact" for="">Contacto</label>
    </div>
    </a>
  </div>
  <div class="home__redes">
    <div class="linkedin">
      <a href="https://www.linkedin.com/in/ezequiel-santodomingo-2b7a31192//"> <img src="./imagenes/linkedin.png" alt="" /></a>
    </div>
    <div class="twitter">
     <a href="https://twitter.com/ezesantook"> <img src="./imagenes/twitter2.png" alt="" /></a>
    </div>
    <div class="github">
    <a href="https://github.com/EzequielSantodomingo/"><img src="./imagenes/github1.png" alt="" /> </a>
    </div>
  </div>
  <div class="home__copiright">
    <h4 class="home__copiright-text">&copy;2023-APX-School</h4>
  </div>
</section> `;
  el.appendChild(componentEl);
}
