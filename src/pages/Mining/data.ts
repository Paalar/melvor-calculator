import { Extra } from "data/extras";
import { Unlockables } from "pages/Woodcutting/data";

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

export const unlockables: Unlockables = {
    1: 3,
    15: 1,
    30: 2,
    40: 1,
    50: 1,
    70: 1,
    80: 1,
    95: 1,
}

export const Mastery25: Extra = {
    name: "mastery25",
    operator: "*",
    value: 0.1,
};

export const Mastery50: Extra = {
    name: "mastery50",
    operator: "-",
    value: 0.2,
};
