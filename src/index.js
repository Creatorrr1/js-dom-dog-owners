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
        // add new section
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
        // add bio
        const dogBio = document.createElement('h3')
        dogBio.innerText = 'Bio'
        addSection.append(dogBio)
        // add paragraph
        const dogPara = document.createElement('p')
        dogBio.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, minima voluptates libero cumque rerum consequatur optio aliquid sint eum maxime illo laborum omnis quo ab rem cupiditate nulla perspiciatis ipsum!'
        addSection.append(dogPara)
        // add div with button
        const divButton = document.createElement('div')
        divButton.setAttribute('class', 'main__dog-section__btn')
        addSection.append(divButton)


    })

    // function NewCard (data) {
    //     const dogName = currentDog.name
    //     // const card = `
    //     // <h2>${currentDog.name}</h2>
    //     // <img
    //     // src="${currentDog.image}"
    //     // alt="${currentDog.name} photo"/>
    //     // `
    //    mainCard.innerHTML = card;
    // }
}

// remove existing section
// create card element, h2 element
// newCard section into the html 


