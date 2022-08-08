var res = document.createElement('div');
res.setAttribute("class","container")
let span = document.createElement('span');
span.style.fontSize="100px"
span.innerHTML="10";
res.append(span);
document.body.append(res);
let count=10;
setTimeout(()=>{
    count=count-1
    span.innerHTML=count
    setTimeout(()=>{
        count=count-1
        span.innerHTML=count
        setTimeout(()=>{
            count=count-1
            span.innerHTML=count
            setTimeout(()=>{
                count=count-1
                span.innerHTML=count
                setTimeout(()=>{
                    count=count-1
                    span.innerHTML=count
                    setTimeout(()=>{
                        count=count-1
                        span.innerHTML=count
                        setTimeout(()=>{
                            count=count-1
                            span.innerHTML=count
                            setTimeout(()=>{
                                count=count-1
                                span.innerHTML=count
                                setTimeout(()=>{
                                    count=count-1
                                    span.innerHTML=count
                                    setTimeout(()=>{
                                        count=count-1
                                        span.innerHTML="Happy Independance day"
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
                },1000)
            },1000)
        },1000)
    },1000);

































