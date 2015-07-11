function simple() {
  var metaEffect = gapi.hangout.av.effects.createMetaEffect();
  var effectChain = [];

  var cropProps = {
    top_left: {
      x: 0.005,
      y: 0.005
    },
    width: 0.99,
    height: 0.99
  };

  var zoomEffect = metaEffect.createSubEffect('crop', cropProps);
  effectChain.push(zoomEffect);

  metaEffect.initEffects(effectChain);
  metaEffect.pipelineEffects(effectChain);
}
