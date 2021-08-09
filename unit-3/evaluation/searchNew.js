//a0925db0e5364fc5b0def59b931557dd



let list_div=document.getElementById('list')
var timer_id;
let wrap=document.getElementById('data')

async function search(){
     
    wrap.innerHTML=null

    let query=document.getElementById('searchNews').value
    if(query.length<=2){
        return false
    }

    let response =await fetch(` https://newsapi.org/v2/everything?q=${query}&from=2021-08-09&sortBy=popularity&apiKey=a0925db0e5364fc5b0def59b931557dd`)
    let data =await response.json();
    console.log('data',data);
    return data.articles
}
search()

function throtle(){
    if(timer_id){
        return false
    }
    timer_id=setTimeout(()=>{
        plot();
        timer_id=undefined
    },1000);  
}

function appendSearch(el){
    list_div.innerHTML=null

    el.forEach(({title,description,urlToImage}) => {
        
        let li=document.createElement('li')
        li.setAttribute('class','li')
        li.innerText=title       
    
        li.addEventListener('click',()=>{
            let div=document.createElement('div')
             div.setAttribute('class','container')
             let p1=document.createElement('p')
             p1.setAttribute('class','p1')
             let p2=document.createElement('p')
             p2.setAttribute('class','p2')

             let img=document.createElement('img')
             img.setAttribute('class','image')

             img.src=urlToImage
             p1.innerText=title
             p2.innerText=description
             div.append(img,p1,p2)
             wrap.append(div)
        })
    
        list_div.append(li)

    });
}

async function plot(){
    let find=await search()
    appendSearch(find)
    console.log(find);
}