events.listen('item.tags', function (event) {
    event
        .get('forge:nuggets')
        .add('immersiveengineering:nugget_aluminum')
        .add('immersiveengineering:nugget_lead')
        .add('immersiveengineering:nugget_silver')
        .add('immersiveengineering:nugget_nickel')
        .add('immersiveengineering:nugget_uranium')
        .add('immersiveengineering:nugget_constantan')
        .add('immersiveengineering:nugget_electrum')
});
