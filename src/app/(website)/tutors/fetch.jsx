// fetchData.js
import { getAllTheGroupOfSession } from "@/actions/client/groups";

export async function fetchGroupsData(gc) {
  try {
    const responseData = await getAllTheGroupOfSession(gc);
    return responseData;
  } catch (error) {
    console.error(error);
    return [];
  }
}
