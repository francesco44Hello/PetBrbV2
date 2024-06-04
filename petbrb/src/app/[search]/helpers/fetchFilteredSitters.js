import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../../firebase";

export const fetchFilteredSitters = async (searchParams) => {
  try {
    // Base collection reference
    const sittersCollection = collection(firestore, "sitters");

    // Fetch all documents from the "sitters" collection
    const querySnapshot = await getDocs(sittersCollection);
    const allSitters = querySnapshot.docs.map((doc) => doc.data());

    // Get the query parameters from the URL
    const location = searchParams.get("location") || "";
    const petType = searchParams.get("petType") || "";
    const budget = searchParams.get("budget") || "";

    // Filter the sitters based on the query parameters
    const filteredResults = allSitters.filter((sitter) => {
      // Check if location matches
      const locationMatch =
        !location ||
        sitter.city.toLowerCase().includes(location.toLowerCase());

      // Check if pet type matches
      const petTypeMatch =
        !petType ||
        (sitter.typeOfPet &&
          petType
            .toLowerCase()
            .split(",")
            .every((pet) => sitter.typeOfPet.toLowerCase().includes(pet.trim())));

      // Check if budget is within the specified range
      const budgetMatch =
        !budget || isNaN(budget) || Number(sitter.rate) <= Number(budget);

      // Return true if all conditions are met
      return locationMatch && petTypeMatch && budgetMatch;
    });

    return filteredResults;
  } catch (error) {
    console.error("Error fetching search results:", error);
    return [];
  }
};