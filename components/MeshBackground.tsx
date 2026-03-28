'use client';
import { useEffect, useRef } from 'react';

export default function MeshBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');

    let W, H;
    let nodes = [];

    function resize(){
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function init(){
      nodes = [];
      for(let i=0;i<80;i++){
        nodes.push({
          x: Math.random()*W,
          y: Math.random()*H,
          vx:(Math.random()-0.5)*0.5,
          vy:(Math.random()-0.5)*0.5
        });
      }
    }
    init();

    function draw(){
      ctx.clearRect(0,0,W,H);

      nodes.forEach(n=>{
        n.x+=n.vx;
        n.y+=n.vy;
      });

      for(let i=0;i<nodes.length;i++){
        for(let j=i+1;j<nodes.length;j++){
          const dx=nodes[i].x-nodes[j].x;
          const dy=nodes[i].y-nodes[j].y;
          const dist=Math.sqrt(dx*dx+dy*dy);
          if(dist<120){
            ctx.beginPath();
            ctx.moveTo(nodes[i].x,nodes[i].y);
            ctx.lineTo(nodes[j].x,nodes[j].y);
            ctx.strokeStyle='rgba(0,229,255,0.2)';
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    }
    draw();

  },[]);

  return <canvas ref={ref} />;
}
