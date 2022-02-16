// // Your Code Here+
// let firstAnswer  = window.prompt('Do you head left or right?')
// if(firstAnswer === 'left'){
//     let secondAnswer = window.prompt(`You come across a stray cat. 
// It scampers off down a small hole, just large enough for you to crawl through. 
// Do you follow it, or continue on your path?`)
//     if (secondAnswer === 'follow it') {
//         let secondAnswer = window.prompt('You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.')
//         if(secondAnswer === 'stay') {
//             let secondAnswer = window.prompt('You live happily amongs the cats for the rest of your days.')
//         } else if (secondAnswer === 'spread the word') {
//             let secondAnswer = window.alert('After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.')
//         }

//     }
// } else if(firstAnswer === 'right') {
//     let secondAnswer = window.prompt(`You come across a snoring dragon. 
// On the other side of him, you see a shiny chest of treasure. Another path would 
// lead you away from the dragon altogether. Which path do you take?`)

// }
let firstAnswer = window.prompt("Enter the cave or keep walking?")
if (firstAnswer == "Enter" || firstAnswer == "Cave"){
    let cave = window.prompt("The cave imidetily forks do you go left or right?")
    if (cave == "left"){
        let left = window.prompt("You come across a stray cat. It scampers off down a small hole just large enough for you to crawl through. Do you follow it or continue on your path?")
        if (left == "Follow"){
            let follow = window.prompt("You follow the cat to a colony of cats nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content wth you staying, buy you wonder if you should alert the world to this magical safe haven. Do you stay or spread the word?")
            if (follow == "Stay"){
                console.log("You live happily amongst the cats for the rest of your days.")
            }
            else if (follow == "Spread the word"){
                console.log("After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless")
            }
        }
        else if (left == "Continue"){
            let continue = window.prompt("You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take the ladder or the staircase?")
            if (continue == "Ladder"){
                console.log("After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.")
            }
            else if (continue == "Staircase"){
                console.log("After ascending the stair case, you discover a shiny blue stone, which you take home and cherish forever")
            }
        }
    }
    else if (cave == "right"){
        let right = window.prompt("You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which do you take, past the dragon or away from the dragon?")
        if (right == "past the dragon"){
            let past = window.prompt("The dragon wakes up and sits upright. You only have a moment to respond, to stay or run")
            if (past == "stay"){
                console.log("You and the dragon have an uplifting conversation about local politics and become lifelong friends")
            }
            else if (past == "run"){
                console.log("Quickly, you run back to the cave's entrance. Sheepish, you return home.")
            }
        }
        else if (right == "away from the dragon"){
            let away = window.prompt("After walking awhile longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. which do you do?")
            if (away == "draw it"){
                console.log("You draw the flower, capturing only a fraction of its beauty with your quil. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.")
            }
            else if (away == "pick it"){
                console.log("You pick the flower and bring it home, and all marvel at its brillance. However, over time it fades and eventually crumbles to dust.")
            }
        }
    }
}