let wrap1=document.getElementById('data')
let wrap2=document.getElementById('Wrap')


async function topNews(){
 
    let res=await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=a0925db0e5364fc5b0def59b931557dd`)
    let data= await res.json()
    console.log('data',data);

    let{articles}=data
    
    articles.forEach(({title,urlToImage,description,content})=> {
        let div=document.createElement('div')
        div.setAttribute('class','contain')
        let p=document.createElement('p')
        p.setAttribute('class','title_para')

        let img=document.createElement('img')
        img.setAttribute('class','image')
         p.innerText=title


         p.addEventListener('click', ()=>{ 
          wrap1.innerHTML=null
       
            let detail_div=document.createElement('div')
            detail_div.setAttribute('class','detail_div')
        
            let d_p1=document.createElement('p')
            d_p1.setAttribute('class','detail_p')
            
            let d_p2=document.createElement('p')
            d_p2.setAttribute('class','d_p2')

           let d_p3=document.createElement('p')
           d_p3.setAttribute('class','d_p3')

           let d_img=document.createElement('img')
           d_img.setAttribute('class','image') 



            d_img.src=urlToImage; 
            d_p3.innerText=content
            d_p2.innerText=description
            d_p1.innerText=title
            detail_div.append(d_img,d_p1,d_p2,d_p3)
        
           wrap1.append(detail_div)
        
         })
         img.src=urlToImage

        div.append(img,p)
        wrap1.append(div)
    });

}
topNews()

function gotoDetail(el){
    



  
}

 function main(){
    let set= topNews()
    gotoDetail(set) 
 }