let arr = [];
let elementsDiv = document.querySelector('.elementsDiv');
const select = document.getElementById('mySelect');
const speedSelect = document.getElementById('speedSelect');
let selectedOption = select.value;
let selectedSpeed = speedSelect.value;

// Mapping of speed values in milliseconds
const speedMap = {
    0: 1000,      // Very Slow
    1: 500,     // Slow
    2: 100,       // Fast
    3: 10     // Very Fast
};

console.log('Selected option:', selectedOption);

// Go back to the previous page
function goBack() {
    window.history.back(); 
}

// dropdown for sorting algorithms
select.addEventListener('change', function () {
    selectedOption = this.value;
    console.log('Selected option:', selectedOption);
});

// dropdown for speed
speedSelect.addEventListener('change', function () {
    selectedSpeed = this.value;
    console.log('Selected speed:', selectedSpeed);
});

//Generate Array
function generateArray() {
    let arr_len = document.getElementById('inp').value;
    console.log(arr_len);

    // Clear previous array elements
    arr = [];
    elementsDiv.innerHTML = '';

    for (let i = 0; i < arr_len; i++) {
        const num = Math.ceil(Math.random() * 50);
        const height = 0.5 * num + 'rem';
        arr.push(num);

        const newDiv = document.createElement('div');
        newDiv.className = 'element';
        newDiv.id = i;
        newDiv.style.height = height;
        newDiv.style.backgroundColor = 'blue';

        if (arr_len < 25) {
            newDiv.textContent = num;
            newDiv.style.margin = '1rem';
            newDiv.style.width = '1rem';
        } else if (arr_len < 40) {
            newDiv.textContent = num;
            newDiv.style.margin = '1rem';
            newDiv.style.width = '1.2rem';
        } else if (arr_len < 60) {
            newDiv.textContent = num;
            newDiv.style.margin = '0.5rem';
            newDiv.style.width = '0.9rem';
        } else if (arr_len < 100) {
            // newDiv.textContent = num;
            newDiv.style.margin = '0.3rem';
            newDiv.style.width = '0.5rem';
        } else if (arr_len < 200) {
            // newDiv.textContent = num;
            newDiv.style.margin = '0.2rem';
            newDiv.style.width = '0.3rem';
        } else {
            // newDiv.textContent = num;
            newDiv.style.margin = '0.1rem';
            newDiv.style.width = '0.3rem';
        }

        elementsDiv.appendChild(newDiv);
    }
}

// calling of selected sorting algorithm
function sort() {
    async function sortAndLog(arr) {
        console.log(arr);
        if (selectedOption === 'option1') {
            await selectionSort(arr, selectedSpeed);
        } else if (selectedOption === 'option2') {
            await insertionSort(arr, selectedSpeed);
        } else if (selectedOption === 'option3') {
            await bubbleSort(arr, selectedSpeed);
        } else if (selectedOption === 'option4') {
            await mergeSort(arr, selectedSpeed);
        } else if (selectedOption === 'option5') {
            await quickSort(arr, selectedSpeed);
        }
        console.log(arr);
    }

    sortAndLog(arr);
}

// selection sort function start
async function selectionSort(arr, speed) {
    console.log("Selection sort function called");

    for (let i = 0; i < arr.length; i++) {
        let min_ind = i;
        let minElem = document.getElementById(min_ind);

        minElem.style.backgroundColor = 'red';

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min_ind] > arr[j]) {
                minElem.style.backgroundColor = 'blue';
                min_ind = j;
                minElem = document.getElementById(min_ind);
                minElem.style.backgroundColor = 'red';

                await new Promise(resolve => setTimeout(resolve, speedMap[speed]));
            }
        }

        await new Promise(resolve => setTimeout(resolve, speedMap[speed]));

        let ai = document.getElementById(i);
        let am = document.getElementById(min_ind);
        let hi = 0.5 * arr[i] + 'rem';
        let hm = 0.5 * arr[min_ind] + 'rem';

        if (arr.length < 25) ai.textContent = arr[min_ind];
        if (arr.length < 25) am.textContent = arr[i];

        ai.style.height = hm;
        am.style.height = hi;

        let temp = arr[i];
        arr[i] = arr[min_ind];
        arr[min_ind] = temp;

        minElem.style.backgroundColor = 'blue';
        ai.style.backgroundColor = 'green';
    }
}
// selection sort function end

