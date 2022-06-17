function snow() {
    // 1、随机选择emoji
    var flake = document.createElement('div');
  
      let get_rand_emoji = function(){
          // 表情列表
          let emoji_dict = ['😀','😃','😄','😁','😆','😅','😂','🤣','😊','😚','😙','😗','😘','😍','😌','😉','🙃','🙂','😇','😋','😜','😝','😛','🤑','🤗','🤓','😎','🤠','😖','😣','🙁','😕','😟','😔','😞','😒','😏','😫','😩','😤','😠','😡','😶','😐','😑','😯','😦','😥','😢','😨','😱','😳','😵','😲','😮','😦','🤤','😭','😪','😴','🙄','🤔','😬','🤥','🤐','💩','😈','🤕','🤒','😷','🤧','👻','👾','🤖','🎃','😺','😸','😹','🙏','👏','🙌','👐','😾','😿','🙀','😽','😼','😻','FUN','🤩','🤯','💰','🤤']
          function getRndInteger(min, max) {
              return Math.floor(Math.random() * (max - min + 1) ) + min;
          }
          return emoji_dict[getRndInteger(0, emoji_dict.length-1)]
      }
  
    flake.innerHTML = get_rand_emoji();
    flake.style.cssText = 'position:absolute;color:lightgray;';
  
    //获取页面的高度 相当于emoji下落结束时Y轴的位置
    var documentHieght = window.innerHeight;
    //获取页面的宽度，利用这个数来算出，emoji开始时left的值
    var documentWidth = window.innerWidth;
  
    //定义生成一片emoji的毫秒数
    var millisec =10;
    //2、设置第一个定时器，周期性定时器，每隔一段时间（millisec）生成一个emoji；
    setInterval(function() { //页面加载之后，定时器就开始工作
    //随机生成emoji下落 开始 时left的值，相当于开始时X轴的位置
    var startLeft = Math.random() * documentWidth;
  
    //随机生成emoji下落 结束 时left的值，相当于结束时X轴的位置
    var endLeft = Math.random() * documentWidth;
  
    //随机生成emoji大小
    var flakeSize = 3 + 20 * Math.random();
  
    //随机生成emoji下落持续时间
    var durationTime = 4000 + 7000 * Math.random();
  
    //随机生成emoji下落 开始 时的透明度
    var startOpacity = 0.7 + 0.3 * Math.random();
  
    //随机生成emoji下落 结束 时的透明度
    var endOpacity = 0.2 + 0.2 * Math.random();
  
    //克隆一个emoji模板
    var cloneFlake = flake.cloneNode(true);
  
    //第一次修改样式，定义克隆出来的雪emoji样式
    cloneFlake.style.cssText += `
    left: ${startLeft}px;
    opacity: ${startOpacity};
    font-size:${flakeSize}px;
    top:-25px;
      transition:${durationTime}ms;`;
  
    //拼接到页面中
    document.body.appendChild(cloneFlake);
  
    //设置第二个定时器，一次性定时器，
    //当第一个定时器生成emoji，并在页面上渲染出来后，修改emoji的样式，让emoji动起来；
    setTimeout(function() {
    //第二次修改样式
    cloneFlake.style.cssText += `
      left: ${endLeft}px;
      top:${documentHieght}px;
      opacity:${endOpacity};`;
  
    //4、设置第三个定时器，当emoji落下后，删除emoji。
    setTimeout(function() {
    cloneFlake.remove();
    }, durationTime);
    }, 0);
  
    }, millisec);
  }
  snow();
  
  
  