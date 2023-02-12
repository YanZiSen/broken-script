import BrokenScriptParser from "./BrokenScriptParser.js";
import BrokenScriptVisitor from "./BrokenScriptVisitor.js";

export default class Evaluate extends BrokenScriptVisitor {
  variableContainer = new Map();
  constructor() {
    super();
  }
  getValueByCtx(ctx) {
    if (ctx.children.length === 3) {
      return this.visitExpression(ctx);
    } else {
      return this.visitPrimary(ctx.primary());
    }
  }
  add(left, right) {
    return this.getValueByCtx(left) + this.getValueByCtx(right);
  }
  visitProgram(ctx) {
    return this.visitStatements(ctx.statements());
  }
  visitStatements(ctx) {
    let returnValue = null;
    for (let child of ctx.statement()) {
      if (child.getText() === ";") {
        continue;
      }
      returnValue = this.visitStatement(child);
    }
    return returnValue;
  }
  visitStatement(ctx) {
    let returnValue = null;
    if (ctx.ifStatement()) {
      returnValue = this.visitIfStatement(ctx.ifStatement());
    } else if (ctx.forStatement()) {
      returnValue = this.visitForStatement(ctx.forStatement());
    } else if (ctx.variableStatement()) {
      returnValue = this.visitVariableStatement(ctx.variableStatement());
    } else if (ctx.expression()) {
      returnValue = this.visitExpression(ctx.expression());
    }
    return returnValue;
  }
  visitIfStatement(ctx) {}
  visitForStatement(ctx) {}
  visitVariableStatement(ctx) {
    // varType variableDeclareList
    let returnValue = null;
    returnValue = this.visitVariableDeclareList(ctx.variableDeclareList());
    return returnValue;
  }
  visitVariableDeclareList(ctx) {
    let returnValue = null;
    for (let child of ctx.variableDeclare()) {
      returnValue = this.visitVariableDeclare(child);
    }
    return returnValue;
  }
  visitVariableDeclare(ctx) {
    let idName = ctx.Identifier().getText();
    let value = undefined;
    if (ctx.expression()) {
      value = this.visitExpression(ctx.expression());
    }
    this.variableContainer.set(idName, value);
    return value;
  }
  visitExpression(ctx) {
    let value = null;
    if (ctx.children.length === 3) {
      let bopType = ctx.bop.type;
      let left = ctx.expression(0);
      let right = ctx.expression(1);

      switch (bopType) {
        case BrokenScriptParser.ADD:
          value = this.add(left, right);
          break;
        case BrokenScriptParser.ASSIGN:
          let rightValue = this.getValueByCtx(right);
          if (!left.primary()?.Identifier()) {
            throw new Error(
              `语法错误，不能将${right.getText()}赋值给${left.getText()}`
            );
          } else {
            const idName = left.primary().Identifier().getText();
            this.variableContainer.set(idName, rightValue);
            value = rightValue;
          }
          break;
        default:
          console.warn("未实现的操作类型");
      }
    } else if (ctx.primary()) {
      value = this.visitPrimary(ctx.primary());
    }
    return value;
  }
  visitPrimary(ctx) {
    let value = null;
    if (ctx.IntLiteral()) {
      value = Number(ctx.IntLiteral().getText());
    } else if (ctx.Identifier()) {
      const idName = ctx.Identifier().getText();
      if (this.variableContainer.has(idName)) {
        value = this.variableContainer.get(idName);
      } else {
        throw new Error(`变量未定义`);
      }
    }
    return value;
  }
}
