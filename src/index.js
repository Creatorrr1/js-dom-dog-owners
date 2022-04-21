console.log(data);


// WRITE YOUR CODE BELOW!

const dogListUl = document.querySelector('.dogs-list')


for (let i = 0; i < data.length; i++) {
    const currentDog = data[i] // js object of current dog
    console.log("Dog is", currentDog.name)
    // console.log(dog)

    const dogListItem =  document.createElement('li')
    // apply a class to the listItem
    // dogListItem.setAttribute('class','dogs-list__button dogs-list__button--add')
    dogListItem.setAttribute('class','dogs-list__button')
    dogListItem.innerText = currentDog.name
    // add the dogListItem to the Ul
    dogListUl.append(dogListItem)


    dogListItem.addEventListener('click', function (event) {
        console.log("Dog clicked:", currentDog)
        event.preventDefault()
        
        // const dogName = currentDog.name
        const mainCard = document.querySelector('.main__dog-section')
        mainCard.remove()
        // when diff button clicked remove currentDog displayed
        // remove existing section

        // add new section
        // create card element, h2 element
        // newCard section into the html 
        const main = document.querySelector('.main')
        const addSection = document.createElement("section")
        main.append(addSection)
        // set attribute to it
        addSection.setAttribute('class', 'main__dog-section')
        // add h2
        const dogH2 = document.createElement("h2")
        // add h2 into the section
        dogH2.innerHTML = currentDog.name
        addSection.append(dogH2)
        // add image
        const mainImg = document.createElement('img')
        mainImg.setAttribute('src', currentDog.image)
        addSection.append(mainImg)
        // add div that hold h3 and p tag
        const mainDiv = document.createElement('div')
        mainDiv.setAttribute("class", "main__dog-section__desc")
        addSection.append(mainDiv)
        // add bio
        const dogBio = document.createElement("h3")
        dogBio.innerText = 'Bio'
        mainDiv.append(dogBio)
        // add paragraph
        const dogPara = document.createElement('p')
        dogPara.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, minima voluptates libero cumque rerum consequatur optio aliquid sint eum maxime illo laborum omnis quo ab rem cupiditate nulla perspiciatis ipsum!'
        mainDiv.append(dogPara)
        // add div with button
        const divButton = document.createElement('div')
        divButton.setAttribute('class', 'main__dog-section__btn')
        addSection.append(divButton)
        // add a p tag with em tag in between it
        const pTagForEm = document.createElement('p')
        addSection.append(pTagForEm)

        const emTagInPTag = document.createElement('em')
        emTagInPTag.innerText = 'Is naughty?'
        pTagForEm.append(emTagInPTag)
        // add button
        const behaviorButton = document.createElement('button')
        behaviorButton.innerText = 'Good Dog!'
        addSection.append(behaviorButton)
    })
}
// -----


// const dogListUl = document.querySelector(".dogs-list")
const mainCard = document.querySelector(".main__dog-section")
const addDogButton = document.querySelector(".dogs-list__button--add")

// form !!!
  addDogButton.addEventListener("click", () => {
    // clear the html
    mainCard.innerHTML = ""
  
    // create the form
    const h2 = document.createElement("h2")
    h2.innerText = "Add a new Dog"
  
    const form = document.createElement("form")
    form.setAttribute("class", "form")
  
    const inputText = document.createElement("input")
    inputText.setAttribute("type", "text")
    inputText.setAttribute("id", "name")
    inputText.setAttribute("id", "name")
    inputText.setAttribute("name", "name")
  
    const inputUrl = document.createElement("input")
    inputUrl.setAttribute("type", "url")
    inputUrl.setAttribute("id", "image")
    inputUrl.setAttribute("name", "image")
  
    const textArea = document.createElement("textarea")
    textArea.setAttribute("rows", "5")
    textArea.setAttribute("id", "bio")
    textArea.setAttribute("name", "bio")
  
    const submitButton = document.createElement("input")
    submitButton.setAttribute("type", "submit")
    submitButton.setAttribute("id", "submit")
    submitButton.setAttribute("name", "submit")
    submitButton.setAttribute("value", "Let's add a dog!")
    submitButton.setAttribute("class", "form__button")
  
    form.append(inputText)
    form.append(inputUrl)
    form.append(textArea)
    form.append(submitButton)
  
  
    mainCard.append(h2)
    mainCard.append(form)
})
//  -----

function createDogListItem(name) {
    const dogItem = document.createElement("li")
    dogItem.setAttribute("class", "dogs-list__button")
    dogItem.innerText = name
    return dogItem
  }
//  -----