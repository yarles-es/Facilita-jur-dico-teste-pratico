import { Client } from '../models/Client';

function distanceCalculator(x1: number, y1: number, x2: number, y2: number): number {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

export function findTheShortestRoute(clients: Client[]): Client[] {

  const route: Client[] = [
    {
      name: 'Facilita Juridico',
      email: 'facilitajuridico@gmail.com',
      phone: '999999999',
      coord_x: 0,
      coord_y: 0,
    },
  ];
  
  let clientesNaoVisitados: Client[] = clients.slice();

  while (clientesNaoVisitados.length > 0) {
    const ultimoCliente = route[route.length - 1];
    let nextClient: Client | null = null;
    let shortestDistance = Infinity;

    clientesNaoVisitados.forEach((cliente) => {
      const distancia = distanceCalculator(
        ultimoCliente.coord_x,
        ultimoCliente.coord_y,
        cliente.coord_x,
        cliente.coord_y,
      );
      if (distancia < shortestDistance) {
        shortestDistance = distancia;
        nextClient = cliente;
      }
    });

    if (nextClient) {
      route.push(nextClient);
      clientesNaoVisitados = clientesNaoVisitados.filter((cliente) => cliente !== nextClient);
    } else {
      break;
    }
  }
  route.shift();
  return route;
}
