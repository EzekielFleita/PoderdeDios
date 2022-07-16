<script>
    import { onMount } from "svelte";
    
    import { testimony } from "../../scripts/var/strings";
    import Title from "./Title.svelte";
    
    let position = null;
    
    function loopActive(){
        for(let i = 0; i < testimony.length; i++){
            position = i;
            console.log(position);
        }   
    }
    
    onMount(()=>{
        loopActive()
    })
    
    </script>
    
    <main>
        <Title font_size={"large"} text={"Testimonios"}/>
        <div>
            {#each testimony as t}
            <h4>{t["name"]}</h4>
            <p>{t["text"]}</p>
        {/each}
        </div>
    </main>
    
    <style>                     
        main{
            width: 100%;
            height: 650px;
            background-color: firebrick;
            padding: 50px; 
        }
        div {
            width: 70%;
        }
    </style>