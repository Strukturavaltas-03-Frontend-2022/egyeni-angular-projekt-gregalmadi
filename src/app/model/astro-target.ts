export class AstroTarget {
  [key: string]: any;
  uniqueId: string = '';
  id: number = 1;
  catalogueNumber: string = 'M1';
  constellation: string = 'Taurus';
  name: string = 'Crab Nebula';
  image: string =
    'https://firebasestorage.googleapis.com/v0/b/astro-catalogue.appspot.com/o/M1.jpg?alt=media&token=561f6b03-d7af-4a0d-913c-accb8f6f18c0';
  isInMilkyWay: boolean = true;
  magnitude: number = 8.4;
  type: string = 'Supernova Remnant';
}
