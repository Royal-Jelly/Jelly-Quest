events.listen('recipes', (event) => {
    var data = {
        recipes_heated: [

            {
                inputs: ['#forge:ingots/copper', '#forge:ingots/nickel'],
                output: Item.of('immersiveengineering:ingot_constantan', 2)
            },
            {
                inputs: ['#forge:ingots/gold', '#forge:ingots/silver'],
                output: Item.of('immersiveengineering:ingot_electrum', 2)
            }
        ],
        recipes_superheated: [
            {
                inputs: [
                    '#forge:dusts/coal_coke',
                    '#forge:ingots/iron',
                    '#forge:ingots/iron',
                    '#forge:ingots/iron',
                    '#forge:ingots/iron'
                ],
                output: Item.of('immersiveengineering:ingot_steel', 4)
            }
        ]
    };
    data.recipes_heated.forEach((recipe) => {
        event.recipes.create.mixing(recipe.output, recipe.inputs).heated();
    });
    data.recipes_superheated.forEach((recipe) => {
        event.recipes.create.mixing(recipe.output, recipe.inputs).superheated();
    });
});
