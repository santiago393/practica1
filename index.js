const canvas = document.getElementById ("GameCanvas");
const ctx = canvas.getContext("2d");
let playerX = 0;
let playerY= 0;
function Start()
{
  document.addEventListener('keydown', OnKeyDown);
  Update();
}
function OnKeyDown(e)
{
  console.log(e.key);
  if(e.key == "ArrowRight")
  {
    playerX += 10;
  }
  else if (e.key == "ArrowLeft")
  {
    playerX -= 10;
  }
     if(e.key == "ArrowUp")
  {
    playerY -= 10;
  }
  else if (e.key == "ArrowDown")
  {
    playerY += 10;
  }

}
function Update()
{
  ctx.clearRect(0,0,
  canvas.width, canvas.height);
  DrawCharacter(playerX,playerY);
  requestAnimationFrame(Update);
}
function DrawCharacter(x,y)
{
  ctx.fillStyle='    #e70c0c';
  ctx.fillRect(x, y, 10, 10);
}
Start();