events.listen('player.logged_in', (event) => {
    if (!event.hasGameStage('starting_items')) {
        event.player.give(Item.of('akashictome:tome').nbt({
                        'akashictome:data': {
                            tetra: {
                                Count: 1,
                                id: 'tetra:holo',
                                tag: {
                                    'holo/core_material': 'frame/dim',
                                    'holo/frame': 'holo/frame',
                                    'holo/core': 'holo/core',
                                    'holo/frame_material': 'core/ancient'
                                }
                            },
                            resourcefulbees: {
                                Count: 1,
                                id: 'patchouli:guide_book',
                                tag: { 'patchouli:book': 'resourcefulbees:fifty_shades_of_bees' }
                            },
                            cookingforblockheads: { id: 'cookingforblockheads:recipe_book', Count: 1 },
                            immersiveengineering: {id: 'immersiveengineering:manual', Count: 1 },
                            alexsmobs: { id: 'alexsmobs:animal_dictionary', Count: 1 },
                            sereneseasons: { id: 'sereneseasons:calendar', Count: 1 },
                            fd_cookbook: { id: 'fd_cookbook:cook_book', Count: 1 },
                            iceandfire: { id: 'iceandfire:bestiary', Count: 1 },
                            solcarrot: { id: 'solcarrot:food_book', Count: 1 },
                            botania: { id: 'botania:lexicon', Count: 1 }
                      }
              }));
        event.addGameStage('starting_items');
    }
});
