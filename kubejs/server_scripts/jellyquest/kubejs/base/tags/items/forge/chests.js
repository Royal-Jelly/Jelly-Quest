events.listen('item.tags', function (event) {
    event.remove('forge:chests', [
        '#forge:chests/electric',
        '#forge:chests/personal',
        '#forge:chests/ender'
    ]);
});
