function simple() {
  var ratio = document.getElementById("ratio").value;
  var xpos = document.getElementById("xpos").value;
  var ypos = document.getElementById("ypos").value;
  var metaEffect = gapi.hangout.av.effects.createMetaEffect();
  var effectChain = [];

  var cropProps = {
    top_left: {
      x: xpos,
      y: ypos
    },
    width: ratio,
    height: ratio
  };

  var zoomEffect = metaEffect.createSubEffect('crop', cropProps);
  effectChain.push(zoomEffect);

  metaEffect.initEffects(effectChain);
  metaEffect.pipelineEffects(effectChain);
}
