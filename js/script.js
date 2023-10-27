const { createApp } = Vue

    createApp({
        data(){
            return{
                message : "Hello Vue!",
                colorBlue: "text-primary",
                count: 0,
                text: "Ciao", 
                input: "",
                getInput: "",
            }
        },
        methods: {
            btnEffect(){
                this.count++
                this.colorBlue = this.colorBlue === "text-primary" ? "bg-warning" : "text-primary"
            },
            clg(){
                this.getInput = this.input  
                this.input = ""
            },
        }
    }).mount('#app-vue');
