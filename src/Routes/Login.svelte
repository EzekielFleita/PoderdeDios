<script>
    import { user } from "../stores/User"
let email = "";
let password = "";

function processLogged () {

    // try {
    //     const res = await auth.signInWithPopup(provider)
    //     console.log(res)
    // } catch(error) {
    //     console.log(error)
    // }

    // user.setUser({
    //     email, password
    // })

    console.log("Send")
}
</script>

<div>
    <h1>Acceso</h1>
    <form>
        <button on:click={processLogged} type="submit">Acceder con Google</button>
    </form>
</div>