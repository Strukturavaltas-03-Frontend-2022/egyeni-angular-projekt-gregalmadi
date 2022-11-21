export class AstroTarget {
  [key: string]: any;
  uniqueId: string = '';
  id: number = 0;
  catalogueNumber: string = '';
  constellation: string = '';
  name: string = '';
  image: string =
    'https://firebasestorage.googleapis.com/v0/b/astro-catalogue.appspot.com/o/placeholder.jpg?alt=media&token=755795f1-f5ca-4ac5-bcd2-2a9c43bca811';
  isInMilkyWay: boolean = true;
  magnitude: number = 0;
  type: string = '';
}
