export const heights = [
  {
    name: "Tomorrowland Speedway (doubles car)",
    height: 32,
    park: "Magic Kingdom Park",
  },
  {
    name: "Alien Swirling Saucers",
    height: 32,
    park: "Disney's Hollywood Studios",
  },
  {
    name: "Chairlift",
    height: 32,
    park: "Disney's Blizzard Beach Water Park",
  },
  {
    name: "The Barnstormer",
    height: 35,
    park: "Magic Kingdom Park",
  },
  {
    name: "Seven Dwarfs Mine Train",
    height: 38,
    park: "Magic Kingdom Park",
  },
  {
    name: "Milennium Falcon: Smugglers Run",
    height: 38,
    park: "Disney's Hollywood Studios",
  },
  {
    name: "Slinky Dog Dash",
    height: 38,
    park: "Disney's Hollywood Studios",
  },
  {
    name: "Kali River Rapids",
    height: 38,
    park: "Disney's Animal Kingdom Park",
  },
  {
    name: "Big Thunder Mountain Railroad",
    height: 40,
    park: "Magic Kingdom Park",
  },
  {
    name: "Splash Mountain",
    height: 40,
    park: "Magic Kingdom Park",
  },
  {
    name: "Mission: SPACE",
    height: 40,
    park: "Epcot",
  },
  {
    name: "Soarin' Around the World",
    height: 40,
    park: "Epcot",
  },
  {
    name: "Test Track",
    height: 40,
    park: "Epcot",
  },
  {
    name: "Star Tours - The Adventure Continues",
    height: 40,
    park: "Disney's Hollywood Studios",
  },
  {
    name: "Star Wars: Rise of the Resistance",
    height: 40,
    park: "Disney's Hollywood Studios",
  },
  {
    name: "The Twighlight Zone Tower of Terror™",
    height: 40,
    park: "Disney's Hollywood Studios",
  },
  {
    name: "DINOSAUR",
    height: 40,
    park: "Disney's Animal Kingdom Park",
  },
  {
    name: "Guardians of the Galaxy: Cosmic Rewind",
    height: 42,
    park: "Epcot",
  },
  {
    name: "Space Mountain",
    height: 44,
    park: "Magic Kingdom Park",
  },
  {
    name: "Avatar Flight of Passage",
    height: 44,
    park: "Disney's Animal Kingdom Park",
  },
  {
    name: "Expedition Everest - Legend of the Forbidden Mountain",
    height: 44,
    park: "Disney's Animal Kingdom Park",
  },
  {
    name: "Rock 'n' Roller Coaster Starring Aerosmith",
    height: 48,
    park: "Disney's Hollywood Studios",
  },
  {
    name: "Crush 'n' Gusher",
    height: 48,
    park: "Disney's Typhoon Lagoon Water Park",
  },
  {
    name: "Humunga Kowabunga",
    height: 48,
    park: "Disney's Typhoon Lagoon Water Park",
  },
  {
    name: "Downhill Double Dipper",
    height: 48,
    park: "Disney's Blizzard Beach Water Park",
  },
  {
    name: "Slush Gusher",
    height: 48,
    park: "Disney's Blizzard Beach Water Park",
  },
  {
    name: "Summit Plummet",
    height: 48,
    park: "Disney's Blizzard Beach Water Park",
  },
  {
    name: "TRON Lightcycle / Run",
    height: 48,
    park: "Magic Kingdom Park",
  },
  {
    name: "Tomorrowland Speedway (own car)",
    height: 54,
    park: "Magic Kingdom Park",
  },
];

export const parse = (raw: string): number => {
  if (raw.split(" ").length < 2) {
    const parsed = parseInt(raw);
    if (!isNaN(parsed) && parsed > 6) {
      return parsed;
    }
  }

  let height = 0;
  const regexpHeight = /([0-9]+)'? ?([0-9]+)?"?/;
  const match = raw.match(regexpHeight);

  if (match) {
    const feet = parseInt(match[1]);
    if (!isNaN(feet)) {
      height += feet * 12;
    }

    const inches = parseInt(match[2]);
    if (!isNaN(inches)) {
      height += inches;
    }
  }

  return height;
};

export const asHeight = (height: number): string => {
  if (height < 12) {
    return `${height}"`;
  }
  return `${Math.floor(height / 12)}' ${height % 12}"`;
};