// Insertion sort function start
async function insertionSort(arr, speed) {
    console.log("Insertion sort function called");

    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j >= 1; j--) {
            let elem1 = document.getElementById(j);
            let elem2 = document.getElementById(j - 1);

            let val1 = arr[j];
            let val2 = arr[j - 1];

            elem1.style.backgroundColor = 'red';
            elem2.style.backgroundColor = 'yellow';

            await new Promise(resolve => setTimeout(resolve, speedMap[speed]));

            if (arr[j] < arr[j - 1]) {
                elem1.style.height = 0.5 * val2 + 'rem';
                elem2.style.height = 0.5 * val1 + 'rem';

                if (arr.length < 25) elem1.textContent = val2;
                if (arr.length < 25) elem2.textContent = val1;

                elem1.style.backgroundColor = 'green';
                elem2.style.backgroundColor = 'yellow';

                await new Promise(resolve => setTimeout(resolve, speedMap[speed]));

                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;

                elem1.style.backgroundColor = 'green';
                elem2.style.backgroundColor = 'green';

            } else {
                elem1.style.backgroundColor = 'blue';
                elem2.style.backgroundColor = 'blue';
                break;
            }
        }
    }
}
// Insertion sort function end

// Bubble sort function start
async function bubbleSort(arr, speed) {
    console.log("Bubble sort function called");

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            let elem1 = document.getElementById(j);
            let elem2 = document.getElementById(j + 1);

            elem1.style.backgroundColor = 'red';
            elem2.style.backgroundColor = 'yellow';

            if (arr[j] > arr[j + 1]) {
                if (arr.length < 25) elem1.textContent = arr[j + 1];
                if (arr.length < 25) elem2.textContent = arr[j];

                elem1.style.height = 0.5 * arr[j + 1] + 'rem';
                elem2.style.height = 0.5 * arr[j] + 'rem';

                elem1.style.backgroundColor = 'yellow';
                elem2.style.backgroundColor = 'red';

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

            await new Promise(resolve => setTimeout(resolve, speedMap[speed]));

            elem1.style.backgroundColor = 'blue';
            elem2.style.backgroundColor = 'blue';
        }

        let elem3 = document.getElementById(arr.length - 1 - i);
        elem3.style.backgroundColor = 'green';
            document.getElementById(0).style.backgroundColor = 'green';

    }
}
// Bubble sort function end

