var people = [
    {
        name: 'Grumpy Cat',
        photo: 'http://cdn5.thr.com/sites/default/files/imagecache/scale_crop_768_433/2014/09/too_good_for_grumpy_cat.jpg',
        scores: ['1','1','1','1','1','1','1','1','1','1',]
    },
    {
        name: 'Lil Bub',
        photo: 'http://www.i-heart-pets.com/wp-content/uploads/2014/07/fc9715b-4.cached.jpg',
        scores: ['2','2','2','2','2','2','2','2','2','2',]
    },
    {
        name: 'Pumpkin',
        photo: 'http://cdn0.wideopencountry.com/wp-content/uploads/2015/10/4.jpg',
        scores: ['3','3','3','3','3','3','3','3','3','3']
    },
    {
        name: 'Doge',
        photo: 'http://i3.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg',
        scores: ['5','5','5','5','5','5','5','5','5','5']
    },
    {
        name: 'Juniper',
        photo: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/02/juniper-fox-happiest-instagram-15.jpg',
        scores: ['4','4','4','4','4','4','4','4','4','4',]
    },
];

module.exports = function(newUser) {
    if (newUser) {
        people.push(newUser);
    }
    return people;
}
