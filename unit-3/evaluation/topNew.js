let wrap1=document.getElementById('data')
let wrap2=document.getElementById('Wrap')


async function topNews(){
 
    let res=await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=a0925db0e5364fc5b0def59b931557dd`)
    let data= await res.json()
    console.log('data',data);

    let{articles}=data
    
    articles.forEach(({title,urlToImage})=> {
        let div=document.createElement('div')
        div.setAttribute('class','contain')
        let p=document.createElement('p')
        p.setAttribute('class','title_para')

        let img=document.createElement('img')
        img.setAttribute('class','image')
         p.innerText=title


         p.addEventListener('click', function gotoDetail(){ 

         window.location.href='homeDetail.html'
         })
         img.src=urlToImage

        div.append(img,p)
        wrap1.append(div)
    });

}
topNews()

function gotoDetail(el){
    
el.forEach(({title})=>{
    let detail_div=document.createElement('div')
    detail_div.setAttribute('class','detail_div')

    let d_p1=document.createElement('p')
    d_p1.setAttribute('class','detail_p')

    d_p1.innerText=title
    detail_div.append(d_p1)

   wrap2.append(detail_div)

})


  
}

 function main(){
    let set= topNews()
    gotoDetail(set) 
 }