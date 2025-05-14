 <div class="cube-wrapper">
    <div class="cube">
      <div class="face front"></div>
      <div class="face back"></div>
      <div class="face right"></div>
      <div class="face left"></div>
      <div class="face top"></div>
      <div class="face bottom"></div>
    </div>
  </div>


  .cube-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 30px 0 60px;
      perspective: 800px;
    }

    .cube {
      width: 100px;
      height: 100px;
      position: relative;
      transform-style: preserve-3d;
      animation: rotate 8s infinite linear;
    }

    .face {
      position: absolute;
      width: 100px;
      height: 100px;
      background: rgba(0, 128, 255, 0.85);
      border: 2px solid #fff;
    }

    .face.front  { transform: rotateY(0deg) translateZ(50px); }
    .face.back   { transform: rotateY(180deg) translateZ(50px); }
    .face.right  { transform: rotateY(90deg) translateZ(50px); }
    .face.left   { transform: rotateY(-90deg) translateZ(50px); }
    .face.top    { transform: rotateX(90deg) translateZ(50px); }
    .face.bottom { transform: rotateX(-90deg) translateZ(50px); }

    @keyframes rotate {
      0% { transform: rotateX(0deg) rotateY(0deg); }
      100% { transform: rotateX(360deg) rotateY(360deg); }
    }





    code///////


    