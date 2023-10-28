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
                img: "https://hiringplatform.boolean.careers/images/logo.png",
                manyTimes: "volte",
                
            }
        },
        methods: {
            btnEffect(){
                
                if(this.count === 0){
                    this.manyTimes = "volta"
                } else{
                    this.manyTimes = "volte"
                }

                this.count++
                this.colorBlue = this.colorBlue === "text-primary" ? "bg-warning" : "text-primary"
            },
            printName(){
                const inputValue = this.input
                this.getInput = inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
                this.input = "";
                console.log(this.getInput);
            },
            
        }
    }).mount('#app-vue');
