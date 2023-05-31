const { createApp } = Vue;

createApp({
    data() {
        return {
            titulo: "contador",
            menos: "-",
            mas: "+",
            numero: 0,
        }
    },
    created(){
        this.calculoContador
    },
    methods: {
        calculoContador (){

        },
        sumaUno(){
            return this.numero = this.numero + 1 
        },
        restaUno(){
            return this.numero = this.numero -1
        }
    }
}).mount("#contador")