var katzDeli = []
var katzDeliLine = []

function takeANumber (line,name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
  katzDeliLine = line
}

function nowServing(line) {
  if (line.length > 0) {
    return `Currently serving ${line[0]}.`
  }
  else return "There is nobody waiting to be served!""
}
