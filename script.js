//your code here
let text = document.getElementById('evaluatedText');
        let headings = document.getElementById('wordCount');

        text.addEventListener('input',()=>{
            let str = text.value;
            str = str.trim();
            let arr = str.split(' ');
            // console.log(arr.length);
            if(arr[0] == ''){
                headings.innerHTML = 0;
            }
            else{
                headings.innerHTML = arr.length;
            }
        })
