events.listen('item.tags', function (event) {
    var items = [
        'quark:glowshroom_stem'
    ];
	event.get('forge:mushroom_stems').add(items);
});
