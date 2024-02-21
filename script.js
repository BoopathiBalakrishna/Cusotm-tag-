const tagContainer = document.querySelector(".tag-container") ;
const input = document.querySelector(".input") ;

const removeAll = document.querySelector("#remove-all") ;

const closeAll = document.querySelectorAll("#close") ;
const copy = document.querySelector("#copy") ;

let tags = [] ;

// input add Event listener ----------------------

input.addEventListener("keyup",function(e) {

    const data = input.value.trim() ;

    if(e.key=="Enter") {
       
        if(data.includes(",")){
            const listOfTags = data.split(",") ;
            // listOfTags.forEach((element) => {

            // })
            tags.push(...listOfTags)
        }
        else{
            tags.push(data) ;
        }

        tags = [...new Set(tags)] ;
        addTags() ;
        input.value = "" ;
    }


})

// create tag function -----------------------------

function createTag(tag){

    const div = document.createElement("div") ;
    div.setAttribute("class","tag") ;
    const span = document.createElement("span") ;
    span.setAttribute("class","tag-span")
    span.innerHTML = tag ;
    const i = document.createElement("i") ;
    // i.setAttribute("class","fa-solid")
    i.setAttribute("class",'fa-solid fa-circle-xmark') ;
    i.setAttribute("id","close") ;
    i.setAttribute("data-item",tag) ;
    div.appendChild(span) ;
    div.appendChild(i) ;
    return div ;

}


// add tag function ------------------------------------

function addTags() {

    reset() ;
    tags.slice().reverse().forEach((tag) => {
        tagContainer.prepend(createTag(tag)) ;
        
    })
}

// reset function --------------------------------------------------

function reset() {
    const tagElements = document.querySelectorAll(".tag") ;
    tagElements.forEach((tagElement) => {
        tagElement.parentElement.removeChild(tagElement) ;
    })

}


// remove all function -------------------------------------

removeAll.addEventListener("click",()=>{

    if(confirm("Are You Sure To Remove All ?")){
        tags = [] ;
        reset() ;
    }
})

// single close element function ------------------

document.addEventListener("click",function(e){

if(e.target.tagName == 'I'){
    const data = e.target.getAttribute("data-item") ;

    if(data){

        if(confirm("Are You Sure To Remove?")){

            let filterTags = tags.filter((tag)=>{
                return tag != data ;
            })

            tags = filterTags ;
            addTags() ;
        }

    }

}

})


copy.addEventListener("click",function(){

    if(tags.length){

        navigator.clipboard.writeText(tags.toString()).then(()=>{
            console.log("Tag Copied To ClipBoard") ;
        })
        .catch(()=>{
            console.log("Failed To Copy",error) ;
        })
    }
})







// Html,Css,Javascript,Reach-Js,Angular-Js,Node-Js,Vue-Js,Python,Java,C++,C#,Flutter,Cotlin

// Html,Css,Javascript,Reach-Js,Angular-Js,Node-Js,Vue-Js,Python,Java,C++,C#,Flutter,Cotlin


