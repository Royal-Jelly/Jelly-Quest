events.listen('recipes', (event) => {
    //event.remove({type: 'minecraft:blasting'})

    var data = {

        recipes: [{ input: 'minecraft:rotten_flesh', output: 'quark:tallow', xp: 0.5 }]
    };
    data.recipes.forEach((recipe) => {
        event.blasting(recipe.output, recipe.input).xp(recipe.xp);
    });
});
