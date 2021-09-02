console.log("hello world")
const postsBox = document.getElementById("posts-box")
const spinnerBox = document.getElementById("spinner-box")

$.ajax({
    type: "GET",
    url: '/hello-world/',
    success: function(response){
        console.log(response)
        

    },
    error: function(error){
        console.log(error)
    }
})

$.ajax({
    type: "GET",
    url: '/data/',
    success: function(response){
        console.log(response)
        const data = response.data
        setTimeout(()=> {
            spinnerBox.classList.add('not-visible')
            console.log(data)
            data.forEach(element => {
                postsBox.innerHTML += `
                    ${element.title} - <b>${element.body}</b><br>
                `
            });
        }, 1000)
        
         

    },
    error: function(error){
        console.log(error)
    }
})