var main = function () {

    var recipeType = {
        0: "cocktail",
        1: "appetizer",
        2: "main course",
        3: "dessert",
    }

    function getRecipeItems() {
        return recipeItems = [
            {
                "id": "recipe0",
                "title": "Grasshopper Cocktail",
                "img": "../images/grasshopper-cocktail.jpg",
                "ingredients": ["1","2","3"],
                "instructions":"shaken not stirred",
                "type" : 0,
            },
            {
                "id": "recipe1",
                "title": "Beef roast with veggies",
                "img": "../images/beef-roast-with-veggies.JPG",
                "ingredients": ["1","2","3"],
                "instructions":"stuff it good",
                "type" : 2,
            },
            {
                "id": "recipe2",
                "title": "Shrimp-Fried-Rice",
                "img": "../images/Shrimp-Fried-Rice.jpg",
                "ingredients": ["1","2","3"],
                "instructions":"extra MSG",
                "type" : 2,
            },
            {
                "id": "recipe3",
                "title": "Cupcake from hell",
                "img": "../images/Cupcake-Idea-pics-200x150.png",
                "ingredients": ["1","2","3"],
                "instructions":"death is inevitable",
                "type" : 3,
            },
        ]
    }

    function createRecipeItem(recipeItem) {
        var recipeElement = document.createElement('div');
        recipeElement.setAttribute("id", recipeItem.id);
        recipeElement.setAttribute("class", recipeItem);

        recipeDetailsElement = document.createElement("div");
        recipeDetailsElement.setAttribute("id", recipeItem.id+"_details");
        recipeDetailsElement.appendChild(createRecipePic(recipeItem));
        recipeDetailsElement.appendChild(createRecipeTitle(recipeItem));

        recipePreperationElement = document.createElement("div");
        recipePreperationElement.setAttribute("id", recipeItem.id+"_full_details");
        recipePreperationElement.appendChild(createRecipeIngredients(recipeItem));
        recipePreperationElement.appendChild(createRecipeInstructions(recipeItem));
        recipePreperationElement.style.display = 'none';

        recipeDetailsElement.appendChild(recipePreperationElement);
        recipeDetailsElement.appendChild(createDeleteRecipe(recipeItem));

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
            $('#'+recipeItem.id+"_full_details").toggle();
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


    var mainContainer = document.getElementsByClassName('mainContainer');
    getRecipeItems().forEach(recipeItem => {
        mainContainer[0].appendChild(createRecipeItem(recipeItem));
    });



};
$(document).ready(main);