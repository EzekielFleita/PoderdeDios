<script>
    import { createContext, useContext } from 'svelte';
    import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut,
    GoogleAuthProvider, signInWithPopup} from "firebase/auth";
    import { auth } from "../firebase";

    export const authContext = createContext();
    export const useAuth = () => {
        const context =  useContext(authContext);
        if(!context) throw new Error('There is not auth provider')
        return context;
    }


</script>