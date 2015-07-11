function simple() {
  var metaEffect = gapi.hangout.av.effects.createMetaEffect();
  var effectChain = [];

  var cropProps = {
    topLeft: {
      x: 0.25,
      y: 0.25
    },
    width: .5,
    height: .5
  };

  var zoomEffect = metaEffect.createSubEffect('crop', cropProps);
  effectChain.push(zoomEffect);

  metaEffect.initEffects(effectChain);
  metaEffect.pipelineEffects(effectChain);
}
