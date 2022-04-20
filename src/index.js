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

        const dogName = currentDog.name
        if (dogName !== ) {
            false
        }
        // when diff button clicked remove currentDog displayed
    })

    function NewCard (data) {
        const mainCard = document.querySelector('.main__dog-section')
    }
}

// remove existing section
// create card element, h2 element
// newCard section into the html 



// const dogList = document.querySelector(".dogs-list")
// const dogListButton = document.querySelector(".dogs-list__button dogs-list__button--add")

