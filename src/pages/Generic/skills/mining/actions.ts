import AbstractAction from "../../classes/Action";
import { ActionProps} from "../../classes/types";

interface OreProperties extends Omit<ActionProps, "amount" | "baseTime"> {
    amount?: number;
    respawn: number;
}

class Ore extends AbstractAction {
    respawn: number;

    constructor({ name, amount = 1, respawn, xp}: OreProperties){
        super({name, baseTime: 3, amount, xp});
        this.respawn = respawn;
    }

    getTime = () => {
        // Time to do action is averaged with respect to respawn time.
        const activeTime = this.baseTime * (this.mastery + 5);
        const totalCycleTime = activeTime + this.respawn;
        return totalCycleTime / (this.mastery + 5);
    }

    getXPS = () => {
        return this.xp / this.getTime();
    }
    
}

const RuneEssence = new Ore({ name: "Rune Essence", amount: 2, respawn: 1, xp: 5});

const OreNames = [ 
    {name: 'Tin', respawn: 5, xp: 7},
    {name: 'Copper', respawn: 5, xp: 7},
    {name: 'Iron', respawn: 10, xp: 14},
    {name: 'Coal', respawn: 10, xp: 18},
    {name: 'Silver', respawn: 15, xp: 25},
    {name: 'Gold', respawn: 15, xp: 28},
    {name: 'Mithril', respawn: 20, xp: 65},
    {name: 'Adamantite', respawn: 30, xp: 71},
    {name: 'Runite', respawn: 60, xp: 86},
    {name: 'Dragonite', respawn: 120, xp: 101}
];
const RegularOres = OreNames.map(({name, respawn, xp}) => new Ore({name, respawn, xp})); 
export const Ores = [RuneEssence, ...RegularOres];
