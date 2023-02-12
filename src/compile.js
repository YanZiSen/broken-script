import antlr4 from "antlr4";
import BrokenScriptLexer from "./BrokenScriptLexer.js";
import BrokenScriptParser from "./BrokenScriptParser.js";
import CollectVariable from "./CollectVariable.js";
import Evaluate from "./evaluate.js";

const compile = (input) => {
  const chars = new antlr4.InputStream(input);
  const lexer = new BrokenScriptLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new BrokenScriptParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.program();

  // 变量检查
  // const walker = new antlr4.tree.ParseTreeWalker();
  // const pass = new CollectVariable();
  // walker.walk(pass, tree);

  const visitor = new Evaluate();

  const result = visitor.visit(tree);

  return result;
};

export default compile;
