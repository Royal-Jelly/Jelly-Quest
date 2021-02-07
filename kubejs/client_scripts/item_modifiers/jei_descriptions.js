events.listen('jei.information', (event) => {
    var data = {
        items: []
    };

    data.items.forEach(function (item) {
        event.add(item.item, item.description);
    });

    disabledItems.forEach((item) => {
        event.add(
            item,
            "This item has been disabled, if you managed to obtain it please report it on Jelly Quest's issue tracker: https://github.com/Royal-Jelly/Jelly-Quest/issues"
        );
    });

    refinedStorageItems.forEach((item) => {
        event.add(`refinedstorage:${item}`, 'Can be dyed through crafting or by right clicking it with dye in-world.');
    });

    generatableCobblestone.forEach((cobblestone) => {
        event.add(
            cobblestone,
            'Can be generated in a Vanilla Cobblestone Generator. The block below where the Cobblestone generates needs to be a Block of Iron.'
        );
    });

    generatableStone.forEach((stone) => {
        event.add(
            stone,
            'Can be generated in a Vanilla Stone Generator. The block below where the Stone generates needs to be a Block of Diamond.'
        );
    });
});
