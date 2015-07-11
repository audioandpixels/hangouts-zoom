function simple() {
  var ratio = document.getElementById("ratio").value;
  var metaEffect = gapi.hangout.av.effects.createMetaEffect();
  var effectChain = [];

  var cropProps = {
    topLeft: {
      x: 0.5,
      y: 0.5
    },
    width: ratio,
    height: ratio
  };

  var zoomEffect = metaEffect.createSubEffect('crop', cropProps);
  effectChain.push(zoomEffect);

  metaEffect.initEffects(effectChain);
  metaEffect.pipelineEffects(effectChain);
}
