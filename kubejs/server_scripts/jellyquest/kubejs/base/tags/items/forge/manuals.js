events.listen('item.tags', function (event) {
    var items = [
        'patchouli:guide_book',
        'cookingforblockheads:recipe_book',
        'fd_cookbook:cook_book',
        'immersiveengineering:manual',
        'iceandfire:bestiary',
        'botania:lexicon',
        'solcarrot:food_book',
        'alexsmobs:animal_dictionary'
    ];
    event.get('forge:manuals').add(items);
});
