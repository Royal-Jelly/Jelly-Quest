events.listen('item.tags', function (event) {
    var items = [
        'quark:glowshroom_block'
    ];
	event.get('forge:mushroom_caps').add(items);
});
