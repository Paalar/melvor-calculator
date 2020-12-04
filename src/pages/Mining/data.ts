
export type OreNames = "Copper" | "Tin" | "Iron" | "Coal" | "Silver" | "Gold" | "Mithril" | "Adamantite" | "Runite" | "Dragonite";

export const xpPerOre: Record<OreNames, number> = {
    Copper: 7,
    Tin: 7,
    Iron: 14,
    Coal: 18,
    Silver: 25,
    Gold: 28,
    Mithril: 65,
    Adamantite: 71,
    Runite: 86,
    Dragonite: 101
};

export const respawnPerOre: Record<OreNames, number> = {
    Copper: 5,
    Tin: 5,
    Iron: 10,
    Coal: 10,
    Silver: 15,
    Gold: 15,
    Mithril: 20,
    Adamantite: 30,
    Runite: 60,
    Dragonite: 120,
}

export const pickaxeTimes = [1, 0.95, 0.9, 0.85, 0.8, 0.7, 0.6, 0.5];
