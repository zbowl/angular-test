export interface Magazine {
  id: number;
  name: string;
  imageName: string;
  imagePath: string;
}

export const magazines = [
  {
    id: 1,
    name: '30 round magazine',
    imageName: 'magazine-30-round.jpg',
    imagePath: '../../assets/magazine-30-round.jpg'
  },
  {
    id: 2,
    name: '50 round magazine',
    imageName: 'magazine-50-round.jpg',
    imagePath: '../../assets/magazine-50-round.jpg'
  }
];
