// function quickSort(arr){
//     if(arr.length <= 1){
//         return arr
//     }
//     let left = []
//     let right = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= arr[0]) {
//             right.push(arr[i])
//         }else{
//             left.push(arr[i])
//         }        
//     }
//     return quickSort(left).concat(arr[0]).concat(quickSort(right))
// }


function quickSort(arr) {
    function _quickSort(arr, start, end) {
        if (start >= end) return
        let key = arr[end]
        let left = start, right = end - 1
        while (left < right) {
            while (arr[left] < key && left < right) left++
            while (arr[right] >= key && left < right) right--
            [arr[left], arr[right]] = [arr[right], arr[left]]
        }
        if (arr[left] >= arr[end]) {
            [arr[left], arr[end]] = [arr[end], arr[left]]
        } else {  // 如 [2, 1, 3, 4]
            left++
        }
        _quickSort(arr, start, left - 1)
        _quickSort(arr, left + 1, end)
    }
    _quickSort(arr, 0, arr.length - 1)
    return arr
}