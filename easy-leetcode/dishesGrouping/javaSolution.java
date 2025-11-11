class Solution {
    public List<List<String>> groupDishes(String[][] dishes) {
        // Step 1: Create a HashMap to store ingredient -> list of dishes
        Map<String, List<String>> ingredientMap = new HashMap<>();
        
        // Build the map by iterating through each dish
        for (String[] dish : dishes) {
            String dishName = dish[0];  // First element is the dish name
            
            // Start at index 1 because 0 is the dish name
            for (int i = 1; i < dish.length; i++) {
                String ingredient = dish[i];
                
                // Check if ingredient is new - if so, initialize empty list
                if (!ingredientMap.containsKey(ingredient)) {
                    ingredientMap.put(ingredient, new ArrayList<>());
                }
                
                // Get the list and add the dish name to it
                List<String> dishList = ingredientMap.get(ingredient);
                dishList.add(dishName);
            }
        }
        
        // Step 2: Build result list from the map
        List<List<String>> result = new ArrayList<>();
        
        // Iterate through map entries (key-value pairs)
        for (Map.Entry<String, List<String>> entry : ingredientMap.entrySet()) {
            List<String> dishesList = entry.getValue();
            
            // Only include ingredients that appear in 2+ dishes
            if (dishesList.size() >= 2) {
                // Sort the dishes alphabetically
                Collections.sort(dishesList);
                
                // Create new list: [ingredient, dish1, dish2, ...]
                List<String> group = new ArrayList<>();
                group.add(entry.getKey());  // Add ingredient first
                group.addAll(dishesList);    // Add all dishes
                
                result.add(group);
            }
        }
        
        // Step 3: Sort result by ingredient name
        Collections.sort(result, (a, b) -> a.get(0).compareTo(b.get(0)));
        
        return result;
    }
}
