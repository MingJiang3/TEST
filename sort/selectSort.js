function sectionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        min = i
        for (let j = i+1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }            
        }        
        [arr[i],arr[min]] = [arr[min],arr[i]] 
    }
}


function sectionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        min = i
        for (let j = i+1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }            
        }        
        [arr[i],arr[min]] = [arr[min],arr[i]]
    }
}