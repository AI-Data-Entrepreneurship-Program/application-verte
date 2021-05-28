export default [
    'All',
    'Energie',
    'Alimentation',
    'Zero déchets',
    'Transport',
    'Autonomie',
    'Numérique',
    'Point culture',
    'Déchets',
    'Achats',
    'Nature',
    'Achats / Conso',
    'Autonomie / DIY'
];

export const getImage = category => {
    switch (category) {
        case 'Energie':
            return require('../../assets/img-energie.jpg');
        case 'Alimentation':
            return require('../../assets/img-alimentation.jpg');
        case 'Zero déchets':
            return require('../../assets/img-zero-dechet.jpg');
        case 'Transport':
            return require('../../assets/img-transport.jpg');
        case 'Autonomie':
            return require('../../assets/img-autonomie.jpg');
        case 'Numérique':
            return require('../../assets/img-numerique.jpg');
        case 'Point culture':
            return require('../../assets/img-point-culture.jpg');
        case 'Déchets':
            return require('../../assets/img-dechet.jpg');
        case 'Achats':
            return require('../../assets/img-achats.jpg');
        case 'Nature':
            return require('../../assets/img-nature.jpg');
        case 'Achats / Conso':
            return require('../../assets/img-achats-conso.jpg');
        case 'Autonomie / DIY':
            return require('../../assets/img-autonomie-diy.jpg');
    }
};
