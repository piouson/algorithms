const getOrbitalPeriod = (a, gm) => {
  return Math.round(2 * Math.PI * Math.sqrt(Math.pow(a, 3) / gm));
}

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(obj => {
    let { name, avgAlt } = obj;
    let result = getOrbitalPeriod(earthRadius + avgAlt, GM);
    return { name: name, orbitalPeriod: result };
  });
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

/**
 * TESTS
 * orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
 * orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]
 */