<script>
    export let link = "";
    export let text = "";
    export let custom_style = "";
    export let img = "";
</script>
    
    
<a style={custom_style} href={link}>
        <div class={"content_" + img}>
            <div class="content_sub">
                <h3>{text}</h3>
            </div>
        </div>
</a>
    
    
<style>
    a {
        width: 100%;
        height: 100%;
        text-decoration:none;
        cursor: pointer;
    } 
    .content_sub{
    display: flex;
    align-items: end;
    justify-content: center;
    transition: all 800ms cubic-bezier(0.075, 0.82, 0.165, 1);
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 10px;
    }
    .content_sub:hover{
        padding-bottom: 125px;
        transition: all 800ms cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    h3 {
        color: white;
        
    }
</style>