function getPartNum()
{
  let r = int(random(6));
  
  let num = 500*(1+r);
  
  return num ;
}

function getAlphaRange()
{
  let r = int(random(3));
  return {amin:0.3+0.2*r, amax:0.3+0.2*(r+1)};
}
