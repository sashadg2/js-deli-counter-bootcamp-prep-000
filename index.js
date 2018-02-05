var katzDeli = []
var katzDeliLine = []

function takeANumber (line,name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
  katzDeliLine = line
}

function nowServing(line) {
  if (line.length > 0) {
    var result = `Currently serving ${line[0]}.`
    line.shift()
    katzDeliLine = line
    return result
  }
  else return "There is nobody waiting to be served!"
}

function currentLine(line) {
  if (line.length > 0) {
    var result = `Currently serving ${line[0]}.`
    line.shift()
    return result
  }
  else return "There is nobody waiting to be served!"
}
