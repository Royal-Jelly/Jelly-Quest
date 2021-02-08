events.listen('item.tags', (event) => {
    event.add('forge:tallow', ['quark:tallow']);
    event.add('forge:wax', ['quark:tallow']);
});
