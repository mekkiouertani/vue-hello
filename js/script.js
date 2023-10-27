const { createApp } = Vue

    createApp({
        data(){
            return{
                message : "Hello Vue!",
                colorBlue: "text-primary",
                count: 0
            }
        },
        methods: {
            changeColor(){
                this.count++
                this.colorBlue = this.colorBlue === "text-primary" ? "bg-warning" : "text-primary"
            }
            
            
        }
    }).mount('#app-vue');
