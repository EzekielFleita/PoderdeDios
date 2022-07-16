<script>
    import ButtonIcon from "../buttons/ButtonIcon.svelte";
    import Input from "../inputs/Input.svelte";
    import Parraf from "./Parraf.svelte";
    import Title from "./Title.svelte";
    
    let full_name = "";
    let number_phone = "";
    let email = "";
    let text = "";
    
    window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_uv9q8vg', 'template_l77oby8', this)
        .then(function() {
            alert("¡Su mensaje fue enviado exitosamente!")
            }, function(error) {
                console.log('FAILED...', error);
            });
        });
    }
    </script>
    
    <main>
        <section>
            <form id="contact-form">
                <legend>Contacto  | Ayuda espiritual | Pedido de oración</legend>
                <div>
                    <Input name={"name"} type={"text"} class_input={"input--default"} value={full_name} custom_style={"border-radius: 10px;"} placeholder={"Nombre y apellido"}/>
                </div> 
                <div>
                    <Input name={"number"} type={"text"} class_input={"input--default"} value={number_phone} custom_style={"border-radius: 10px;"} placeholder={"Numero de telefono"}/>
                </div>
                <div>
                    <Input name={"email"} type={"text"} class_input={"input--default"} .value={email} custom_style={"border-radius: 10px;"} placeholder={"Correo electronico"}/>
                </div>
                <div>
                    <Input name={"message"} type={"text"} class_input={"input--big"} value={text} custom_style={""} placeholder={""}/>
                </div>
                <div>
                    <Input class_input={"input--button"} type={"submit"} value={"Enviar"} />
                </div>
                
            </form>
        </section>
        <section class="data">
            <Title text={"Datos del contacto"} custom_style={"color: white; padding: 10px;"}/>
            <Parraf text={"Teléfono: +5491164195555"} />
            <Parraf text={"Email: contacto@poderdedios.com.ar / igesiapoderdediosargentina@gmail.com"} />
            <Parraf text={"Dirección: Tucumán 150, Pilar, Buenos Aires, Argentina"} />
            <ButtonIcon icon={"facebook"} />
            <ButtonIcon icon={"Instagram"} />
            <ButtonIcon icon={"Youtube"} />
        </section>
    
    </main>
    
    <style>
        main{
            display: grid;
            grid-template-columns: 1fr 1fr;
            height: 550px;
            background-color: rgb(29, 29, 29);
            color: white;
        }
        section {
            padding: 45px;
        }
        legend {
            padding: 20px;
        }
        div {
            width: 100%;
        }
    </style>