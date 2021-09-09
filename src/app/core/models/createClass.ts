export function createModele(inputs,routerName){
    let items="";
    inputs.forEach(res=>{
      let typeFiled="";
      if(res.type=="text" || res.type=="phone" || res.type=="image")
      {
        typeFiled="Sequelize.STRING(250)";
      }
      else if(res.type=="edit")
      {
        typeFiled="Sequelize.TEXT()";
      }
      else if(res.type=="date")
      {
        typeFiled="Sequelize.DATE()";
      }
      else if(res.type=="file" || res.type=="gallery")
      {
        typeFiled="Sequelize.JSON()";
      }
      items+=res.name+": {\ntype: "+typeFiled+",\nallowNull: true },\n";
    });
    let classCreate="const "+routerName+"= DB.define('"+routerName+"', \n {\n"+
    " id: {\ntype: Sequelize.BIGINT(11),\nautoIncrement: true,\nprimaryKey: true,\n unique: true,\n allowNull: false\n},\n"+
    items+
    "status: {\ntype: Sequelize.BIGINT(2),\nallowNull: true\n}\n },\n {\nunderscored: false,\n timestamps: true,\ncreateAt: true,\n paranoid: true,\nlogging: false\n});";
    console.log(classCreate);
}
export function createModel(inputs,routerName){
  let items="";
  items+='"id",\n';
  inputs.forEach(res=>{
    items+='"'+res.name+'",\n';
  });
  items+='"status",\n';
  console.log(items);
  let items2="";
  items2+='id:req.body.id,\n';
  inputs.forEach(res=>{
    items2+=res.name+':req.body.'+res.name+',\n';
  });
  items2+='status:req.body.status,\n';
  console.log(items2);
}