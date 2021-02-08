events.listen('recipes', (event) => {
    var recipes = [
        shapelessRecipe(Item.of('coins:coin_copper', 9), ['coins:coin_pile_copper']),
        shapelessRecipe(Item.of('coins:coin_iron', 9), ['coins:coin_pile_iron']),
        shapelessRecipe(Item.of('coins:coin_gold', 9), ['coins:coin_pile_gold']),
        shapelessRecipe(Item.of('coins:coin_platinum', 9), ['coins:coin_pile_platinum']),
        shapelessRecipe(Item.of('coins:coin_diamond', 9), ['coins:coin_pile_diamond']),
        shapelessRecipe('botania:enchanted_soil', ['minecraft:grass_block', 'botania:overgrowth_seed']),
        shapelessRecipe('minecraft:sticky_piston', ['minecraft:piston', '#forge:slimeballs']),
        shapelessRecipe('minecraft:flint', ['#forge:gravel', '#forge:gravel', '#forge:gravel']),
        shapelessRecipe('minecraft:chest', ['#forge:chests/wooden']),
        shapelessRecipe('minecraft:wheat_seeds', ['minecraft:wheat']),
        shapelessRecipe('quark:root', ['minecraft:vine', '#forge:dyes/brown']),
        shapelessRecipe(
            Item.of('akashictome:tome').nbt({
                'akashictome:data': {
                    tetra: {
                        id: 'tetra:holo',
                        Count: 1,
                        tag: {
                            'holo/core_material': 'frame/dim',
                            'holo/frame': 'holo/frame',
                            'holo/core': 'holo/core',
                            'holo/frame_material': 'core/ancient'
                        }
                    },
                    alexsmobs: { id: 'alexsmobs:animal_dictionary', Count: 1 },
                    immersiveengineering: { id: 'immersiveengineering:manual', Count: 1 },
                    botania: { id: 'botania:lexicon', Count: 1, tag: {} },
                    cookingforblockheads: {
                        id: 'cookingforblockheads:crafting_book',
                        Count: 1
                    },
                    engineersdecor: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: { 'patchouli:book': 'engineersdecor:engineersdecor_manual' }
                    },
                    solcarrot: { id: 'solcarrot:food_book', Count: 1 },
                    bloodmagic: { id: 'patchouli:guide_book', Count: 1, tag: { 'patchouli:book': 'bloodmagic:guide' } }
                }
            }),
            ['minecraft:book', '#forge:bookshelves']
        )
    ];

    recipes.forEach(function (recipe) {
        if (recipe.id) {
            event.shapeless(recipe.result, recipe.ingredients).id(recipe.id);
        } else {
            event.shapeless(recipe.result, recipe.ingredients);
        }
    });
});
