import { Skill } from "pages/Generic/classes/types";
import { Ores } from "./actions";
import { pickaxes } from "./tools";

const unlockables = {1: Ores.length};

const Mining: Skill = {
    name: "Mining",
    tools: pickaxes,
    actions: Ores,
    maxMastery: 1089,
    unlockables: unlockables,
}

export default Mining;
