events.listen('recipes', (event) => {
    var data = {
        recipes: [
            //{ input: 'simplefarming:cumin_seeds', fluid: 'immersiveengineering:plantoil', amount: 20, energy: 6400 },
          ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.squeezer({
            type: 'immersiveengineering:squeezer',
            fluid: {
                fluid: recipe.fluid,
                amount: recipe.amount
            },
            input: {
                item: recipe.input
            },
            energy: recipe.energy
        });
    });
});
