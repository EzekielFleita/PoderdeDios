<script>
    export let link = "";
    export let text = "";
    export let custom_style = "";
</script>
    
    
<a style={custom_style} href={link}>
        <div>
            <div>
                <h3>{text}</h3>
            </div>
        </div>
</a>
    
    
<style>
    a {
        width: 100%;
        height: 100%;
    }
</style>