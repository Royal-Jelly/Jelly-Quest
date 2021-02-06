events.listen('player.logged_in', (event) => {
    if (!event.hasGameStage('starting_items')) {
        event.player.give(Item.of('akashictome:tome').nbt({
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
                            patchouli: {
                                id: 'patchouli:guide_book',
                                Count: 1,
                                tag: { 'patchouli:book': 'patchouli:modded_for_dummies' }
                            },
                            cookingforblockheads: {
                                id: 'cookingforblockheads:crafting_book',
                                Count: 1
                            },
                            solcarrot: { id: 'solcarrot:food_book', Count: 1 },
                            bloodmagic: { id: 'patchouli:guide_book', Count: 1, tag: { 'patchouli:book': 'bloodmagic:guide' } }
                        }
                    }));
        //event.player.give(item.of('ftbquests:book'));
        event.addGameStage('starting_items');
    }
});
