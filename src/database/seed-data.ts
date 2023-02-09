interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  createdAt: number;
  status: string;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        "pending: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, earum ipsa ut harum enim reprehenderit quis facilis aliquid placeat officia at quibusdam fuga dignissimos saepe inventore adipisci deleniti, nam labore.",
      createdAt: Date.now(),
      status: "pending",
    },
    {
      description:
        "in-progress: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, earum ipsa ut harum enim reprehenderit quis facilis aliquid placeat officia at quibusdam fuga dignissimos saepe inventore adipisci deleniti, nam labore.",
      createdAt: Date.now(),
      status: "in-progress",
    },
    {
      description:
        "finished: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, earum ipsa ut harum enim reprehenderit quis facilis aliquid placeat officia at quibusdam fuga dignissimos saepe inventore adipisci deleniti, nam labore.",
      createdAt: Date.now(),
      status: "finished",
    },
  ],
};
