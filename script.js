document.addEventListener("DOMContentLoaded", () => {
  // вот это лучше вам не трогать, внутри тултипов оставил подсказки к выполнению задач
  enableTooltips();
  // Задача 1
  let t1Btn = document.querySelector('[data-js="t1-btn"]');
  let t1Hex = document.querySelector('[data-js="t1-hex"]')

  t1Btn.addEventListener('click', () =>{
    let randomR = getRandomInt(256);
    let randomG = getRandomInt(256);
    let randomB = getRandomInt(256);
    console.log(randomR, randomG, randomB)
    console.log(rgbToHex(randomR, randomG, randomB))
    t1Btn.style.background = `${rgbToHex(randomR, randomG, randomB)}`
    t1Hex.textContent = `${rgbToHex(randomR, randomG, randomB)}`
  })

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  // Задача 2

  let t2Input = document.querySelector('[data-js="t2-input"]');
  let t2Count = document.querySelector('[data-js="t2-count"]')

  t2Input.addEventListener('input', () => {
    t2Count.textContent = t2Input.value.length
  })

  // Задача 3

  let t3Input = document.querySelector('[data-js="t3-input"]')
  let t3Add = document.querySelector('[data-js="t3-add"]')
  let t3List = document.querySelector('[data-js="t3-list"]')

  t3Add.addEventListener('click', () => {
    if (t3Input.value.length > 0) {
      let element = document.createElement('li')
      element.textContent = t3Input.value
      t3List.append(element)
      t3Input.value = ""
    }
    else {
      alert('Введи хоть что-нибудь')
    }
  })

  // Задача 4

  let t4Minus = document.querySelector('[data-js="t4-minus"]')
  let t4Plus = document.querySelector('[data-js="t4-plus"]')
  let t4Reset = document.querySelector('[data-js="t4-reset"]')
  let t4Out = document.querySelector('[data-js="t4-out"]')
  let t4Count = 0;

  t4Minus.addEventListener('click', () => {
    t4Count -= 1;
    t4Out.textContent = t4Count;
  })

  t4Plus.addEventListener('click', () => {
    t4Count += 1;
    t4Out.textContent = t4Count;
  })

  t4Reset.addEventListener('click', () => {
    t4Count = 0;
    t4Out.textContent = t4Count;
  })

  // Задача 5

  let t5Open = document.querySelector('[data-js="t5-open"]')
  let t5Modal = document.querySelector('[data-js="t5-modal"]')
  let t5Close = document.querySelector('[data-js="t5-close"]')
  let t5Backdrop = document.querySelector('[data-js="t5-backdrop"]')

  t5Open.addEventListener('click', () => {
    t5Modal.toggleAttribute('hidden')
  })

  t5Close.addEventListener('click', () => {
    t5Modal.toggleAttribute('hidden')
  })

  t5Backdrop.addEventListener('click', () => {
    t5Modal.toggleAttribute('hidden')
  })

  t5Open.addEventListener('keyup', (e) => {
    if (e.key == "Escape") {
      if(!t5Modal.hasAttribute('hidden'))
      t5Modal.toggleAttribute('hidden')
    }
  })

  // Задачка 6

  let dataTabA = document.querySelector('[data-tab="a"]')
  let dataTabB = document.querySelector('[data-tab="b"]')
  let dataTabC = document.querySelector('[data-tab="c"]')
  let dataPaneA = document.querySelector('[data-pane="a"]')
  let dataPaneB = document.querySelector('[data-pane="b"]')
  let dataPaneC = document.querySelector('[data-pane="c"]')

  dataTabA.addEventListener('click', () => {
    dataPaneA.classList.add('is-active')
    dataPaneB.classList.remove('is-active')
    dataPaneC.classList.remove('is-active')
    dataTabA.classList.add('is-active')
    dataTabB.classList.remove('is-acive')
    dataTabC.classList.remove('is-active')
  })

  dataTabB.addEventListener('click', () => {
    dataPaneA.classList.remove('is-active')
    dataPaneB.classList.add('is-active')
    dataPaneC.classList.remove('is-active')
    dataTabA.classList.remove('is-active')
    dataTabB.classList.add('is-active')
    dataTabC.classList.remove('is-active')
  })

  dataTabC.addEventListener('click', () => {
    dataPaneA.classList.remove('is-active')
    dataPaneB.classList.remove('is-active')
    dataPaneC.classList.add('is-active')
    dataTabA.classList.remove('is-active')
    dataTabB.classList.remove('is-active')
    dataTabC.classList.add('is-active')
  })

  // Задачка 7

  let t7Input = document.querySelector('[data-js="t7-input"]')
  let t7Run = document.querySelector('[data-js="t7-run"]')
  let t7Out = document.querySelector('[data-js="t7-out"]')

  t7Run.addEventListener('click', () => {
    let reverseInput = ''
    for(let i = t7Input.value.length; 0 < i; i--) {
      reverseInput += t7Input.value[i - 1]
    }
    t7Out.textContent = reverseInput
  })

  // Задачка 8

  let t8A = document.querySelector('[data-js="t8-a"]')
  let t8B = document.querySelector('[data-js="t8-b"]')
  let t8Add = document.querySelector('[data-js="t8-add"]')
  let t8Mul = document.querySelector('[data-js="t8-mul"]')
  let t8Out = document.querySelector('[data-js="t8-out"]')


  t8Add.addEventListener('click', () => {
    let a = Number(t8A.value)
    let b = Number(t8B.value)
    if (!Number.isNaN(a)) {
      if (!Number.isNaN(b)) {
        t8Out.textContent = a + b
      }
    }
  })

  t8Mul.addEventListener('click', () => {
    let a = Number(t8A.value)
    let b = Number(t8B.value)
    if (!Number.isNaN(a)) {
      if (!Number.isNaN(b)) {
        t8Out.textContent = a * b
      }
    }
  })

  // Задачка 9

  let t9Toggle = document.querySelector('[data-js="t9-toggle"]')
  let t9Text = document.querySelector('[data-js="t9-text"]')

  t9Toggle.addEventListener('click', () => {
    t9Text.classList.toggle('hidden')
    if (t9Text.classList.contains('hidden')) {
      t9Toggle.textContent = "Показать"
    }
    else {
      t9Toggle.textContent = "Скрыть"
    }
  })

  // Задачка 10
  let t10Range = document.querySelector('[data-js="t10-range"]')
  let t10Out = document.querySelector('[data-js="t10-out"]')
  let t10Box = document.querySelector('[data-js="t10-box"]')

  t10Range.addEventListener('input', (event) => {
    t10Out.textContent = event.target.value + "px"
    t10Box.style.width = `${event.target.value}px`
    t10Box.style.height = `${event.target.value}px`
  })

  // Задачка 11
  let t11Seconds = document.querySelector('[data-js="t11-seconds"]')
  let t11Start = document.querySelector('[data-js="t11-start"]')
  let t11Stop = document.querySelector('[data-js="t11-stop"]')
  let t11Out = document.querySelector('[data-js="t11-out"]')
  let checkTimer = null;

  t11Start.addEventListener('click', () => {
    if (!checkTimer) {
      let a = Number(t11Seconds.value)
      if (!Number.isNaN(a)) {
        checkTimer = setInterval(() => {
          t11Out.textContent = a;
          if (a <= 0) {
            clearInterval(checkTimer)
            checkTimer = null;
            return
          }
          a--;
        }, 1000);
      }
      else {
        alert("Ты должен ввести только число")
      }
    }
    else {
      alert("Ты должен закончить таймер")
    }
  })

  t11Stop.addEventListener('click', () => {
    clearInterval(checkTimer)
    checkTimer = null;
    t11Out.textContent = 0;
  })

  // Задачка 12
  let t12Plus = document.querySelector('[data-js="t12-plus"]')
  let t12Label = document.querySelector('[data-js="t12-label"]')
  let t12Bar = document.querySelector('[data-js="t12-bar"]')
  let progess = 0
  t12Plus.addEventListener('click', () => {
    if (progess < 100)
    {
      progess += 10
      t12Label.textContent = progess + "%"
      t12Bar.style.width = `${progess}%`
    }
  })

  // Задачка 13
  let t13Input = document.querySelector('[data-js="t13-input"]')
  let t13Out = document.querySelector('[data-js="t13-out"]')

  t13Input.addEventListener('keydown', (e) => {
    logKey(e)
    if (e.ctrlKey && e.key == "k") {
      t13Out.textContent = ''
    }
  })

  function logKey(e) {
    t13Out.textContent += ` ${e.key}`
  }

  // Задачка 14

  let matrix = ["Работа не волк. Никто не волк. Только волк — волк.",
    "Настоящий мужчина, как ковер тети Зины — с каждым годом лысеет.",
    "Мама учила не ругаться матом, но жизнь научила не ругаться матом при маме.",
    "Если закрыть глаза, становится темно.",
    "Если тебе где-то не рады в рваных носках, то и в целых туда идти не стоит.",
    "«Жи-ши» пиши от души.",
    "В Риме был, а папы не видал.",
    "Тут — это вам не там.",
    "Кто рано встает — тому весь день спать хочется.",
    "Если ты смелый, ловкий и очень сексуальный — иди домой, ты пьян."
  ]

  let t14Next = document.querySelector('[data-js="t14-next"]')
  let t14Out = document.querySelector('[data-js="t14-out"]')

  t14Next.addEventListener('click', () => {
    let randomCitat = getRandomInt(matrix.length)
    t14Out.textContent = matrix[randomCitat]
  })

  // Задачка 15

  let t15Coords = document.querySelector('[data-js="t15-coords"]')
  let t15Item = document.querySelector('[data-js="t15-item"]')
  let t15Area = document.querySelector('[data-js="t15-area"]')

  let drugable = false

  t15Item.addEventListener('pointerdown', (e) => {
    drugable = true
    let areaRect = t15Area.getBoundingClientRect()
    t15Item.style.left = `${e.clientX - areaRect.left - t15Item.offsetWidth / 2}px`
    t15Item.style.top = `${e.clientY - areaRect.top - t15Item.offsetHeight / 2}px`
  })

  t15Item.addEventListener('pointermove', (e) => {
    if (!drugable) return;

    let rect = t15Item.getBoundingClientRect()
    let areaRect = t15Area.getBoundingClientRect()

    let desiredLeft = e.clientX - areaRect.left - rect.width / 2
    let desiredTop = e.clientY - areaRect.top - rect.height / 2

    let maxLeft = areaRect.width - rect.width
    let maxTop = areaRect.height - rect.height

    let clampedLeft = Math.min(Math.max(desiredLeft, 0), maxLeft)
    let clampedTop = Math.min(Math.max(desiredTop, 0), maxTop)

    t15Item.style.left = `${clampedLeft}px`
    t15Item.style.top = `${clampedTop}px`

    t15Coords.textContent = `X: ${Math.floor(clampedLeft)}, Y: ${Math.floor(clampedTop)}`
  })

  t15Item.addEventListener('pointerup', () => {
    drugable = false
  })

  // Задачка 16

  let t16Animate = document.querySelector('[data-js="t16-animate"]')
  let t16Box = document.querySelector('[data-js="t16-box"]')

  let startLeft = 30
  let distance = 600
  let animId = 0

  t16Animate.addEventListener('click', () => {
    animId++
    const myId = animId

    t16Box.style.left = startLeft + 'px'

    animate({
      duration: 3000,
      timing: bounce,
      draw(progress) {
        if (myId !== animId) return

        t16Box.style.left = (startLeft + progress * distance) + 'px'
      }
    })
  })

  function bounce(timeFraction) {
    for (let a = 0, b = 1; ; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
  }

  function animate({ duration, timing, draw }) {
    let start = performance.now()

    requestAnimationFrame(function frame(time) {
      let timeFraction = (time - start) / duration
      if (timeFraction > 1) timeFraction = 1

      let progress = timing(timeFraction)
      draw(progress)

      if (timeFraction < 1) requestAnimationFrame(frame)
    })
  }

  // Задачка 17
  let t17Area = document.querySelector('[data-js="t17-area"]')
  

  let t17AreaInfo = t17Area.getBoundingClientRect()
  let t17AreaWidth = t17AreaInfo.width
  let t17AreaHeight = t17AreaInfo.height

  setInterval(createDiv, 1000)
  function createDiv() {
    let newDiv = document.createElement('div');
    newDiv.className = 'box';
    t17Area.append(newDiv);
    newDiv.style.position = 'absolute'
    let randomWidth = getRandomInt(t17AreaWidth - 49)
    let randomHeight = getRandomInt(t17AreaHeight - 49)
    newDiv.style.top = `${randomHeight}px`
    newDiv.style.left = `${randomWidth}px`
  }

  // Задачка 18

  let t18Area = document.querySelector('[data-js="t18-area"]')
  
  let t18AreaInfo = t18Area.getBoundingClientRect()
  let t18AreaWidth = t18AreaInfo.width
  
  setInterval(createDiv18, 1000)

  function createDiv18() {
    let newDiv18 = document.createElement('div');
    newDiv18.className = 'box';
    t18Area.append(newDiv18);
    newDiv18.style.position = 'absolute'
    newDiv18.style.left = `${t18AreaWidth}px`
    requestAnimationFrame(() => animateDiv(newDiv18))
  }

  // Задачка 19

  let t19Area = document.querySelector('[data-js="t19-area"]')
  
  let t19AreaInfo = t19Area.getBoundingClientRect()
  let t19AreaHeight = t19AreaInfo.height
  let t19AreaWidth = t19AreaInfo.width

  setInterval(createDivAndMove, 1000)

  function createDivAndMove() {
    let newDiv19 = document.createElement('div');
    newDiv19.className = 'box';
    t19Area.append(newDiv19);
    newDiv19.style.position = 'absolute'
    let randomHeight = getRandomInt(t19AreaHeight - 49)
    newDiv19.style.top = `${randomHeight}px`
    newDiv19.style.left = `${t19AreaWidth}px`
    requestAnimationFrame(() => animateDiv(newDiv19))
  }
  function animateDiv(newDiv19) {
    let currentLeft = parseInt(newDiv19.style.left)
    let nextLeft = currentLeft - 1;
    newDiv19.style.left = `${nextLeft}px`
    if (nextLeft + newDiv19.offsetWidth <= 0) {
      newDiv19.remove()
      return
    }

    requestAnimationFrame(() => animateDiv(newDiv19))
  }

  // Задачка 20

  let t20Area = document.querySelector('[data-js="t20-area"]')
  let t20Score = document.querySelector('[data-js="t20-score"]')

  let score = 0;

  let t20AreaInfo = t20Area.getBoundingClientRect()
  let t20AreaWidth = t20AreaInfo.width
  let t20AreaHeight = t20AreaInfo.height

  setInterval(createDiv20, 1000)

  function createDiv20() {
    let newDiv20 = document.createElement('div');
    newDiv20.className = 'box';
    t20Area.append(newDiv20);
    newDiv20.style.position = 'absolute'
    let randomHeight = getRandomInt(t20AreaHeight - 49)
    newDiv20.style.top = `${randomHeight}px`
    newDiv20.style.left = `${t20AreaWidth}px`
    newDiv20.addEventListener('click', () => {
      score++;
      t20Score.textContent = score;
      newDiv20.remove()
    })
    requestAnimationFrame(() => animateDiv(newDiv20))
  }

  // Задачка 21
  
  let t21Area = document.querySelector('[data-js="t21-area"]')
  let t21Score = document.querySelector('[data-js="t21-score"]')
  let t21Lives = document.querySelector('[data-js="t21-lives"]')

  let score21 = 0;
  let lives21 = 3;

  let t21AreaInfo = t21Area.getBoundingClientRect()
  let t21AreaWidth = t21AreaInfo.width
  let t21AreaHeight = t21AreaInfo.height

  setInterval(createDiv21, 1000)

  function createDiv21() {
    let newDiv21 = document.createElement('div');
    newDiv21.className = 'box';
    t21Area.append(newDiv21);
    newDiv21.style.position = 'absolute'
    let randomHeight = getRandomInt(t21AreaHeight - 49)
    newDiv21.style.top = `${randomHeight}px`
    newDiv21.style.left = `${t21AreaWidth}px`
    newDiv21.addEventListener('click', () => {
      score21++;
      t21Score.textContent = score21;
      newDiv21.remove()
      console.log(lives21)
    })
    
    if (lives21 <= 0) {
      alert("Game over")
      score21 = 0;
      lives21 = 3;
      t21Score.textContent = score21;
      t21Lives.textContent = lives21;
    }
    requestAnimationFrame(() => animateDiv21(newDiv21))

    function animateDiv21(newDiv21) {
      let currentLeft = parseInt(newDiv21.style.left)
      let nextLeft = currentLeft - 1;
      newDiv21.style.left = `${nextLeft}px`
      if (parseInt(newDiv21.style.left) <= 0) {
        newDiv21.remove()
        lives21--;
        t21Lives.textContent = lives21;
        return
      }
        
      requestAnimationFrame(() => animateDiv21(newDiv21))
    }
  }
});
