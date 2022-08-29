let name = "Hubballi"

let obj = {
    name:'dilip',
    showThis(){
        console.log(this)
    },
    showArrowThis: () => {
        console.log(this)
    }
}

let obj2 = {
    demo(){
        obj.showArrowThis()
    }
}



obj.showThis()
obj.showArrowThis()
obj2.demo()
