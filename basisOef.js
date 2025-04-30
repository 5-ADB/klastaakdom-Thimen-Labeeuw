const toestellen = [
  {
    id: 1,
    type: "huishoud",
    benaming: "wasmachine",
    type: "bosh",
    kleur: "rood",
    onderhoud: [
      {
        id: 1,
        datum: "29/06/2020",
        omschrijving: "draait niet meer",
        opgelost: true,
      },
      {
        id: 2,
        datum: "10/02/2022",
        omschrijving: "deur stuk",
        opgelost: true,
      },
    ],
  },
  {
    id: 2,
    type: "huidhoud",
    benaming: "droogkast",
    type: "bosh",
    kleur: "wit",
    onderhoud: [
      {
        id: 1,
        datum: "12/01/2023",
        omschrijving: "knoppen werken niet meer",
        opgelost: true,
      },
      {
        id: 2,
        datum: "12/08/2024",
        omschrijving: "filter stuk",
        opgelost: false,
      },
    ],
  },
];

// Zorg ervoor dat onderstaande oplossingen ook gelden indien er aanpassingen gebeuren aan de lijst.

/**
 * Zorg ervoor dat je de verschillende toestellen weergeeft op 1 rij
 * res: wasmachine, droogkast
 */
function ToonToestellen(list) {
  let toestellenArray = [];
  list.forEach((toestel) => {
    toestellenArray.push(toestel.benaming);
  });
  const toestellenString = toestellenArray.join(", ");
  console.log(toestellenString);
}

ToonToestellen(toestellen);

/**
 * Geef het id + toestel + probleem van de problemen die nog niet zijn opgelost
 * res: 2 - droogkast - filter stuk
 */

function ToestelProbleem(list) {
  list.forEach((toestel) => {
    toestel.onderhoud.forEach((probleem) => {
      console.log(
        `${probleem.id} - ${toestel.benaming} - ${probleem.omschrijving}`
      );
    });
  });
}

ToestelProbleem(toestellen);
