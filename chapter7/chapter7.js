class VillageState {
  // robotLoc: current location of robot
  // parcels: undelivered parcels and their current locations and destination
  constructor(robotLoc, parcels) {
    this.robotLoc = robotLoc;
    this.parcels = parcels;
  }

  move(destination) {
    // If current location doesn't have the parcel destination, return this
    if (!roadGraph[this.robotLoc].includes(destination)) {
      return this;
    } else {
      // Remove parcels that have been delivered
      // if robot isn't in the parcel location
      let parcels = this.parcels.map(p => {
        if (p.robotLoc != this.robotLoc) return p;
      }).filter(p => p.robotLoc != p.address);

      return new VillageState(destination, parcels);
    }
  }
}

function buildGraph(edges) {
  let graph = Object.create(null);

  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }

  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }

  return graph;
}

const roads = [
  "Alice's House-Bob's House", "Alice's House-Cabin",
  "Alice's House-Post Office", "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop", "Marketplace-Farm",
  "Marketplace-Post Office", "Marketplace-Shop",
  "Marketplace-Town Hall", "Shop-Town Hall"
];
const roadGraph = buildGraph(roads);