function takeANumber(line,name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(line){
  if(line.length==0){
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}
function currentLine(line){
  if(line.length){
    return "The line is currently empty."
  }
  let i=0
  var str="The line is currently: "
  while
  return `The line is currently: ${...line}`
}
