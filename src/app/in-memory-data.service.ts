import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const routers = [
      { id: 1, Department: 'Endurance', name: 'CCR1009-7G-1C-1S+' },
      { id: 2, Department: 'Endurance', name: 'CCR1009-8G-1S-1S+' },
      { id: 3, Department: 'RMA', name: 'CCR1016-12G' },
      { id: 4, Department: 'Endurance', name: 'CCR1036-8G-2S+' },
      { id: 5, Department: 'Endurance', name: 'CCR1036-12G-4S' },
      { id: 6, Department: 'RMA', name: 'CRS305-1G-4S+' },
      { id: 7, Department: 'Endurance', name: 'hAPac^2' },
      { id: 8, Department: 'RMA', name: 'RB2011UiAS' },
      { id: 9, Department: 'RMA', name: 'RB760iGS' },
      { id: 10, Department: 'Endurance', name: 'LtAP-2HnD' }
    ];
    return {routers};
  }
}
