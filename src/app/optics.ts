export interface Optic {
  id: number;
  name: string;
  imageName: string;
  imagePath: string;
}

export const optics = [
  {
    id: 1,
    name: 'Red dot scope',
    imageName: 'scope-reddot.jpg',
    imagePath: '../../assets/scope-reddot.jpg'
  },
  {
    id: 2,
    name: 'Acog scope',
    imageName: 'scope-acog.jpg',
    imagePath: '../../assets/scope-acog.jpg'
  }
];
