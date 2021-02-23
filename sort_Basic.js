function mySort(arg1,arg2) {
    //if numbers
    // + treats arg2 greater than arg1
    // - treats arg2 is less than arg1
    // 0 treats both both arhs are same
//     return arg1-arg2 
        return arg1.length - arg2.length // to sort according to length
}

// [7,6,9,1,3,4,99,56].sort(mySort)

['asd','adgfdhrt','hfghf','asf'].sort(mySort)