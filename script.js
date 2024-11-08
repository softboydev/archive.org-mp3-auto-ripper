let A = [].slice.call(document.getElementsByTagName("a")).filter((a) => a.innerText.includes(".mp3"))
let O = ""
for(let i = 0; i < A.length; i++){
  let a = A[i]
  O += "curl -L -o " + (i+1) + ".mp3 '"
  O += a
  O += i < A.length ? "' && " : "'"
}
console.log(O)
