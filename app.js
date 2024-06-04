function createParagraph(){
    var wordOne = document.getElementById('wordOne').value
    var wordTwo = document.getElementById('wordTwo').value
    var wordThree = document.getElementById('wordThree').value
    var wordFour = document.getElementById('wordFour').value
    var wordFive = document.getElementById('wordFive').value
    var wordSix = document.getElementById('wordSix').value
    var wordSeven = document.getElementById('wordSeven').value
    var wordEight = document.getElementById('wordEight').value
    var wordNine = document.getElementById('wordNine').value
    var wordTen = document.getElementById('wordTen').value
    var wordEleven = document.getElementById('wordEleven').value
    var wordTwelve = document.getElementById('wordTwelve').value
    var wordThirteen = document.getElementById('wordThirteen').value

    var paragraph = `Tonight is the ${wordOne} office holiday party, and I do
     hereby promise that I not make the same ${wordTwo} mistake as  last year. I will
      not ${wordThree} too much eggnog and fall in my ${wordFour}. When my boss wishes
     me a merry ${wordFive}, I will not shout, What am I? A ${wordSix}-magnet?
     I will not sniff near my boss's wife and ask her why she's marinating
     in such a ${wordSeven} perfume. I will not make photocopies of my ${wordEight} 
     and dance on the ${wordNine}. I will not step in the ${wordTen} while dancing
     on the ${wordEleven}. I understand that it does not amuse my colleagues when 
     I joke, This isn't an office, it's an ${wordTwelve} with flurescent lighting!
     This year I promise I will be on my most ${wordThirteen} behavior, because, for 
     the love of Pete, I can't keep looking for a new job every New Year's Day...`

    document.getElementById('answer').innerHTML = paragraph
}   