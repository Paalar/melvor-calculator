import { qualityStrings } from "components/QualityPicker";
import { Tool } from "pages/Generic/classes/types";

const genericPickaxe: Omit<Tool, "name" | "value"> = {
    affect: "Speed",
    operator: "*",
}

const pickaxeTimes = [1, 0.95, 0.9, 0.85, 0.8, 0.7, 0.6, 0.5]; 

export const pickaxes: Tool[] = qualityStrings.map(
    (quality, index) => (
        { ...genericPickaxe, name: quality, value: pickaxeTimes[index]}
    ));
