window.addEventListener('load',function(){
	let section1 = document.querySelector('.section1');
	let section2 = document.querySelector('.section2');
	let li1 = document.querySelector('.cs').children[0];
	let li2 = document.querySelector('.cs').children[1];
	let li3 = document.querySelector('.cs').children[2];
	setTimeout(function(){
		section1.style.display = 'none';
		section2.style.display = 'block';
	},3000)
	
	setTimeout(function(){
		let lis = document.querySelector('.login').querySelectorAll('li');
		let span =document.querySelector('.login').querySelector('span');
		let step = 0;
		let timer = setInterval(function(){
			step += 10;
			li1.style.display = 'none';
			li2.style.display = 'none';
			li3.style.display = 'none';
			if(step <= 100){
				span.innerHTML = step+'%';
			}else{
				clearInterval(timer)
				for(let i = 0 ;i <lis.length ; i++){
					lis[i].style.animation = 'paused';
				}
				section1.style.display = 'block';
				section2.style.display = 'none';
				// 显示li
				fn();
			}
		},500)
	},3000)
	function fn(){
		setTimeout(function(){
			li1.style.display = 'block';
		},1000)
		setTimeout(function(){
			li2.style.display = 'block';
		},2000)
		setTimeout(function(){
			li3.style.display = 'block';
		},3000)
		}
	
	// 显示隐藏遮罩层
	let zhezhao = document.querySelector('.zhezhao');
	let lian = document.querySelector('.cs').children[1];
	let jiao = document.querySelector('.jiao');
	lian.onclick = function(){
		zhezhao.style.display = 'block';
	}
	jiao.onclick = function(){
		zhezhao.style.display = 'none';
	}

	
	// 点击播放音乐
	let music = document.querySelector('.music').querySelector('img');
	let audio = document.querySelector('audio');
	music.onclick = function(){
		if(audio.paused){
			audio.play();
			this.style.animationPlayState = 'running';
		}else{
			audio.pause();
			this.style.animationPlayState = 'paused';
		}
	}
	
	// 跳转到第三个页面
	let section3 = document.querySelector('.section3');
	let cs0 = document.querySelector('.cs').children[0];
	cs0.onclick = function(){
		section1.style.display = 'none';
		section3.style.display = 'block';
	}

    let winterLi = document.querySelector('.winter').querySelectorAll('li');
    let centerLi = document.querySelector('.center').querySelectorAll('li');
    let arr = ['疑是地上霜','鱼戏莲叶西','红掌拨清波','处处闻啼鸟','偷采白莲回'];
	let log = this.document.querySelector('.log');
	let gongxi = this.document.querySelector('.gongxi');
    let step = 0 
     for(let i =  0 ;i <centerLi.length ; i++){
    		   centerLi[i].onclick = function(){
    			   if(step == 0 ){
    				   if(this.innerHTML == arr[0] ){
    					   this.style.visibility = 'hidden';
    					   winterLi[0].innerHTML = this.innerHTML;
    					   winterLi[0].className = 'sn';
    					   winterLi[1].className = 'sh';
						   step++
    				   }else{
						log.style.display = 'block';
					   }
					   return false;
    			   }
				   
				   if(step == 1 ){
				       				   if(this.innerHTML == arr[1] ){
				       					   this.style.visibility = 'hidden';
				       					   winterLi[1].innerHTML = this.innerHTML;
				       					   winterLi[1].className = 'sn';
				       					   winterLi[2].className = 'sh';
				   						   step++
				       				   }else{
										log.style.display = 'block';
				   					   }
										  return false;
				   }
				   
				   if(step == 2 ){
				       				   if(this.innerHTML == arr[2] ){
				       					   this.style.visibility = 'hidden';
				       					   winterLi[2].innerHTML = this.innerHTML;
				       					   winterLi[2].className = 'sn';
				       					   winterLi[3].className = 'sh';
				   						   step++
				       				   }else{
										log.style.display = 'block';
				   					   }
										  return false;
				   }
				   
				   if(step == 3 ){
				       				   if(this.innerHTML == arr[3] ){
				       					   this.style.visibility = 'hidden';
				       					   winterLi[3].innerHTML = this.innerHTML;
				       					   winterLi[3].className = 'sn';
				       					   winterLi[4].className = 'sh';
				   						   step++
				       				   }else{
										log.style.display = 'block';
				   					   }
										  return false;
				   }
				   
				   if(step == 4 ){
				       				   if(this.innerHTML == arr[4] ){
				       					   this.style.visibility = 'hidden';
				       					   winterLi[4].innerHTML = this.innerHTML;
				       					   winterLi[4].className = 'sn';
											  gongxi.style.display = 'block';
				   						   step++
				       				   }else{
										log.style.display = 'block';
				   					   }
										  return false;
				   }
    		   }
     }
	let jiao2 = document.querySelector('.log').querySelector('.jiao');
	jiao2.onclick = function(){
		log.style.display = 'none';
	}
	let jiao3 = document.querySelector('.gongxi').querySelector('.jiao');
	jiao3.onclick = function(){
		gongxi.style.display = 'none';
		section1.style.display = 'block';
		section3.style.display = 'none';
	}
	// let jiao4 = document.querySelector('.log').querySelector('.jiao');
	// jiao4.onclick = function(){
	// 	log.style.display = 'none';
	// }
})
// // 文字的显示和隐藏