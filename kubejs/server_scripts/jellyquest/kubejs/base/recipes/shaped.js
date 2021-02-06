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
        }),
        shapedRecipe(item.of('minecraft:stick', 16), ['A', 'A'], {
            A: '#minecraft:logs'
        }),
        shapedRecipe('minecraft:hopper', ['ABA', 'ABA', ' A '], {
            A: '#forge:ingots/iron',
            B: '#minecraft:logs'
        }),
        shapedRecipe('minecraft:furnace', ['LLL', 'L L', 'LLL'], {
            L: '#forge:stone'
        }),
        shapedRecipe('minecraft:tube_coral_block', ['AA', 'AA'], {
            A: 'minecraft:tube_coral_fan'
        }),
        shapedRecipe('minecraft:brain_coral_block', ['AA', 'AA'], {
            A: 'minecraft:brain_coral_fan'
        }),
        shapedRecipe('minecraft:bubble_coral_block', ['AA', 'AA'], {
            A: 'minecraft:bubble_coral_fan'
        }),
        shapedRecipe('minecraft:fire_coral_block', ['AA', 'AA'], {
            A: 'minecraft:fire_coral_fan'
        }),
        shapedRecipe('minecraft:horn_coral_block', ['AA', 'AA'], {
            A: 'minecraft:horn_coral_fan'
        }),
        shapedRecipe('minecraft:tube_coral_block', ['AA', 'AA'], {
            A: 'minecraft:tube_coral'
        }),
        shapedRecipe('minecraft:brain_coral_block', ['AA', 'AA'], {
            A: 'minecraft:brain_coral'
        }),
        shapedRecipe('minecraft:bubble_coral_block', ['AA', 'AA'], {
            A: 'minecraft:bubble_coral'
        }),
        shapedRecipe('minecraft:fire_coral_block', ['AA', 'AA'], {
            A: 'minecraft:fire_coral'
        }),
        shapedRecipe('minecraft:horn_coral_block', ['AA', 'AA'], {
            A: 'minecraft:horn_coral'
        }),
        shapedRecipe(item.of('minecraft:ladder', 4), ['A A', 'ABA', 'A A'], {
            A: '#forge:rods/wooden',
            B: '#minecraft:planks'
        }),
        shapedRecipe(item.of('emendatusenigmatica:steel_ingot', 2), ['AA'], {
            A: 'immersiveengineering:ingot_steel'
        }),
        shapedRecipe(item.of('quark:white_candle', 2), ['B', 'A', 'A'], {
            A: '#forge:wax',
            B: '#forge:string'
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
