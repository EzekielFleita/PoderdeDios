<script>

    export let type = "";
    export let value = "";
    export let custom_style = "";
    export let placeholder = "";
    export let class_input = "input--deafult";
    export let name = "";
    
    </script>
    
    <main>
        <input 
            type={type} 
            value={value} 
            name={name} 
            class={class_input} 
            style={custom_style} 
            placeholder={placeholder}
            autocomplete="off"
        >
    </main>
    
    <style>
        .input--default{
            padding: 10px;
            border: none;
            width: 100%;
            background-color: rgb(66, 66, 66);
            border-radius: 15px;
            color: white;
        }
        .input--big{
            padding: 10px;
            border: none;
            height: 200px;
            width: 100%;
            background-color: rgb(66, 66, 66);
            border-radius: 15px;
            color: white;
        }
        .input--button {
            padding: 10px;
            border: none;
            width: 100%;
            background-color: rgb(184, 184, 184);
            border-radius: 15px;
            color: rgb(44, 44, 44);
        }
    </style>