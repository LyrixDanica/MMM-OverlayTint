Module.register("MMM-OverlayTint", {
  defaults: {
    color: "rgba(0, 0, 0, 0.05)", // Let sort skygge
    zIndex: -1,
  },

  getStyles: function () {
    return ["MMM-OverlayTint.css"];
  },

  start: function () {
    this.injectOverlay();
  },

  injectOverlay: function () {
    const overlay = document.createElement("div");
    overlay.id = "mmm-overlay-tint";
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.zIndex = this.config.zIndex;
    overlay.style.pointerEvents = "none";
    overlay.style.backgroundColor = this.config.color;
    document.body.appendChild(overlay);
  },
});
