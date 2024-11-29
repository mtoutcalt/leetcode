function minWindow(s, t) {
    if (s.length === 0 || t.length === 0) return "";

    const tFreq = {};
    for (const char of t) {
        tFreq[char] = (tFreq[char] || 0) + 1;
    }

    let left = 0;
    let right = 0;
    let required = Object.keys(tFreq).length;
    let formed = 0;
    const windowCounts = {};

    let minLen = Infinity;
    let minLeft = 0;

    while (right < s.length) {
        const char = s[right];
        windowCounts[char] = (windowCounts[char] || 0) + 1;

        if (tFreq[char] && windowCounts[char] === tFreq[char]) {
            formed++;
        }

        while (formed === required) {
            const windowChar = s[left];

            // Update the smallest window
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minLeft = left;
            }

            // Remove the character at `left` from the window
            windowCounts[windowChar]--;
            if (tFreq[windowChar] && windowCounts[windowChar] < tFreq[windowChar]) {
                formed--;
            }

            left++;
        }

        right++;
    }

    return minLen === Infinity ? "" : s.substring(minLeft, minLeft + minLen);
}

