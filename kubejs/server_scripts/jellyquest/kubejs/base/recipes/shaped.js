events.listen('recipes', function (event) {
    var recipes = [
        shapedRecipe('coins:coin_pile_copper', ['LLL', 'LLL', 'LLL'], {
            L: 'coins:coin_copper'
        }),
        shapedRecipe('coins:coin_iron', ['LLL', 'LLL', 'LLL'], {
            L: 'coins:coin_pile_copper'
        }),
        shapedRecipe('coins:coin_pile_iron', ['LLL', 'LLL', 'LLL'], {
            L: 'coins:coin_iron'
        }),
        shapedRecipe('coins:coin_gold', ['LLL', 'LLL', 'LLL'], {
            L: 'coins:coin_pile_iron'
        }),
        shapedRecipe('coins:coin_pile_gold', ['LLL', 'LLL', 'LLL'], {
            L: 'coins:coin_gold'
        }),
        shapedRecipe('coins:coin_platinum', ['LLL', 'LLL', 'LLL'], {
            L: 'coins:coin_pile_gold'
        }),
        shapedRecipe('coins:coin_pile_platinum', ['LLL', 'LLL', 'LLL'], {
            L: 'coins:coin_platinum'
        }),
        shapedRecipe('coins:coin_diamond', ['LLL', 'LLL', 'LLL'], {
            L: 'coins:coin_pile_platinum'
        }),
        shapedRecipe('coins:coin_pile_diamond', ['LLL', 'LLL', 'LLL'], {
            L: 'coins:coin_diamond'
        })
    ];

    recipes.forEach(function (recipe) {
        if (recipe.id) {
            event.shaped(recipe.result, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.result, recipe.pattern, recipe.key);
        }
    });

    buildWoodVariants.forEach((wood) => {
        if (wood.modId == 'minecraft') {
            return;
        }
        event.shaped(Item.of('minecraft:oak_sign', 3), ['AAA', 'AAA', ' B '], {
            A: wood.plankBlock,
            B: '#forge:rods/wooden'
        });
        event.shaped(Item.of('minecraft:chest'), ['AAA', 'A A', 'AAA'], {
            A: wood.plankBlock
        });
    });
});
