// In the morning all the doors in the school are closed. The school is quite big: there are N doors. Then pupils start coming. It might be hard to believe, but all of them want to study! Also, there are exactly N children studying in this school, and they come one by one.

// When these strange children pass by some doors they change their status (i.e. Open -> Closed, Closed -> Open). Each student has their number, and each i-th student alters the status of every i-th door. For example: when the first child comes to the schools, he changes every first door (he opens all of them). The second one changes the status of every second door (he closes some doors: the 2nd, the 4th and so on). Finally, when the last one – the n-th – comes to the school, he changes the status of each n-th door (there's only one such door, though).

// You need to count how many doors are left opened after all the students have come.


const doors = (n) => {
// 0 = closed; 1 = open
    let doorArr = [...Array(n).keys()].map(elem => elem * 0) // Array with doors starting in open position

    // Loop through each student
    // While there is a door to open/close for the student, open or close the corresponding door
    for (let i = 1; i <= n; i++) {
        let p = i
        while (p <= n) {
            if (doorArr[p-1] === 0) {
                doorArr.splice(p-1, 1, 1)
                p += i
            } else {
                doorArr.splice(p-1, 1, 0)
                p += i
            }
        }
    }
    // Filter out number of open doors and return
    let doorsOpen = doorArr.filter(num => num === 1)
    return doorsOpen.length
}


console.log(doors(5))
console.log(doors(10))