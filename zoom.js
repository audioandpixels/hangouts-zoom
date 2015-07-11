function simple() {
  var ratio = document.getElementById("ratio").value;
  var metaEffect = gapi.hangout.av.effects.createMetaEffect();
  var effectChain = [];

  var cropProps = {
    topLeft: {
      x: (1 - ratio) / 2 ,
      y: (1 - ratio) / 2
    },
    width: ratio,
    height: ratio
  };

  var zoomEffect = metaEffect.createSubEffect('crop', cropProps);
  effectChain.push(zoomEffect);

  metaEffect.initEffects(effectChain);
  metaEffect.pipelineEffects(effectChain);
}
