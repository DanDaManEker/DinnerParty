var main = function () {

    var recipeType = {
        0: {"name": "cocktail", "ingredients": ["Booz","Roofis","Green Stuff"]},
        1: {"name": "appetizer", "ingredients": ["Some leaves","Some veggies", "I dunno toast","Cheese or whatever"]},
        2: {"name": "main course", "ingredients": ["A dead animal","its blood", "some potatoes","love","asparagus"]} ,
        3: {"name": "dessert", "ingredients": ["Dough","Some Sprinkly shit", "sugar","more sugar","cream shaboogy pop"]} ,
    }

    var Merchantprices = {

        ampm:{"ingredientPrice":recipeType[0].ingredients = 20,"sumPrice":recipeType[0] = ingredientPrice * (recipeType[0].ingredients.length)},
        haCarmel:{},
        tivTaam:{},

    }

    function getRecipeItems() {
        return recipeItems = [
            {
                "id": "recipe0",
                "title": "Grasshopper Cocktail",
                "img": "../images/grasshopper-cocktail.jpg",
                "ingredients": recipeType[0].ingredients,
                "instructions":"shaken not stirred",
                "price": {"ampmPrice":Merchantprices[0].sumPrice,"haCarmelPrice":Merchantprices[1].sumPrice,"tivTaamPrice":Merchantprices[2].sumPrice},
                "type" : recipeType[0].name,
            },
            {
                "id": "recipe1",
                "title": "Beef roast with veggies",
                "img": "../images/beef-roast-with-veggies.JPG",
                "ingredients": recipeType[2].ingredients,
                "instructions":"stuff it good",
                "price": 55,
                "type" : recipeType[2].name,
            },
            {
                "id": "recipe2",
                "title": "Shrimp-Fried-Rice",
                "img": "../images/Shrimp-Fried-Rice.jpg",
                "ingredients": recipeType[1].ingredients,
                "instructions":"extra MSG",
                "price": 65,
                "type" : recipeType[1].name,
            },
            {
                "id": "recipe3",
                "title": "Cupcake from hell",
                "img": "../images/Cupcake-Idea-pics-200x150.png",
                "ingredients": recipeType[3].ingredients,
                "instructions":"death is inevitable",
                "price": 15,
                "type" : recipeType[3].name,
            },
        ]
    }

    function createRecipeItem(recipeItem) {
        var recipeElement = document.createElement('div');
        recipeElement.setAttribute("id", recipeItem.id);
        recipeElement.setAttribute("class", recipeItem);

        recipeDetailsElement = document.createElement("div");
        recipeDetailsElement.setAttribute("id", recipeItem.id+"_details");

		recipeDetailsElement.appendChild(createDeleteRecipe(recipeItem));
		recipeDetailsElement.appendChild(createRecipePic(recipeItem));
        recipeDetailsElement.appendChild(createRecipeTitle(recipeItem));

        recipePreperationElement = document.createElement("div");
        recipePreperationElement.setAttribute("id", recipeItem.id+"_full_details");
        recipePreperationElement.appendChild(createRecipeIngredients(recipeItem));
        recipePreperationElement.appendChild(createRecipeInstructions(recipeItem));
        recipePreperationElement.style.display = 'none';

        recipeDetailsElement.appendChild(recipePreperationElement);
        

        recipeElement.appendChild(createUndoDeleteRecipe(recipeItem));
        recipeElement.appendChild(recipeDetailsElement);


        return recipeElement;

    }
    function createUndoDeleteRecipe(recipeItem) {
        var undoButton = document.createElement('span');
        undoButton.setAttribute("id", recipeItem.id + "_undo");
        undoButton.setAttribute("class", "fa fa-undo", "aria-hidden", "true");
        $(undoButton).hide();
        $(undoButton).click(() => {
            onItemDeleteUndo(recipeItem);
        });
        return undoButton;
    }
    function createDeleteRecipe(recipeItem) {
        var deleteButton = document.createElement('span');
        deleteButton.setAttribute("class", "fa fa-times-circle", "aria-hidden", "true");

        $(deleteButton).click(() => {
            onItemDelete(recipeItem);
        });

        return deleteButton;
    }

    function onItemDelete(recipeItem) {
        $('#'+recipeItem.id+'_details').hide();
        $('#'+recipeItem.id+'_undo').show();
    }

    function onItemDeleteUndo(recipeItem) {
        $('#'+recipeItem.id+'_details').show();
        $('#'+recipeItem.id+'_undo').hide();
    }

    function createRecipeTitle(recipeItem) {
        var div = document.createElement('div');
        div.innerHTML = recipeItem.title;
        return div;
    }

    function createRecipeInstructions(recipeItem) {
        var div = document.createElement('div');
        div.innerHTML = recipeItem.instructions;
        return div;
    }

    function createRecipePic(recipeItem) {
        var recipePic = document.createElement("img");
        recipePic.setAttribute("src", recipeItem.img);
        recipePic.setAttribute("class", "recipe");
        $(recipePic).css('margin-top', '10px');

        $(recipePic).click(() => {
            $('#'+recipeItem.id+"_full_details").slideToggle();
        });

        return recipePic;
    }

    function createRecipeIngredients(recipeItem) {
        var ingredients = document.createElement("ul");
        ingredients.setAttribute("id", recipeItem.id + "_ingredients");
        ingredients.className = "ingredientsList";

        recipeItem.ingredients.forEach(ingredient => {
            var li = document.createElement("li");
            li.className = "ingredients";
            li.setAttribute("type", "checkbox");

            var checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            li.appendChild(checkbox);

            var ingredientElement = document.createElement("a");
            ingredientElement.innerHTML = ingredient;
            li.appendChild(ingredientElement);

            ingredients.appendChild(li);
        })
        return ingredients;

    }

	recipeItems = getRecipeItems();
    var mainContainer = document.getElementsByClassName('mainContainer');
    recipeItems.forEach(recipeItem => {
        mainContainer[0].appendChild(createRecipeItem(recipeItem));
    });



};
var recipeItems;
var Merchantprices;
$(document).ready(main);