const sortArrOf0_1_2 = (a,N) => {
        //your code here
        // for(let i=0; i< N-1; i++) {
        //     for(let j=0; j< N-i-1; j++) {
        //         if(arr[j+1] < arr[j]) {
        //             [arr[j+1],arr[j]] = [arr[j],arr[j+1]];
        //         }
        //     }  
        // }
        // return arr;
        let l = 0; 
        let r = N - 1; 
        let m = 0;
        let temp = 0; 
        while (m <= r)
        {
            if(a[m] === 0){
                [a[l],a[m]] = [a[m],a[l]];
                l++; 
                m++; 
            } else if(a[m] == 1) {
                m++; 
            } else {
                [a[r],a[m]] = [a[m],a[r]];
                r--;
            }
            
        }
        return a;
    }

console.log(sortArrOf0_1_2([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1],12));