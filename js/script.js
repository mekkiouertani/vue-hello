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
                const inputEl = this.input
                this.getInput = inputEl.charAt(0).toUpperCase() + inputEl.slice(1)
                this.input = ""
                console.log(this.getInput);
            },
        }
    }).mount('#app-vue');
