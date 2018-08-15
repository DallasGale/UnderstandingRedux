import { generateUser } from "../../state/static-data";

export default function userReducer(state = generateUser(), action) {
  return state;
};