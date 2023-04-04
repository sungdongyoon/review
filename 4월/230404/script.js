let toyRobot = {
  productId: "2023-04-04",
  name: "Robot_1",
  price: "25,000",
  madeIn: "Korea",
  quantity: 10,
  showStock: function () {
    document.querySelector("#display").innerHTML =
      this.name + "제품은 " + this.quantity + "개 남았습니다.";
  },
};

toyRobot.showStock();
