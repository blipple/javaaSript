/*  1.  жаңадан бос Массив  құрыңыз  және оны clothes айнымалысына тағайындаңыз.
    Push () әдісін қолдана отырып,  5 элемент ретінде  галстук  қосыңыз.
    Pop ()  әдісін қолданып, массивтен бесінші киімді алып тастаңыз.*/ 

    let clothes = ['Пиджак', 'рубашка', 'кепка', 'носки',]
    clothes.push('галстук')
    clothes.pop()

    console.log(clothes)

/*  2. LetterFinder деп аталатын функцияны жазыңыз, ол екі параметрді қабылдайды: word және match.
    Осы параметрлерді console.log() арқылы экранга шығарыңыздар. */

    function LetterFinger(word,match) {
        console.log('word,match')
    }
    
    LetterFinger()

/*  3. For циклінің ішіне if операторын қосыңыз, оның шарты келесідей жұмыс істейді:

    Word[I] көмегімен counter айнымалысын пайдаланып word-қа берілген мән ішіндегі әріптердің әрқайсысына қол жеткізіңіз.
    Word[I] сөзінің match мәніне тең екенін тексеріңіз. */



/*  4.Размері 10 ға тең массив берілген , жұп индексте тұрған элементтердің суммасын табатын код жазыңыз.  */
    let hi = [0,1,2,3,1,2,3,4,5,6];

    let index_hi=() => {
        let s = 0;
        for(let i =0; i<hi.length;i++) {
            if(i%2 == 0) {
                s+=hi[i];
            }
        }
        console.log(s);
    }
    index_hi();

/*  5. const arr = [1,2,3,4,5] массиві берілген.Өзіндік методиканы қолдана отырып массивті керісіншеге аударыңыз.*/

    const arr = [1,2,3,4,5]

    console.log(arr[4])
    console.log(arr[3])
    console.log(arr[2])
    console.log(arr[1])
    console.log(arr[0])
  