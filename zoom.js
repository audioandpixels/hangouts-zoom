function simple() {
  var detectedEffectDescription = {};

  var onNotify = function(notify) {
    if (notify != null && notify.effect_descriptions != null) {
      detectedEffectDescriptions = notify.effect_descriptions;

      console.log(defectedEffectDescriptions);

      // Effect descriptions have been received, remove this callback.
      g_metaEffect.onNotify.remove(onNotify);
    }
  };


  var ratio = document.getElementById("ratio").value;
  var xpos = document.getElementById("xpos").value;
  var ypos = document.getElementById("ypos").value;
  var metaEffect = gapi.hangout.av.effects.createMetaEffect();
  var effectChain = [];

  metaEffect.onNotify.add(onNotify);
  metaEffect.getEffectDescriptions();

  var cropProps = {
    topLeft: {
      x: xpos ,
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
