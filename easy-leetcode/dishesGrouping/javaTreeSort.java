import java.util.*;

class Solution {
    public List<List<String>> groupDishes(String[][] dishes) {
        // TreeMap keeps keys sorted automatically!
        Map<String, List<String>> ingredientMap = new TreeMap<>();
        
        for (String[] dish : dishes) {
            String dishName = dish[0];
            
            for (int i = 1; i < dish.length; i++) {
                String ingredient = dish[i];
                
                ingredientMap.putIfAbsent(ingredient, new ArrayList<>());
                ingredientMap.get(ingredient).add(dishName);
            }
        }
        
        List<List<String>> result = new ArrayList<>();
        
        // Ingredients are already sorted because of TreeMap!
        for (Map.Entry<String, List<String>> entry : ingredientMap.entrySet()) {
            List<String> dishesList = entry.getValue();
            
            if (dishesList.size() >= 2) {
                Collections.sort(dishesList);  // Still need to sort dishes
                
                List<String> group = new ArrayList<>();
                group.add(entry.getKey());
                group.addAll(dishesList);
                
                result.add(group);
            }
        }
        
        // No need to sort result - TreeMap already sorted by key!
        return result;
    }
}
