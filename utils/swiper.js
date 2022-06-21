/* 
para:
imgArr: 图片数组
btnImg: pre 和 next按钮
animationTime: 动画播放时间
lastTime: 单张图片停留时间
autoPlay: 是否自动播放
width: 图片宽度
*/
function Swiper(para) {
  this.imgArr = para.imgArr || [];
  this.imgArrRet = [this.imgArr[this.imgArr.length-1],...this.imgArr,this.imgArr[0]];
  this.btnImg = para.btnImg || [];

  this.moveWidth = para.width;
  this.wrapper = document.getElementsByClassName('swiper-wrapper')[0];  
  this.nowIndex = 0,    //现在是第几张图
  //图片容器
  this.imgDom,
  //小圆点容器
  this.dotsDom;
  //pre按钮
  this.preBtn;
  //next按钮
  this.nextBtn;

  this.animationTime = para.animationTime;
  this.lastTime = para.lastTime;
  //节流
  this.prev = Date.now();
  //小圆点
  this.dots;
  //自动轮播
  this.autoPlay = para.autoPlay;
  this.timer = null;
}

Swiper.prototype = {

  init() {  
    //初始化容器
    let self = this;
    this.initDom();
    let li = '';
    let dots = '';
    for(let i=0;i<this.imgArrRet.length;i++) {
      li += `<li><a href=""><img src="${this.imgArrRet[i].path}" alt=""></a></li>`;
    }
    for(let i=0;i<this.imgArr.length;i++) {
      dots += `<li class="dot" data-index=${i}></li>`;
    }
    this.imgDom.innerHTML = li;
    this.dotsDom.innerHTML = dots;
    this.dots = document.getElementsByClassName('dot');
    this.setActiveDot(this.nowIndex);
    
    if(this.autoPlay) {
      this.timer = setInterval(()=>{
        self.nextSlider(self.animationTime);
      }, self.lastTime);
    }
    this.eventBind();
    
  },
  initDom() {
    //图片容器
    this.imgDom = document.createElement('ul');
    this.imgDom.className = 'imgs-list';
    this.imgDom.style.left = `-${this.moveWidth}px`;
    this.wrapper.appendChild(this.imgDom);

    //小圆点容器
    this.dotsDom = document.createElement('ul');
    this.dotsDom.className = 'dots-list';
    this.wrapper.appendChild(this.dotsDom);

    //前一张按钮
    this.preBtn = document.createElement('img');
    this.preBtn.className = 'pre-btn btn';
    this.preBtn.setAttribute('attr','preBtn')
    this.preBtn.src = this.btnImg[0].path;
    this.wrapper.appendChild(this.preBtn);

    //下一张按钮
    this.nextBtn = document.createElement('img');
    this.nextBtn.className = 'next-btn btn';
    this.nextBtn.setAttribute('attr','nextBtn')
    this.nextBtn.src = this.btnImg[1].path;
    this.wrapper.appendChild(this.nextBtn);
  },
  //上一张
  preSlider(time) {
    let self = this;
    self.nowIndex--;
    
    self.imgDom.style.transition = `left ${self.animationTime/1000}s`;
    self.imgDom.style.left = `${parseInt(self.imgDom.style.left)+self.moveWidth}px`;
    if(self.nowIndex === -1) {
      self.nowIndex = self.imgArr.length-1;
      setTimeout(function(){
        self.imgDom.style.left = `-${self.moveWidth * self.imgArr.length}px`;
        self.imgDom.style.transitionProperty = 'none';   
      },time);
    }
    self.setActiveDot(self.nowIndex);
    //console.log(self.nowIndex);
  },
  //下一张
  nextSlider(time) {
    let self = this;
    if(self.imgArr.length === 1)return;
    self.nowIndex++;
    
    self.imgDom.style.transition = `left ${self.animationTime/1000}s`;
    self.imgDom.style.left = `${parseInt(self.imgDom.style.left)-self.moveWidth}px`;
    if(self.nowIndex === self.imgArr.length) {
      self.nowIndex = 0;
      setTimeout(function(){
        self.imgDom.style.transitionProperty = 'none';
        self.imgDom.style.left = `-${self.moveWidth}px`;        
      },time);
    }
    self.setActiveDot(self.nowIndex);
    //console.log(self.nowIndex);
  },
  //设置小圆点
  setActiveDot(index) {
    for(let i=0;i<this.dots.length;i++) {
      if(i===index) {
        this.dots[i].style.backgroundColor = 'red';
      }
      else{
        this.dots[i].style.backgroundColor = 'white';
      }
    }
  },

  //绑定事件
  eventBind() {
    let self = this;
    //前一张事件
    this.preBtn.addEventListener('mouseover',function(){
      clearInterval(self.timer);
    });
    this.preBtn.addEventListener('mouseout',function(){
      self.timer = setInterval(() => {
        self.nextSlider(self.animationTime);
      }, self.lastTime);
    });
    this.preBtn.addEventListener('click',function(){
      self.throttle(self.preSlider,self.animationTime,self.animationTime);
    });
    //下一张事件
    this.nextBtn.addEventListener('mouseover',function(){
      clearInterval(self.timer);
    });
    this.nextBtn.addEventListener('mouseout',function(){
      self.timer = setInterval(() => {
        self.nextSlider(self.animationTime);
      }, self.lastTime);
    });
    this.nextBtn.addEventListener('click',function(){
      self.throttle(self.nextSlider,self.animationTime,self.animationTime);
    });
    for(let i=0;i<this.dots.length;i++) {
      let self = this;
      //鼠标移入移出事件
      self.dots[i].addEventListener('mouseover',function(){
        //console.log('mouseover');
        clearInterval(self.timer);
      });
      self.dots[i].addEventListener('mouseout',function(){
        //console.log('mouseout');
        self.timer = setInterval(() => {
          self.nextSlider(self.animationTime);
        }, self.lastTime);
      });
      //点击事件
      self.dots[i].addEventListener('click',function() {
        let clickIndex = parseInt(this.getAttribute('data-index')); //这个this是dot
        self.nowIndex = clickIndex;
        self.setActiveDot(self.nowIndex);   
        self.imgDom.style.transition = `left .3s`;
        self.imgDom.style.left = `-${(self.nowIndex+1)*self.moveWidth}px`; 
        
      })
    }
  },
  
  throttle(handle,delay,arg) {
    var now = Date.now();
    if(now-this.prev >= delay) {
      handle.call(this,arg);
      this.prev = Date.now();
    }
  }
}
