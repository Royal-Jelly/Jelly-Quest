events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'byg:pink_sandstone',
                outputs: [item.of('byg:pink_sand')],
                processingTime: 150
            },
            {
                input: 'byg:purple_sandstone',
                outputs: [item.of('byg:purple_sand')],
                processingTime: 150
            },
            {
                input: 'byg:blue_sandstone',
                outputs: [item.of('byg:blue_sand')],
                processingTime: 150
            },
            {
                input: 'byg:white_sandstone',
                outputs: [item.of('byg:white_sand')],
                processingTime: 150
            },
            {
                input: 'byg:black_sandstone',
                outputs: [item.of('byg:black_sand')],
                processingTime: 150
            },
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
