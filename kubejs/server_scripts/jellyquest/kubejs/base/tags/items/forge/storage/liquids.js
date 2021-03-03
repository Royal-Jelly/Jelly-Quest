events.listen('item.tags', function (event) {
    var items = [];
    event.get('forge:storage').add(items);
    event.get('forge:storage/liquid').add(items);
    event.get('forge:storage/fluid').add(items);
});