// Merge sort function start
async function mergeSort(arr, speed) {
    console.log("Merge sort function called");

    async function merge(arr, l, m, r) {
        var n1 = m - l + 1;
        var n2 = r - m;

        var L = new Array(n1);
        var R = new Array(n2);

        for (var i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (var j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];

        var i = 0;
        var j = 0;
        var k = l;

        while (i < n1 && j < n2) {
            let elem1 = document.getElementById(l + i);
            let elem2 = document.getElementById(m + 1 + j);
            let elem3 = document.getElementById(k);

            elem1.style.backgroundColor = 'red';
            elem2.style.backgroundColor = 'red';

            await new Promise(resolve => setTimeout(resolve, speedMap[speed]));

            if (L[i] <= R[j]) {
                arr[k] = L[i];
                elem3.style.height = 0.5 * L[i] + 'rem';
                if (arr.length < 25) elem3.textContent = L[i];
                i++;
            } else {
                arr[k] = R[j];
                elem3.style.height = 0.5 * R[j] + 'rem';
                if (arr.length < 25) elem3.textContent = R[j];
                j++;
            }

            elem3.style.backgroundColor = 'green';
            k++;

            await new Promise(resolve => setTimeout(resolve, speedMap[speed]));

            elem1.style.backgroundColor = 'green';
            elem2.style.backgroundColor = 'green';
            elem3.style.backgroundColor = 'green';
        }

        while (i < n1) {
            let elem1 = document.getElementById(l + i);
            let elem3 = document.getElementById(k);

            elem1.style.backgroundColor = 'red';
            await new Promise(resolve => setTimeout(resolve, speedMap[speed]));

            arr[k] = L[i];
            elem3.style.height = 0.5 * L[i] + 'rem';
            if (arr.length < 25) elem3.textContent = L[i];
            elem3.style.backgroundColor = 'green';

            i++;
            k++;

            await new Promise(resolve => setTimeout(resolve, speedMap[speed]));

            elem1.style.backgroundColor = 'green';
            elem3.style.backgroundColor = 'green';
        }

        while (j < n2) {
            let elem2 = document.getElementById(m + 1 + j);
            let elem3 = document.getElementById(k);

            elem2.style.backgroundColor = 'red';
            await new Promise(resolve => setTimeout(resolve, speedMap[speed]));

            arr[k] = R[j];
            elem3.style.height = 0.5 * R[j] + 'rem';
            if (arr.length < 25) elem3.textContent = R[j];
            elem3.style.backgroundColor = 'green';

            j++;
            k++;

            await new Promise(resolve => setTimeout(resolve, speedMap[speed]));
            elem2.style.backgroundColor = 'blue';
            elem3.style.backgroundColor = 'blue';
        }
    }

    async function mergeSort(arr, l, r, speed) {
        if (l >= r) {
            return;
        }
        var m = l + parseInt((r - l) / 2);
        await mergeSort(arr, l, m, speed);
        await mergeSort(arr, m + 1, r, speed);
        await merge(arr, l, m, r, speed);
    }

    await mergeSort(arr, 0, arr.length - 1, speed);
}
// Merge sort function end

// Quick sort function start
async function quickSort(arr, speed) {
    console.log("Quick sort function called");

    async function partition(arr, low, high, speed) {
        let pivot = arr[high];
        let i = low;

        let elem1 = document.getElementById(high);
        elem1.style.backgroundColor = 'pink';

        await new Promise(resolve => setTimeout(resolve, speedMap[speed]));

        for (let j = low; j <= high - 1; j++) {
            let elem2 = document.getElementById(i);
            elem2.style.backgroundColor = 'yellow';

            let elem3 = document.getElementById(j);
            elem3.style.backgroundColor = 'red';

            await new Promise(resolve => setTimeout(resolve, speedMap[speed]));

            if (arr[j] < pivot) {
                elem3.style.backgroundColor = 'orange';
                elem2.style.backgroundColor = 'red';

                elem3.style.height = 0.5 * arr[i] + 'rem';
                elem2.style.height = 0.5 * arr[j] + 'rem';

                if (arr.length < 25) elem3.textContent = arr[i];
                if (arr.length < 25) elem2.textContent = arr[j];

                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;

                await new Promise(resolve => setTimeout(resolve, speedMap[speed]));

                elem2.style.backgroundColor = 'blue';
                elem3.style.backgroundColor = 'blue';
            }

            elem3.style.backgroundColor = 'blue';
            elem2.style.backgroundColor = 'blue';
        }

        await new Promise(resolve => setTimeout(resolve, speedMap[speed]));

        elem1.style.height = 0.5 * arr[i] + 'rem';
        if (arr.length < 25) elem1.textContent = arr[i];

        let elem = document.getElementById(i);
        elem.style.height = 0.5 * arr[high] + 'rem';
        elem.style.backgroundColor = 'green';
        if (arr.length < 25) elem.textContent = arr[high];

        [arr[i], arr[high]] = [arr[high], arr[i]];

        await new Promise(resolve => setTimeout(resolve, speedMap[speed]));

        return i;
    }

    async function tosort(arr, low, high, speed) {
        if (low >= high) return;
        let pi = await partition(arr, low, high, speed);

        await tosort(arr, low, pi - 1, speed);
        await tosort(arr, pi + 1, high, speed);

        for (let i = low; i <= high; i++) {
            let elem = document.getElementById(i);
            if (elem.style.backgroundColor !== 'green') elem.style.backgroundColor = 'green';
        }
    }

    await tosort(arr, 0, arr.length - 1, speed);
}
// Quick sort function end


