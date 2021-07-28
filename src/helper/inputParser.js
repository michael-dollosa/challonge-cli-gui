export const parseInput = data => {
  const splitInput = data.split(" ") //split by space
  const checkCommandChar = splitInput[0][0] //check if input is command or just text

  //check if command or not
  if(checkCommandChar !== "@") return { type: "text", data: data }
  return { type: "text", data: `this is a command ${ data }` }
}