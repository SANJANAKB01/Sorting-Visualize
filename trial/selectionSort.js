// selection sort code

export async function selectionSort(arr){
    console.log("Selection sort function called")

    for(let i=0;i<arr.length;i++){
        let min_ind=i
        let minElem=document.getElementById(min_ind)
        
        minElem.style.backgroundColor='red'
       

        for(let j=i+1;j<arr.length;j++){
            if(arr[min_ind]>arr[j]){
                minElem.style.backgroundColor='blue'
                min_ind=j;
                minElem=document.getElementById(min_ind)
                minElem.style.backgroundColor='red'

                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }

        await new Promise(resolve => setTimeout(resolve, 1000));

        let ai=document.getElementById(i)
        let am=document.getElementById(min_ind)
        let hi=0.5*arr[i]+'rem';
        let hm=0.5*arr[min_ind]+'rem';

        ai.textContent=arr[min_ind]
        am.textContent=arr[i]

        ai.style.height=hm;
        am.style.height=hi


        let temp = arr[i];  
        arr[i] = arr[min_ind];
        arr[min_ind] = temp;

        minElem.style.backgroundColor='blue'
        ai.style.backgroundColor='green'
            
    }
}
