new Vue({
  el: "#vue-app",
  data: {
    name: "Shaun",
    job: "Ninja",
    sab: [1, 4, 8],
    items: [{ message: "Foo" }, { message: "Bar" }]
  },
  methods: {
    greet: function(time) {
      return "Good" + time + " " + this.name;
    }
  }
});
