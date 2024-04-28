import { SimulatorSpacecraft } from "../../types";
import { spaceCraftData } from "./data/spaceCraftData";

export const createRandomCheckListData = (): SimulatorSpacecraft => {
  //move to utils
  const randomSpaceCraftData = spaceCraftData.checkListData.map((data) => {
    const randomValue = Math.floor(
      Math.random() * (data.vitals.max - data.vitals.min) + data.vitals.min
    );
    return {
      ...data,
      vitals: {
        ...data.vitals,
        simulatorValue: randomValue,
      },
    };
  });
  return {
    ...spaceCraftData,
    checkListData: randomSpaceCraftData,
  };
};
