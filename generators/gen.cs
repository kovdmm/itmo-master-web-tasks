using System;
using System.Collections.Generic;

class Application {
    
    // iterable generator
    static IEnumerable<int> cc() {
        for (int i = 1; ; i++) {
            yield return i;
        }
    }
    
    static void Main() {
        int limiter = 3;
        
        var gen_cc = cc();
        
        foreach (int val in gen_cc) {
            Console.Write(val);
            if (--limiter == 0) break;
        }
    }
}