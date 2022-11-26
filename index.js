document.addEventListener('DOMContentLoaded', () = >{
    fetchData()
})

const fetchData = async () => {
    try{
        const respuesta = await fetch('productos.json')
        const data = await respuesta.json()
        console.log(data);
    } catch(error){
        console.log(error)
    }
}