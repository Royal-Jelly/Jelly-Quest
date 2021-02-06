events.listen('item.tags', function (event) {
    var items = [
        'patchouli:guide_book',
        'immersiveengineering:manual',
        'botania:lexicon',
        'solcarrot:food_book',
        'alexsmobs:animal_dictionary'
    ];
    event.get('forge:manuals').add(items);
});
