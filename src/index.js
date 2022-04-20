console.log(data);



const dogListUl = document.querySelector('.dogs-list')


for (let i = 0; i < data.length; i++) {
    console.log("Dog is", data[i])
    const dog = data[i] // js object of current dog
    console.log(dog)

    const dogListItem =  document.createElement('li')
  // apply a style or a css class
    dogListItem.setAttribute('class','dogs-list__button dogs-list__button--add')
    dogListItem.innerText = dog.name
    dogListUl.append(dogListItem)
}




const dogList = document.querySelector(".dogs-list")
// const dogListButton = document.querySelector(".dogs-list__button dogs-list__button--add")


dogList.addEventListener('dogs-list__button dogs-list__button--add', function () {
      

})

// WRITE YOUR CODE BELOW!
