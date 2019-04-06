
const palindrome = (begin: any, end: any): Array<number> => {

  begin = parseInt(begin)
  end = parseInt(end)

  let respArray: Array<any> = []
  let current: number = begin

  while (current <= end) {
    let currentString = current.toString()
    let currentLength = currentString.length
    let isPalindrome: boolean = false

    if (currentLength !== 1) {

      if (isOdd(currentLength)) {
        let halfLength = (currentLength - 1) / 2
        isPalindrome = checkIsPalindrome(halfLength,currentString, currentLength)
  
      } else {
        let halfLength = currentLength / 2
        isPalindrome = checkIsPalindrome(halfLength,currentString, currentLength)

      }
    }

    if (currentLength === 1 || isPalindrome)
        respArray.push(current)

    current++
  }
  return respArray
}

const isOdd = (num: number): number => {
  return num % 2
}

const checkIsPalindrome = (halfLength: number, currentString: string, currentLength: number): boolean => {
  let isPalindrome: boolean = true
  let i: number = 0

      while (i < halfLength) {

        if (currentString[i] !== currentString[currentLength - i - 1]) {
          isPalindrome = false
          break
        }
        i++
      }

  return isPalindrome
}

export default palindrome


