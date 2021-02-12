events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'biomesoplenty:black_sandstone',
                outputs: [item.of('biomesoplenty:black_sand')],
                processingTime: 150
            },
            {
                input: 'biomesoplenty:orange_sandstone',
                outputs: [item.of('biomesoplenty:orange_sand')],
                processingTime: 150
            },
            {
                input: 'biomesoplenty:white_sandstone',
                outputs: [item.of('biomesoplenty:white_sand')],
                processingTime: 150
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.create.milling(recipe.outputs, recipe.input).processingTime(recipe.processingTime);
    });
});
