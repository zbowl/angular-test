export interface Rifle {
  id: number;
  name: string;
  imageName: string;
  imagePath: string;
}

export const rifles = [
  {
    id: 1,
    name: 'M-16',
    imageName: 'm-16.jp',
    imagePath: '../../assets/m-16.jpg'
  },
  {
    id: 2,
    name: 'Ak-47',
    imageName: 'ak-47.jpg',
    imagePath: '../../assets/ak-47.jpg'
  }
];
