const mobileMenu = document.querySelector('.mobile-menu')

const buttons = document.querySelectorAll('.request-button')
const telInput = document.querySelector('.tel-input')

const requestForm = document.querySelector('.request-form')
const requestFormContent = document.querySelector('.request-form >.popup-content')
const navbarButton = document.querySelector('.navbar-button')

const upButton = document.querySelector('.button-up')

const galleryContainer = document.querySelector('.gallery')
const galleryContent = document.querySelector('.gallery > .popup-content')
const galleryContentPrev = document.querySelector('.gallery > .popup-content > .prev-element')
const galleryContentNext = document.querySelector('.gallery > .popup-content > .next-element')
const flowersImages = document.querySelectorAll('.flowers-image')
const balloonsImages = document.querySelectorAll('.balloons-image')

new IMask(telInput, {
    mask: '+7(000)000-00-00',
})

const toggleNavbar = event => {
    document.body.style.overflowY = event.checked ? 'hidden' : 'auto'
    mobileMenu.style.display = !event.checked ? 'none' : 'flex'
}

const toggleForm = (event, isClose) => {
    if (window.innerWidth < 800) navbarButton.style.display = !isClose ? 'none' : 'flex'
    document.body.style.overflowY = !isClose ? 'hidden' : 'auto'
    requestForm.style.display = isClose ? 'none' : 'flex'
}

const toggleGallery = (event, isClose) => {
    if (window.innerWidth < 800) navbarButton.style.display = !isClose ? 'none' : 'flex'
    document.body.style.overflowY = !isClose ? 'hidden' : 'auto'
    galleryContainer.style.display = isClose ? 'none' : 'flex'
}

requestForm.addEventListener('click', event => {
    toggleForm(null, true)

})
requestFormContent.addEventListener('click', event => {
    event.stopPropagation()
})

galleryContainer.addEventListener('click', event => {
    toggleGallery(null, true)

})
galleryContent.addEventListener('click', event => {
    event.stopPropagation()
})

upButton.addEventListener('click', () => {
    scroll(0, 0)
})

window.addEventListener('scroll', event => {
    if (window.scrollY > 1000) upButton.style.right = '35px'
    else upButton.style.right = '-100px'
})

buttons.forEach(button => {
    button.addEventListener('click', toggleForm)
})

function Gallery(images, currentImageIndex) {
    this.imagesSrc = []
    images.forEach(element => {
        this.imagesSrc.push(element.src)
    })
    this.currentImageIndex = currentImageIndex
    this.left = []
    this.right = []
    this.currentImage = null

    this.toPrev = () => {
        if (this.currentImageIndex === 0) return
        this.currentImageIndex--
        this.renderImage()
    }

    this.toNext = () => {
        if (this.currentImageIndex === this.imagesSrc.length - 1) return
        this.currentImageIndex++
        this.renderImage()
    }

    this.getSrcImage = () => {
        return this.imagesSrc[this.currentImageIndex]
    }

    this.clearContent = () => {
        while(galleryContent.children.length > 2) {
            galleryContent.removeChild(galleryContent.children[galleryContent.children.length - 1])
        }
    }

    this.renderImage = () => {
        this.clearContent()
        galleryContent.appendChild(this.createImg())
    }

    this.createImg = () => {
        const img = new Image()
        img.src = this.getSrcImage()
        return img
    }

    galleryContentPrev.addEventListener('click', this.toPrev)
    galleryContentNext.addEventListener('click', this.toNext)
}

let gallery

const openGallery = (images, currentImageIndex) => {
    gallery = new Gallery(images, currentImageIndex)
    gallery.renderImage()
    toggleGallery(null, false)
}

flowersImages.forEach((element, key) => {
    element.addEventListener('click', () => openGallery([...flowersImages], key))
})

balloonsImages.forEach((element, key) => {
    element.addEventListener('click', () => openGallery([...balloonsImages], key))
})

new Splide('.splide').mount()

let map;

// 47.23662743517398, 39.69071804750163
function initMap() {
    const pos = { lat: 47.23662743517398, lng: 39.69071804750163 }
    map = new google.maps.Map(document.getElementById("map"), {
        center: pos,
        zoom: 15,
    });

    // var triangleCoords = [
    //     {lat: 51.183, lng: -114.234},
    //     {lat: 51.154, lng: -114.235},
    //     {lat: 51.156, lng: -114.261},
    //     {lat: 51.104, lng: -114.259},
    //     {lat: 51.106, lng: -114.261},
    //     {lat: 51.102, lng: -114.272},
    //     {lat: 51.081, lng: -114.271},
    //     {lat: 51.081, lng: -114.234},
    //     {lat: 51.009, lng: -114.236},
    //     {lat: 51.008, lng: -114.141},
    //     {lat: 50.995, lng: -114.142},
    //     {lat: 50.998, lng: -114.160},
    //     {lat: 50.984, lng: -114.163},
    //     {lat: 50.987, lng: -114.141},
    //     {lat: 50.979, lng: -114.141},
    //     {lat: 50.921, lng: -114.141},
    //     {lat: 50.921, lng: -114.210},
    //     {lat: 50.893, lng: -114.210},
    //     {lat: 50.892, lng: -114.140},
    //     {lat: 50.888, lng: -114.139},
    //     {lat: 50.878, lng: -114.094},
    //     {lat: 50.878, lng: -113.994},
    //     {lat: 50.840, lng: -113.954},
    //     {lat: 50.854, lng: -113.905},
    //     {lat: 50.922, lng: -113.906},
    //     {lat: 50.935, lng: -113.877},
    //     {lat: 50.943, lng: -113.877},
    //     {lat: 50.955, lng: -113.912},
    //     {lat: 51.183, lng: -113.910}
    //   ];
  
    //   // Construct the polygon.
    //   var bermudaTriangle = new google.maps.Polygon({
    //     paths: triangleCoords,
    //     strokeColor: '#FF0000',
    //     strokeOpacity: 0.8,
    //     strokeWeight: 2,
    //     fillColor: '#FF0000',
    //     fillOpacity: 0.35
    //   });
    //   bermudaTriangle.setMap(map);

    new google.maps.Marker({
        position: pos,
        map,
        title: "Hello World!",
    });
}