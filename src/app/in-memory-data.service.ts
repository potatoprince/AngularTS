import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const routers = [
      { id: 1, name: 'CCR1009-7G-1C-1S+' },
      { id: 2, name: 'CCR1009-8G-1S-1S+' },
      { id: 3, name: 'CCR1016-12G' },
      { id: 4, name: 'CCR1036-8G-2S+' },
      { id: 5, name: 'CCR1036-12G-4S' },
      { id: 6, name: 'CRS305-1G-4S+' },
      { id: 7, name: 'hAPac^2' },
      { id: 8, name: 'RB2011UiAS' },
      { id: 9, name: 'RB760iGS' },
      { id: 10, name: 'LtAP-2HnD' }
    ];
    return {routers};
  }
}
