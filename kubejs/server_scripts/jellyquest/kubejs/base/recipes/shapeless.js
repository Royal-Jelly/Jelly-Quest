events.listen('recipes', (event) => {
    var recipes = [
        shapelessRecipe('9x coins:coin_copper', ['coins:coin_pile_copper']),
        shapelessRecipe('9x coins:coin_iron', ['coins:coin_pile_iron']),
        shapelessRecipe('9x coins:coin_gold', ['coins:coin_pile_gold']),
        shapelessRecipe('9x coins:coin_platinum', ['coins:coin_pile_platinum']),
        shapelessRecipe('9x coins:coin_diamond', ['coins:coin_pile_diamond']),

        shapelessRecipe('9x coins:coin_pile_copper', ['coins:coin_iron']),
        shapelessRecipe('9x coins:coin_pile_iron', ['coins:coin_gold']),
        shapelessRecipe('9x coins:coin_pile_gold', ['coins:coin_platinum']),
        shapelessRecipe('9x coins:coin_pile_platinum', ['coins:coin_diamond']),

        shapelessRecipe('3x architects_palette:withered_bone', ['iceandfire:witherbone']),
        shapelessRecipe('9x architects_palette:withered_bone', ['architects_palette:withered_bone_block']),
        shapelessRecipe('architects_palette:withered_bone_block', ['9x architects_palette:withered_bone']),

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
