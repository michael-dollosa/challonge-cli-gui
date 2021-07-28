// import { getTournaments } from "../api/tournament"

// const parseCommand = (command)=> {
//   console.log(command)
//   //get first item in array
//   switch(command[0]){
//     case "@tournament":
//       if(command[1] === "-a") {
//         console.log("inside -a")
        
//         (async() => {return { type: 'tournament', data: await getTournaments().data.data}})()
//       }
//       else{
//         return { type: 'text', data: "invalid tournament command"}
//       }
//       break
      
//     default:
//       return { type: 'text', data: "invalid command"}
//   }
// }


export const parseInput = input => {
  const data = input.split(" ") //split by space
  const isCommand = data[0][0] === "@" ? true : false //check if input is command or just text

  //this function returns obj
  return { isCommand,  data  }
}