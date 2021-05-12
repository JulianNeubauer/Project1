$(document).ready(function(){
// functionality for updating fresh produce list
var freshProduce = [{name: "Onion", quantity: 2, price: 3},
                    {name: "Garlic", quantity: 1, price: 0.8},
                    {name: "Apples", quantity: 3, price: 2.5},
                    {name: "Pears", quantity: 1, price: 2}];

function recreateFreshProduceList(){

  var listOfFreshProduce = $("#freshProduceList");
  listOfFreshProduce.html("");

  $.each(freshProduce, function(index,value){

    $("<li/>").text(value.name + " Quantity:" + value.quantity + " $" + value.price).appendTo(listOfFreshProduce);
  });
};

recreateFreshProduceList();


$("#updateFreshProduceButton").click(function(){
  var newItemName = $("#inputItemFreshProduceName").val();
  var newItemQuantity = $("#inputItemFreshProduceQuantity").val();
  var newItemPrice = $("#inputItemFreshProducePrice").val();

  var newFreshProduceObject = {name:newItemName, quantity:newItemQuantity, price:parseInt(newItemPrice)};

  freshProduce.push(newFreshProduceObject);

  recreateFreshProduceList();

  console.log(freshProduce);
});

// functionality for updating meat list
var meat = [{name: "Turkey", quantity: 1, price: 3},
            {name: "Chicken", quantity: 2, price: 3},
            {name: "Prawns", quantity: 2, price: 2},
            {name: "Salmon", quantity: 1, price: 5}];

  function recreateMeatList(){

    var listOfMeat = $("#meatList");
    listOfMeat.html("");

    $.each(meat, function(index,value){

    $("<li/>").text(value.name + " Quantity:" + value.quantity + " $" + value.price).appendTo(listOfMeat);
    });
  };

recreateMeatList();


$("#updateMeatButton").click(function(){
  var newMeatItemName = $("#inputItemMeatName").val();
  var newMeatItemQuantity = $("#inputItemMeatQuantity").val();
  var newMeatItemPrice = $("#inputItemMeatPrice").val();

  var newMeatObject = {name:newMeatItemName, quantity:newMeatItemQuantity, price:parseInt(newMeatItemPrice)};

  meat.push(newMeatObject);

  recreateMeatList();

  console.log(meat);
});

// functionality for updating grains list
var grains = [{name: "Oats", quantity: 2, price: 1},
              {name: "Rice", quantity: 4, price: 4},
              {name: "Bread", quantity: 1, price: 0.75},
              {name: "Quinoa", quantity: 2, price: 3}];

function recreateGrainsList(){

  var listOfGrains = $("#grainsList");
  listOfGrains.html("");

  $.each(grains, function(index,value){

  $("<li/>").text(value.name + " Quantity:" + value.quantity + " $" + value.price).appendTo(listOfGrains);
  });
};

recreateGrainsList();


$("#updateGrainsButton").click(function(){
  var newGrainsItemName = $("#inputItemGrainsName").val();
  var newGrainsItemQuantity = $("#inputItemGrainsQuantity").val();
  var newGrainsItemPrice = $("#inputItemGrainsPrice").val();

  var newGrainsObject = {name:newGrainsItemName, quantity:newGrainsItemQuantity, price:parseInt(newGrainsItemPrice)};

  grains.push(newGrainsObject);

  recreateGrainsList();

    console.log(grains);
});

// functionality for updating dairy list
var dairy = [{name: "Quark", quantity: 2, price: 3},
             {name: "Yoghurt", quantity: 2, price: 2},
             {name: "Cheese", quantity: 1, price: 1.5},
             {name: "Kefir", quantity: 3, price: 4.5}];

function recreateDairyList(){

  var listOfDairy = $("#dairyList");
  listOfDairy.html("");

  $.each(dairy, function(index,value){

  $("<li/>").text(value.name + " Quantity:" + value.quantity + " $" + value.price).appendTo(listOfDairy);
  });
};

recreateDairyList();


$("#updateDairyButton").click(function(){
  var newDairyItemName = $("#inputItemDairyName").val();
  var newDairyItemQuantity = $("#inputItemDairyQuantity").val();
  var newDairyItemPrice = $("#inputItemDairyPrice").val();

  var newDairyObject = {name:newDairyItemName, quantity:newDairyItemQuantity, price:parseInt(newDairyItemPrice)};

  dairy.push(newDairyObject);

  recreateDairyList();

  console.log(dairy);
});

// functionality for updating grains list
var condiments = [{name: "Ketchup", quantity: 2, price: 3},
                  {name: "Relish", quantity: 2, price: 2},
                  {name: "Wasabi", quantity: 1, price: 1.5},
                  {name: "Pepper", quantity: 3, price: 4.5}];

function recreateCondimentsList(){

var listOfCondiments = $("#condimentsList");
listOfCondiments.html("");

$.each(condiments, function(index,value){

$("<li/>").text(value.name + " Quantity:" + value.quantity + " $" + value.price).appendTo(listOfCondiments);
  });
};

recreateCondimentsList();

$("#updateCondimentsButton").click(function(){
  var newCondimentsItemName = $("#inputItemCondimentsName").val();
  var newCondimentsItemQuantity = $("#inputItemCondimentsQuantity").val();
  var newCondimentsItemPrice = $("#inputItemCondimentsPrice").val();

  var newCondimentsObject = {name:newCondimentsItemName, quantity:newCondimentsItemQuantity, price:parseInt(newCondimentsItemPrice)};

  condiments.push(newCondimentsObject);

  recreateCondimentsList();

  console.log(condiments);
});

});
