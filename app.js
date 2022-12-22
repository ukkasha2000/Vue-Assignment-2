const app = Vue.createApp({
  data() {
    return {
      inputValue: "",
      finalOutput: "",
    };
  },
  methods: {
    showAlert() {
      alert("Hello World!!!");
    },
    onChange(event) {
      this.inputValue = event.target.value;
    },
    onPressEnter(event) {
      this.finalOutput = event.target.value;
    },
  },
}).mount("#assignment");
