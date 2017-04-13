import { Inject } from "@angular/core";

@Inject
export class Config {
    //配置项

    constructor(){
    }
    extends(_cfg:Config):this{
        return Object.assign({},this,_cfg);
    }
    init(){
        for(let key in this){
            this[`get${key}`]=()=>{
                return this[key];
            }
        }
    }
}
