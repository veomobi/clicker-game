const clickerOnClick = new Listener(
    "click",
    (ctx)=>{
        ctx.values["points"] += ctx.values["power"];
        // ctx.renderObjectValueOnHTML("points");
        let sCtx = _Manager.get("counter");
        sCtx.renderIndependentValueOnHTML(ctx.values["points"]);
    }
)