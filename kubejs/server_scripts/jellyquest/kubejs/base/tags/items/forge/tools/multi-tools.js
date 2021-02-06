events.listen('item.tags', function (event) {
    var items = [
        'immersiveengineering:buzzsaw',
        'immersiveengineering:drill'
    ];
	event.get('forge:tools').add(items);
	event.get('forge:tools/multi-tool').add(items);
});
