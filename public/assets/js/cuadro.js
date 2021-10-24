(function () {

  const contenedorServicio = document.querySelector('.contenedor__servicios')
  const tecnico = document.querySelector('#tecnico')
  const jardineria = document.querySelector('#jardineria')
  const general = document.querySelector('#general')
  const auto = document.querySelector('#auto')
  const profunda = document.querySelector('#profunda')
  const seco = document.querySelector('#seco')
  const fumigacion = document.querySelector('#fumigacion')

  document.addEventListener('DOMContentLoaded', () => {
    // console.log('hola');
    tecnico.addEventListener('click', crearCuadro)
    jardineria.addEventListener('click', crearCuadro)
    general.addEventListener('click', crearCuadro)
    auto.addEventListener('click', crearCuadro)
    profunda.addEventListener('click', crearCuadro)
    seco.addEventListener('click', crearCuadro)
    fumigacion.addEventListener('click', crearCuadro)

  })

  function crearCuadro(e) {
    // console.log(e.target.id);
    switch (e.target.id) {
      case 'tecnico':
        cuadro(0);
        break
      case 'jardineria':
        cuadro(1)
        break
      case 'general':
        cuadro(2)
        break
      case 'auto':
        cuadro(3, 'multiple')
        break
      case 'profunda':
        cuadro(4)
        break
      case 'seco':
        cuadro(5)
        break
      case 'fumigacion':
        cuadro(6)
        break
      default:
        break
    }
  }

  function cuadro(id, tipo) {

    if (contenedorServicio.classList.contains('hidden')) {
      contenedorServicio.classList.remove('hidden')
    }

    const {
      servicio,
      descripcion,
      objetivo,
      beneficios,
      objetivodos,
      actividades,
      imagen
    } = servicios[id]


    const formBeneficios = beneficios.map(x => formatear(x))
    const formActividades = actividades.map(x => formatear(x))


    function formatear(x) {

        // console.log(x);
        const texto = `<p class="services__description marB-1">${x}</p>`
        // console.log(texto);
        return texto
    }

    console.log(formBeneficios);

    const articuloMultiple = `
        <i class='bx bx-x-circle salir' id="salir-servicio"></i>
        <img src="assets/img/${imagen}" alt="imagen servicio">
        <div class="contenedor__imagen">
        <span class="section-subtitle">Servicio</span>
        <h2 class="section-title">${servicio}</h2>
        </div>
                        

        <div class="contenedor__textoServicio">
                        
                
        <h3 class="services__title">Descripcion</h3>
                
        <p class="services__description marB-1">
            ${descripcion}
        </p>
                        
        <h3 class="services__title">${objetivo}</h3>
        <p class="services__description">${subObjetivo}</p>
        ${formBeneficios}
        <h3 class="services__title">${objetivodos}</h3>
        <p class="services__description">${subObjetivoDos}</p>
        ${formActividades}
        </div>`
    const articulo = `
        <i class='bx bx-x-circle salir' id="salir-servicio"></i>
        <img src="assets/img/${imagen}" alt="imagen servicio">
        <div class="contenedor__imagen">
        <span class="section-subtitle">Servicio</span>
        <h2 class="section-title">${servicio}</h2>
        </div>
        

        <div class="contenedor__textoServicio">
        

            <h3 class="services__title">Descripcion</h3>
    
            <p class="services__description marB-1">
                ${descripcion}
            </p>
            
            <h3 class="services__title">${objetivo}</h3>

            ${formBeneficios}
            <h3 class="services__title">${objetivodos}</h3>

            ${formActividades}
        </div>`

    switch (tipo) {
        case 'multiple':
            contenedorServicio.innerHTML = articuloMultiple
            break;
      
        default:
            contenedorServicio.innerHTML = articulo
        break;
    }
    

    const botonSalir = document.querySelector('#salir-servicio')
    botonSalir.addEventListener('click', salirServicio)
  }

  function salirServicio() {

    contenedorServicio.classList.add('hidden')
  }
})()
