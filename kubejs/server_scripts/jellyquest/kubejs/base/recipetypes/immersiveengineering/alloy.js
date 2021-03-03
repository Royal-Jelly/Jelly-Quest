events.listen('recipes', (event) => {
    var data = {
        recipes: [
        ]
    };
    event.remove({id: 'immersiveengineering:alloysmelter/brass'});
    data.recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.alloy(recipe.output, recipe.input1, recipe.input2);
    });
});
