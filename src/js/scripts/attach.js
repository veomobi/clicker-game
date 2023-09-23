_Manager.add(clicker);
_Manager.add(counter);
_Manager.add(overlay);
_Manager.attachListeners();
_Manager.init(
    (ctx)=>{
        ctx.values["intervalID"] = setInterval(
            ()=>{
                clicker.values["points"] += clicker.values["pps"];
                renderPoints(clicker);
            },1000
        )
    }
)