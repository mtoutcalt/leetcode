public class Java {
    public int maxScore(String s) {
        int zero = 0;
        int one = 0;

        // Count the total number of '1's in the string
        for (char c : s.toCharArray()) {
            if (c == '1') {
                one++;
            }
        }

        int maxScore = 0;

        // Iterate through the string, excluding the last character
        for (int i = 0; i < s.length() - 1; i++) {
            if (s.charAt(i) == '0') {
                zero++;
            } else {
                one--;
            }
            // Calculate the current score
            maxScore = Math.max(maxScore, zero + one);
        }

        return maxScore;
    }

    public static void main(String[] args) {
        Java sol = new Java();
        String s = "011101";
        System.out.println("Max Score: " + sol.maxScore(s)); // Example usage
    }
}
