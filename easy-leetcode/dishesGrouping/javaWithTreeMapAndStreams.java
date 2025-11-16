import java.util.*;
import java.util.stream.*;

class Solution {
    public List<List<String>> groupDishes(String[][] dishes) {
        // TreeMap keeps keys (ingredients) sorted automatically
        Map<String, List<String>> ingredientMap = new TreeMap<>();
        
        // Build the map using streams
        Arrays.stream(dishes)
            .forEach(dish -> {
                String dishName = dish[0];
                
                // Stream over ingredients (skip first element which is dish name)
                Arrays.stream(dish)
                    .skip(1)  // Skip the dish name
                    .forEach(ingredient -> 
                        ingredientMap
                            .computeIfAbsent(ingredient, k -> new ArrayList<>())
                            .add(dishName)
                    );
            });
        
        // Build result using streams
        return ingredientMap.entrySet().stream()
            .filter(entry -> entry.getValue().size() >= 2)  // Only ingredients in 2+ dishes
            .map(entry -> {
                List<String> dishesList = entry.getValue();
                Collections.sort(dishesList);  // Sort dishes
                
                // Create result list: [ingredient, dish1, dish2, ...]
                List<String> group = new ArrayList<>();
                group.add(entry.getKey());
                group.addAll(dishesList);
                return group;
            })
            .collect(Collectors.toList());  // Collect into final result list
    }
}
