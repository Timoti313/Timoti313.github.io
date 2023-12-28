data = [{
    'img1': '/ProjectAsetDesain.png',
    'img2': '/ProjectAsetDesain2.png',
    'tittle': 'web E-commerce',
    'subtitle': 'Zenit',
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit Enim, blanditiis ab impedit, vel tempora voluptas,quia quaerat sed animi illo."
    },
    {
    'img1': '/ProjectAsetDesain.png',
    'img2': '/ProjectAsetDesain2.png',
    'tittle': 'web E-commerce',
    'subtitle': 'Zenit',
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit Enim, blanditiis ab impedit, vel tempora voluptas,quia quaerat sed animi illo."
    }
    ]

var container = document.querySelector('container-project')

data.forEach(element => {
    container.innerHTML +=
    ` <div class="project">
    <div class="img-project">
        <img src="`+Element.img1+`" alt="" height="250">
        <img src="${element.img2}" " alt="">
    </div>
    <div class="desc-project">
        <h1>${element.tittle}</h1>
        <h2>${element.subtitle}</h2>
        <p>${element.desc}</p>
    </div>
    <button class="read-more">Read-More</button>
</div>`

});