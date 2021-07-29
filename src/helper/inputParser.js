
export const defaultIcon = "https://secure.gravatar.com/avatar/3d7e6982cff393f19d5f86b30828402e?r=r&s=40&d=https://s3.amazonaws.com/challonge_app/misc/challonge_fireball_gray.png"

export const parseInput = input => {
  const data = input.split(" ") //split by space
  const isCommand = data[0][0] === "@" ? true : false //check if input is command or just text

  //this function returns obj
  return { isCommand,  data  }
}