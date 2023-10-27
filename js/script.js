const { createApp } = Vue

    createApp({
        data(){
            return{
                message : "Hello Vue!",
                colorBlue: "text-primary"
            }
        },
        methods: {
            changeColor(){
                this.colorBlue = this.colorBlue === "text-primary" ? "bg-warning" : "text-primary"
            }
        }
    }).mount('#app-vue');
