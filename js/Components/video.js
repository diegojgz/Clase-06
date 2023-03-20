export default class Video {
    constructor(parentID, url, width, height, type){
        this.parentID = parentID; 
        this.url = url;
        this.width = width;
        this.height = height; 
        this.type = type;
    }
    render (){
        let myParent = document.getElementById(this.parentID);
        const videoTag = myApp.innerHTML +  `   <video controls width=${this.width} height= ${this.height}>
                                                    <source src= ${this.url} type= ${type}      >
                                                </video>`;
        const myVideo = myParent.innerHTML + videoTag;
        myParent.innerHTML = myVideo;
    }
}

//  <video atr...>
//      <source></source> 
//  </video>