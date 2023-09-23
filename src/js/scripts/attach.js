_Manager.add(clicker);
_Manager.add(counter);
_Manager.add(ppsCounter);
_Manager.add(overlay);
_Manager.attachListeners();
_Manager.init(
    (ctx)=>{
        ppsCounter.renderIndependentValueOnHTML(
            clicker.values["pps"]
        )
        ctx.values["intervalID"] = setInterval(
            ()=>{
                clicker.values["points"] += clicker.values["pps"];
                renderPoints(clicker);

            },1000
        )
    }
)