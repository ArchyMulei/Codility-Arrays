function solution(A, K) {
    if (A.length === 0 || K % A.length === 0) {
        return A; s
    }
    
    // Adjust rotation if it's greater than array length
    K = K % A.length;
    
    const rotatedPart = A.slice(-K);
    const remainingPart = A.slice(0, A.length - K);
    
    return rotatedPart.concat(remainingPart);
}