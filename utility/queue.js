class Queue{
    constructor(){
        this.item=[]
        this.top=0
        this.last=0
    }
    enqueue(elem){
        this.item[this.last]=elem
        this.last++
    }
    dequeue(){
        if(this.item.length==0){
            return "underflow"
        }
        let op=this.item[this.top]
        delete this.item[this.top]
       this.top++
        if (this.top===this.last){
            this.top=0
            this.last=0
        }
        for(let i=0;i<this.item.length-1;i++){
            this.item[i]=this.item[i+1]
        }
         this.item.pop()
        
    }
    display(){
        let str=""
        for(let i=0;i<this.item.length;i++){
            str+=this.item[i]+" "
        }
        return str
    }
}
module.exports=new Queue;