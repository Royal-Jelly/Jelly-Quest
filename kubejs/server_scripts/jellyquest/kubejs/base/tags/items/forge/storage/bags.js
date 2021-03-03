events.listen('item.tags', function (event) {
    var items = [
        'botania:bauble_box',
        'botania:ender_hand',
        'botania:flower_bag'
    ];

    event.get('forge:storage').add(items);
    event.get('forge:storage/bag').add(items);
});
