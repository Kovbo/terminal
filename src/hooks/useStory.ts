import data from "../story.js";
import { Story } from "../types";

export const useStory = () => {
  return data as Story;
};
