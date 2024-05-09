const allergies = {
    nuts: {},
    milk: {},
    gluten: {},
    getTotalNumber: function() {
      const totalNumber = allergies.nuts.total + allergies.milk.total +
        allergies.gluten.total;
      console.log("There are " + totalNumber +
        " children with food restrictions.");
    }
  };
  allergies.nuts.children = ["Becca", "Max", "Phil"];
  allergies.milk.children = ["Simon", "Ada", "Stacy"];
  allergies.gluten.children = ["Paul", "Lisa", "Beth", "Alex"];
  allergies.nuts.total = allergies.nuts.children.length;
  allergies.milk.total = allergies.milk.children.length;
  allergies.gluten.total = allergies.gluten.children.length;
  
  allergies.getTotalNumber();