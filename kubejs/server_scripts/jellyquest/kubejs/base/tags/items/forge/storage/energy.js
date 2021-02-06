events.listen('item.tags', function (event) {
    var items = [
        'immersiveengineering:capacitor_creative',
        'immersiveengineering:capacitor_hv',
        'immersiveengineering:capacitor_lv',
        'immersiveengineering:capacitor_mv',
        'immersiveengineering:powerpack'
    ];
    event.get('forge:storage').add(items);
    event.get('forge:storage/energy').add(items);
});
