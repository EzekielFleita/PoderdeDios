<script>
import { afterUpdate } from 'svelte';

    import Footer from '../big_components/Footer.svelte';

    export let scrolling;
    afterUpdate(()=>{
        scrolling = false;
    })
</script>

<section class="section_seminario">
  <div>
    <h1 class="title_seminario">Seminario</h1>
    <p class="text_seminario">
      El Seminario Poder de Dios te ofrece un Diploma en CERTIFICADO EN
      MINISTERIO, totalmente a distancia. 100% on line. 20 materias actualizadas
      al contexto contemporáneo que cubren los aspectos personales, bíblicos,
      teológicos, doctrinales y ministeriales con un enfoque al despertar
      espiritual.
    </p>
    <h4 class="title2_seminario">ACTUALIZACIÓN E INNOVACIÓN</h4>
    <p class="text_seminario">
      En despertamiento y guerra espiritual, escatología, hermenéutica y nuevas
      tecnologías, didáctica, oratoria, la biblia versus la cultura y medios de
      comunicación, y mucho más.
    </p>
    <h4 class="title2_seminario">AVANZA A TU RITMO</h4>
    <p class="text_seminario">
      Aprende desde cualquier parte del mundo en los minutos que tú destines al
      día.
    </p>
  </div>
  <div>
    <h4 class="title2_seminario">OBTÉN UN TÍTULO</h4>
    <p class="text_seminario">
      Los diplomas que extiende el Seminario Poder de Dios son para vocaciones
      religiosas y cuentan con el aval de la firma N° 11.431, inscripta en el
      Registro Nacional de Cultos de la Nación Argentina, lo que implica, el
      reconocimiento oficial del RNC para ejercer como ministro religioso.
    </p>
    <h4 class="title2_seminario">100 % ON LINE</h4>
    <p class="text_seminario">
      Estudia a distancia con un modelo pedagógico interactivo,
      sincrónico-asincrónico.
    </p>
    <h4 class="title2_seminario">DIRECTOR</h4>
    <p class="text_seminario">
      Teólogo. Licenciado en la Enseñanza de la Lengua y Literatura. Profesor.
      Periodista. Pastor Principal y fundador de la Iglesia Poder de Dios
      Argentina.
    </p>
  </div>
  <div class="contacto_seminario">
    <h5 class="title2_seminario">EMAIL: seminariopoderdedios@gmail.com</h5>
    <div class="content_a2">
      <a
        class="a_seminario"
        target="_blank"
        href="https://www.instagram.com/invites/contact/?i=14119zjb3mliq&utm_content=2s997cy"
      >
        <i class="fab fa-instagram fa-2x" />
      </a>
      <a
        class="a_seminario"
        target="_blank"
        href="mailto:seminariopoderdedios@gmail.com"
      >
        <i class="fas fa-envelope fa-2x" />
      </a>
    </div>

    <a
      target="_blank"
      href="https://docs.google.com/forms/d/e/1FAIpQLSdDDeprsXMXpJJWefUGxREMiR3c8GKRjU8Qm29_7UlEJ9vPtA/viewform"
    >
      <button class="buton_seminario">Inscribirme</button>
    </a>
  </div>
</section>
<Footer />

<style>
  section {
    width: 100%;
    height: 850px;
    padding-top: 100px;
    background: linear-gradient(
      rgba(255, 255, 42, 0.9),
      rgba(250, 162, 0, 0.9)
    );
    display: grid;
    grid-template: 560px 200px /1fr 1fr;
    grid-template-areas:
      "a b"
      "c c";
  }
  .title_seminario {
    color: #313536;
    display: grid;
    justify-self: center;
    text-align: center;
    font-weight: 800;
  }
  .text_seminario {
    text-align: center;
    padding: 0 10%;
    color: #313536;
  }
  .title2_seminario {
    text-align: center;
    padding: 3% 10%;
    color: #313536;
  }
  .buton_seminario {
    margin: 30px;
    color: white;
    border-radius: 10px;
    background-color: #313536;
    width: 200px;
    height: 50px;
  }
  .contacto_seminario {
    grid-area: c;
    display: grid;
    justify-items: center;
  }
</style>
