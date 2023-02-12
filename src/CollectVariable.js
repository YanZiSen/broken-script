import BrokenScriptListener from "./BrokenScriptListener.js";

export default class CollectVariable extends BrokenScriptListener {
  ast = null;
  // 收集变量 Map<idName, value>;
  variableCollectMap = new Map();
  constructor(ast) {
    super();
  }
  enterVariableDeclare(ctx) {
    console.log(`enterVariableDeclare: ${ctx.getText()}`);
    const identifierCtx = ctx.Identifier();
    const idName = identifierCtx.getText();
    console.log(ctx.getSourceInterval(), ctx.ruleIndex);
    if (this.variableCollectMap.has(idName)) {
      throw new Error(
        `重复定义的变量：${identifierCtx.getText()} @${
          identifierCtx.symbol.line
        }:${identifierCtx.symbol.column}`
      );
    } else {
      this.variableCollectMap.set(idName, undefined);
    }
  }
}
